import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as moment from 'moment';

@Component({
  selector: 'app-date-filter',
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.scss']
})
export class DateFilterComponent implements OnInit {
  @Output() filter$ = new EventEmitter<{ fromDate: string; toDate: string }>();
  fromDate = new FormControl(moment(['', '', '']), Validators.required);
  toDate = new FormControl(moment(['', '', '']), Validators.required);
  constructor() {}

  ngOnInit() {}

  filter() {
    const momentFromDate: moment.Moment = this.fromDate.value;
    const momentToDate: moment.Moment = this.toDate.value;
    const startDate = momentFromDate.format('YYYY-MM-DD');
    const endDate = momentToDate.format('YYYY-MM-DD');
    this.filter$.emit({ fromDate: startDate, toDate: endDate });
  }
}
