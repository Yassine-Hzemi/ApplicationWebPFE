import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenufnComponent } from './menufn.component';

describe('MenufnComponent', () => {
  let component: MenufnComponent;
  let fixture: ComponentFixture<MenufnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenufnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenufnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
