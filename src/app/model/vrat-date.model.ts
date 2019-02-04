import { MonthlyDate } from './monthly-date.model';

export class VratDate {
    constructor(
        public yearId: number,
        public monthlyDates: Array<MonthlyDate>,
    ) {}
}
