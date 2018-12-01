import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState, AppActions } from '../../store/app';
import { Observable } from 'rxjs';
import { selectApp } from '../../store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ss-schematics';
  appState$: Observable<AppState>;
  title2: string;

  constructor(private store: Store<AppState>) {
    this.title2 = '';
    this.appState$ = this.store.pipe(select(selectApp));
    this.appState$.subscribe(state => {
      if (state.msg['title']) this.title2 = state.msg['title'];
      else this.title2 = 'Server does not response!';
    });
  }

  public test() {
    this.store.dispatch(new AppActions.TestInit());
    this.store.dispatch(new AppActions.Test());
  }
}
