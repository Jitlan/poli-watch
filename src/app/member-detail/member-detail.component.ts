import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bill } from 'src/models/bill';

import { PropublicaService } from '../../services/propublica.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  chamber: any = "";
  memberId: any = "";
  data: any;
  bills: Bill[] = [];
  constructor(public restAPI: PropublicaService, private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.chamber = this._Activatedroute.snapshot.paramMap.get("chamber");
    this.memberId = this._Activatedroute.snapshot.paramMap.get("memberId");
    this.memberData(this.memberId);
  }

  memberData(memberId: string){
    return this.restAPI.getMemberBills(this.memberId, 'active')
    .subscribe((d: any) => {
      this.data = d[0];
      this.data.bills.forEach((bill: Bill)=> {
        this.bills.push(new Bill(bill)); 
      });
    });
  }
}
