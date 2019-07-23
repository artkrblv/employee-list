import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService]
})
export class AppComponent {
  users = [];
  search="";

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe(users => {
      this.users = users;
    })
  }

  switchView = false;

  onList() {
    this.switchView = false;
  }
  onGrid() {
    this.switchView = true;
  }

}

