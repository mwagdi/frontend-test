import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs';
type Item = {
  id: number;
  parent_id: null | number;
  title: string;
};
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let httpServiceStub: Partial<HttpService>;

  beforeEach(async(() => {
    httpServiceStub = {
      getAll(): Observable<Item[]> {
        return new Observable(subscriber =>
          subscriber.next([{ id: 2, parent_id: 1, title: 'item title' }]),
        );
      },
    };
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [{ provide: HttpService, useValue: httpServiceStub }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
