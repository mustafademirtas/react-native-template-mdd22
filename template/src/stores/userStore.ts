// NOTE: GENERAL USER INFO
import {action, observable, decorate, computed} from 'mobx';

class UserStore {
  name: string = 'John';
  surname: string = 'Doe';

  get fullName() {
    return `${this.name} ${this.surname}`;
  }

  public setName(name: string) {
    this.name = name;
  }

  public async setSurname(surname: string) {
    this.surname = surname;
  }
}
decorate(UserStore, {
  name: observable,
  surname: observable,
  setName: action,
  setSurname: action,
  fullName: computed,
});

export default UserStore;
