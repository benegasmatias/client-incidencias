export class Response{
    private msg:string;
    private status:number;

    constructor(msg:string, status:string){}

    public setMsg(msg:string):void{
        this.msg=msg;
    }

    public setStatus(status:number):void{
        this.status=status;
    }
    public getMsg():string{
        return this.msg;
    }
    public getStatus():number{
        return this.status;
    }
}