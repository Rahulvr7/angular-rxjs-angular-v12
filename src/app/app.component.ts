import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  name:any = '';
  users$!: Observable<Array<{name: string}>>;
  refresh$ = new BehaviorSubject<boolean>(true);
  constructor(private api: ApiService) {}
  ngOnInit() {
    this.users$ = this.refresh$.pipe(switchMap(_ => this.api.getUsers()));
  }

  addUser() {
    this.refresh$.next(true);
    this.api.addUser(this.name);
    this.name = '';
  }
}
