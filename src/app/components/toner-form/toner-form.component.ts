import { Component, OnInit } from '@angular/core';
import { typesToners } from 'src/app/models/types_toners';
import{TonerService} from '../../services/toner.service';
import { Toner } from 'src/app/models/toner';

@Component({
  selector: 'app-toner-form',
  templateUrl: './toner-form.component.html',
  styleUrls: ['./toner-form.component.css']
})
export class TonerFormComponent implements OnInit {

  type_toners:typesToners[]
  toner:Toner= new Toner()
  constructor(private TonerService:TonerService ) { }

  ngOnInit() {
    this.getTypeToner();
  }

  getTypeToner(){
    this.TonerService.getTypeToners().
    subscribe(
      (data)=>this.type_toners=data['typesToner']
    )
  }

  addToner(){
    this.TonerService.addToner(this.toner).subscribe(
      (data)=>{console.log(data)}
    )
  }

}
