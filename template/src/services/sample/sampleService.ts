// import { IsTenantAvaibleInput } from './dto/isTenantAvailableInput';
// import { RegisterInput } from './dto/registerInput';
// import IsTenantAvaibleOutput from './dto/isTenantAvailableOutput';
// import { RegisterOutput } from './dto/registerOutput';
import {GetSampleOutput} from './dto/getSampleOutput';
import http from '../httpService';

// TODO: BURADA SADECE API İSTEĞİ YAPILCAK
class SampleService {
  public async getTodo(): Promise<GetSampleOutput> {
    let result = await http.get('todos/1');
    return result.data;
  }
}

export default new SampleService();
