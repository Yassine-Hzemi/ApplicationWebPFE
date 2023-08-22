import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDashboardfnComponent } from './page-dashboardfn.component';

describe('PageDashboardfnComponent', () => {
  let component: PageDashboardfnComponent;
  let fixture: ComponentFixture<PageDashboardfnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDashboardfnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDashboardfnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
