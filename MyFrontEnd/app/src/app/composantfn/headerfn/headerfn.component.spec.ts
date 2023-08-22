import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderfnComponent } from './headerfn.component';

describe('HeaderfnComponent', () => {
  let component: HeaderfnComponent;
  let fixture: ComponentFixture<HeaderfnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderfnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderfnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
