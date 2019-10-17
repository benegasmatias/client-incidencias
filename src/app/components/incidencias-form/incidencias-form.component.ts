import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute} from '@angular/router';


//services
import {OfficesService} from '../../services/offices.service';
import {TechnicalsService} from '../../services/technicals.service';
import {ProblemsService} from '../../services/problems.service';
import {UsersService} from '../../services/users.service';
import {SupportsService} from '../../services/supports.service';
import {IncidenciasService} from '../../services/incidencias.service';


//model
import {Office} from '../../models/offices'
import {Technical}from '../../models/technical'
import {Problem}from '../../models/problems'
import { Users } from 'src/app/models/users';
import {Support} from '../../models/support';
import { Supp } from 'src/app/models/supp';







@Component({
  selector: 'app-incidencias-form',
  templateUrl: './incidencias-form.component.html',
  styleUrls: ['./incidencias-form.component.css']
})
export class IncidenciasFormComponent implements OnInit {

  incidencia:Support=new Support();
  sup:Supp=new Supp();


  titulo='';
  button='';
  bandera=true;
  id='';
  

  officesList:Office[];
  technicalsList:Technical[];
  problemsList:Problem[];
  usersForOffice:Users[];

  show:boolean=false;

  constructor(
    private officeService: OfficesService,
    private technicalService: TechnicalsService,
    private problemsService: ProblemsService,
    
    private userService:UsersService,
    private supportService:SupportsService,
    private activatedRoute:ActivatedRoute,
    private incidenciaService:IncidenciasService,
    private router:Router

    ) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
 
    if (params.id){
      this.id=params.id;
      this.incidencia.oficina=params.office;
      this.getUsersForOffice(params.office);
      this.sup.user_id=params.user;
      this.sup.technical_id=params.technical;
      this.sup.description=params.description;
      this.sup.proccedings_support=params.proccedings;
      this.sup.problem_id=params.problem;
      if (params.proccedings)
      this.incidencia.solucion_inmed='No'
      else this.incidencia.solucion_inmed='Si'
        

      this.bandera=false
      this.titulo="Editar Atencion"
      this.button="Guardar Cambios"
       //obtener offices
       this.getOfficesComponent();
       console.log(this.officesList);
       //obtener technicals
       this.getTechnicalsComponent();
       //obtener problems
       this.getProblemsComponent();
 

      
    }else{ 
      this.bandera=true
      this.titulo="Nueva Atencion"
      this.button="Guardar Incidencia"
      //obtener offices
      this.getOfficesComponent();
      console.log(this.officesList);
      //obtener technicals
      this.getTechnicalsComponent();
      //obtener problems
      this.getProblemsComponent();

      this.getOfficesComponent();}

    }


     getUsersForOffice(id){
      console.log(id);
      this.userService.showUsersForOffice(id)
      .subscribe(
       (data)=>{
         this.usersForOffice=data['users'];
       },err=>
       console.log(err),
       ()=>{}
      );
     
      
    }

     getTechnicalsComponent(){
      this.technicalService.getTechnicals()
      .subscribe(
        data=>this.technicalsList= data['technicals'],
        err=>console.log(err),
        ()=>{}
      
      )
    }

     getProblemsComponent(){
      this.problemsService.getProblems()
      .subscribe(
        data=>this.problemsList= data['problems'],
        err=>console.log(err),
        ()=>{}
     
      )
    }


     getOfficesComponent(){
      this.officeService.getOffices()
      .subscribe(
        data=>this.officesList= data['offices'],
        err=>console.log(err),
        ()=>{}
        
      )

    }



                

  saveNewIncidencia(){  
    this.supportService.addSupport(this.sup).subscribe(res=>console.log(res),err=>console.log(err));
    console.log(this.sup);

    this.sup=new Supp();
    this.incidencia=new Support();
  }

  editarIncidencia(){
    this.incidenciaService.editIncidencia(this.id,this.sup).
    subscribe(
     data=>{
      this.router.navigateByUrl("incidencia/list");
    },err=> console.log(err),
    ()=>{}
    
    )
  }

  enableDescription(){
   this.show= (this.show==true?false:true);
  }

  eliminarIncidencia(){

   this.incidenciaService.delete(this.id).
    subscribe(
      data=>{
       this.router.navigateByUrl("incidencia/list");
      },
      err=> console.error("Algo Malio Sal!"),
      ()=>{}


    )
  }

  

}
