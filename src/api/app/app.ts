import { defHttp } from '/@/utils/http/axios';
import { LoginRequest, LoginResponse, UserInfo } from './model/appModel';

import { ErrorMessageMode } from '/#/axios';
import { Result } from '/#/axios';

export enum Api {
  Login = '/admin/login',
  Logout = '/admin/logout',
  UserInfo = '/admin/info',
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
