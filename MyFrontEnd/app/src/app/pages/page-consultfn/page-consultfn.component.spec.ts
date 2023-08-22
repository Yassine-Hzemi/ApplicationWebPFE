import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageConsultfnComponent } from './page-consultfn.component';

describe('PageConsultfnComponent', () => {
  let component: PageConsultfnComponent;
  let fixture: ComponentFixture<PageConsultfnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageConsultfnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageConsultfnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
