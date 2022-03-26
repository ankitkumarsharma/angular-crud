import { async } from 'rxjs';
import * as express from "express";
import * as mongodb from "mongodb";
import { collections } from "./database";

export const userRouter = express.Router();
userRouter.use(express.json());

// get all user details
userRouter.get("/", async(req, res)=>{
    try {
        const users = await collections.user?.find({}).toArray();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send("Error on Database")
    }
});

// get single user detail
userRouter.get("/:id", async (req, res) => {
    try {
        const id = req?.params?.id;
        const query = { _id: new mongodb.ObjectId(id) };
        const user = await collections.user?.findOne(query);

        if (user) {
            res.status(200).send(user);
        } else {
            res.status(404).send(`Failed to find an user: ID ${id}`);
        }
    } catch (error) {
        res.status(404).send(`Failed to find an user: ID ${req?.params?.id}`);
    }
});
// insert user details
userRouter.post("/", async (req, res) => {
    try {
        const user = req.body;
        const result = await collections.user?.insertOne(user);

        if (result?.acknowledged) {
            res.status(201).send(`Created a new user: ID ${result.insertedId}.`);
        } else {
            res.status(500).send("Failed to create a new user.");
        }
    } catch (error) {
        console.error(error);
        res.status(400).send("Error on Database");
    }
});
// update user details
// userRouter.put("/:id", async (req, res) => {
userRouter.post("/update", async (req, res) => {
    try {
        // const id = req?.params?.id;
        let user = req.body;
        const query = { _id: new mongodb.ObjectId(req.body._id) };
        user['_id'] = query._id;
        const result = await collections.user?.updateOne(query, { $set: user });

        if (result && result.matchedCount) {
            res.status(200).send(`Updated an user: ID ${req.body._id}.`);
        } else if (!result?.matchedCount) {
            res.status(404).send(`Failed to find an user: ID ${req.body._id}`);
        } else {
            res.status(304).send(`Failed to update an user: ID ${req.body._id}`);
        }
    } catch (error) {
        console.error("DB update error");
        res.status(400).send("DB update 2 error");
    }
});
// delete user details
// userRouter.delete("/:id", async (req, res) => {
userRouter.post("/delete", async (req, res) => {
    try {
        // const id = req?.params?.id;
        const query = { _id: new mongodb.ObjectId(req.body._id) };
        const result = await collections.user?.deleteOne(query);

        if (result && result.deletedCount) {
            res.status(202).send(`Removed an user: ID ${req.body._id}`);
        } else if (!result) {
            res.status(400).send(`Failed to remove an user: ID ${req.body._id}`);
        } else if (!result.deletedCount) {
            res.status(404).send(`Failed to find an user: ID ${req.body._id}`);
        }
    } catch (error) {
        console.error("Error on DB");
        res.status(400).send("error.message");
    }
});