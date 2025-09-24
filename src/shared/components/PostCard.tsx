'use client';

import { LikeIcon, ChatIcon, ViewIcon } from '../../app/board/_features/lib/assets';

interface PostCardProps {
  title: string;
  content?: string;
  author: string;
  createdAt: string;
  viewCount: number;
  likeCount: number;
  commentCount: number;
  onClick?: () => void;
}

const PostCard: React.FC<PostCardProps> = ({
  title,
  content,
  author,
  createdAt,
  viewCount,
  likeCount,
  commentCount,
  onClick
}) => {
  const handleCardClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="py-4 cursor-pointer" onClick={handleCardClick}>
      <h3 className="text-[18px] font-semibold text-[#212528] tracking-[-0.45px] mb-2">
        {title}
      </h3>
      {content && (
        <p className="text-[15px] text-[#abb5bd] tracking-[-0.375px] mb-3">
          {content}
        </p>
      )}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-[12px] tracking-[-0.3px]">
          <span className="font-medium text-[#495157]">{author}</span>
          <span className="text-[#abb5bd]">{createdAt}</span>
        </div>
        <div className="flex items-center gap-4 text-[12px] text-[#abb5bd] tracking-[-0.3px]">
          <div className="flex items-center gap-1">
            <div className="w-[18px] h-[18px] text-[#abb5bd]">
              <ViewIcon />
            </div>
            <span>{viewCount}</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-[18px] h-[18px] text-[#abb5bd]">
              <LikeIcon />
            </div>
            <span>{likeCount}</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-[16px] h-[16px] text-[#abb5bd]">
              <ChatIcon />
            </div>
            <span>{commentCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;