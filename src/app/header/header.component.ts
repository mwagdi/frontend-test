import { Component, OnInit } from '@angular/core';

type User = {
  name: string;
  thumbnail: string;
};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user: User;
  ngOnInit() {
    this.user = {
      name: 'Morten',
      thumbnail: 'this/url',
    };
  }
}
