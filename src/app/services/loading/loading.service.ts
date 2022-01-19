import { Injectable } from '@angular/core';

@Injectable()
export class LoadingService {

  public hide = 'hide';

  constructor() {}

  hideLoading() {
    this.hide = 'hide';
  }

  showLoading() {
    this.hide = '';
  }

}
