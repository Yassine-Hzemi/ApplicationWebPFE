import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageModiffnComponent } from './page-modiffn.component';

describe('PageModiffnComponent', () => {
  let component: PageModiffnComponent;
  let fixture: ComponentFixture<PageModiffnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageModiffnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageModiffnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
