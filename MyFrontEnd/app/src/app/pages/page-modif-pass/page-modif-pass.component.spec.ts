import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageModifPassComponent } from './page-modif-pass.component';

describe('PageModifPassComponent', () => {
  let component: PageModifPassComponent;
  let fixture: ComponentFixture<PageModifPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageModifPassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageModifPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
