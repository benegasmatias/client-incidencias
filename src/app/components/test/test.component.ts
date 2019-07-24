import { Component, OnInit } from '@angular/core';
import {TechnicalsService} from '../../services/technicals.service'
import {Technical}from '../../models/technical'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private technicalService: TechnicalsService) { }

  technicalsList:Technical[];
  ngOnInit() {
    this.getTechnicalsComponent();
  }

  private  getTechnicalsComponent(){
    this.technicalService.getTechnicals()
    .subscribe(
      res=>{
        this.technicalsList=[];
        console.log(res);
          for(var technical in res){
            let tech=res[technical];
            this.technicalsList=tech;
          }
          console.log(this.technicalsList);
        }
    )
  }

}
