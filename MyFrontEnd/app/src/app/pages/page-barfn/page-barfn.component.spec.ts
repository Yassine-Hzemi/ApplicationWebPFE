import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBarfnComponent } from './page-barfn.component';

describe('PageBarfnComponent', () => {
  let component: PageBarfnComponent;
  let fixture: ComponentFixture<PageBarfnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBarfnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageBarfnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
