import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'fil'
})
export class FilterInventories implements PipeTransform {
  
  transform(value: any, arg:string): any {
    if (arg === '' || arg.length < 3) 
      return value;
      
    const resultPosts = [];
    for (const inventarios of value) {
      if (String(inventarios.name_office).toLowerCase().indexOf(arg.toLowerCase()) > -1|| 
      String(inventarios.name_printer).toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultPosts.push(inventarios);
       };
    };
    return resultPosts;
   
  }

}
