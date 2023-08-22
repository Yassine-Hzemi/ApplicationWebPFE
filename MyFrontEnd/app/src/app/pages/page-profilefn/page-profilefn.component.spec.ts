import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProfilefnComponent } from './page-profilefn.component';

describe('PageProfilefnComponent', () => {
  let component: PageProfilefnComponent;
  let fixture: ComponentFixture<PageProfilefnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageProfilefnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageProfilefnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
