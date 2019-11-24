import { HeaderComponent } from './header.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create the header', () => {
    expect(component).toBeTruthy();
  });

  it('should display User name', () => {
    fixture.detectChanges();
    const userNameContainer = fixture.debugElement.nativeElement.querySelector('.user__name');
    expect(userNameContainer.textContent).toContain(component.user.name);
  });
});
