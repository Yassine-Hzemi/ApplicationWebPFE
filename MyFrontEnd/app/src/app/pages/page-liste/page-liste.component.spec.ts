import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListeComponent } from './page-liste.component';

describe('PageListeComponent', () => {
  let component: PageListeComponent;
  let fixture: ComponentFixture<PageListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
