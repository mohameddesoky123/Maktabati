import { XCircle, RotateCcw, Store } from 'lucide-react';

type PaymentFailedProps = {
  onRetry: () => void;
  onBackToStore: () => void;
};

export default function PaymentFailed({ onRetry, onBackToStore }: PaymentFailedProps) {
  return (
    <div className="min-h-screen bg-navy-50/30 flex items-center justify-center px-5">
      <div className="text-center max-w-md animate-scale-in">
        {/* Error icon */}
        <div className="inline-flex items-center justify-center mb-8">
          <div className="w-28 h-28 rounded-full bg-error-50 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-error-100 flex items-center justify-center">
              <XCircle className="w-14 h-14 text-error-500" strokeWidth={1.8} />
            </div>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-navy-900 mb-3">تعذّر إتمام عملية الدفع</h1>
        <p className="text-navy-500 text-lg leading-relaxed mb-10">
          لم نتمكن من إتمام العملية. يرجى المحاولة مرة أخرى أو استخدام طريقة دفع أخرى.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={onRetry}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-navy-800 text-white text-base font-semibold rounded-xl shadow-soft hover:bg-navy-700 hover:-translate-y-0.5 transition-all duration-300 ease-premium active:scale-95"
          >
            <RotateCcw className="w-5 h-5" />
            حاول مرة أخرى
          </button>
          <button
            onClick={onBackToStore}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-navy-700 text-base font-semibold rounded-xl border border-navy-200 hover:border-navy-300 hover:shadow-card transition-all duration-300 active:scale-95"
          >
            <Store className="w-5 h-5" />
            العودة للمتجر
          </button>
        </div>
      </div>
    </div>
  );
}
