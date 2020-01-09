
import {Component, ViewChild, TemplateRef} from '@angular/core';
import {startOfDay,endOfDay,isSameDay,isSameMonth} from 'date-fns';
import { Subject} from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {CalendarEvent, CalendarView} from 'angular-calendar';

import {AgendaService} from '../../services/agenda.service';







const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  },
 
};


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent{

  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
  
  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  
  refresh: Subject<any> = new Subject();

  events: CalendarEvent[]


  activeDayIsOpen: boolean = true;

  constructor(private modal: NgbModal , private agendaService:AgendaService) { }


  ngOnInit() {
    this.getEvents();
}

  


  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({event,newStart,newEnd}): void {

    this.events = this.events.map(iEvent => {
      if (iEvent === event) {
        let eventt={
          start:newStart,
          end:newEnd
        }
         this.agendaService.editEvento(eventt,event.id_event).subscribe()

        return {
          ...event,
          start: newStart,
          end: newEnd
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }


  handleEvent(action: string, event): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
    
  }

 addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: true,
        allDay:true
      }
    ];



    this.agendaService.addEvento({
      title: 'New event',
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      color: colors.red,
      draggable: "true",
      allDay:"true"
    } ).subscribe(
      ()=>{}
    )
  }

  deleteEvent(eventToDelete) {
    this.events = this.events.filter(event => event !== eventToDelete);
    this.agendaService.deleteEvento(eventToDelete.id_event).subscribe(
      ()=>{}
    )
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

//metodos api
 
  CambiosEvento(event){
    this.agendaService.editEvento(event,event.id_event).subscribe(
      (data)=>{alert("Cambios Guardados"+data.toString())
        this.getEvents()
        
    },
      ()=>{}
    )
  }

  getEvents(){
    this.agendaService.getEventos().subscribe(
      (data)=>{ 
     
       let eventos= data['Events']
       
        for(let i=0;i<eventos.length;i++){
          eventos[i].start= new Date(eventos[i].start)
          eventos[i].start.setMinutes(eventos[i].start.getMinutes() + eventos[i].start.getTimezoneOffset())
          eventos[i].end= new Date(eventos[i].end)
          eventos[i].end.setMinutes(eventos[i].end.getMinutes() + eventos[i].end.getTimezoneOffset())
          eventos[i].color= JSON.parse(eventos[i].color)
        }
       
        this.events = eventos
      
      },
      err=>console.log(err)
    )
  }

}

