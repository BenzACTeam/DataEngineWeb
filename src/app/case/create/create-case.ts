export class CreateCase {

  constructor(public subject: string,
              public value: string,
              public scenario: string,
              public contributionBU?: string,
              public stage?: string,
              public fromDate?: string,
              public toDate?: string,
              public contact?: string,
              public help?: string,
              public dataSource?: string,
              public dataTypeDescription?: string,
              public analysisModel?: string,
              public analysisMethodResult?: string,
              public validationMethodResult?: string,
              public implementationMethodResult?: string) {
  }

}

