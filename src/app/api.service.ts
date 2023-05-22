import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  users = [
    {name: 'rahul'},
    {name: 'abc'},
    {name: 'xyz'},
  ];
  users$ = new BehaviorSubject<any>(this.users);
  constructor() {
   }

  getUsers(): Observable<any[]>{
    console.log(this.users$)
    return this.users$.asObservable();
  }

  addUser(name:string) {
    this.users$.next([...this.users, {name}]);
  }

}