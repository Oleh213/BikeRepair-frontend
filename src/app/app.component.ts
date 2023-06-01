import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ReportModel} from "./models/ReportModel";
import {ReportsService} from "../services/reports.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public reportForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    problem: new FormControl('')
  });
  constructor(private reportsService: ReportsService) {
  }
  addNewReport(){
    if(this.checkFrom()){
      let report = new ReportModel();
      report.problem = this.reportForm.value.problem!;
      report.name = this.reportForm.value.name!;
      report.email = this.reportForm.value.email!;
      this.reportsService.addNewRepost(report).subscribe(res=>{
        console.log(res.data)
      },error => {
        console.log(error.errorMessage)
      })
    }
    else {
      console.log('Fill data!')
    }
  }
  getAllReports(){
    this.reportsService.getAllReports().subscribe(res=> {
      console.log(res.data)
    })
  }
  checkFrom():boolean{
  return !!(this.reportForm.value.name?.trim() &&
    this.reportForm.value.email?.trim() &&
    this.reportForm.value.problem?.trim());
  }

}
