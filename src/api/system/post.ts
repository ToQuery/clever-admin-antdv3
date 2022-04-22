import { defHttp } from '/@/utils/http/axios';
import { PostListItem } from '/@/api/system/model/postModel';
import { RequestParam, Result } from '/#/axios';

enum Api {
  SystemPost = '/sys/post',
  SystemPostList = '/sys/post/list',
  SystemPostTree = '/sys/post/tree',
}

//
export const systemPostPage = (params?: RequestParam & PostListItem) =>
  defHttp.get<Result<PostListItem[]>>({
    url: Api.SystemPost,
    params,
  });

export const systemPostList = (params?: PostListItem) =>
  defHttp.get<Result<PostListItem[]>>({
    url: Api.SystemPostList,
    params,
  });

export const systemPostTree = (params?: PostListItem) =>
  defHttp.get<Result<PostListItem[]>>({
    url: Api.SystemPostTree,
    params,
  });

export const systemPostAdd = (systemPostBody: PostListItem) =>
  defHttp.post<Result<PostListItem>>({
    url: Api.SystemPost,
    data: systemPostBody,
  });

export const systemPostDetail = (id: string) =>
  defHttp.get<Result<PostListItem>>({
    url: `${Api.SystemPost}/${id}`,
  });

//
export const systemPostUpdate = (systemPostBody: PostListItem) =>
  defHttp.put<Result<PostListItem>>({
    url: Api.SystemPost,
    data: systemPostBody,
  });

//
export const systemPostDelete = (ids: (string | undefined)[]) =>
  defHttp.delete<Result<null>>({
    url: Api.SystemPost,
    params: ids,
  });
