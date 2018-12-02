import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatSnackBarModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';

const modules = [
  BrowserAnimationsModule,
  FormsModule,
  ReactiveFormsModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatSnackBarModule,
  MatIconModule,
  MatCardModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class SharedModule {}
