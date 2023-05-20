import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleModalsComponent } from './simple-modals.component';

describe('SimpleModalsComponent', () => {
  let component: SimpleModalsComponent;
  let fixture: ComponentFixture<SimpleModalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleModalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
