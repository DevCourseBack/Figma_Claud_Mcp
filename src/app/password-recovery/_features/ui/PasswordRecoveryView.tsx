"use client";

import { useState, useCallback } from "react";

const imgCellularConnection =
  "http://localhost:3845/assets/9ad931818fd671034e4c37de408e1bf53d2d29c4.svg";
const imgWifi =
  "http://localhost:3845/assets/5e6f458278ad75b944bd786d83032f00652d6d76.svg";
const imgBattery =
  "http://localhost:3845/assets/bf4d2cdc7876322c09eb1b6c17ff8cac31dbe083.svg";
const imgVector =
  "http://localhost:3845/assets/70b861251890fdf7fe65a2cbd5867a033debcde4.svg";

interface StatusBarIPhoneProps {
  time?: string;
}

function StatusBarIPhone({ time = "9:41" }: StatusBarIPhoneProps) {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white">
      <div className="flex items-center">
        <span className="text-[17px] font-semibold text-black">
          {time}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-[19px] h-[12px]">
          <img
            alt="Cellular Connection"
            className="w-full h-full object-contain"
            src={imgCellularConnection}
          />
        </div>
        <div className="w-[17px] h-[12px]">
          <img alt="WiFi" className="w-full h-full object-contain" src={imgWifi} />
        </div>
        <div className="w-[27px] h-[13px]">
          <img alt="Battery" className="w-full h-full object-contain" src={imgBattery} />
        </div>
      </div>
    </div>
  );
}

function ArrowChevronLeft() {
  return (
    <div className="w-6 h-6 flex items-center justify-center">
      <img alt="Back" className="w-4 h-4" src={imgVector} />
    </div>
  );
}

type TabType = "id" | "password";

interface FormErrors {
  username?: string;
  phoneNumber?: string;
  verificationCode?: string;
}

export default function PasswordRecoveryView() {
  const [activeTab, setActiveTab] = useState<TabType>("password");
  const [formData, setFormData] = useState({
    username: "",
    phoneNumber: "",
    verificationCode: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isVerificationSent, setIsVerificationSent] = useState(false);
  const [isVerificationConfirmed, setIsVerificationConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState({
    verification: false,
    confirm: false,
    next: false,
  });

  const validateForm = useCallback(() => {
    const newErrors: FormErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "아이디를 입력해주세요.";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "전화번호를 입력해주세요.";
    } else if (
      !/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/.test(
        formData.phoneNumber
      )
    ) {
      newErrors.phoneNumber = "올바른 전화번호 형식이 아닙니다.";
    }

    if (isVerificationSent && !formData.verificationCode.trim()) {
      newErrors.verificationCode = "인증번호를 입력해주세요.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData, isVerificationSent]);

  const handleInputChange = useCallback(
    (field: string, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      if (errors[field as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    },
    [errors]
  );

  const handleVerificationRequest = useCallback(async () => {
    if (!formData.username.trim() || !formData.phoneNumber.trim()) {
      validateForm();
      return;
    }

    setIsLoading((prev) => ({ ...prev, verification: true }));

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsVerificationSent(true);
      console.log("인증요청 완료");
    } catch (error) {
      console.error("인증요청 실패:", error);
    } finally {
      setIsLoading((prev) => ({ ...prev, verification: false }));
    }
  }, [formData.username, formData.phoneNumber, validateForm]);

  const handleVerificationConfirm = useCallback(async () => {
    if (!formData.verificationCode.trim()) {
      validateForm();
      return;
    }

    setIsLoading((prev) => ({ ...prev, confirm: true }));

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsVerificationConfirmed(true);
      console.log("인증확인 완료");
    } catch (error) {
      console.error("인증확인 실패:", error);
    } finally {
      setIsLoading((prev) => ({ ...prev, confirm: false }));
    }
  }, [formData.verificationCode, validateForm]);

  const handleNext = useCallback(async () => {
    if (!validateForm() || !isVerificationConfirmed) {
      return;
    }

    setIsLoading((prev) => ({ ...prev, next: true }));

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("다음 단계로 이동");
    } catch (error) {
      console.error("처리 실패:", error);
    } finally {
      setIsLoading((prev) => ({ ...prev, next: false }));
    }
  }, [validateForm, isVerificationConfirmed]);

  const handleBack = useCallback(() => {
    console.log("뒤로가기");
  }, []);

  const isFormValid =
    formData.username.trim() &&
    formData.phoneNumber.trim() &&
    isVerificationConfirmed;

  return (
    <div className="bg-white max-w-md mx-auto flex flex-col h-screen rounded-[30px] overflow-hidden">
      {/* Status Bar */}
      <div className="md:hidden">
        <StatusBarIPhone />
      </div>

      {/* Header */}
      <header className="flex items-center justify-center p-4 relative">
        <button
          onClick={handleBack}
          aria-label="뒤로 가기"
          className="absolute left-4 p-2 rounded-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <ArrowChevronLeft />
        </button>
        <h1 className="text-xl font-bold text-gray-800">
          아이디/비밀번호 찾기
        </h1>
      </header>

      {/* Tab Section */}
      <div className="px-4 mb-6">
        <div className="bg-[#f2f4f5] rounded-xl p-1 flex">
          <button
            onClick={() => setActiveTab("id")}
            aria-label="아이디 찾기 탭"
            className={`flex-1 py-3 px-4 text-[15px] font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              activeTab === "id"
                ? "bg-white text-[#212528] shadow-sm"
                : "text-[#666e76] hover:bg-white/50"
            }`}
          >
            아이디 찾기
          </button>
          <button
            onClick={() => setActiveTab("password")}
            aria-label="비밀번호 찾기 탭"
            className={`flex-1 py-3 px-4 text-[15px] font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              activeTab === "password"
                ? "bg-white text-[#212528] shadow-sm"
                : "text-[#666e76] hover:bg-white/50"
            }`}
          >
            비밀번호 찾기
          </button>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex-1 px-4 space-y-6">
        {/* Username Field */}
        <div className="space-y-2">
          <label htmlFor="username" className="block text-[14px] font-medium text-[#343a3f]">
            아이디
          </label>
          <div className="relative">
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={(e) => handleInputChange("username", e.target.value)}
              placeholder="아이디를 입력해주세요."
              aria-label="아이디"
              aria-invalid={!!errors.username}
              aria-describedby={errors.username ? "username-error" : undefined}
              className={`w-full h-12 px-4 text-[15px] bg-[#f8fafb] rounded-xl border-none outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all ${
                errors.username
                  ? "bg-red-50 ring-2 ring-red-300 text-red-600 placeholder:text-red-400"
                  : "text-[#52585e] placeholder:text-[#52585e]"
              }`}
            />
            {errors.username && (
              <div
                id="username-error"
                className="mt-1 text-[12px] text-red-500"
                role="alert"
              >
                {errors.username}
              </div>
            )}
          </div>
        </div>

        {/* Phone Number Field */}
        <div className="space-y-2">
          <label htmlFor="phoneNumber" className="block text-[14px] font-medium text-[#343a3f]">
            전화번호
          </label>
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <input
                type="tel"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                placeholder="전화번호를 입력해주세요."
                aria-label="전화번호"
                aria-invalid={!!errors.phoneNumber}
                className={`w-full h-12 px-4 text-[15px] bg-[#f8fafb] rounded-xl border-none outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all ${
                  errors.phoneNumber
                    ? "bg-red-50 ring-2 ring-red-300 text-red-600 placeholder:text-red-400"
                    : "text-[#666e76] placeholder:text-[#666e76]"
                }`}
              />
            </div>
            <button
              onClick={handleVerificationRequest}
              disabled={isLoading.verification || isVerificationSent}
              aria-label="인증번호 요청"
              className={`px-6 h-12 text-[15px] font-semibold rounded-xl border transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 whitespace-nowrap ${
                isLoading.verification
                  ? "border-gray-300 bg-gray-100 text-gray-400 cursor-not-allowed"
                  : isVerificationSent
                  ? "border-green-500 bg-green-50 text-green-600"
                  : "border-[#3bc4ff] bg-white text-[#3bc4ff] hover:bg-[#3bc4ff] hover:text-white"
              }`}
            >
              {isLoading.verification
                ? "요청중..."
                : isVerificationSent
                ? "전송완료"
                : "인증요청"}
            </button>
          </div>
          {errors.phoneNumber && (
            <div className="text-[12px] text-red-500" role="alert">
              {errors.phoneNumber}
            </div>
          )}
        </div>

        {/* Verification Code Field */}
        <div className="space-y-2">
          <label htmlFor="verificationCode" className="block text-[14px] font-medium text-[#343a3f]">
            인증번호
          </label>
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <input
                type="text"
                id="verificationCode"
                value={formData.verificationCode}
                onChange={(e) =>
                  handleInputChange("verificationCode", e.target.value)
                }
                placeholder="인증번호를 입력해주세요."
                disabled={!isVerificationSent}
                aria-label="인증번호"
                aria-invalid={!!errors.verificationCode}
                className={`w-full h-12 px-4 text-[15px] bg-[#f8fafb] rounded-xl border-none outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all ${
                  !isVerificationSent
                    ? "text-gray-400 placeholder:text-gray-400 cursor-not-allowed bg-gray-100"
                    : errors.verificationCode
                    ? "bg-red-50 ring-2 ring-red-300 text-red-600 placeholder:text-red-400"
                    : "text-[#666e76] placeholder:text-[#666e76]"
                }`}
              />
            </div>
            <button
              onClick={handleVerificationConfirm}
              disabled={
                !isVerificationSent ||
                isLoading.confirm ||
                isVerificationConfirmed
              }
              aria-label="인증번호 확인"
              className={`px-6 h-12 text-[15px] font-semibold rounded-xl border transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 whitespace-nowrap ${
                !isVerificationSent || isLoading.confirm
                  ? "border-gray-300 bg-gray-100 text-gray-400 cursor-not-allowed"
                  : isVerificationConfirmed
                  ? "border-green-500 bg-green-50 text-green-600"
                  : "border-[#3bc4ff] bg-white text-[#3bc4ff] hover:bg-[#3bc4ff] hover:text-white"
              }`}
            >
              {!isVerificationSent
                ? "인증확인"
                : isLoading.confirm
                ? "확인중..."
                : isVerificationConfirmed
                ? "확인완료"
                : "인증확인"}
            </button>
          </div>
          {errors.verificationCode && (
            <div className="text-[12px] text-red-500" role="alert">
              {errors.verificationCode}
            </div>
          )}
        </div>
      </div>

      {/* Next Button */}
      <div className="p-4 mt-auto">
        <button
          onClick={handleNext}
          disabled={!isFormValid || isLoading.next}
          className={`w-full py-4 rounded-xl text-white font-bold text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
            !isFormValid || isLoading.next
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-[#3bc4ff] hover:bg-[#2bb4ef] active:bg-[#1ea5d9]'
          }`}
        >
          {isLoading.next ? '처리중...' : '다음으로'}
        </button>
      </div>

      {/* Home Indicator */}
      <div className="w-full flex justify-center pb-2 md:hidden">
        <div className="w-36 h-1.5 bg-black rounded-full" />
      </div>
    </div>
  );
}