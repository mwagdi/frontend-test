import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let fixture: ComponentFixture<SidebarComponent>;
  let component: SidebarComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create sidebar', () => {
    expect(component).toBeTruthy();
  });

  it('should display company domain', () => {
    fixture.detectChanges();
    const domainContainer = fixture.debugElement.nativeElement.querySelector(
      '.sidebar__company_name',
    );
    expect(domainContainer.textContent).toContain(component.company.domain);
  });
});
