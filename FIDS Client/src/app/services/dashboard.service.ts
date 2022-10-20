import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';


const dataUrl = 'http://localhost:8080/api/data/dash';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  

 constructor(private httpClient: HttpClient) { }

  getAPIData(data: any,screenId:any): Observable<any> {
    return this.httpClient.get<{fidsdata:any}>(dataUrl+'?screenId='+screenId, data).pipe(tap(res => {
     console.log("called getAPIDATA");
  }))


}

}
