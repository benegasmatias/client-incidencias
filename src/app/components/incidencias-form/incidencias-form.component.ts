import { Component, OnInit } from '@angular/core';


//services
import {OfficesService} from '../../services/offices.service';
import {TechnicalsService} from '../../services/technicals.service';
import {ProblemsService} from '../../services/problems.service';
import {UsersService} from '../../services/users.service';
import {SupportsService} from '../../services/supports.service';

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
    private supportService:SupportsService

    ) { }

  ngOnInit() {
      //obtener offices
      this.getOfficesComponent();
      console.log(this.officesList);
      //obtener technicals
      this.getTechnicalsComponent();
      //obtener problems
      this.getProblemsComponent();

      this.getOfficesComponent();

    }

    private getUsersForOffice(id:number){
      console.log(id);
      this.userService.showUsersForOffice(id)
      .subscribe(
       (data)=>{
         this.usersForOffice=data['users'];
       },err=>
       console.log(err)
      );
     
      
    }

    private  getTechnicalsComponent(){
      this.technicalService.getTechnicals()
      .subscribe(data=>this.technicalsList= data['technicals'],err=>console.log(err)
      
      )
    }

    private getProblemsComponent(){
      this.problemsService.getProblems()
      .subscribe(data=>this.problemsList= data['problems'],err=>console.log(err)
     
      )
    }

    private getOfficesComponent(){
      this.officeService.getOffices()
      .subscribe(data=>this.officesList= data['offices'],err=>console.log(err)
        
      )

    }



                

  saveNewIncidencia(){
    
    this.supportService.addSupport(this.sup).subscribe(res=>console.log(res),err=>console.log(err));
    console.log(this.sup);

    this.sup=new Supp();
  }

  enableDescription(){
   this.show= (this.show==true?false:true);
  }

  openUser(open){
      
  }

}
