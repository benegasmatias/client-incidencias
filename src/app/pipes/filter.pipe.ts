import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: string, arg2?:string, arg3?:string): any {
    console.log(arg);
    console.log(arg2);
    if ((arg === '' || arg.length < 3 ) && arg2 === '' && arg3 === '' )
    return value;
    else if (arg != '' || arg.length > 2 ) {
      const resultPosts = [];
     for (const post of value) {
 
       if (post.name_office.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
         post.name_tec.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
         post.name_problem.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
         post.name_user.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
         post.date_support.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
         resultPosts.push(post);
       };
     };
 
     return resultPosts;
     }
    else if(arg2!='' && arg3 !='')
    {
      console.log(arg3)
      const resultPosts = [];
      for (const post of value) {
  
        if (post.date_support.toLowerCase().indexOf(arg3.toLowerCase()) > -1 ||
          post.date_support.toLowerCase().indexOf(arg2.toLowerCase()) > -1) {
          resultPosts.push(post);
        };
      };
  
      return resultPosts;
    }else if( arg != '' || arg.length > 1  && arg2!='' && arg3 !=''){
      const resultPosts = [];
      for (const post of value) {
  
        if (post.name_office.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
        post.name_tec.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
        post.name_problem.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
        post.name_user.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
        post.date_support.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
        post.date_support.toLowerCase().indexOf(arg3.toLowerCase()) > -1 ||
          post.date_support.toLowerCase().indexOf(arg2.toLowerCase()) > -1) {
          resultPosts.push(post);
        };
      };
  
      return resultPosts;
    }
   
  }

}

