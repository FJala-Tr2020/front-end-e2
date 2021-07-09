import * as ko from 'knockout';
import AxiosInstance from '../config/AxiosInstance';

class Version {
  value: ko.Observable<string | null> = ko.observable('');

  constructor() {
    // this.value = ko.observable(this.getVersionFromAPI());
    this.getVersionFromAPI();
  }

  setVersion(value: string) {
    this.value = ko.observable(value);
  }

  async getVersionFromAPI() {
    const response = await AxiosInstance.get('/version');
    console.log('ver', response.data.version);

    this.setVersion(response.data.version);
  }
}

export default Version;
