import { useState, useEffect, useRef } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "../components/Footer";

const OTPPage = () => {
  const { role } = useParams<{ role: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  
  const { method, contact } = location.state || {};
  
  const [otp, setOTP] = useState(['', '', '', '', '', '']);
  const [countdown, setCountdown] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  useEffect(() => {
    // Auto-focus first input
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleOTPChange = (index: number, value: string) => {
    if (value.length > 1) return; // Prevent multiple characters
    
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-verify when all 6 digits are entered
    if (newOTP.every(digit => digit !== '') && !isVerifying) {
      handleVerifyOTP(newOTP);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyOTP = async (otpCode = otp) => {
    setIsVerifying(true);
    
    // Simulate OTP verification
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Show success animation
    setShowSuccess(true);
    
    // Navigate to dashboard after success animation
    setTimeout(() => {
      navigate(`/dashboard/${role}`);
    }, 2000);
  };

  const handleResendOTP = () => {
    setCountdown(30);
    setCanResend(false);
    setOTP(['', '', '', '', '', '']);
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center animate-success-check">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-black flex items-center justify-center animate-pulse-success">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-black mb-2">
            Verification Successful!
          </h2>
          <p className="text-muted-foreground">
            Redirecting to your dashboard...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="py-6 px-4">
        <div className="max-w-md mx-auto flex items-center gap-4">
          <Button
            onClick={() => navigate(`/login/${role}`)}
            variant="ghost"
            size="sm"
            className="hover:bg-secondary"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <h1 className="text-xl font-semibold text-black">Sahayak</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          <div className="clean-card p-8 rounded-2xl animate-fade-in">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="mx-auto w-16 h-16 rounded-full bg-black flex items-center justify-center mb-4">
                {method === "email" ? (
                  <Mail className="w-8 h-8 text-white" />
                ) : (
                  <Phone className="w-8 h-8 text-white" />
                )}
              </div>
              <h2 className="text-2xl font-bold mb-2">Enter OTP</h2>
              <p className="text-muted-foreground text-sm">
                We've sent a 6-digit code to<br />
                <span className="font-medium text-foreground">{contact}</span>
              </p>
            </div>

            {/* OTP Input */}
            <div className="mb-8">
              <div className="flex gap-3 justify-center mb-6">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(ref) => (inputRefs.current[index] = ref)}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOTPChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="otp-input"
                    disabled={isVerifying}
                  />
                ))}
              </div>

              {/* Resend OTP */}
              <div className="text-center">
                {canResend ? (
                  <button
                    onClick={handleResendOTP}
                    className="text-sm text-black font-medium hover:underline"
                  >
                    Resend OTP
                  </button>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Resend OTP in {countdown}s
                  </p>
                )}
              </div>
            </div>

            {/* Verify Button */}
            <Button
              onClick={() => handleVerifyOTP()}
              disabled={otp.some(digit => !digit) || isVerifying}
              className="w-full h-12 bw-accent transition-all duration-300"
            >
              {isVerifying ? "Verifying..." : "Verify OTP"}
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OTPPage;