import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-loginpage',
  standalone: true,
  imports: [
    MatDialogModule,
    NgOptimizedImage,
    MatButtonModule
  ],
  templateUrl: './dialog-loginpage.component.html',
  styleUrl: './dialog-loginpage.component.scss'
})
export class DialogLoginpageComponent {

}
