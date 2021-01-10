import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'calculadora'
})
export class CalculadoraPipe implements PipeTransform{

    //dato
    transform(val: any, valtwo : any){
        let operaciones:string = `
            Suma: ${val+valtwo} -
            Resta: ${val-valtwo} -
            multiplicación: ${val*valtwo} -
            División: ${val-valtwo} -
         `
        ;
    
        return operaciones;
    }

}