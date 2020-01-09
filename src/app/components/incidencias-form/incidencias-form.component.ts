import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';


//services
import { OfficesService } from '../../services/offices.service';
import { TechnicalsService } from '../../services/technicals.service';
import { ProblemsService } from '../../services/problems.service';
import { UsersService } from '../../services/users.service';
import { SupportsService } from '../../services/supports.service';
import { IncidenciasService } from '../../services/incidencias.service';


//model
import { Office } from '../../models/offices'
import { Technical } from '../../models/technical'
import { Problem } from '../../models/problems'
import { Users } from 'src/app/models/users';
import { Support } from '../../models/support';
import { Supp } from 'src/app/models/supp';
import { Toner, SalidaToner, Tonerr } from '../../models/toner'
import { Printer, printerForOffice } from 'src/app/models/printer';
import { GabineteOUT, GabinetForOffice } from '../../models/gabinete'
import { NotebookForOffice } from 'src/app/models/notbook';
import { monitorForOffice} from 'src/app/models/monitor';







@Component({
  selector: 'app-incidencias-form',
  templateUrl: './incidencias-form.component.html',
  styleUrls: ['./incidencias-form.component.css']
})



export class IncidenciasFormComponent implements OnInit {

  

  EntregaToner: SalidaToner = new SalidaToner()

  gabinete: GabineteOUT = new GabineteOUT()


  printers: Printer[];



  incidencia: Support = new Support();
  

  
  sup: Supp = new Supp();
//toners
  toners: Toner[];
  tonerr: Tonerr = new Tonerr();

  titulo = '';
  button = '';
  bandera = true;
  id = '';
  TipoEquipo = ' '
  //id de oficina para el componente usuario
  useridoffice=''


  officesList: Office[];
  technicalsList: Technical[];
  problemsList: Problem[];

  usersForOffice: Users[];

  cabinetsForOffice: GabinetForOffice[];
  cabinet = '';

  laptopsForOffice: NotebookForOffice[];
  laptop = '';

  printersForOffice: printerForOffice[];
  printer = '';

  monitorsForOffice: monitorForOffice[];
  monitor = '';

  form: FormGroup

  constructor(
    private officeService: OfficesService,
    private technicalService: TechnicalsService,
    private problemsService: ProblemsService,

    private userService: UsersService,
    private supportService: SupportsService,
    private activatedRoute: ActivatedRoute,
    private incidenciaService: IncidenciasService,
    private router: Router

  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      'officee': new FormControl(),
      'usuario': new FormControl(),
      'tecnico': new FormControl(),
      'problem': new FormControl(),
      'toner': new FormControl(),
      'quantit': new FormControl(),
      'expediente': new FormControl(),
      'solucion': new FormControl(),
      'equipo': new FormControl(),
      'cabinet': new FormControl(),
      'laptop': new FormControl(),
      'printer': new FormControl(),
      'monitor': new FormControl()


    })
    const params = this.activatedRoute.snapshot.params;

    if (params.id) {
      this.id = params.id;
      this.incidencia.oficina = params.office;
      this.getUsersForOffice(params.office);
      this.sup.user_id = params.user;
      this.sup.technical_id = params.technical;
      this.sup.description = params.description;
      this.sup.proccedings_support = params.proccedings;
      this.sup.problem_id = params.problem;
      if (params.proccedings) {
        this.incidencia.solucion_inmed = 'No'
      }
      else { this.incidencia.solucion_inmed = 'Si' }


      this.bandera = false
      this.titulo = "Editar Atencion"
      this.button = "Guardar Cambios"
      //obtener offices
      this.getOfficesComponent();
      console.log(this.officesList);
      //obtener technicals
      this.getTechnicalsComponent();
      //obtener problems
      this.getProblemsComponent();



    } else {
      this.bandera = true
      this.titulo = "Nueva Atencion"
      this.button = "Guardar Incidencia"
      //obtener offices
      this.getOfficesComponent();
      console.log(this.officesList);
      //obtener technicals
      this.getTechnicalsComponent();
      //obtener problems
      this.getProblemsComponent();

      this.getOfficesComponent();
    }

  }
  //dependiendo del equipo que seleccione es el que se cargara
  selectEquipo() {
    console.log(this.TipoEquipo)

    if (this.TipoEquipo === 'gabinete') {
      this.incidenciaService.getCabinetForOffice(this.incidencia.oficina).subscribe(
        (data) => { this.cabinetsForOffice = data['cabinets'] })
    } else {
      if (this.TipoEquipo === 'notebook') {
        this.incidenciaService.getLaptopsForOffices(this.incidencia.oficina).subscribe(
          (data) => { this.laptopsForOffice = data['laptops'] }
        )
      } else {
        if (this.TipoEquipo === 'monitor') {
          this.incidenciaService.getMonitorsForOffices(this.incidencia.oficina).subscribe(
            (data) => { this.monitorsForOffice = data['monitor'] })
        } else {
          if (this.TipoEquipo === 'impresora') {
            this.incidenciaService.getPrintersForOffices(this.incidencia.oficina).subscribe(
              (data) => { this.printersForOffice = data['printers'] })
          }
        }
      }
    }
  }




  getToners() {

    if (this.sup.problem_id === '7') {

      this.getPrinters();

      this.incidenciaService.getToners().
        subscribe(
          data => {
            this.toners = data['toners']


          },
          () => { },
          () => { }
        )

      this.EntregaToner.office_id = this.incidencia.oficina;
    }
  }


  getUsersForOffice(id) {
    this.useridoffice=id;
    this.userService.showUsersForOffice(id)
      .subscribe(
        (data) => {
          this.usersForOffice = data['users'];
          this.useridoffice="";
        }, err =>
        console.log(err),
        () => { }
      );


  }

  getPrinters() {
    this.incidenciaService.getPrinters().
      subscribe(
        data => this.printers = data['printers']
      )
  }

  getTechnicalsComponent() {
    this.technicalService.getTechnicals()
      .subscribe(
        data => this.technicalsList = data['technicals'],
        err => console.log(err),
        () => { }

      )
  }

  getProblemsComponent() {
    this.problemsService.getProblems()
      .subscribe(
        data => this.problemsList = data['problems'],
        err => console.log(err),
        () => { }

      )
  }


  getOfficesComponent() {
    this.officeService.getOffices()
      .subscribe(
        data => this.officesList = data['offices'],
        err => console.log(err),
        () => { }

      )

  }

  saveNewIncidencia() {
    let quantityToner
    let a = parseInt(this.EntregaToner.quantity_departures);
   

    if (this.sup.problem_id === '7') {
      //busca en el arreglo toner el toner seleccionado para guardar la cantidad que tiene
      for (let i = 0; i < this.toners.length; i++) {
        if (this.toners[i].id_toner == this.EntregaToner.toner_id)
          quantityToner = this.toners[i].quantity
      }
      //crea una variable con la actualizacion del toner que ingreso
      let quantityActualizado = quantityToner - a;
      //si la cantidad es aceptable continua
      if (quantityActualizado >= 0) {
        
        this.tonerr.toner_model = this.toners[this.EntregaToner.toner_id].toner_model;
        this.tonerr.quantity = quantityActualizado.toString();
        this.tonerr.description="";
        this.EntregaToner.office_id = this.incidencia.oficina;

        //agrega salida de toner
        this.supportService.addSalida(this.EntregaToner).
          subscribe(
            () => {
              this.EntregaToner= new SalidaToner();
            },
            () => { },
            () => { }
          );
        //actualiza el toner
        this.supportService.setCantToner(this.EntregaToner.toner_id, this.tonerr).subscribe(
          () => {

          },
          () => { },
          () => { }
        )

        //agrega incidencia
        this.supportService.addSupport(this.sup).
          subscribe(
            () => { },
            err => console.log(err),
            () => { });

        this.sup = new Supp();
        this.incidencia = new Support();

        this.tonerr = new Tonerr()




      } else {
        alert("No hay suficiente toner")
      }

    } else {
      if (this.sup.problem_id === '8') {

        if (this.TipoEquipo === 'gabinete') {
          this.gabinete.office_id = this.incidencia.oficina
          this.supportService.addGabinete(this.gabinete).
            subscribe(
              () => { this.TipoEquipo = '' },
              err => console.log(err),
              () => { }
            )
        } else if (this.TipoEquipo === 'impresora') {

        } else if (this.TipoEquipo === 'notebook') {

        } else if (this.TipoEquipo === 'monitor') {

        }

      } else {
        if (this.sup.problem_id === '9') {
          //Delete gabinete o impresora o noteboock o monitor
          if (this.TipoEquipo === 'gabinete') {
            this.incidenciaService.deleteCabinet(this.cabinet).subscribe()
          } else
            if (this.TipoEquipo === 'notebook') {
              this.incidenciaService.deleteLaptops(this.laptop).subscribe()
            } else if (this.TipoEquipo === 'monitor') {
              this.incidenciaService.deleteMonitor(this.monitor).subscribe()
            } else if (this.TipoEquipo === 'impresora') {
              this.incidenciaService.deletePrinter(this.printer).subscribe()
            }
          //guardar incidencia
          this.supportService.addSupport(this.sup).
            subscribe(
              () => { },
              err => console.log(err),
              () => { });

          this.sup = new Supp();
          this.incidencia = new Support();



        }
        else {
          this.supportService.addSupport(this.sup).
            subscribe(
              () => { },
              err => console.log(err),
              () => { });



          this.sup = new Supp();
          this.incidencia = new Support();
        }

      }


    }
  }

  editarIncidencia() {
    this.incidenciaService.editIncidencia(this.id, this.sup).
      subscribe(
        () => {
          this.router.navigateByUrl("incidencia/list");
        }, err => console.log(err),
        () => { }

      )
  }



  eliminarIncidencia() {

    this.incidenciaService.delete(this.id).
      subscribe(
        () => {
          this.router.navigateByUrl("incidencia/list");
        },
        err => console.error("Algo Malio Sal!"),
        () => { }


      )
  }




}
