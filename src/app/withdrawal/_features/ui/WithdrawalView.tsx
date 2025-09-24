'use client';

interface StatusBarProps {
  time?: string;
}

const StatusBar: React.FC<StatusBarProps> = ({ time = "9:41" }) => {
  const imgCellularConnection = "http://localhost:3845/assets/9ad931818fd671034e4c37de408e1bf53d2d29c4.svg";
  const imgWifi = "http://localhost:3845/assets/5e6f458278ad75b944bd786d83032f00652d6d76.svg";
  const imgBattery = "http://localhost:3845/assets/bf4d2cdc7876322c09eb1b6c17ff8cac31dbe083.svg";

  return (
    <div className="flex items-center justify-between w-full px-4 md:px-6 py-3">
      <div className="flex-1">
        <span className="font-semibold text-sm md:text-[17px] text-black">
          {time}
        </span>
      </div>
      <div className="flex items-center gap-1 md:gap-2">
        <img alt="Cellular" className="h-3 w-4 md:w-5" src={imgCellularConnection} />
        <img alt="WiFi" className="h-3 w-3 md:w-4" src={imgWifi} />
        <img alt="Battery" className="h-3 w-6 md:w-7" src={imgBattery} />
      </div>
    </div>
  );
};

const BackButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  const imgChevronLeft = "http://localhost:3845/assets/70b861251890fdf7fe65a2cbd5867a033debcde4.svg";

  return (
    <button 
      onClick={onClick} 
      className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center hover:opacity-70 transition-opacity"
    >
      <img alt="Back" className="w-full h-full" src={imgChevronLeft} />
    </button>
  );
};

const WarningIcon: React.FC = () => {
  const imgWarningIcon = "http://localhost:3845/assets/a098f4bb621032ecb966f0e60302065a3dfc98a8.svg";

  return (
    <div className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0">
      <img alt="Warning" className="w-full h-full" src={imgWarningIcon} />
    </div>
  );
};

const WithdrawalView: React.FC = () => {
  const handleBackClick = () => {
    console.log('뒤로 가기');
    // TODO: Navigate back to previous page
  };

  const handleWithdrawClick = () => {
    console.log('회원 탈퇴');
    // TODO: Handle account withdrawal process
  };

  return (
    <div className="w-full min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-[402px] sm:max-w-md md:max-w-lg lg:max-w-xl flex flex-col">
        {/* Status Bar - 모바일에서만 표시 */}
        <div className="md:hidden">
          <StatusBar />
        </div>

        {/* Header */}
        <div className="flex items-center px-4 sm:px-5 md:px-6 lg:px-8 py-3 md:py-4 relative">
          <div className="absolute left-4 sm:left-5 md:left-6 lg:left-8">
            <BackButton onClick={handleBackClick} />
          </div>
          <h1 className="flex-1 text-center font-semibold text-lg sm:text-[20px] md:text-2xl text-[#212528] tracking-[-0.5px]">
            회원 탈퇴
          </h1>
        </div>

        {/* Content */}
        <div className="flex-1 px-4 sm:px-5 md:px-8 lg:px-12 pt-8 sm:pt-10 md:pt-12 lg:pt-16 pb-8">
          {/* Title */}
          <h2 className="font-semibold text-sm sm:text-[16px] md:text-lg lg:text-xl text-[#212528] tracking-[-0.4px] mb-4 md:mb-6">
            회원 탈퇴 안내
          </h2>

          {/* Description Paragraphs */}
          <div className="space-y-3 sm:space-y-4 md:space-y-5 mb-6 sm:mb-8 md:mb-10">
            <p className="text-xs sm:text-[14px] md:text-base text-[#848c95] tracking-[-0.35px] leading-relaxed">
              탈퇴를 진행하면 회원님의 모든 계정 정보, 활동 기록, 저장된 데이터가 완전히 삭제됩니다. 삭제된 정보는 복구가 불가능하니 신중하게 결정해 주세요.
            </p>

            <p className="text-xs sm:text-[14px] md:text-base text-[#848c95] tracking-[-0.35px] leading-relaxed">
              일부 서비스 이용 기록은 내부 정책에 따라 일정 기간 동안 보관될 수 있으며, 탈퇴 후에는 확인하거나 복구할 수 없습니다.
            </p>

            <p className="text-xs sm:text-[14px] md:text-base text-[#848c95] tracking-[-0.35px] leading-relaxed">
              탈퇴 후 동일한 계정으로 재가입하더라도 이전에 사용했던 정보나 기록은 복원되지 않습니다. 필요한 데이터가 있다면 미리 다운로드하시길 권장드립니다.
            </p>
          </div>

          {/* Warning Text with Icon */}
          <div className="flex items-center gap-1 sm:gap-2 mb-8 sm:mb-10 md:mb-12 p-3 sm:p-4 bg-blue-50 rounded-lg">
            <WarningIcon />
            <p className="text-xs sm:text-[14px] md:text-base text-[#3bc4ff] tracking-[-0.35px] leading-relaxed font-medium">
              회원 탈퇴는 즉시 처리되며 복구가 불가합니다.
            </p>
          </div>

          {/* Spacer for button positioning */}
          <div className="flex-1 min-h-[20px]" />

          {/* Withdrawal Button */}
          <button
            onClick={handleWithdrawClick}
            className="w-full bg-[#3bc4ff] text-white rounded-lg sm:rounded-[12px] 
                     py-3 sm:py-4 md:py-5 
                     font-semibold text-base sm:text-[18px] md:text-xl 
                     tracking-[-0.45px] hover:bg-[#2bb4ef] 
                     transition-colors shadow-lg hover:shadow-xl
                     transform hover:-translate-y-0.5 transition-all duration-200"
          >
            탈퇴하기
          </button>
        </div>

        {/* Home Indicator - 모바일에서만 표시 */}
        <div className="pb-2 md:hidden">
          <div className="flex justify-center">
            <div className="w-32 sm:w-36 h-1 bg-[#212528] rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawalView;