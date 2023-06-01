export class Response<T> {
  public errorMessage?: string ='';
  public isError: boolean = false;
  public data?: T;
}
