import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageModifComponent } from './page-modif.component';

describe('PageModifComponent', () => {
  let component: PageModifComponent;
  let fixture: ComponentFixture<PageModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageModifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
