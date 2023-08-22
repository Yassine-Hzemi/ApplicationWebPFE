import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStatComponent } from './page-stat.component';

describe('PageStatComponent', () => {
  let component: PageStatComponent;
  let fixture: ComponentFixture<PageStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageStatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
