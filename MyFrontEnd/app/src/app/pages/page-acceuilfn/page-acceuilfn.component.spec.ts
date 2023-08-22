import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAcceuilfnComponent } from './page-acceuilfn.component';

describe('PageAcceuilfnComponent', () => {
  let component: PageAcceuilfnComponent;
  let fixture: ComponentFixture<PageAcceuilfnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAcceuilfnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAcceuilfnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
