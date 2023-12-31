import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  public characters: any[] = [];

  constructor(private htpp: HttpClient) {}

  ngOnInit() {
    this.htpp
      .get<any>('https://rickandmortyapi.com/api/character')
      .subscribe((res) => {
        console.log(res);
        this.characters = res.results;
      });
  }
}
