export interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  category: PostCategory;
  viewCount: number;
  likeCount: number;
  commentCount: number;
}

export type PostCategory = '전체' | '자유' | '연애' | '학업' | '친구' | '가정사';

export interface PopularPost extends Post {
  isPopular: true;
}

export interface PostListResponse {
  posts: Post[];
  total: number;
  page: number;
  limit: number;
}

export interface PostFilters {
  category?: PostCategory;
  search?: string;
  page?: number;
}