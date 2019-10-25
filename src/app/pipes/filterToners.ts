import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filtoner'
})

export class FilterToners implements PipeTransform {
  
  transform(value: any, arg:string): any {
    if (arg === '' || arg.length < 3) 
      return value;
      
    const resultPosts = [];
    for (const toners of value) {
        
      if ((String(toners.toner_model).toLowerCase().indexOf(arg.toLowerCase()) > -1 ) ){
        resultPosts.push(toners);
       };
    };
    return resultPosts;
   
  }
}