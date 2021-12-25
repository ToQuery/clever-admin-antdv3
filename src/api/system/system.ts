import { defHttp } from '/@/utils/http/axios';
import { LoginRequest, LoginResponse, UserInfo } from './model/userModel';

import { ErrorMessageMode } from '/#/axios';
import { ResponseResult } from '/@/api/model/baseModel';

enum Api {
  Login = '/user/login',
  Logout = '/user/logout',
  UserInfo = '/user/info',
}

/**
 * @description: user login api
 */
export function login(params: LoginRequest, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<ResponseResult<LoginResponse>>(
    {
      url: Api.Login,
      params,
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
  return defHttp.get<ResponseResult<UserInfo>>({ url: Api.UserInfo }, { errorMessageMode: 'none' });
}

export function logout() {
  return defHttp.get({ url: Api.Logout });
}

