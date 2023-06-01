import {Inject, Injectable} from '@angular/core';
import {STORE_API_URL} from "../app/models/app-injections-tokens";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Response} from "../app/models/Response";
import {ReportModel} from "../app/models/ReportModel";

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  admin: boolean = false;
  private baseApiUrl = `${this.apiUrl}`
  constructor(@Inject(STORE_API_URL) private apiUrl: string,
              private http: HttpClient,
  ) { }

  addNewRepost(report: ReportModel): Observable<Response<string>>
  {
    return this.http.post<Response<string>>(`${this.baseApiUrl}BikeReport/AddNewReport`,report)
  }
  getAllReports(): Observable<Response<Array<ReportModel>>>
  {
    return this.http.get<Response<Array<ReportModel>>>(`${this.baseApiUrl}BikeReport/GetAllReports`)
  }
}
