import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class PropublicaService {
    constructor(private http: HttpClient) { }

    propublicaApi = 'http://localhost:5000/api/v1/propublica';

    getMembers(chamber: string): Observable<{}>{
        return this.http.get<{}>(`${this.propublicaApi}/congress/${chamber}`);
    }

    getMemberBills(memberId: string, type: string): Observable<{}>{
        return this.http.get<{}>(`${this.propublicaApi}/bills/${memberId}/${type}`);
    }
}