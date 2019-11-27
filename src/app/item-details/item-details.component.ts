import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http/http.service';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../types';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent implements OnInit {
  item: Item;
  constructor(private http: HttpService, private route: ActivatedRoute) {}
  ngOnInit() {
    this.http.getItem(this.route.snapshot.params.id).subscribe(data => (this.item = data));
  }
}
