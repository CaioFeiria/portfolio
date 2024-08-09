import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-dialog-task-management',
  standalone: true,
  imports: [
    MatDialogModule,
    NgOptimizedImage,
    MatButtonModule
  ],
  templateUrl: './dialog-task-management.component.html',
  styleUrl: './dialog-task-management.component.scss'
})
export class DialogTaskManagementComponent {

}
