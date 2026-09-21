import { useState } from 'react';
import { CheckCircle, Download, Mail, FileText, Copy, Check } from 'lucide-react';
import { product } from '@/data/product';

type PaymentSuccessProps = {
  orderId: string;
  onDownload: () => void;
  onBackToStore: () => void;
};

export default function PaymentSuccess({ orderId, onDownload, onBackToStore }: PaymentSuccessProps) {
  const [emailSent, setEmailSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSendEmail = () => setEmailSent(true);

  const handleCopyOrderId = () => {
    navigator.clipboard?.writeText(orderId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-navy-50/30 flex items-center justify-center px-5 py-12">
      <div className="max-w-lg w-full animate-scale-in">
        <div className="bg-white rounded-4xl shadow-navy p-8 sm:p-10 text-center">
          {/* Success icon */}
          <div className="inline-flex items-center justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 w-28 h-28 rounded-full bg-success-100 animate-pulse-soft" />
              <div className="relative w-28 h-28 rounded-full bg-success-500 flex items-center justify-center">
                <CheckCircle className="w-16 h-16 text-white" strokeWidth={2} />
              </div>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-2">تم الدفع بنجاح!</h1>
          <p className="text-navy-500 text-lg mb-8">ملفك أصبح جاهزًا.</p>

          {/* Order ID */}
          <div className="bg-navy-50/50 rounded-2xl p-4 mb-7 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white shadow-soft flex items-center justify-center">
                <FileText className="w-5 h-5 text-navy-600" />
              </div>
              <div className="text-right">
                <div className="text-xs text-navy-400">رقم الطلب</div>
                <div className="text-sm font-bold text-navy-900" dir="ltr">{orderId}</div>
              </div>
            </div>
            <button
              onClick={handleCopyOrderId}
              className="w-9 h-9 rounded-lg bg-white shadow-soft flex items-center justify-center text-navy-500 hover:text-navy-700 transition-colors active:scale-90"
              aria-label="نسخ رقم الطلب"
            >
              {copied ? <Check className="w-4 h-4 text-success-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Download button */}
          <button
            onClick={onDownload}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-navy-800 text-white text-base font-semibold rounded-2xl shadow-soft hover:bg-navy-700 hover:shadow-navy hover:-translate-y-0.5 transition-all duration-300 ease-premium active:scale-95 mb-3"
          >
            <Download className="w-5 h-5" />
            تحميل الملف
          </button>

          {/* Email option */}
          <button
            onClick={handleSendEmail}
            disabled={emailSent}
            className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold rounded-2xl border transition-all duration-300 active:scale-95 ${
              emailSent
                ? 'bg-success-50 border-success-200 text-success-700 cursor-default'
                : 'bg-white border-navy-200 text-navy-700 hover:border-navy-300 hover:shadow-card'
            }`}
          >
            <Mail className="w-5 h-5" />
            {emailSent ? 'تم إرسال الرابط إلى بريدك' : 'إرسال رابط التحميل إلى بريدي'}
          </button>

          {/* Note */}
          <p className="text-sm text-navy-400 mt-6 leading-relaxed">
            تم إرسال معلومات الوصول إلى بريدك الإلكتروني.
          </p>
        </div>

        {/* Back to store */}
        <div className="text-center mt-6">
          <button
            onClick={onBackToStore}
            className="text-navy-500 hover:text-navy-900 text-sm font-medium transition-colors"
          >
            العودة للمتجر
          </button>
        </div>
      </div>
    </div>
  );
}
