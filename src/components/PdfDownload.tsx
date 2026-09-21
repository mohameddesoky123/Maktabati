import { Download, ShieldCheck, FileText, Lock } from 'lucide-react';
import { product } from '@/data/product';

type PdfDownloadProps = {
  onBackToStore: () => void;
};

export default function PdfDownload({ onBackToStore }: PdfDownloadProps) {
  const handleDownload = () => {
    const blob = new Blob(['معاينة آمنة — ملف PDF رقمي'], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'product-preview.pdf';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-navy-50/30 flex items-center justify-center px-5 py-12">
      <div className="max-w-lg w-full animate-scale-in">
        <div className="bg-white rounded-4xl shadow-navy p-8 sm:p-10 text-center">
          {/* Secure badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-success-50 rounded-full mb-6">
            <Lock className="w-4 h-4 text-success-600" />
            <span className="text-sm font-medium text-success-700">وصول آمن</span>
          </div>

          {/* File icon */}
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-20 h-20 rounded-2xl bg-navy-800 flex items-center justify-center shadow-soft">
              <FileText className="w-10 h-10 text-white" />
            </div>
          </div>

          <h1 className="text-2xl font-bold text-navy-900 mb-2">ملفك جاهز للتحميل</h1>
          <p className="text-navy-500 text-lg mb-8">تم التحقق من عملية الشراء بنجاح</p>

          {/* File info */}
          <div className="bg-navy-50/50 rounded-2xl p-5 mb-7 flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-white shadow-soft flex items-center justify-center shrink-0">
              <FileText className="w-7 h-7 text-navy-600" />
            </div>
            <div className="flex-1 text-right">
              <div className="font-bold text-navy-900 text-[15px]">الملف الرقمي PDF</div>
              <div className="text-xs text-navy-400">ملف رقمي • {product.currency} {product.price}</div>
            </div>
            <div className="px-3 py-1 bg-success-100 rounded-full">
              <span className="text-xs font-medium text-success-700">مدفوع</span>
            </div>
          </div>

          {/* Download button */}
          <button
            onClick={handleDownload}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-navy-800 text-white text-base font-semibold rounded-2xl shadow-soft hover:bg-navy-700 hover:shadow-navy hover:-translate-y-0.5 transition-all duration-300 ease-premium active:scale-95 mb-4"
          >
            <Download className="w-5 h-5" />
            تحميل الملف
          </button>

          {/* Security note */}
          <div className="flex items-center justify-center gap-2 text-sm text-navy-400">
            <ShieldCheck className="w-4 h-4 text-navy-500" />
            <span>رابط التحميل آمن ومشفّر</span>
          </div>
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
