export class SiteCase {
  public id: string;
  public subject: string;
  public value: string;
  public scenario: string;
  public dataSource: string;
  public dataTypeDescription: string;
  public analysisModel:string;
  public analysisMethodResultText:string;
  public analysisMethodResultFiles:string[];
  public validationMethodResultText:string;
  public validationMethodResultFiles:string[];
  public implMethodResultText:string;
  public implMethodResultFiles:string[];
  public contributionBU: string;
  public stage: string;
  public fromDate: string;
  public toDate: string;
  public contact: string;
  public needHelp:string;
  public attachments:string[];

  constructor() {
  }

}

