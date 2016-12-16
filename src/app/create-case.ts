

export class CreateCase {
  constructor(
    public id: string,
    public subject:string,
    public value:string,
    public b_scenario:string,
    public result:string,
    public data_source: string,
    public data_type_description: string,
    public data_analysis_model: string,
    public analysis_method_descrption: string,
    public contribution_bu:string,
    public stage:string,
    public start_time:string,
    public end_time:string,
    public contact:string,
    public i_need_help:string
  ) {}

}

