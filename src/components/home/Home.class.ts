import * as ko from 'knockout';

export class Home {
  text: ko.Observable<string> = ko.observable('');

  constructor() {
    this.text('Welcome!');
  }
}
