import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageModifPassfnComponent } from './page-modif-passfn.component';

describe('PageModifPassfnComponent', () => {
  let component: PageModifPassfnComponent;
  let fixture: ComponentFixture<PageModifPassfnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageModifPassfnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageModifPassfnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
