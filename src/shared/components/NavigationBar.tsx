'use client';

interface NavigationBarProps {
  activeTab?: 'home' | 'board' | 'chat' | 'mileage' | 'my';
}

const NavigationBar: React.FC<NavigationBarProps> = ({ activeTab = 'my' }) => {
  const imgChatIcon = "http://localhost:3845/assets/889ba4f22f24acb3907ace3da0c284e4a0dc29e3.svg";
  const imgGiftIcon = "http://localhost:3845/assets/7f5f2c6e4c37c0a9ecfb8630c2f7a58cdab0fe70.svg";
  const imgPencilIcon = "http://localhost:3845/assets/66b412d77d245a998f76db69f58f26f2a0835e41.svg";
  const imgUserIcon = "http://localhost:3845/assets/c3540b0ccd1af6c2a5450d80c308f1153372acad.svg";
  const imgHomeIcon = "http://localhost:3845/assets/50c661f0106fca489315e1f080a3baf23fd34b39.svg";

  const handleHomeClick = () => {
    // TODO: Navigate to home
  };

  const handleBoardClick = () => {
    // TODO: Navigate to board
  };

  const handleChatClick = () => {
    // TODO: Navigate to chat
  };

  const handleMileageClick = () => {
    // TODO: Navigate to mileage
  };

  const handleMyClick = () => {
    // TODO: Navigate to my page
  };

  return (
    <div className="absolute bg-white h-[56px] left-1/2 overflow-clip top-[784px] translate-x-[-50%] w-[402px]">
      <div className="absolute h-[56px] left-0 top-0 w-[402px]">
        <div aria-hidden="true" className="absolute border-[#f8fafb] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      </div>

      {/* My Tab */}
      <button
        onClick={handleMyClick}
        className="absolute contents left-[351px] top-[6px]"
      >
        <div className="absolute left-[351px] overflow-clip size-[27px] top-[6px]">
          <div className="absolute inset-[12.5%_16.67%]">
            <div className="absolute inset-[-4.94%_-5.56%]" style={{ "--stroke-0": activeTab === 'my' ? "rgba(33, 37, 40, 1)" : "rgba(171, 181, 189, 1)" } as React.CSSProperties}>
              <img alt="" className="block max-w-none size-full" src={imgUserIcon} />
            </div>
          </div>
        </div>
        <div className={`absolute font-['Pretendard_Variable:Medium',_sans-serif] leading-[0] left-[356px] not-italic text-[12px] text-nowrap top-[35px] tracking-[-0.3px] ${activeTab === 'my' ? 'text-[#212528]' : 'text-[#abb5bd]'}`}>
          <p className="leading-[1.4] whitespace-pre">MY</p>
        </div>
      </button>

      {/* Chat Tab */}
      <button
        onClick={handleChatClick}
        className="absolute contents left-[188px] top-[6px]"
      >
        <div className={`absolute font-['Pretendard_Variable:Medium',_sans-serif] leading-[0] left-[191px] not-italic text-[12px] text-nowrap top-[35px] tracking-[-0.3px] ${activeTab === 'chat' ? 'text-[#212528]' : 'text-[#abb5bd]'}`}>
          <p className="leading-[1.4] whitespace-pre">채팅</p>
        </div>
        <div className="absolute left-[188px] overflow-clip size-[27px] top-[6px]">
          <div className="absolute inset-[12.5%]">
            <div className="absolute inset-[-4.94%]" style={{ "--stroke-0": activeTab === 'chat' ? "rgba(33, 37, 40, 1)" : "rgba(171, 181, 189, 1)" } as React.CSSProperties}>
              <img alt="" className="block max-w-none size-full" src={imgChatIcon} />
            </div>
          </div>
        </div>
      </button>

      {/* Home Tab */}
      <button
        onClick={handleHomeClick}
        className="absolute contents left-[24px] top-[6px]"
      >
        <div className="absolute contents left-[32px] top-[35px]">
          <div className={`absolute font-['Pretendard_Variable:Medium',_sans-serif] leading-[0] left-[32px] not-italic text-[12px] text-nowrap top-[35px] tracking-[-0.3px] ${activeTab === 'home' ? 'text-[#212528]' : 'text-[#abb5bd]'}`}>
            <p className="leading-[1.4] whitespace-pre">홈</p>
          </div>
        </div>
        <div className="absolute bg-white left-[24px] overflow-clip size-[27px] top-[6px]">
          <div className="absolute size-[18px] translate-x-[-50%] translate-y-[-50%]" style={{ top: "calc(50% + 0.5px)", left: "calc(50% + 0.5px)" }}>
            <div className="absolute inset-[-5.56%]" style={{ "--stroke-0": activeTab === 'home' ? "rgba(33, 37, 40, 1)" : "rgba(171, 181, 189, 1)" } as React.CSSProperties}>
              <img alt="" className="block max-w-none size-full" src={imgHomeIcon} />
            </div>
          </div>
        </div>
      </button>

      {/* Mileage Tab */}
      <button
        onClick={handleMileageClick}
        className="absolute contents left-[264px] top-[6px]"
      >
        <div className={`absolute font-['Pretendard_Variable:Medium',_sans-serif] leading-[0] left-[264px] not-italic text-[12px] text-nowrap top-[35px] tracking-[-0.3px] ${activeTab === 'mileage' ? 'text-[#212528]' : 'text-[#abb5bd]'}`}>
          <p className="leading-[1.4] whitespace-pre">마일리지</p>
        </div>
        <div className="absolute left-[271px] overflow-clip size-[27px] top-[6px]">
          <div className="absolute inset-[12.5%_12.5%_16.67%_12.5%]">
            <div className="absolute inset-[-5.23%_-4.94%]" style={{ "--stroke-0": activeTab === 'mileage' ? "rgba(33, 37, 40, 1)" : "rgba(171, 181, 189, 1)" } as React.CSSProperties}>
              <img alt="" className="block max-w-none size-full" src={imgGiftIcon} />
            </div>
          </div>
        </div>
      </button>

      {/* Board Tab */}
      <button
        onClick={handleBoardClick}
        className="absolute contents left-[104px] top-[6px]"
      >
        <div className="absolute contents left-[104px] top-[35px]">
          <div className={`absolute font-['Pretendard_Variable:Medium',_sans-serif] leading-[0] left-[104px] not-italic text-[12px] text-nowrap top-[35px] tracking-[-0.3px] ${activeTab === 'board' ? 'text-[#212528]' : 'text-[#abb5bd]'}`}>
            <p className="leading-[1.4] whitespace-pre">게시판</p>
          </div>
        </div>
        <div className="absolute left-[106px] overflow-clip size-[27px] top-[6px]">
          <div className="absolute inset-[18.39%_18.39%_16.67%_16.67%]">
            <div className="absolute inset-[-5.7%]" style={{ "--stroke-0": activeTab === 'board' ? "rgba(33, 37, 40, 1)" : "rgba(171, 181, 189, 1)" } as React.CSSProperties}>
              <img alt="" className="block max-w-none size-full" src={imgPencilIcon} />
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default NavigationBar;