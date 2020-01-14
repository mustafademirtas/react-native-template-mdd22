import axios from 'axios';
import {Alert} from 'react-native';
import Utils from '../utils';
import AppConsts from './../lib/appconst';
import qs from 'qs';

const http = axios.create({
  baseURL: AppConsts.remoteServiceBaseUrl,
  timeout: 30000,
  paramsSerializer: function(params) {
    return qs.stringify(params, {
      encode: false,
    });
  },
});

http.interceptors.request.use(
  async function(config) {
    const authToken = Utils.getAuthToken();
    if (authToken) {
      config.headers.common.Authorization = 'Bearer ' + authToken;
    }

    // TODO: Burada lokal storagedan culture alınacak
    // config.headers.common['.AspNetCore.Culture'] = abp.utils.getCookieValue(
    //   'Abp.Localization.CultureName',
    // );

    // TODO: Burada lokal storagedan tenant alınacak
    // config.headers.common[
    //   'Abp.TenantId'
    // ] = abp.multiTenancy.getTenantIdCookie();

    return config;
  },
  function(error) {
    return Promise.reject(error);
  },
);

http.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (
      !!error.response &&
      !!error.response.data.error &&
      !!error.response.data.error.message &&
      error.response.data.error.details
    ) {
      Alert.alert(
        error.response.data.error.message,
        error.response.data.error.details,
      );
    } else if (
      !!error.response &&
      !!error.response.data.error &&
      !!error.response.data.error.message
    ) {
      Alert.alert('LoginFailed', error.response.data.error.message);
    } else if (!error.response) {
      Alert.alert('', 'UnknownError');
    }

    setTimeout(() => {}, 1000);

    return Promise.reject(error);
  },
);

export default http;
