import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ItemComponent } from './item.component';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.debugElement.componentInstance;
    component.item = {
      title: 'Item title',
      id: 1,
      parent_id: null,
    };
    component.items = [
      {
        title: 'Item title',
        id: 1,
        parent_id: null,
      },
    ];
    fixture.detectChanges();
  });

  it('should create the item', () => {
    expect(component).toBeTruthy();
  });

  it('should show item title', () => {
    const titleContainer = fixture.debugElement.nativeElement.querySelector('h3');
    expect(titleContainer.textContent).toContain(component.item.title);
  });
});
