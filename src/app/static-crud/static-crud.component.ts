import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormType } from '../core/app.types';

@Component({
  selector: 'app-static-crud',
  templateUrl: './static-crud.component.html',
  styleUrls: ['./static-crud.component.scss']
})
export class StaticCrudComponent implements OnInit {
  regForm!: FormGroup;
  tableData:FormType[] = [];
  submitted!:boolean;
  noData_flag!:boolean;
  edit_flag!:boolean;
  edit_index!:number;
  pageTitle:string = 'Static simple form CRUD';
  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.formInit();
  }

  getFormControlError(control:string){
    return this.submitted && this.regForm.controls[control].errors
  }
  getFormControlErrorValidation(control:string,validation:string){
    return this.submitted && this.regForm.controls[control].errors?.[validation]
  }
  formInit(){
    this.regForm = this._fb.group({
      name:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      mobile:['', [Validators.required, Validators.max(10)]]
    });
  }
  onSubmit(value:FormType){
    this.submitted = true;
    if(this.regForm.valid){
      if(this.tableData){
        this.noData_flag = true;
      } else {
        this.noData_flag = false;
      }
      this.tableData.push(value);
      this.submitted = false;
      this.regForm.reset();
    } else {
      this.regForm.markAllAsTouched();
    }
  }
  onEdit(index:number){
    this.edit_flag = true;
    this.edit_index = index;
    let updateObj:any;
    let data:any = this.tableData[index];
    Object.keys(this.regForm.value).map((itemParent)=>{
      Object.keys(this.tableData[index]).map((itemChild)=>{
        if(itemParent == itemChild){
          updateObj = {...updateObj,[itemParent]: data[itemParent]}
        }
      })
    })
    this.regForm.setValue(updateObj);
  }
  onUpdate(){
    this.tableData[this.edit_index] = this.regForm.value;
    this.edit_flag = false;
    this.resetForm();
  }
  onDelete(index:number){
    this.tableData.splice(index,1);
    if(this.tableData.length === 0){
      this.noData_flag = false;
    } else {
      this.noData_flag = true;
    }
  }
  resetForm(){
    this.regForm.reset();
    this.submitted = false;
    this.edit_flag = false;
  }
  requiredErrorDesc(label:string){
    return `${label} field is required`;
  }
}
