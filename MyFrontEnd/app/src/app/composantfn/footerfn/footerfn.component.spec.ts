import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterfnComponent } from './footerfn.component';

describe('FooterfnComponent', () => {
  let component: FooterfnComponent;
  let fixture: ComponentFixture<FooterfnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterfnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterfnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
