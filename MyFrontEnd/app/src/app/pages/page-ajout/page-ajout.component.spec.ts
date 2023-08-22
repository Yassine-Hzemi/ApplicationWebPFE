import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAjoutComponent } from './page-ajout.component';

describe('PageAjoutComponent', () => {
  let component: PageAjoutComponent;
  let fixture: ComponentFixture<PageAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAjoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
