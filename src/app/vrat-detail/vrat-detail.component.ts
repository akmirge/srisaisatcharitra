import { Component, OnInit, Input } from '@angular/core';
import { Vrat } from '../model/vrat.model';
import { MonthlyDate } from '../model/monthly-date.model';

@Component({
  selector: 'app-vrat-detail',
  templateUrl: './vrat-detail.component.html',
  styleUrls: ['./vrat-detail.component.css']
})
export class VratDetailComponent implements OnInit {

  @Input() selectedVrat: Vrat;
  public selectedYearId: number = null;
  public showMonthSelection: boolean;
  public months = ['January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'];
  public selectedMonth: string = null;
  public monthlyDates: Array<MonthlyDate>;
  constructor() { }

  ngOnInit() {
  }

  onYearSelection(yearId: number) {
    if (yearId) {
      this.showMonthSelection = true;
      if (this.selectedMonth) {
        this.onMonthSelection(this.selectedMonth);
      }
    } else {
      this.showMonthSelection = false;
      this.selectedMonth = null;
    }
  }

  onMonthSelection(month: string) {
    if (this.selectedVrat && this.selectedVrat.vratDates) {
     this.monthlyDates = this.selectedVrat.vratDates.
        find(vd => +vd.yearId === +this.selectedYearId).monthlyDates.
        filter(md => md.month === month);
    }
  }
}
