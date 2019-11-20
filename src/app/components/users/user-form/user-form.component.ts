import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
//modelos
import {Users} from '../../../models/users'
import {Office} from '../../../models/offices'
import {Response} from '../../../models/response'
//servicios
import {OfficesService} from '../../../services/offices.service'
import {UsersService} from '../../../services/users.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit, OnChanges {




 

  /*variables locales*/
  //variable offic recibida de un componte padre. el ngOnCHanges es el metodo que permite analisar cuando cambie
  @Input()   offic: string
  ngOnChanges(changes: SimpleChanges){
    if(changes.offic && changes.offic.currentValue){
      this.user.office_id = parseInt(this.offic)
    }
  }
  
  //esta variable se usa para añadir clase de exito o falla en el alerta despues que ocurre el evento de guardar un nuevo usuario
  classAlert:boolean;
  alertShow:boolean=false;
  officesList:Office[];
  userForm:FormGroup;
  //objetos
  user: Users =new Users();
  resp: Response=new Response('','');
  

  //constructor
  constructor(
    protected officeService:OfficesService,
    protected userService:UsersService,
    private router : Router
    ) { 
      this.userForm=this.createFormGroup();
    }

  //metodos  
  ngOnInit() {
   if(this.offic){
    this.getOfficesComponent();

    this.user.office_id = parseInt(this.offic)
  }else{
    this.getOfficesComponent();
  }
    
  }
  createFormGroup(){
    return new FormGroup({
      name_user:new FormControl('',[
        Validators.required,Validators.minLength(4),Validators.maxLength(50)
      ]),
      id_office:new FormControl('',Validators.required),

    });
  }

  private getOfficesComponent(){
    this.officeService.getOffices()
    .subscribe(
      (data)=>{
        this.officesList=data['offices']
        },
        ()=>{},
        ()=>{}
    )
  }

 
  //Este metodo llama al servicio de user para poder almacenar el nuevo usuario
  private saveUserFromService(){
    this.userService.addUser(this.user)
    .subscribe(
      (response:HttpResponse<Response>)=>{
        this.router.navigateByUrl("incidencia/add");
        this.resp=response.body;
        if(response.status==200){
          this.classAlert=true;
        }else {
        
          this.classAlert=false};

 
      },
      (err: HttpErrorResponse)=>{
        if(err.error instanceof Error){
          console.log('Client-side error')
        }else{
          console.log('Server-side error')
        }
      }

    
    )
  }

  saveNewUser(){
    //si el formulario se valido correctamente
    if(this.userForm.valid){
      this.saveUserFromService();
      if(!this.classAlert===undefined){
        this.alertShow=true;
      }
    }
    //mostrar mensaje de campos incorrectos
    else{
      console.log('Invalid');
    }
  }

  onResetForm(){
    this.userForm.reset();  
  }

  get nameUser(){
    return this.userForm.get('name_user');
  }

  get Oficina(){
    return this.userForm.get('id_office');
  }

}
