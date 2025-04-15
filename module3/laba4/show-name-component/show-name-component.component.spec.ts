import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNameComponentComponent } from './show-name-component.component';

describe('ShowNameComponentComponent', () => {
  let component: ShowNameComponentComponent;
  let fixture: ComponentFixture<ShowNameComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowNameComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowNameComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
