import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Item } from '../types';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  items: Item[];
  shownItems: Item[];
  search = new FormControl('');
  constructor(private http: HttpService) {}
  ngOnInit() {
    this.http.getAll().subscribe(data => {
      this.items = data;
      this.shownItems = data.filter(i => i.parent_id == null);
    });
    this.search.valueChanges.subscribe(value => {
      this.shownItems =
        value === ''
          ? this.items.filter(i => i.parent_id == null)
          : this.items.filter(({ title }) => title.toLowerCase().includes(value.toLowerCase()));
    });
  }
}
