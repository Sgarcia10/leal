import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

/**
 *
 *
 * @export
 * @class HeaderComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() logout$ = new EventEmitter<{}>();
  @Input('name') name: string;

  /**
   * Creates an instance of HeaderComponent.
   * @memberof HeaderComponent
   */
  constructor() {}

  ngOnInit() {}

  /**
   * Emit logout event
   * @memberof HeaderComponent
   */
  public logout(): void {
    this.logout$.emit({});
  }
}
