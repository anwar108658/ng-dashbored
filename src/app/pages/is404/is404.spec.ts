import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Is404 } from './is404';

describe('Is404', () => {
  let component: Is404;
  let fixture: ComponentFixture<Is404>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Is404]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Is404);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
