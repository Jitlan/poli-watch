import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BillDetail } from 'src/models/bill-detail.model';
import { GovInfoService } from '../../services/gov-info.service';

@Component({
  selector: 'app-bill-detail',
  templateUrl: './bill-detail.component.html',
  styleUrls: ['./bill-detail.component.css']
})
export class BillDetailComponent implements OnInit {
  packageId: any;
  details: any;
  constructor(public restAPI: GovInfoService, private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.packageId = this._Activatedroute.snapshot.paramMap.get("packageId");
    console.log(this.packageId);
    this.loadBillData();
  }
  loadBillData(){
    return this.restAPI.getBillData(this.packageId)
      .subscribe((d) => {
        console.log(d);
        this.details = new BillDetail(d);
      })
  }
}
