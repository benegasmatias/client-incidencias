export class Toner {
    id_toner:string
    toner_model:string
    quantity:string
    type_id:string
    description:string

}
export class Tonerr {
id_toner:string
    toner_model:string
    quantity:string
    type_id:string
    description:string

}
export class Tonerstock{
    type_id:string
    id_toner:string
    toner_model:string
    quantity:string 
    type:string
    description:string
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
