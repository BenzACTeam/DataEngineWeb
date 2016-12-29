

export class SiteCase {
  constructor(
    public id: string,
    public subject:string,
    public value:string,
    public scenario:string,
    public result:string,
    public dataSource: string,
    public dataTypeDescription: string,
    public analysisModel: string,
    public contributionBU: string,
    public stage:string,
    public fromDate:string,
    public toDate:string,
    public contact:string,
    public resultText:string,
    public resultFiles:string[],
    public analysisModelText:string,
    public analysisModelFiles:string[]
  ) {}

}

