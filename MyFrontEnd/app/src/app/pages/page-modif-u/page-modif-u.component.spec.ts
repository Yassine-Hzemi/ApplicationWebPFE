import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageModifUComponent } from './page-modif-u.component';

describe('PageModifUComponent', () => {
  let component: PageModifUComponent;
  let fixture: ComponentFixture<PageModifUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageModifUComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageModifUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
