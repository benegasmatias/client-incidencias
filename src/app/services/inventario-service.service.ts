import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Printer } from '../models/printer';
import { Monitor } from '../models/monitor';
import { Notebook } from '../models/notbook';
import { GabineteOUT } from '../models/gabinete';


import { Microproccessor } from '../models/microproccessor';
import { Mother } from '../models/mother';
import { Toner } from '../models/toner';



@Injectable({
  providedIn: 'root'
})
export class InventarioServiceService {
  API_URI='/gestionincidencias';
  constructor(private http:HttpClient) { }

  getInventario(){
    return this.http.get(`${this.API_URI}/inventories/viewInventories.json`);
  }

  getDisk(){
    return this.http.get(`${this.API_URI}/Disks/index.json`);


  }
  getRam(){
    return this.http.get(`${this.API_URI}/Rams/index.json`);


  }
  


  getPrinters(){
    return this.http.get(`${this.API_URI}/Printers/index.json`);

  }
  getMonitors(){
    return this.http.get(`${this.API_URI}/Monitors/index.json`);

  }
  getMotherboards(){
    return this.http.get(`${this.API_URI}/Motherboards/index.json`);
  }
  getProcessor(){
    return this.http.get(`${this.API_URI}/Microprocessors/index.json`);
  }
  getToners(){
    return this.http.get(`${this.API_URI}/Toners/index.json`)
  }
addImpresora(impresora:Printer){
  let imp ={
    number_serie: impresora.number_serie,
    toner_id: impresora.toner_id,
    name_printer:impresora.name_printer,
    office_id :impresora.office_id
  }
  return this.http.post(`${this.API_URI}/Printers/add.json`,imp);
}
addNotebook(note:Notebook){
  return this.http.post(`${this.API_URI}/laptops/add.json`,note);
}
addGabinete(gab:GabineteOUT){
  return this.http.post(`${this.API_URI}/Cabinets/add.json`,gab);
}

addMonitor(monitor:Monitor){
  let imp ={
    number_serie: monitor.number_serie,
    name_monitor: monitor.name_monitor,
    office_id:monitor.office_id
  }
  return this.http.post(`${this.API_URI}/Monitors/add.json`,imp);
}
addRam(ram){

 let  ramm={
    capacity_ram:ram
  }
  return this.http.post(`${this.API_URI}/rams/add.json`,ramm);
}
addDisk(capacity){
let diskk={
  capacity_disk:capacity
}

  return this.http.post(`${this.API_URI}/disks/add.json`,diskk);
}
addMicro(micro:Microproccessor){
  let micros={
    microprocessor:micro.microprocessor
  }
  return this.http.post(`${this.API_URI}/Microprocessors/add.json`,micros);
}
addMother(mothe:Mother){
  let mother={
    name_motherboard:mothe.name_motherboard
  }
  return this.http.post(`${this.API_URI}/motherboards/add.json`,mother);
}
addToner(toner:Toner){
  let tonerr={
    toner_model:toner.toner_model
  }
  return this.http.post(`${this.API_URI}/toners/add.json`,tonerr);
}

editGabinete(id,u:GabineteOUT){
 
  return this.http.patch(`${this.API_URI}/cabinets/edit/${id}.json`,u);
}
editNotebook(id,u:Notebook){
 
  return this.http.patch(`${this.API_URI}/laptops/edit/${id}.json`,u);
}
editMonitor(id,u:Monitor){
 
  return this.http.patch(`${this.API_URI}/monitors/edit/${id}.json`,u);
}
editPrinter(id,u:Printer){
 
  return this.http.patch(`${this.API_URI}/printers/edit/${id}.json`,u);
}


}
