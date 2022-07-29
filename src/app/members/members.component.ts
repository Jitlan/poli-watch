import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from 'src/models/member';

import { PropublicaService } from '../../services/propublica.service';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  chamber: any = "";
  pageHeader: any = "";
  searchBy: string = "";
  members: Member[] = [];

  constructor(public restAPI: PropublicaService, private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.chamber = this._Activatedroute.snapshot.paramMap.get("chamber");
    this.pageHeader = this.chamber == 'house'? 'House' : 'Senate';
    this.loadMembers();
  }
  
  loadMembers() {
    return this.restAPI.getMembers(this.chamber)
      .subscribe((d: any) => {
        d.members.forEach((member: Member)=> {
          this.members.push(member);
        });
      })
  }

  search(member: Member) {
      if(this.searchBy != ""){
        if(member.party.includes(this.searchBy)
        || member.first_name.includes(this.searchBy)
        || member.last_name.includes(this.searchBy)
        || member.state.includes(this.searchBy)
        || (member.district && member.district.includes(this.searchBy))){
          return true;
        }
        return false;
      }
        return true;

  }
}
