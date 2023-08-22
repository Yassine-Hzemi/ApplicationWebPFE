import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStatfnComponent } from './page-statfn.component';

describe('PageStatfnComponent', () => {
  let component: PageStatfnComponent;
  let fixture: ComponentFixture<PageStatfnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageStatfnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageStatfnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
