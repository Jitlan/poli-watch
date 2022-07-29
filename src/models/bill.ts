export class Bill {
    public active: Boolean;
    public bill_id: string;
    public bill_type: string;
    public bill_uri: string;
    public committees: string;
    public congress: string;
    public congressdotgov_url: string;
    public cosponsors: number;
    public cosponsors_by_party: {};
    //what type is this?
    public enacted: any;
    public govtrack_url: string;
    public gpo_pdf_uri: string;
    public house_passage: Boolean;
    public introduced_date: Date;
    //what type is this?
    public last_vote: string;
    public latest_major_action: string;
    public latest_major_action_date: Date;
    public number: string;
    public primary_subject: string;
    //what type is this?
    public senate_passage: any;
    public short_title: string;
    public sponsor_id: string;
    public sponsor_name: string;
    public sponsor_party: string;
    public sponsor_state: string;
    public sponsor_title: string;
    public sponsor_uri: string;
    public summary: string;
    public summary_short: string;
    public title: string;
    //what type is this?
    public vetoed: string;

    constructor(data?: any){
        this.active=data.active;
        this.bill_id=data.bill_id;
        this.bill_type=data.bill_type;
        this.bill_uri=data.bill_uri;
        this.committees=data.committees;
        this.congress=data.congress;
        this.congressdotgov_url=data.congressdotgov_url;
        this.cosponsors=data.cosponsors;
        this.cosponsors_by_party=data.cosponsors_by_party;
        //what type is this?
        this.enacted=data.enacted;
        this.govtrack_url=data.govtrack_url;
        this.gpo_pdf_uri=data.gpo_pdf_uri;
        this.house_passage=data.house_passage;
        this.introduced_date=data.introduced_date;
        //what type is this?
        this.last_vote=data.last_vote;
        this.latest_major_action=data.latest_major_action;
        this.latest_major_action_date=data.latest_major_action_date;
        this.number=data.number;
        this.primary_subject=data.primary_subject;
        //what type is this?
        this.senate_passage=data.senate_passage;
        this.short_title=data.short_title;
        this.sponsor_id=data.sponsor_id;
        this.sponsor_name=data.sponsor_name;
        this.sponsor_party=data.sponsor_party;
        this.sponsor_state=data.sponsor_state;
        this.sponsor_title=data.sponsor_title;
        this.sponsor_uri=data.sponsor_uri;
        this.summary=data.summary;
        this.summary_short=data.summary_short;
        this.title=data.title;
        //what type is this?
        this.vetoed=data.vetoed;
    }
}
