import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProfileComponent } from './page-profile.component';

describe('PageProfileComponent', () => {
  let component: PageProfileComponent;
  let fixture: ComponentFixture<PageProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
