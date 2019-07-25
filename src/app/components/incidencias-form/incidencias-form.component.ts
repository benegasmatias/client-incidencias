import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgSelectOption } from '@angular/forms';

//services
import {OfficesService} from '../../services/offices.service';
import {TechnicalsService} from '../../services/technicals.service'
import {ProblemsService} from '../../services/problems.service'

//model
import {Office} from '../../models/offices'
import {Technical}from '../../models/technical'
import {Problem}from '../../models/problems'
import { element } from 'protractor';

@Component({
  selector: 'app-incidencias-form',
  templateUrl: './incidencias-form.component.html',
  styleUrls: ['./incidencias-form.component.css']
})
export class IncidenciasFormComponent implements OnInit {

  incidencia={
    oficina:'',
    usuario:'',
    tecnico:'',
    tipo_problema:'',
    descripcion:'',
    solucion_inmed:'',
    expediente:'',
  };

  officesList:Office[]=[];
  technicalsList:Technical[];
  problemsList:Problem[];

  show:boolean=false;

  constructor(
    private officeService: OfficesService,
    private technicalService: TechnicalsService,
    private problemsService: ProblemsService,
    private route: ActivatedRoute   
    ) { }

  ngOnInit() {
      //obtener offices
      this.officesList=this.officeService.getOffices();
      console.log(this.officesList);
      //obtener technicals
      this.getTechnicalsComponent();
      //obtener problems
      this.getProblemsComponent();
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

    private getProblemsComponent(){
      this.problemsService.getProblems()
      .subscribe(
        res=>{
          this.problemsList=[];
          console.log(res);
          for(var problem in res){
            let prob=res[problem];
            this.problemsList=prob;
          }
          console.log(this.problemsList);

      })
    }

   /* private converToArray(res,objets) {
      for(var r in res){
        let x=res[r];
        objets=x;
      }
    }*/



                

  saveNewIncidencia(){
    console.log(this.incidencia);
  }

  enableDescription(){
   this.show= (this.show==true?false:true);
  }

}
