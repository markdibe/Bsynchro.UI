export interface AccountInputQuery{
    first:number;
    page:number;
    pageCount:number;
    rows:number;
    skip?:number;
    take?:number;
}