import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formsvalidation';
  name = "";
  description = "";
  gender="";
  branch="";
  branches = [{
    "id":1,
    "title":"CSE"
  },{
  "id":2,
  "title":"ECE"
  }]

  ngOnInit(){

  }

  saveForm(){
    console.log(this.name,this.description,this.gender,this.branch)
  }
}


