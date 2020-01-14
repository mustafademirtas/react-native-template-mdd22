// NOTE: Application constants will be collected here
// @ts-ignore
import {REMOTE_SERVICE_BASE_URL, ENVIROMENT} from 'react-native-dotenv';

// Theme Keys
export enum ThemeName {
  DARK = 'DARK',
  DEFAULT = 'DEFAULT',
}

const AppConsts = {
  userManagement: {
    defaultAdminUserName: 'admin',
  },
  localization: {
    defaultLocalizationSourceName: 'XXXX',
  },
  authorization: {
    encrptedAuthTokenName: 'enc_auth_token',
    authTokenName: 'XXX.AuthToken',
  },
  theme: {
    themeTokenName: 'XXX.ThemeName',
  },
  remoteServiceBaseUrl: REMOTE_SERVICE_BASE_URL,
  enviroment: ENVIROMENT,
};

export default AppConsts;
