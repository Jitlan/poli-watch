import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { BillDetail } from 'src/models/bill-detail.model';

@Injectable()
export class GovInfoService {
    constructor(private http: HttpClient) { }
    govInfoApi = 'http://localhost:5000/api/v1/';
    startDate = '2018-01-28T20:18:10Z';

    getCollections(): Observable<{}>{
        return this.http.get<{}>(`${this.govInfoApi}collections`);
    }
    
    getCollectionData(code: any, time: any): Observable<{}>{
        return this.http.get<{}>(`${this.govInfoApi}collections/${code}/${time}`);
    }
    getBillData(packageId: string): Observable<{}>{
        return this.http.get<BillDetail>(`${this.govInfoApi}bill/${packageId}`);
    }
}