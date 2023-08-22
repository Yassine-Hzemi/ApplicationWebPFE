import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageConsultComponent } from './page-consult.component';

describe('PageConsultComponent', () => {
  let component: PageConsultComponent;
  let fixture: ComponentFixture<PageConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageConsultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
