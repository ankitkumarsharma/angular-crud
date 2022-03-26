import { ApiService } from './../services/api/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormType } from '../core/app.types';

@Component({
  selector: 'app-dynamic-crud',
  templateUrl: './dynamic-crud.component.html',
  styleUrls: ['./dynamic-crud.component.scss']
})
export class DynamicCrudComponent implements OnInit {
  regForm!: FormGroup;
  tableData:FormType[] = [];
  submitted!:boolean;
  noData_flag!:boolean;
  edit_flag!:boolean;
  edit_index!:number;
  edit_value!:FormType;
  constructor(private _fb:FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    this.formInit();
    this.getUserDetails();
  }
  getUserDetails(){
    this.apiService.getUserDetails().subscribe((data:any)=>{
      if(data){
        this.noData_flag = true;
        this.tableData = data;
      }
    })
  }
  get fc(){
    return this.regForm.controls;
  }
  formInit(){
    this.regForm = this._fb.group({
      name:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      mobile:['', [Validators.required, Validators.maxLength(10)]]
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
      this.apiService.insertUserDetails(value).subscribe((data:any)=>{
        alert(data);
        this.getUserDetails();
      })
      this.submitted = false;
      this.regForm.reset();
    } else {
      this.regForm.markAllAsTouched();
    }
  }
  onEdit(index:number,value:FormType){
    this.edit_flag = true;
    this.edit_index = index;
    this.edit_value = value;
    this.regForm.setValue({
      name:this.tableData[index]['name'],
      email:this.tableData[index]['email'],
      mobile:this.tableData[index]['mobile'],
    })
  }
  onUpdate(){
    let updatedData = this.regForm.value;
    updatedData['_id'] = this.edit_value['_id'];
    this.apiService.updateUserDetail(updatedData).subscribe((data:any)=>{
      if(data){
        alert(data);
        this.edit_flag = false;
        this.getUserDetails();
        this.resetForm();
      }
    })
    // this.tableData[this.edit_index] = this.regForm.value;
    
  }
  onDelete(index:number,value:FormType){
    this.edit_value = value;
    this.apiService.deleteUserDetail(value).subscribe((data:any)=>{
      if(data){
        alert(data);
        this.getUserDetails();
        // this.tableData.splice(index,1);
        if(this.tableData.length === 0){
          this.noData_flag = false;
        } else {
          this.noData_flag = true;
        }
      }
    })
  }
  resetForm(){
    this.regForm.reset();
    this.submitted = false;
    this.edit_flag = false;
  }

}
