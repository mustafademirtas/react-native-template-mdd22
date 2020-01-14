import AsyncStorage from '@react-native-community/async-storage';
import AppConst, {ThemeName} from '../lib/appconst';
import {Alert} from 'react-native';

class Utils {
  /**
   * Save AuthToken to local storage
   *
   * @param authToken
   * @returns Promise<void>
   */
  async setAuthToken(authToken: string): Promise<void> {
    try {
      await AsyncStorage.setItem(
        AppConst.authorization.authTokenName,
        authToken,
      );
    } catch (e) {
      // saving error
      Alert.alert('', 'AuthToken Set Problem');
    }
  }

  /**
   * Get AuthToken from local storage
   *
   * @param authToken
   * @returns Promise<void>
   */
  async getAuthToken(): Promise<string | undefined> {
    try {
      const value = await AsyncStorage.getItem(
        AppConst.authorization.authTokenName,
      );
      if (value !== null) {
        return value;
      }
      return undefined;
    } catch (e) {
      Alert.alert('', 'AuthToken Get Problem');
    }
  }

  /**
   * Save ThemeName to local storage
   *
   * @param authToken
   * @returns Promise<void>
   */
  async setThemeName(themeName: ThemeName): Promise<void> {
    try {
      await AsyncStorage.setItem(AppConst.theme.themeTokenName, themeName);
    } catch (e) {
      // saving error
      Alert.alert('', 'ThemeName Set Problem');
    }
  }

  /**
   * Get ThemeName from local storage
   *
   * @param themeName
   * @returns Promise<void>
   */
  async getThemeName(): Promise<string | undefined> {
    try {
      const value = await AsyncStorage.getItem(AppConst.theme.themeTokenName);
      if (value !== null) {
        return value;
      }
      return undefined;
    } catch (e) {
      Alert.alert('', 'ThemeName Get Problem');
    }
  }
}

export default new Utils();
