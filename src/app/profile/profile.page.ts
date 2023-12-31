import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  private profileId: string | null;
  public character: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {
    this.profileId = '';
  }

  ngOnInit() {
    this.profileId = this.activatedRoute.snapshot.paramMap.get('id');
    this.http
      .get('https://rickandmortyapi.com/api/character/' + this.profileId)
      .subscribe((res) => {
        console.log(res);
        this.character = res;
      });
  }
}
