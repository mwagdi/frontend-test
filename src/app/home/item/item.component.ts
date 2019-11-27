import { Component, Input } from '@angular/core';
import { Item } from 'src/app/types';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input()
  item: Item;
  @Input()
  items: Item[];
  children: Item[];
  level: number;
  ngOnInit() {
    this.children = this.items.filter(i => this.item.id === i.parent_id);
    console.log(this.item.id, this.children);
  }
}
