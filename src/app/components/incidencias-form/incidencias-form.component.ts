import { Component, OnInit } from '@angular/core';
import {OfficesService} from '../../services/offices.service';
import { ActivatedRoute } from '@angular/router';
import { NgSelectOption } from '@angular/forms';

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

  offices:any=[];

  show:boolean=false;

  constructor(
    private officeService: OfficesService,
    private route: ActivatedRoute   
    ) { }

  ngOnInit() {
    this.officeService.getOffices()
      .subscribe(
        res=>{
          console.log(res);
          this.offices=res;
          /*var result=Object.keys(this.offices).map(function(key){
            return [Number(key), this.offices[key]] ;
          });
          console.log(result);*/
                  }
                )
  }

  saveNewIncidencia(){
    console.log(this.incidencia);
  }

  enableDescription(){
   this.show= (this.show==true?false:true);
  }

}
