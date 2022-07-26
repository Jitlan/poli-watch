import { Component, OnInit } from '@angular/core';
import { GovInfoService } from '../services/gov-info.services';

@Component({
  selector: 'app-test-data',
  templateUrl: './test-data.component.html',
  styleUrls: ['./test-data.component.css']
})
export class TestDataComponent implements OnInit {

  constructor(public restAPI: GovInfoService) { }
  data: any;

  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
    return this.restAPI.getCollections().subscribe((d: {}) => {
      this.data = d;
      console.log(d);
    })
  }
}
