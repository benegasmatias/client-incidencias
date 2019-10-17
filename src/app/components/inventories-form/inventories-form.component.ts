import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
//services
import { OfficesService } from '../../services/offices.service'
import { InventarioServiceService } from '../../services/inventario-service.service'
// models
import { Office } from '../..//models/offices'


//models
import { Printer } from '../../models/printer';
import { Ram } from '../../models/ram';
import { Disk } from '../../models/disk'
import { Monitor } from '../../models/monitor'
import { Mother } from '../../models/mother'
import { Microproccessor } from 'src/app/models/microproccessor';
import { Toner } from 'src/app/models/toner';
import { Notebook } from 'src/app/models/notbook';
import { GabineteOUT } from 'src/app/models/gabinete';





@Component({
  selector: 'app-inventories-form',
  templateUrl: './inventories-form.component.html',
  styleUrls: ['./inventories-form.component.css']
})
export class InventoriesFormComponent implements OnInit {

  officesList: Office[]
  disk: Disk[]
  ram: Ram[]
  motherboard: Mother[]
  micros: Microproccessor[]
  toners: Toner[]


  selectoffice = false
  TipoEquipo = "";// dependiendo lo que seleccione es la parte del formulario que va a mostrar pelotudo
  // Para no traer cosas de la api al pedo! 
  cambiog = false
  cambiol = false
  cambioi = false

  button = ''//dependiendo lo que se seleccione el boton que se va a mostrar. conchudo no entendes?
  guardado = false;// si se guarda oculta el formulario. para no tosquiar la vista!

  printer: Printer = new Printer()
  monitor: Monitor = new Monitor()
  note: Notebook = new Notebook()
  gabinete: GabineteOUT = new GabineteOUT()
  toner:Toner= new Toner()

  procce: Microproccessor = new Microproccessor()
  motherr: Mother = new Mother()

  id_office: ''
  CapacidadDisk = ' '
  unidadDisk = ' '
  rammCapacity = ''
  id_cabinet = ''
  id_laptop=''
  id_monitor=''
  id_printer=''
  buttonEdit = ''


  constructor(private officeService: OfficesService,
    private inventarioService: InventarioServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
     
      this.getOfficesComponent()
      this.selectoffice = true

      if (params.id_cabinet) {
        this.getRam()
        this.getDiks()
        this.getProce()
        this.getMother()
        this.button = ''
        this.TipoEquipo = 'gabinete'
        this.buttonEdit = 'Editar Gabinete'

        this.id_office = params.id
        this.gabinete.name_cabinet = params.cabinet
        this.gabinete.name_computer = params.computer
        this.gabinete.ip_address = params.ip
        this.gabinete.ram_id = params.ram
        this.gabinete.disk_id = params.disk
        this.gabinete.microprocessor_id = params.micro
        this.gabinete.motherboard_id = params.placa
        this.id_cabinet = params.id_cabinet
        this.gabinete.office_id=this.id_office
      }else 
      if(params.id_laptop){
        this.getRam()
        this.getDiks()
        this.button = ''
        this.TipoEquipo = 'notebook'
        this.buttonEdit = 'Editar Notebook'

        this.id_office = params.id
        this.note.office_id=this.id_office
        this.note.name_laptop=params.laptop
        this.note.ram_id=params.ram
        this.note.disk_id =params.disk
        this.id_laptop=params.id_laptop

      }else
      if(params.id_monitor){
        this.button = ''
        this.TipoEquipo = 'monitor'
        this.buttonEdit = 'Editar Monitor'
        this.id_office = params.id
        this.monitor.name_monitor=params.monitor
        this.monitor.office_id=this.id_office
        this.monitor.number_serie=params.serie
        this.id_monitor=params.id_monitor
      }else
      if(params.id_printer){
        this.button = ''
        this.TipoEquipo = 'impresora'
        this.buttonEdit = 'Editar Impresora'
        this.getToners()
        this.id_office = params.id
        this.id_printer=params.id_printer
        this.printer.toner_id=params.toner
        this.printer.name_printer=params.printer
        this.printer.number_serie=params.number_printer
        this.printer.office_id=this.id_office

      }



    } else {
      this.button = ''
      this.selectoffice = false
      this.getOfficesComponent()
    }


  }

  private getOfficesComponent() {
    this.officeService.getOffices()
      .subscribe((data) =>
      this.officesList = data['offices'],
        err => console.log(err),
        ()=>{}
      )
  }
  private getRam() {
    this.inventarioService.getRam().
      subscribe(
        data => this.ram = data['rams'],
        err => console.log(err),
        ()=>{}
      )
  }
  private getDiks(){
    this.inventarioService.getDisk().
    subscribe(
      data => 
      this.disk = data['disks']
     ,
      err => console.log('error disks'),
      ()=>{}
    )
  }

  getProce() {

    this.inventarioService.getProcessor().
      subscribe(
        (data) =>  this.micros = data['micros'] ,
        ()=>{},
        ()=>{}
      )
  }
  getMother(){
    this.inventarioService.getMotherboards().
    subscribe((data) => { this.motherboard = data['mothers'] },
      err => console.log(err),
      ()=>{}

    )
  }
  selectOffice() {
    this.selectoffice = true
    this.guardado = false
    if(this.buttonEdit!= ''){
      
    }
    else{
    if (this.TipoEquipo === 'gabinete') {
      if (this.cambiog === false) {
        this.getRam();
        this.getDiks();
        this.getProce();
        this.getMother();
        this.cambiog = true
      }
      this.button = 'Guardar Gabinete'

    } else if (this.TipoEquipo === 'notebook') {
      if (this.cambiol === false && this.cambiog === false) {
        this.getRam()
        this.getDiks()
        this.cambiol = true
      }
      this.button = 'Guardar Notebook'
    } else if (this.TipoEquipo === 'impresora') {
      if (this.cambioi === false) {
        this.getToners()
        this.cambioi = true
      }

      this.button = 'Guardar Impresora'
    } else {
      if (this.TipoEquipo === 'monitor') {
        this.button = 'Guardar Monitor'
      }
    }}

  }
  GuardarEquipo() {
    if (this.TipoEquipo === 'gabinete') {
      this.gabinete.office_id = this.id_office
      this.inventarioService.addGabinete(this.gabinete).
        subscribe(
          data => {
            this.TipoEquipo = ''
            this.button = ''
            this.guardado = true
          },
          err => console.log(err),
          ()=>{}
        )
    } else if (this.TipoEquipo === 'notebook') {
      this.note.office_id = this.id_office
      this.inventarioService.addNotebook(this.note).
        subscribe(
          data => {
            this.TipoEquipo = ''
            this.button = ''
            this.guardado = true
          },
          err => console.log(err),
          ()=>{}
        )


    } else if (this.TipoEquipo === 'impresora') {

      this.printer.office_id = this.id_office
     
      this.inventarioService.addImpresora(this.printer).
        subscribe(
          data => {
            this.button = ''
            this.guardado = true
            this.TipoEquipo = ''
          }
          ,
          err => console.log(err),
          ()=>{}

        )
    } else if (this.TipoEquipo === 'monitor') {
      this.monitor.office_id = this.id_office
     
      this.inventarioService.addMonitor(this.monitor).
        subscribe(
          data => {
           
            this.button = ''
            this.guardado = true
            this.TipoEquipo = ''
          }, err => console.log(err)
          , ()=>{}
        )
    }
  }
  getToners() {
    this.inventarioService.getToners().
      subscribe(
        data => {
        this.toners = data['toners']
          console.log(this.toners)
        },
        err => console.log(err),
        ()=>{}
      )
  }

  addRam() {

    this.inventarioService.addRam(this.rammCapacity + 'GB').
      subscribe(
        data => {
        
          alert('Operacion exitosa!')
          this.getRam()
          
        },
        err => console.log(err),
        ()=>{}

      )
  }
  addDisk() {
    if (this.unidadDisk != '') {

      this.inventarioService.addDisk(this.CapacidadDisk + this.unidadDisk).
        subscribe(
          data => {
            alert('Operacion exitosa!')
            this.getDiks()
          },
          err => console.log(err),
          ()=>{}
        )
    } else {
      alert('Debe seleccionar unidad de almacenamiento!')
    }

  }
  addMicro() {

    this.inventarioService.addMicro(this.procce).
      subscribe(
        data => {
         
          alert('Operacion exitosa!')
          this.getProce()
        },
        err => console.log(err),
        ()=>{}

      )
  }
  addMother() {
    this.inventarioService.addMother(this.motherr).
      subscribe(
        data => {
         
          alert('Operacion exitosa!')
          this.getMother()
        },
        err => console.log(err),
        ()=>{}

      )
  }

  editarIinventario() {
    if (this.buttonEdit === 'Editar Gabinete') {
      this.inventarioService.editGabinete(this.id_cabinet, this.gabinete).
        subscribe(
          () => {
            this.buttonEdit=''
            this.TipoEquipo=''
            this.router.navigateByUrl("incidencia/list/1")},
          err => console.log(err),
          () => console.log()
        )
    } else if (this.buttonEdit === 'Editar Notebook') {
      this.inventarioService.editNotebook(this.id_laptop,this.note).
      subscribe(
        ()=>{
          this.buttonEdit=''
          this.TipoEquipo=''
          this.router.navigateByUrl("incidencia/list/1")},
        err=>console.log(),
        ()=>console.log()
      )

    }else if(this.buttonEdit=== 'Editar Monitor'){
        this.inventarioService.editMonitor(this.id_monitor,this.monitor).
        subscribe(
          ()=>{ this.buttonEdit=''
          this.TipoEquipo=''
          this.router.navigateByUrl("incidencia/list/1")},
          ()=>{},
          ()=>{}
        )

    }else if(this.buttonEdit=== 'Editar Impresora'){
      this.inventarioService.editPrinter(this.id_printer,this.printer).
      subscribe(
        ()=>{},
        ()=>{},
        ()=>{}
      )

    }
  }
  addToner(){
    this.inventarioService.addToner(this.toner).
    subscribe(
      (data)=>
        this.getToners(),
      ()=>{},
      ()=>{}

    )
  }

}
