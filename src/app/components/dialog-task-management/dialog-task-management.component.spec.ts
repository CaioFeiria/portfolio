import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTaskManagementComponent } from './dialog-task-management.component';

describe('DialogTaskManagementComponent', () => {
  let component: DialogTaskManagementComponent;
  let fixture: ComponentFixture<DialogTaskManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogTaskManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogTaskManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
