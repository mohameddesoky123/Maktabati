import { ArrowLeft, Play, Download, FileText, Zap, ShieldCheck, Lock } from 'lucide-react';
import { product } from '@/data/product';

type HeroProps = {
  onBuyClick: () => void;
  onPreviewClick: () => void;
};

export default function Hero({ onBuyClick, onPreviewClick }: HeroProps) {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-16 left-1/4 w-[480px] h-[480px] bg-navy-100/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[380px] h-[380px] bg-accent-100/25 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          {/* Text side */}
          <div className="text-center lg:text-right">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2.5 px-4 py-2 bg-white border border-navy-100 rounded-full shadow-soft mb-8 animate-fade-in-up hover:shadow-card transition-shadow duration-300"
            >
              <span className="relative flex w-2.5 h-2.5">
                <span className="absolute inset-0 rounded-full bg-success-400 animate-ping opacity-60" />
                <span className="relative w-2.5 h-2.5 rounded-full bg-success-500" />
              </span>
              <span className="text-sm font-medium text-navy-700">{product.badge}</span>
            </div>

            {/* Headline */}
            <h1
              className="text-[38px] sm:text-5xl lg:text-[64px] font-extrabold text-navy-900 leading-[1.15] mb-6 text-balance animate-fade-in-up"
              style={{ animationDelay: '0.1s' }}
            >
              كل ما تحتاجه
              <br className="hidden sm:block" />
              {' '}
              <span className="gradient-text">في ملف PDF واحد</span>
            </h1>

            {/* Description */}
            <p
              className="text-lg lg:text-[19px] text-navy-500 leading-[1.8] mb-10 max-w-[560px] mx-auto lg:mx-0 lg:mr-0 animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              منتج رقمي شامل ومنظّم، يوفّر عليك الوقت والجهد. محتوى عملي جاهز للاستخدام، يصلك فورًا بعد إتمام الدفع مباشرةً.
            </p>

            {/* Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-7 animate-fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              <button
                onClick={onBuyClick}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy-800 text-white text-base font-semibold rounded-2xl shadow-soft hover:bg-navy-700 hover:shadow-navy hover:-translate-y-0.5 transition-all duration-300 ease-premium active:scale-95 active:translate-y-0"
              >
                احصل على الملف الآن
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={onPreviewClick}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-navy-700 text-base font-semibold rounded-2xl border border-navy-200 hover:border-navy-300 hover:shadow-card hover:-translate-y-0.5 transition-all duration-300 ease-premium active:scale-95 active:translate-y-0"
              >
                <Play className="w-5 h-5" />
                شاهد المعاينة
              </button>
            </div>

            {/* Trust line */}
            <div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-sm text-navy-400 animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              <ShieldCheck className="w-4 h-4 text-navy-500" />
              <span>دفع مرة واحدة</span>
              <span className="w-1 h-1 rounded-full bg-navy-300" />
              <span>وصول رقمي فوري</span>
              <span className="w-1 h-1 rounded-full bg-navy-300" />
              <span>دفع آمن</span>
            </div>
          </div>

          {/* Mockup side */}
          <div
            className="relative animate-fade-in-up"
            style={{ animationDelay: '0.25s' }}
          >
            <PdfMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function PdfMockup() {
  return (
    <div className="relative max-w-md mx-auto lg:max-w-none">
      {/* Main PDF cover */}
      <div className="relative bg-white rounded-3xl shadow-navy p-5 lg:p-7">
        {/* Cover */}
        <div className="bg-gradient-to-br from-navy-900 to-navy-700 rounded-2xl p-7 mb-4 relative overflow-hidden">
          {/* Decorative grid */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }} />
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div className="text-white/70 text-sm font-medium">ملف رقمي PDF</div>
            </div>
            <div className="space-y-2.5">
              <div className="h-3.5 w-4/5 bg-white/25 rounded-full" />
              <div className="h-3.5 w-3/5 bg-white/15 rounded-full" />
            </div>
            <div className="mt-6 flex items-center gap-2">
              <div className="px-3 py-1.5 bg-white/10 rounded-full text-xs text-white/80">محتوى عملي</div>
              <div className="px-3 py-1.5 bg-white/10 rounded-full text-xs text-white/80">منظم</div>
            </div>
          </div>
        </div>

        {/* Page previews */}
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-navy-50/50 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-navy-200" />
                <div className="flex-1 space-y-1.5">
                  <div className="h-2.5 w-1/2 bg-navy-200 rounded-full" />
                  <div className="h-2 w-1/3 bg-navy-100 rounded-full" />
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="h-2 w-full bg-navy-100 rounded-full" />
                <div className="h-2 w-5/6 bg-navy-100 rounded-full" />
                <div className="h-2 w-2/3 bg-navy-100 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating card 1 — top right */}
      <div className="absolute -top-5 -right-3 lg:-right-6 bg-white rounded-2xl shadow-card p-3 animate-float">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-success-100 flex items-center justify-center">
            <Zap className="w-5 h-5 text-success-600" />
          </div>
          <div>
            <div className="text-sm font-semibold text-navy-900">وصول فوري</div>
            <div className="text-xs text-navy-400">بعد الدفع مباشرة</div>
          </div>
        </div>
      </div>

      {/* Floating card 2 — bottom left */}
      <div className="absolute -bottom-5 -left-3 lg:-left-6 bg-white rounded-2xl shadow-card p-3 animate-float-slow">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-navy-100 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5 text-navy-700" />
          </div>
          <div>
            <div className="text-sm font-semibold text-navy-900">شراء مرة واحدة</div>
            <div className="text-xs text-navy-400">دفع آمن</div>
          </div>
        </div>
      </div>

      {/* Floating card 3 — mid left */}
      <div
        className="absolute top-1/2 -left-4 lg:-left-10 bg-white rounded-2xl shadow-card p-3 animate-float"
        style={{ animationDelay: '2s' }}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-accent-100 flex items-center justify-center">
            <Download className="w-5 h-5 text-accent-600" />
          </div>
          <div>
            <div className="text-sm font-semibold text-navy-900">ملف PDF</div>
            <div className="text-xs text-navy-400">جاهز للتحميل</div>
          </div>
        </div>
      </div>

      {/* Security badge — bottom right */}
      <div
        className="absolute -bottom-3 right-8 lg:right-12 bg-navy-900 text-white text-xs font-medium px-3 py-2 rounded-xl shadow-card animate-float-slow flex items-center gap-1.5"
        style={{ animationDelay: '1s' }}
      >
        <Lock className="w-3.5 h-3.5 text-success-400" />
        معاملة مشفّرة
      </div>
    </div>
  );
}
