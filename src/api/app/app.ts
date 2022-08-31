import { defHttp } from '/@/utils/http/axios';
import { LoginRequest, LoginResponse, UserInfo } from './model/appModel';

import { ErrorMessageMode } from '/#/axios';
import { Result } from '/#/axios';

enum Api {
  Login = '/user/login',
  Logout = '/user/logout',
  UserInfo = '/user/info',
}

/**
 * @description: user login api
 */
export function login(params: LoginRequest, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<Result<LoginResponse>>(
    {
      url: Api.Login,
      data: params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return defHttp.get<Result<UserInfo>>({ url: Api.UserInfo }, { errorMessageMode: 'none' });
}

export function logout() {
  return defHttp.get({ url: Api.Logout });
}
