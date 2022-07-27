import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PropublicaService } from '../../services/propublica.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(public restAPI: PropublicaService, private _Activatedroute:ActivatedRoute) { }
  chamber: any = "";
  members: any = [];
  ngOnInit(): void {
    this.chamber = this._Activatedroute.snapshot.paramMap.get("chamber");
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
