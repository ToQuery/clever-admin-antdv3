import { defHttp } from '/@/utils/http/axios';
import { RequestParam, ResponseResult } from '/@/api/model/baseModel';
import { PostListItem } from '/@/api/system/model/postModel';

enum Api {
  SystemPost = '/sys/post',
  SystemPostList = '/sys/post/list',
  SystemPostTree = '/sys/post/tree',
}

//
export const systemPostPage = (params?: RequestParam & PostListItem) =>
  defHttp.get<ResponseResult<PostListItem[]>>({
    url: Api.SystemPost,
    params,
  });

export const systemPostList = (params?: PostListItem) =>
  defHttp.get<ResponseResult<PostListItem[]>>({
    url: Api.SystemPostList,
    params,
  });

export const systemPostTree = (params?: PostListItem) =>
  defHttp.get<ResponseResult<PostListItem[]>>({
    url: Api.SystemPostTree,
    params,
  });

export const systemPostAdd = (systemPostBody: PostListItem) =>
  defHttp.post<ResponseResult<PostListItem>>({
    url: Api.SystemPost,
    data: systemPostBody,
  });

export const systemPostDetail = (id: string) =>
  defHttp.get<ResponseResult<PostListItem>>({
    url: `${Api.SystemPost}/${id}`,
  });

//
export const systemPostUpdate = (systemPostBody: PostListItem) =>
  defHttp.put<ResponseResult<PostListItem>>({
    url: Api.SystemPost,
    data: systemPostBody,
  });

//
export const systemPostDelete = (ids: (string | undefined)[]) =>
  defHttp.delete<ResponseResult<null>>({
    url: Api.SystemPost,
    params: {
      ids,
    },
  });
