import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(users: any[], value: string): any[] {
    if (!value) {
        return users;
    } else {
      return users.filter(user => {
        return user.title.toLowerCase().includes(value.toLowerCase());
      });
    }
  }

}
