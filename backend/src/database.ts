import * as mongodb from "mongodb";
import { async } from "rxjs";
import { User } from "./user";

export const collections: {
    user?: mongodb.Collection<User>;
} = {};

export async function connectToDatabase(uri: string) {
    const client = new mongodb.MongoClient(uri);
    await client.connect();

    const db = client.db("test");
    await applySchemaValidation(db);

    const userCollection = db.collection<User>("crud");
    collections.user = userCollection;
}

// Update our existing collection with JSON schema validation so we know our documents will always match the shape of our User model, even if added elsewhere.
// For more info about schema validation, see this blog series: https://www.mongodb.com/blog/post/json-schema-validation--locking-down-your-model-the-smart-way
async function applySchemaValidation(db:mongodb.Db) {
    const jsonSchema = {
        $jsonSchema: {
            bsonType: "object",
            required: ["name","email","mobile"],
            additionalProperties: false,
            properities: {
                _id: {},
                name: {
                    bsonType:"string",
                    description: "'name' is required and is a string",
                },
                email: {
                    bsonType:"string",
                    description: "'email' is required and is a string",
                },
                mobile: {
                    bsonType:"string",
                    description: "'mobile' is required and is a string",
                }
            }
        }
    }
    // Try applying the modification to the collection, if the collection doesn't exist, create it 
    await db.command({
        collMod: "crud",
        validator: jsonSchema
    }).catch(async (error: mongodb.MongoServerError) => {
        if (error.codeName === "NamespaceNotFound") {
            await db.createCollection("crud", {validator: jsonSchema});
        }
    });
}
