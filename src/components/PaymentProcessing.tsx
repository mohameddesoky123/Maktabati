import { ShieldCheck } from 'lucide-react';

export default function PaymentProcessing() {
  return (
    <div className="min-h-screen bg-navy-50/30 flex items-center justify-center px-5">
      <div className="text-center max-w-md animate-scale-in">
        {/* Animated loader */}
        <div className="relative inline-flex items-center justify-center mb-8">
          <div className="absolute w-28 h-28 rounded-full border-4 border-navy-100" />
          <div className="absolute w-28 h-28 rounded-full border-4 border-transparent border-t-navy-700 animate-spin" />
          <div className="w-24 h-24 rounded-full bg-white shadow-card flex items-center justify-center">
            <div className="w-12 h-12 rounded-full border-3 border-navy-200 border-t-navy-700 animate-spin" style={{ borderWidth: '3px' }} />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-navy-900 mb-3">جارٍ معالجة الدفع...</h1>
        <p className="text-navy-500 text-lg leading-relaxed mb-8">
          يرجى الانتظار وعدم إغلاق الصفحة حتى تكتمل العملية.
        </p>

        {/* Progress bar */}
        <div className="w-full max-w-xs mx-auto h-1.5 bg-navy-100 rounded-full overflow-hidden">
          <div className="h-full bg-navy-700 rounded-full animate-progress" style={{ animation: 'progress 3s ease-in-out forwards' }} />
        </div>

        {/* Security note */}
        <div className="flex items-center justify-center gap-2 mt-8 text-sm text-navy-400">
          <ShieldCheck className="w-4 h-4 text-navy-500" />
          <span>معاملة آمنة ومشفّرة</span>
        </div>
      </div>
    </div>
  );
}
