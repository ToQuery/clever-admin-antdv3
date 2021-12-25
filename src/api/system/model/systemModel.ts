export type LoginRequest = {
  username: string;
  password: string;
  captchaToken?: string;
  captchaValue?: string;
};

export type LoginResponse = {
  token?: string;
};

export type CaptchaResponse = {
  captchaToken?: string;
  captchaImage?: string;
};

export type UserInfo = {
  id?: string;
  username: string;
  avatar?: string;
  nickname: string;
  email?: string;
  codes: string[];
  authorities?: {
    menuName?: string;
    menuCode?: string;
  };
};
