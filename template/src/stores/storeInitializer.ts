import SampleStore from './sampleStore';
import ThemeStore from './themeStore';
import UserStore from './userStore';

export default function initializeStores() {
  return {
    sampleStore: new SampleStore(),
    themeStore: new ThemeStore(),
    userStore: new UserStore(),
  };
}
