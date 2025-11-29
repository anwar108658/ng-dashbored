import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Todo2 } from './todo2';

describe('Todo2', () => {
  let component: Todo2;
  let fixture: ComponentFixture<Todo2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Todo2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Todo2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
