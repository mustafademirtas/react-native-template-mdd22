// NOTE: THEME INFO
import {action, observable, decorate, computed} from 'mobx';
import ThemeVariables, {DarkThemeVariables} from '../utils/theme.variables';
import {generateStyleSheet} from '../utils/theme';
import Utils from '../utils';
import {ThemeName} from '../lib/appconst';

class ThemeStore {
  themeVariables = ThemeVariables;

  get styleSheet() {
    return generateStyleSheet(this.themeVariables);
  }

  public async loadCurrentTheme() {
    const themeName = await Utils.getThemeName();
    if (themeName) {
      switch (themeName) {
        case ThemeName.DARK:
          await this.switchDarkTheme();
          break;
        case ThemeName.DEFAULT:
          await this.switchDefaultTheme();
          break;
        default:
          await this.switchDefaultTheme();
          break;
      }
    }
  }

  public async switchDarkTheme() {
    await Utils.setThemeName(ThemeName.DARK);
    this.themeVariables = DarkThemeVariables;
  }

  public async switchDefaultTheme() {
    await Utils.setThemeName(ThemeName.DEFAULT);
    this.themeVariables = ThemeVariables;
  }
}

decorate(ThemeStore, {
  themeVariables: observable,
  switchDarkTheme: action,
  switchDefaultTheme: action,
  styleSheet: computed,
});

export default ThemeStore;
