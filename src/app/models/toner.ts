export class Toner {
    id_toner:string
    toner_model:string
    quantity:string
    type:string

}
export class Tonerr {

    toner_model:string
    quantity:string
    //type:string

}
export class Tonerstock{
    id_type:string
    id_toner:string
    toner_model:string
    quantity:string 
    type:string
}
export class TonerEntrega{
    id:string
    office_id:string
    toner_id:string
    quantity_departures:string
    date:string
    name_office:string
    toner_model:string


}

export class SalidaToner{
    id:string
    office_id:string
    toner_id:string
    quantity_departures:string
}
