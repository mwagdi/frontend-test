import { Component, OnInit } from '@angular/core';

type Company = {
  domain: string;
  thumbnail: string;
};

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  company: Company;
  ngOnInit() {
    this.company = {
      domain: 'hairstylist.com',
      thumbnail:
        'https://www.dreamhost.com/blog/wp-content/uploads/2018/10/d8f069d9-0938-41cb-9fe6-f4ac17072874_DreamHost20Custom20Website-750x498.jpg',
    };
  }
}
