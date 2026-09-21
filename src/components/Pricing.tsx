import { Check, ArrowLeft, ShieldCheck, Zap } from 'lucide-react';
import { product } from '@/data/product';
import ScrollReveal from '@/components/ScrollReveal';

type PricingProps = {
  onBuyClick: () => void;
};

export default function Pricing({ onBuyClick }: PricingProps) {
  return (
    <section id="pricing" className="py-20 lg:py-32">
      <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-14 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-navy-50 rounded-full mb-5">
            <span className="text-sm font-medium text-navy-600">السعر</span>
          </div>
          <h2 className="text-3xl sm:text-[42px] font-bold text-navy-900 mb-4 leading-tight">
            احصل على نسختك الآن
          </h2>
          <p className="text-navy-500 text-lg leading-relaxed">
            دفع مرة واحدة — بدون اشتراك شهري أو رسوم خفية
          </p>
        </ScrollReveal>

        {/* Pricing card */}
        <ScrollReveal delay={100}>
          <div className="max-w-md mx-auto">
            <div className="relative bg-white rounded-4xl shadow-navy border border-navy-50 overflow-hidden">
              {/* Top accent bar */}
              <div className="h-1.5 bg-gradient-to-l from-navy-800 to-navy-500" />

              <div className="p-8 lg:p-10">
                {/* Product name */}
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-navy-800 flex items-center justify-center shadow-soft">
                    <ShieldCheck className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy-900">الملف الرقمي</h3>
                    <p className="text-sm text-navy-400">ملف PDF كامل</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-navy-500 text-[15px] leading-relaxed mb-7">
                  منتج رقمي شامل ومنظّم، يصلك فورًا بعد إتمام الدفع. محتوى عملي جاهز للاستخدام.
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-extrabold text-navy-900">
                    {product.price}
                  </span>
                  <span className="text-xl font-medium text-navy-500">
                    {product.currency}
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-success-50 rounded-full mb-7">
                  <Zap className="w-3.5 h-3.5 text-success-600" />
                  <span className="text-sm font-medium text-success-700">دفع مرة واحدة</span>
                </div>

                {/* Divider */}
                <div className="h-px bg-navy-100 my-7" />

                {/* Features list */}
                <ul className="space-y-4 mb-8">
                  {product.pricingFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 group">
                      <div className="w-7 h-7 rounded-full bg-success-100 flex items-center justify-center shrink-0 group-hover:bg-success-500 transition-colors duration-300">
                        <Check className="w-4 h-4 text-success-600 group-hover:text-white transition-colors duration-300" strokeWidth={3} />
                      </div>
                      <span className="text-navy-700 text-[15px] font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA button */}
                <button
                  onClick={onBuyClick}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-navy-800 text-white text-base font-semibold rounded-2xl shadow-soft hover:bg-navy-700 hover:shadow-navy hover:-translate-y-0.5 transition-all duration-300 ease-premium active:scale-95"
                >
                  اشترِ الآن
                  <ArrowLeft className="w-5 h-5" />
                </button>

                {/* Trust line */}
                <div className="flex items-center justify-center gap-2 mt-5 text-sm text-navy-400">
                  <ShieldCheck className="w-4 h-4 text-navy-500" />
                  <span>دفع آمن</span>
                  <span className="w-1 h-1 rounded-full bg-navy-300" />
                  <span>تسليم رقمي</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
