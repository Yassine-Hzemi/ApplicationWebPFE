import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSerconfnComponent } from './page-serconfn.component';

describe('PageSerconfnComponent', () => {
  let component: PageSerconfnComponent;
  let fixture: ComponentFixture<PageSerconfnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSerconfnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageSerconfnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
