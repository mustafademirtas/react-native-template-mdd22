// TODO: ONLY REQUESTS FROM API WILL BE PROCESSED HERE
import {action, observable, decorate} from 'mobx';
import SampleService from '../services/sample/sampleService';
import {GetSampleOutput} from '../services/sample/dto/getSampleOutput';

class SampleStore {
  message: string = 'IMPORTANT';
  todo: GetSampleOutput = {completed: false, id: 0, title: '', userId: 0};

  public setMessage(message: string) {
    this.message = message;
  }

  public async getTodo() {
    const result = await SampleService.getTodo();
    this.todo = result;
  }
}
decorate(SampleStore, {
  message: observable,
  todo: observable,
  setMessage: action,
});

export default SampleStore;
