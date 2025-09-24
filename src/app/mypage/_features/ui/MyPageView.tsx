"use client";

import { NextPage } from 'next';
import NavigationBar from '@/shared/components/NavigationBar';

interface StatusBarProps {
  time?: string;
}

const StatusBar: React.FC<StatusBarProps> = ({ time = "9:41" }) => {
  const imgCellularConnection = "http://localhost:3845/assets/9ad931818fd671034e4c37de408e1bf53d2d29c4.svg";
  const imgWifi = "http://localhost:3845/assets/5e6f458278ad75b944bd786d83032f00652d6d76.svg";
  const imgBattery = "http://localhost:3845/assets/bf4d2cdc7876322c09eb1b6c17ff8cac31dbe083.svg";

  return (
    <div className="flex items-center justify-between w-full px-4 sm:px-6 py-3">
      <div className="flex-1">
        <span className="font-semibold text-[15px] sm:text-[17px] text-black">
          {time}
        </span>
      </div>
      <div className="flex items-center gap-1.5 sm:gap-2">
        <img alt="Cellular" className="h-3 w-4 sm:w-5" src={imgCellularConnection} />
        <img alt="WiFi" className="h-3 w-3.5 sm:w-4" src={imgWifi} />
        <img alt="Battery" className="h-3 w-6 sm:w-7" src={imgBattery} />
      </div>
    </div>
  );
};

interface MenuItemProps {
  title: string;
  onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, onClick }) => {
  const imgArrowIcon = "http://localhost:3845/assets/887c574493f4a507082ec238e58c4650696cf498.svg";

  return (
    <button 
      onClick={onClick} 
      className="flex items-center justify-between w-full 
                 px-4 sm:px-6 md:px-8 
                 py-3.5 sm:py-4 
                 hover:bg-gray-50 transition-colors"
    >
      <span className="font-medium text-[14px] sm:text-[15px] md:text-[16px] text-[#212528] tracking-[-0.4px]">
        {title}
      </span>
      <div className="w-5 h-5 sm:w-6 sm:h-6 transform -rotate-90 opacity-50">
        <img 
          alt="Arrow" 
          className="w-full h-full" 
          src={imgArrowIcon} 
        />
      </div>
    </button>
  );
};

const MyPageView: NextPage = () => {
  const imgUserProfile = "http://localhost:3845/assets/6285174e07e66b8a5d129b42629e87ec866de315.svg";
  const imgUserIcon = "http://localhost:3845/assets/5b8e3cd1807cf6e59281494771689c22cc5b44c3.svg";
  const imgNameArrow = "http://localhost:3845/assets/50316b76e0032953592b2186ee056b2860b8c30b.svg";
  const imgGiftWhite = "http://localhost:3845/assets/6f1d6cf4049ffd278c06886d01e647c962641c77.svg";

  const handleMyPostsClick = () => {
    console.log('내가 작성한 글');
  };

  const handleBookmarkClick = () => {
    console.log('북마크');
  };

  const handleLikedPostsClick = () => {
    console.log('좋아요/싫어요 누른 글');
  };

  const handleDarkModeClick = () => {
    console.log('다크모드');
  };

  const handleNotificationClick = () => {
    console.log('알림 설정');
  };

  const handleWithdrawClick = () => {
    console.log('회원 탈퇴');
  };

  const handleLogoutClick = () => {
    console.log('로그아웃');
  };

  const handleProfileEditClick = () => {
    console.log('프로필 편집');
  };

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="w-full max-w-[402px] sm:max-w-lg md:max-w-xl lg:max-w-2xl 
                      mx-auto min-h-screen bg-white flex flex-col relative">
        
        {/* Status Bar */}
        <StatusBar />

        {/* Profile Section */}
        <div className="flex flex-col items-center mt-4 sm:mt-6 md:mt-8 mb-6 sm:mb-8">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 mb-4">
            <img 
              alt="Profile" 
              className="w-full h-full rounded-full" 
              src={imgUserProfile} 
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                alt="User" 
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18" 
                src={imgUserIcon} 
              />
            </div>
          </div>
          
          <button
            onClick={handleProfileEditClick}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <span className="font-semibold text-[20px] sm:text-[22px] md:text-[24px] 
                           text-[#212528] tracking-[-0.55px]">
              홍길동
            </span>
            <div className="w-5 h-5 sm:w-6 sm:h-6 transform -rotate-90">
              <img 
                alt="Edit" 
                className="w-full h-full" 
                src={imgNameArrow} 
              />
            </div>
          </button>
        </div>

        {/* Mileage Card */}
        <div className="mx-4 sm:mx-6 md:mx-8 mb-6 sm:mb-8">
          <div className="relative bg-[#5acbfb] rounded-[12px] 
                        p-4 sm:p-5 md:p-6 
                        flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-white text-[13px] sm:text-[14px] md:text-[15px] 
                             mb-1 tracking-[-0.35px]">
                마일리지
              </span>
              <span className="text-white text-[20px] sm:text-[22px] md:text-[24px] 
                             font-bold tracking-[-0.55px]">
                0P
              </span>
            </div>
            <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
              <img 
                alt="Gift" 
                className="w-full h-full" 
                src={imgGiftWhite} 
              />
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex-1 flex flex-col">
          <MenuItem title="내가 작성한 글" onClick={handleMyPostsClick} />
          <MenuItem title="북마크" onClick={handleBookmarkClick} />
          <MenuItem title="좋아요/싫어요 누른 글" onClick={handleLikedPostsClick} />
          <MenuItem title="다크모드" onClick={handleDarkModeClick} />
          <MenuItem title="알림 설정" onClick={handleNotificationClick} />
          <MenuItem title="회원 탈퇴" onClick={handleWithdrawClick} />
          <MenuItem title="로그아웃" onClick={handleLogoutClick} />
        </div>

        {/* Navigation Bar */}
        <NavigationBar activeTab="my" />

        {/* Home Indicator */}
        <div className="pb-2">
          <div className="flex justify-center">
            <div className="w-32 sm:w-36 h-1 bg-[#212528] rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPageView;