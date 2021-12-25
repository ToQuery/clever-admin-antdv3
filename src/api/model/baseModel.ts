export type RequestParam = {
  current: number; //    当前页号，从1开始
  pageSize: number; //    分页大小
};

export type ResponseResult<T> = {
  success: boolean;
  code: number;
  message?: string;
  content: T;
  page: PageParams;
};

export type PageParams = {
  current: number; //    当前页号，从1开始
  pageSize: number; //    分页大小
  totalElements: number; //    元素数量
  totalPages: number; //    页面数量
};
