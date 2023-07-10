
export type packageTicket = {
    id:string,
    created_at:string,
    updated_at:string,
    name:string,
    applied_at:string,
    expired_at:string,
    single_price:number,
    combo_number:number,
    combo_price:number,
    event_name:string,
    status:'Active'|'Inactive'
}