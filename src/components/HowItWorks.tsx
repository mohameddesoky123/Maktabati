import { product } from '@/data/product';
import ScrollReveal from '@/components/ScrollReveal';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-32">
      <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-navy-50 rounded-full mb-5">
            <span className="text-sm font-medium text-navy-600">الخطوات</span>
          </div>
          <h2 className="text-3xl sm:text-[42px] font-bold text-navy-900 mb-4 leading-tight">
            كيف تحصل على الملف؟
          </h2>
          <p className="text-navy-500 text-lg leading-relaxed">
            ثلاث خطوات بسيطة تفصلك عن ملفك الرقمي
          </p>
        </ScrollReveal>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div className="absolute top-14 right-[16.66%] left-[16.66%] h-0.5 bg-gradient-to-l from-navy-100 via-navy-200 to-navy-100" />

          <div className="grid grid-cols-3 gap-8 relative">
            {product.steps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 120} className="text-center">
                <div className="relative inline-flex w-28 h-28 rounded-full bg-white border-2 border-navy-100 items-center justify-center mb-6 shadow-soft hover:shadow-card hover:border-navy-200 transition-all duration-300 hover:scale-105">
                  <span className="text-3xl font-bold text-navy-700">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-navy-500 leading-relaxed max-w-xs mx-auto text-[15px]">
                  {step.description}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet: Vertical Timeline */}
        <div className="lg:hidden relative">
          <div className="absolute right-14 top-6 bottom-6 w-0.5 bg-gradient-to-b from-navy-100 via-navy-200 to-navy-100" />

          <div className="space-y-8">
            {product.steps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="flex gap-5">
                  <div className="relative shrink-0 w-28 h-28 rounded-full bg-white border-2 border-navy-100 flex items-center justify-center shadow-soft">
                    <span className="text-2xl font-bold text-navy-700">
                      {step.number}
                    </span>
                  </div>
                  <div className="pt-7 flex-1">
                    <h3 className="text-lg font-bold text-navy-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-navy-500 leading-relaxed text-[15px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
