export class Member {
    public api_uri: string = '';
    public at_large: Boolean = false;
    public contact_form: string = '';
    public date_of_birth: Date = new Date();
    public district: string = '';
    public dw_nominate: number = 0;
    public first_name: string = '';
    public id: string = '';
    public in_office: Boolean = false;
    public last_name: string = '';
    public last_updated: Date = new Date();
    public missed_votes: number = 0;
    public missed_votes_pct: number = 0;
    public next_election: string = '';
    public office: string = '';
    public party: string = '';
    public phone: string = '';
    public seniority: string = '';
    public short_title: string = '';
    public state: string = '';
    public suffix: string = '';
    public twitter_account: string = '';
    public url: string = '';
    public votes_against_party_pct: number = 0;
    public votes_with_party_pct: number = 0;

    constructor(data?: any){
        if(data){
            this.api_uri=data.api_uri;
            this.at_large=data.at_large;
            this.contact_form=data.contact_form;
            this.date_of_birth=data.date_of_birth;
            this.district=data.district;
            this.dw_nominate=data.dw_nominate;
            this.first_name=data.first_name;
            this.id=data.id;
            this.in_office=data.in_office;
            this.last_name=data.last_name;
            this.last_updated=data.last_updated;
            this.missed_votes=data.missed_votes;
            this.missed_votes_pct=data.missed_votes_pct;
            this.next_election=data.next_election;
            this.office=data.office;
            this.party=data.party;
            this.phone=data.phone;
            this.seniority=data.seniority;
            this.short_title=data.short_title;
            this.state=data.state;
            this.suffix=data.suffix;
            this.twitter_account=data.twitter_account;
            this.url=data.url;
            this.votes_against_party_pct=data.votes_against_party_pct;
            this.votes_with_party_pct=data.votes_with_party_pct;
        }
    }
}
