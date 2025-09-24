'use client';

import type { NextPage } from 'next';
import { useState } from 'react';
import type { PostCategory } from '../../_entities/model/types';
import NavigationBar from '../../../../shared/components/NavigationBar';
import { SearchIcon, FireIcon, LikeIcon, ChatIcon, ViewIcon, CloseIcon } from '../lib/assets';

interface Post {
  id: string;
  title: string;
  content?: string;
  author: string;
  createdAt: string;
  viewCount: number;
  likeCount: number;
  commentCount: number;
}

const BoardPageView: NextPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<PostCategory>('전체');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: PostCategory[] = ['전체', '자유', '연애', '학업', '친구', '가정사'];

  const mockPosts: Post[] = [
    {
      id: '1',
      title: '프로젝트가 너무 어려워요',
      content: '지금 하는 프로젝트가 너무 어려워요ㅜㅜㅜㅜㅜ',
      author: '홍길동',
      createdAt: '09.15',
      viewCount: 1,
      likeCount: 0,
      commentCount: 1,
    },
    {
      id: '2',
      title: '프로젝트가 너무 쉬워용',
      content: '지금 하는 프로젝트가 너무 쉬워영',
      author: '홍길동',
      createdAt: '09.15',
      viewCount: 1,
      likeCount: 0,
      commentCount: 1,
    },
    {
      id: '3',
      title: '프로젝트가 너무 쉬워용',
      content: '지금 하는 프로젝트가 너무 쉬워영',
      author: '홍길동',
      createdAt: '09.15',
      viewCount: 1,
      likeCount: 0,
      commentCount: 1,
    },
  ];

  const popularPost = {
    id: 'popular',
    title: '감자 샀는데 고구마가 왔다',
    author: '홍길동',
    viewCount: 1,
    likeCount: 36,
    commentCount: 14,
  };

  const handleCategoryClick = (category: PostCategory) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleWriteClick = () => {
    console.log('Write post clicked');
  };

  return (
    <div className="bg-white min-h-screen w-full max-w-sm mx-auto relative">
      {/* Status Bar - Mobile Only */}
      <div className="md:hidden flex justify-between items-center px-4 pt-5 pb-4 text-black">
        <span className="font-semibold text-[17px]">9:41</span>
        <div className="flex items-center gap-1.5">
          <div className="w-[19px] h-3">
            <div className="w-full h-full bg-black rounded-sm"></div>
          </div>
          <div className="w-4 h-3">
            <div className="w-full h-full bg-black rounded-sm"></div>
          </div>
          <div className="w-7 h-3 border border-black rounded-sm">
            <div className="w-3/4 h-full bg-black rounded-sm"></div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="text-center py-4">
        <h1 className="text-2xl font-semibold text-[#212528] tracking-[-0.6px]">게시판</h1>
      </div>

      {/* Search Bar */}
      <div className="px-5 mb-6">
        <div className="relative bg-[#f8fafb] rounded-[22px] h-12 flex items-center px-4">
          <SearchIcon />
          <input
            type="text"
            placeholder="게시물을 검색해 보세요."
            value={searchQuery}
            onChange={handleSearchChange}
            className="flex-1 ml-2 bg-transparent text-[#abb5bd] text-[17px] tracking-[-0.425px] outline-none placeholder:text-[#abb5bd]"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="px-5 mb-6">
        <div className="flex gap-2.5 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-4 py-2 rounded-[22px] text-[15px] font-semibold tracking-[-0.375px] whitespace-nowrap transition-colors ${
                selectedCategory === category
                  ? 'bg-[#3bc4ff] text-white'
                  : 'border border-[#eaebef] text-[#848c95] bg-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Popular Post Section */}
      <div className="px-5 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <FireIcon />
          <h2 className="text-[17px] font-bold text-[#212528] tracking-[-0.425px]">주간 인기 게시물</h2>
        </div>

        <div className="bg-[#f8fafb] rounded-3 p-4">
          <h3 className="text-[17px] font-semibold text-[#212528] tracking-[-0.425px] mb-4 text-center">
            {popularPost.title}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-[14px] text-[#899197] tracking-[-0.35px]">{popularPost.author}</span>
            <div className="flex items-center gap-4 text-[12px] text-[#848c95] tracking-[-0.3px]">
              <div className="flex items-center gap-1">
                <ViewIcon />
                <span>{popularPost.viewCount}</span>
              </div>
              <div className="flex items-center gap-1">
                <LikeIcon />
                <span>{popularPost.likeCount}</span>
              </div>
              <div className="flex items-center gap-1">
                <ChatIcon />
                <span>{popularPost.commentCount}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-4">
          <div className="w-2 h-1 bg-[#3bc4ff] rounded-full"></div>
          <div className="w-2 h-1 bg-[#eaebef] rounded-full"></div>
          <div className="w-2 h-1 bg-[#eaebef] rounded-full"></div>
        </div>
      </div>

      {/* Posts List */}
      <div className="px-5">
        {mockPosts.map((post, index) => (
          <div key={post.id}>
            <div className="py-4">
              <h3 className="text-[18px] font-semibold text-[#212528] tracking-[-0.45px] mb-2">
                {post.title}
              </h3>
              <p className="text-[15px] text-[#abb5bd] tracking-[-0.375px] mb-3">
                {post.content}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[12px] tracking-[-0.3px]">
                  <span className="font-medium text-[#495157]">{post.author}</span>
                  <span className="text-[#abb5bd]">{post.createdAt}</span>
                </div>
                <div className="flex items-center gap-4 text-[12px] text-[#abb5bd] tracking-[-0.3px]">
                  <div className="flex items-center gap-1">
                    <ViewIcon />
                    <span>{post.viewCount}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <LikeIcon />
                    <span>{post.likeCount}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ChatIcon />
                    <span>{post.commentCount}</span>
                  </div>
                </div>
              </div>
            </div>
            {index < mockPosts.length - 1 && (
              <div className="h-px bg-[#f2f4f5]"></div>
            )}
          </div>
        ))}
      </div>

      {/* Write Button */}
      <div className="fixed bottom-20 right-5">
        <button
          onClick={handleWriteClick}
          className="flex items-center gap-2 bg-[#3bc4ff] text-white px-6 py-3 rounded-[25px] shadow-lg"
        >
          <div className="rotate-[270deg]">
            <CloseIcon />
          </div>
          <span className="text-[16px] font-medium tracking-[-0.4px]">글쓰기</span>
        </button>
      </div>

      {/* Bottom Navigation */}
      <NavigationBar activeTab="board" />

      {/* Home Indicator - Mobile Only */}
      <div className="md:hidden fixed bottom-2 left-1/2 transform -translate-x-1/2">
        <div className="w-36 h-1 bg-[#212528] rounded-full"></div>
      </div>
    </div>
  );
};

export default BoardPageView;