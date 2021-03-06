import { Component, OnInit } from '@angular/core';
import { TonerService } from '../../services/toner.service';
import { Tonerstock, Tonerr } from 'src/app/models/toner';
import { LoginService } from '../../services/login.service'
import { LoginUser } from '../../models/login-user';
import { Router } from '@angular/router';
import { typesToners } from 'src/app/models/types_toners';
import * as XLSX from 'xlsx'; 


@Component({
  selector: 'app-list-toners',
  templateUrl: './list-toners.component.html',
  styleUrls: ['./list-toners.component.css']
})
export class ListTonersComponent implements OnInit {

  fileName= 'ExcelTores.xlsx';

  TonerStock: Tonerstock[]
  typesToner: typesToners[]

  toner: Tonerr = new Tonerr()

  filterTonerStock = '';
  user = new LoginUser();
  Nologged = false;
  habilitarEdit = false;

  constructor(private tonerStockService: TonerService,
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
    this.getTonerStock();
    this.Nologged = false;
    this.getTypeToner()
  }
  getTypeToner() {
    this.tonerStockService.getTypeToners().subscribe(
      (data) => {

        this.typesToner = data['typesToner']
        console.log(this.typesToner)
      }
    )
  }

  llenaToner(ton) {
    this.toner.id_toner = ton.id_toner
    this.toner.type_id = ton.id_type
    this.toner.quantity = ton.quantity
    this.toner.toner_model = ton.toner_model
    this.toner.description = ton.description

  }

  addStock() {
    this.tonerStockService.EditToner(this.toner.id_toner, this.toner).
      subscribe(
        (data) => {
          this.router.navigateByUrl("incidencia/listToners");
          console.log(data)

          this.getTonerStock();
        },
        () => { },
        () => { }
      )
  }

  getTonerStock() {
    this.tonerStockService.getToners().
      subscribe(
        (data) => {
          this.TonerStock = data['toners']
          console.log(this.TonerStock)
        },
        () => { },
        () => { })
  }
  loginEdit() {

    this.loginService.login(this.user).
      subscribe(
        datas => {
          this.habilitarEdit = true;
          this.Nologged = false
        },
        err => this.Nologged = true,
        () => { }
      )
  }

  eliminarToner(toner) {

    this.tonerStockService.deleteToner(toner.id_toner).
      subscribe(() => {
        this.getTonerStock();
      })
  }

  //Excel
  exportexcel(): void 
  {
     /* table id is passed over here */   
     let element = document.getElementById('tablaToner'); 
     const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

     /* generate workbook and add the worksheet */
     const wb: XLSX.WorkBook = XLSX.utils.book_new();
     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

     /* save to file */
     XLSX.writeFile(wb, this.fileName);
    
  }


}
