import { NgModule, Provider } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatSnackBarModule,
  MatIconModule,
  MatCardModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatChipsModule,
  MatDatepickerModule,
  MatExpansionModule
} from '@angular/material';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MatMomentDateModule
} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

const modules = [
  BrowserAnimationsModule,
  FormsModule,
  ReactiveFormsModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatSnackBarModule,
  MatIconModule,
  MatCardModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatChipsModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatMomentDateModule
];

const providers = [
  { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
  { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
];

@NgModule({
  imports: [...modules],
  providers: [...providers],
  exports: [...modules]
})
export class SharedModule {
  static get providers(): Provider[] {
    return providers;
  }
}
