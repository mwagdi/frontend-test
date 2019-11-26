import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpService) {}

  ngOnInit() {
    this.http.getAll().subscribe(data => console.log(data));
  }
}
