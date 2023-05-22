import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  name:any = '';
  users$!: Observable<Array<{name: string}>>;
  constructor(private api: ApiService) {}
  ngOnInit() {
    this.users$ = this.api.getUsers();
  }

  addUser() {
    this.api.addUser(this.name);
    this.name = '';
  }
}
