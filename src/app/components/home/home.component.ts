import { Component, OnInit } from '@angular/core';
import { JobServiceService } from '../../services/job-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  locations = [];
  experience = [];
  jobs=[];
  selectedLocation ;
  selectedExperience;

  
  constructor(private jobService: JobServiceService ) { }

  ngOnInit() {
let  data =  this.jobService.getLocations_Experience();

this.locations = data.locations;
this.experience = data.experience;
  }

getJobList(){
 this.jobs =  this.jobService.getFilteredJobs(this.selectedLocation,this.selectedExperience);

}
}
