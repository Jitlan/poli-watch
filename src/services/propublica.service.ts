import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry, map, shareReplay } from 'rxjs/operators';
import { Member } from 'src/models/member';

@Injectable()
export class PropublicaService {
    propublicaApi:string = 'http://localhost:5000/api/v1/propublica';
    cachedMembers$: Observable<Member[]> = new Observable<Member[]>();
    currentChamber$: string = "";

    constructor(private http: HttpClient) { }

    getMembers(chamber: string): Observable<{}>{
        if(!this.cachedMembers$ || this.currentChamber$ != chamber) {
            this.currentChamber$ = chamber;
            this.cachedMembers$ = this.http.get<Member[]>(`${this.propublicaApi}/congress/${chamber}`);
        }
        return this.cachedMembers$;
    }
    //{type} can only be: introduced, updated, active, passed, enacted, or vetoed
    getMemberBills(memberId: string, type: string): Observable<{}>{
        return this.http.get<{}>(`${this.propublicaApi}/bills/${memberId}/${type}`);
    }
}