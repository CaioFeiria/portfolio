import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog-em-breve',
  standalone: true,
  imports: [
    MatDialogModule,
    NgOptimizedImage,
    MatButtonModule
  ],
  templateUrl: './dialog-em-breve.component.html',
  styleUrl: './dialog-em-breve.component.scss'
})
export class DialogEmBreveComponent {

}
