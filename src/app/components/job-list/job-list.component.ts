import { Component, OnInit , Input } from '@angular/core';
import {JobServiceService} from '../../services/job-service.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {
  @Input () jobs;

  ngOnInit(){

  }

  constructor() { }

  sortJobsList(attribute){
    var sortedArray = this.jobs.sort((a,b)=>{
      if(a[attribute] > b[attribute]){
        return 1;
      }else if(a[attribute] < b[attribute]){
        return -1;
      }else{
        return 0;
      }
    })

    this.jobs = sortedArray;
  }
   
}

