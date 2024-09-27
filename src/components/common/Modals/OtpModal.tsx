"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export function OTPModal() {
  const [timeLeft, setTimeLeft] = useState(120); // 2-minute countdown

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer); // Clear timer on unmount
    }
  }, [timeLeft]);

  // Format time (mm:ss)
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Verify OTP</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Enter OTP</DialogTitle>
          <DialogDescription>
            Please enter the 6-digit OTP sent to your email. The OTP will expire
            in {formatTime(timeLeft)}.
          </DialogDescription>
        </DialogHeader>

        {/* OTP Input Section */}
        <div className="space-y-4 py-6">
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>

          {/* Resend OTP and Timer */}
          <div className="text-sm text-gray-500">
            {timeLeft > 0 ? (
              <p>OTP expires in: {formatTime(timeLeft)}</p>
            ) : (
              <p className="text-red-500">OTP has expired. Resend OTP?</p>
            )}
          </div>
        </div>

        <DialogFooter>
          <Button type="submit" disabled={timeLeft === 0}>
            Verify OTP
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
