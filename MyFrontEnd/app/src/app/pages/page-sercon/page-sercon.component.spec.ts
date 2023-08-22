import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSerconComponent } from './page-sercon.component';

describe('PageSerconComponent', () => {
  let component: PageSerconComponent;
  let fixture: ComponentFixture<PageSerconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSerconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageSerconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
