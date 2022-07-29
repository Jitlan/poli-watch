import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GovInfoService } from '../../services/gov-info.service';

@Component({
  selector: 'app-data-item',
  templateUrl: './data-item.component.html',
  styleUrls: ['./data-item.component.css']
})
export class DataItemComponent implements OnInit {
  code: any = [];
  collection: any;
  selectedDateTime: any = new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().split('.')[0]+"Z";

  constructor(public restAPI: GovInfoService, private _Activatedroute:ActivatedRoute) {
   }

  ngOnInit(): void {
    this.code = this._Activatedroute.snapshot.paramMap.get("code");
    this.loadCollection();
  }
  loadCollection(){
    return this.restAPI.getCollectionData(this.code, this.selectedDateTime)
      .subscribe((d:{}) => {
        this.collection = d;
      })
  }
}
