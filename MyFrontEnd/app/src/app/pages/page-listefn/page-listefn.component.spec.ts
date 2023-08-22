import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListefnComponent } from './page-listefn.component';

describe('PageListefnComponent', () => {
  let component: PageListefnComponent;
  let fixture: ComponentFixture<PageListefnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListefnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListefnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
