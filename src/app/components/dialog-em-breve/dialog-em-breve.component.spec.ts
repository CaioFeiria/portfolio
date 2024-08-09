import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEmBreveComponent } from './dialog-em-breve.component';

describe('DialogEmBreveComponent', () => {
  let component: DialogEmBreveComponent;
  let fixture: ComponentFixture<DialogEmBreveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogEmBreveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEmBreveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
