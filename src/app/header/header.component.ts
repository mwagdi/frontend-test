import { Component, OnInit } from '@angular/core';
import { User } from '../types';

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
      thumbnail:
        'https://image.shutterstock.com/z/stock-vector-default-avatar-profile-icon-grey-photo-placeholder-518740741.jpg',
    };
  }
}
