import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'LockFilter'
})
export class LockFilter implements PipeTransform {

transform(items: any[], field: string, value: string): any[] {

//debugger
  if (!items) return [];
  if (!value) return items;

 /* return items.filter(str => {
    return str[field].toLowerCase().includes(value.toLowerCase());
  })*/

  return items.filter(str=> {
    return field.split(',').some(key => { if(str[key])
        return str[key].toString().toLowerCase().includes(value.toLowerCase());
    });
  })

}

}