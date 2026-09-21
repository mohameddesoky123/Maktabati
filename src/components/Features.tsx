import { Check, ArrowLeft } from 'lucide-react';
import { BrandIcon } from '@/components/BrandLogo';
import { product } from '@/data/product';
import ScrollReveal from '@/components/ScrollReveal';

type FeaturesProps = {
  onBuyClick: () => void;
};

export default function Features({ onBuyClick }: FeaturesProps) {
  return (
    <section id="features" className="py-20 lg:py-32 bg-white">
      <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* PDF Mockup */}
          <ScrollReveal className="order-2 lg:order-1">
            <div className="relative max-w-sm mx-auto lg:max-w-md">
              <div className="bg-navy-50/40 rounded-3xl p-6 shadow-card">
                {/* Cover */}
                <div className="bg-gradient-to-br from-navy-900 to-navy-700 rounded-2xl p-8 mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                  }} />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
                        <BrandIcon size={28} className="text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-lg">الملف الرقمي</div>
                        <div className="text-white/60 text-sm">PDF</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-3.5 w-4/5 bg-white/25 rounded-full" />
                      <div className="h-3.5 w-3/5 bg-white/15 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Page rows */}
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-white rounded-xl p-4 shadow-soft">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-navy-100" />
                        <div className="flex-1 space-y-1.5">
                          <div className="h-2.5 w-2/3 bg-navy-200 rounded-full" />
                          <div className="h-2 w-1/2 bg-navy-100 rounded-full" />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <div className="h-2 w-full bg-navy-50 rounded-full" />
                        <div className="h-2 w-4/5 bg-navy-50 rounded-full" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating accent */}
              <div className="absolute -top-3 -left-3 bg-accent-500 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-card">
                محتوى عملي
              </div>
            </div>
          </ScrollReveal>

          {/* Features list */}
          <ScrollReveal className="order-1 lg:order-2" delay={100}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-navy-50 rounded-full mb-5">
              <span className="text-sm font-medium text-navy-600">المميزات</span>
            </div>
            <h2 className="text-3xl sm:text-[42px] font-bold text-navy-900 mb-5 leading-tight">
              لماذا هذا الملف؟
            </h2>
            <p className="text-navy-500 text-lg leading-relaxed mb-8">
              صُمم ليوفّر عليك الوقت والجهد، بمحتوى عملي منظم وسهل الوصول.
            </p>

            <ul className="space-y-4 mb-10">
              {product.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3.5 group"
                >
                  <div className="w-8 h-8 rounded-full bg-success-100 flex items-center justify-center shrink-0 group-hover:bg-success-500 transition-colors duration-300">
                    <Check className="w-4.5 h-4.5 text-success-600 group-hover:text-white transition-colors duration-300" strokeWidth={3} />
                  </div>
                  <span className="text-navy-700 text-[17px] font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={onBuyClick}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-navy-800 text-white text-base font-semibold rounded-xl shadow-soft hover:bg-navy-700 hover:shadow-navy hover:-translate-y-0.5 transition-all duration-300 ease-premium active:scale-95"
            >
              احصل على الملف الآن
              <ArrowLeft className="w-5 h-5" />
            </button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
