import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  experiment: string[] =["Mars soil sample","Plant growth in habitat","Human bone density"];
  
  experimentBeingEdited: string = null;
  constructor() { }

  ngOnInit() {
  }
  add(experimentName: string) {
            
    this.experiment.push(experimentName);
  }
  remove(experimentName: string) {

    let index = this.experiment.indexOf(experimentName);
    this.experiment.splice(index, 1);
  
  }
  edit(experi: string) {
    this.experimentBeingEdited = experi;
 }
 save(oldExperimentName: string, newExperimentName: string){
   let index = this.experiment.indexOf(oldExperimentName)
   this.experiment[index] = newExperimentName;
   this.experimentBeingEdited =null;
 }
}
