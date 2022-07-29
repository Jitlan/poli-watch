import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class GovInfoService {
    constructor(private http: HttpClient) { }
    govInfoApi = 'http://localhost:5000/api/v1/govinfo/';
    startDate = '2018-01-28T20:18:10Z';

    getCollections(): Observable<{}>{
        return this.http.get<{}>(`${this.govInfoApi}collections`);
    }
    
    getCollectionData(code: any, time: any): Observable<{}>{
        return this.http.get<{}>(`${this.govInfoApi}collections/${code}/${time}`);
    }
    getBillData(packageId: string): Observable<{}>{
        return this.http.get<{}>(`${this.govInfoApi}bill/${packageId}`);
    }
}