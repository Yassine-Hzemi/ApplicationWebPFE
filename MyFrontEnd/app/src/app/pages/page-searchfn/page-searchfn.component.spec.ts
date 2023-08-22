import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSearchfnComponent } from './page-searchfn.component';

describe('PageSearchfnComponent', () => {
  let component: PageSearchfnComponent;
  let fixture: ComponentFixture<PageSearchfnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSearchfnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageSearchfnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
