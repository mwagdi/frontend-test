import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpService } from '../http/http.service';
import { Observable, of } from 'rxjs';
import { ItemDetailsComponent } from './item-details.component';
import { ActivatedRoute } from '@angular/router';
type Item = {
  id: number;
  parent_id: null | number;
  title: string;
};
describe('ItemDetailsComponent', () => {
  let component: ItemDetailsComponent;
  let fixture: ComponentFixture<ItemDetailsComponent>;
  let httpServiceStub: Partial<HttpService>;

  beforeEach(async(() => {
    httpServiceStub = {
      getItem(): Observable<Item> {
        return new Observable(subscriber =>
          subscriber.next({ id: 2, parent_id: 1, title: 'item title' }),
        );
      },
    };
    let activatedRouteStub = {
      snapshot: {
        params: {
          id: 2,
        },
        url: '2',
      },
    };
    TestBed.configureTestingModule({
      declarations: [ItemDetailsComponent],
      providers: [
        { provide: HttpService, useValue: httpServiceStub },
        {
          provide: ActivatedRoute,
          useValue: activatedRouteStub,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
