import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmployeeModel } from '../../model/employee.model';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
  data$: Observable<EmployeeModel[] | null> = this._httpClient.get<
    EmployeeModel[]
  >('https://eqsfaxnghe.cfolks.pl/assets/data/employees.json');

  constructor(private _httpClient: HttpClient) {}
}
