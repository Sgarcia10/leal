import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { SharedModule } from '../../shared/shared.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {}));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [SharedModule],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init as expected', () => {
    component.ngOnInit();
    expect(component.toggledSidenav).toBeFalsy();
    expect(typeof component.height).toBe('number');
    expect(component.height).toBeGreaterThanOrEqual(0);
  });

  it('should toggle sidenav', () => {
    component.ngOnInit();
    component.toggleSidenav();
    expect(component.toggledSidenav).toBeTruthy();
    component.toggleSidenav();
    expect(component.toggledSidenav).toBeFalsy();
    component.toggleSidenav();
    expect(component.toggledSidenav).toBeTruthy();
  });

  it('should output toggle sidenav', () => {
    component.ngOnInit();
    expect(component.toggledSidenav).toBeFalsy();
    let actualToggle = component.toggledSidenav;
    component.toggledSidenav$.subscribe(
      toggledSidenav => (actualToggle = toggledSidenav)
    );
    component.toggleSidenav();
    expect(actualToggle).toBeTruthy();
    component.toggleSidenav();
    expect(actualToggle).toBeFalsy();
    component.toggleSidenav();
    expect(actualToggle).toBeTruthy();
  });

  it('should render a header container', () => {
    expect(component.appHeader).toBeDefined();
  });

  it('should output toggle sidenav on click event', () => {
    expect(component.toggledSidenav).toBeFalsy();
    let actualToggle = component.toggledSidenav;
    component.toggledSidenav$.subscribe(
      toggledSidenav => (actualToggle = toggledSidenav)
    );
    const button = fixture.debugElement.query(By.css('#btnToggleSidenav'));
    expect(button).toBeDefined();
    button.triggerEventHandler('click', null);
    expect(actualToggle).toBeTruthy();
    button.triggerEventHandler('click', null);
    expect(actualToggle).toBeFalsy();
  });
});
