import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLoginpageComponent } from './dialog-loginpage.component';

describe('DialogLoginpageComponent', () => {
  let component: DialogLoginpageComponent;
  let fixture: ComponentFixture<DialogLoginpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogLoginpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogLoginpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
