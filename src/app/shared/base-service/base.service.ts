import { environment } from 'src/environments/environment';

export abstract class BaseService {

  private urlBase: string;
  private API: string;

  constructor(
    api: string
  ) {

    this.urlBase = `${environment.url}`;
    this.API = api;
  }

  get url(): string {

    return `${this.urlBase}/${this.API}`;
  }

}
