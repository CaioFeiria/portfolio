import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogTaskManagementComponent } from '../dialog-task-management/dialog-task-management.component';
import { DialogEmBreveComponent } from '../dialog-em-breve/dialog-em-breve.component';
import { MatIconModule } from '@angular/material/icon';
import { FundoComponent } from '../fundo/fundo.component';
import { FooterComponent } from '../../footer/footer.component';
import { DialogLoginpageComponent } from '../dialog-loginpage/dialog-loginpage.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ 
    MatCardModule,
    NgOptimizedImage,
    MatButtonModule,
    MatIconModule,
    NgIf,
    FundoComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly dialog = inject(MatDialog);
  buttonVisible: boolean = true;

  openDialogTaskManagement() {
    const dialogRef = this.dialog.open(DialogTaskManagementComponent);

    dialogRef.afterClosed().subscribe(() => {
    });
  }

  openDialogEmBreve() {
    const dialogRef = this.dialog.open(DialogEmBreveComponent);

    dialogRef.afterClosed().subscribe(() => {
    });
  }

  openDialogLoginPage() {
    const dialogRef = this.dialog.open(DialogLoginpageComponent);

    dialogRef.afterClosed().subscribe(() => {
    });
  }

}

