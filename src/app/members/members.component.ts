import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PropublicaService } from '../../services/propublica.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  chamber: any = "";
  pageHeader: any = "";
  members: any = [];

  constructor(public restAPI: PropublicaService, private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.chamber = this._Activatedroute.snapshot.paramMap.get("chamber");
    this.pageHeader = this.chamber == 'house'? 'House' : 'Senate';
    this.loadMembers();
  }
  loadMembers(){
    return this.restAPI.getMembers(this.chamber)
      .subscribe((d: any) => {
        console.log(d.members);
        this.members = d.members;
      })
  }

}
