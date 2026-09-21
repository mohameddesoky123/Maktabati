import { ArrowLeft } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

type FinalCtaProps = {
  onBuyClick: () => void;
};

export default function FinalCta({ onBuyClick }: FinalCtaProps) {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative bg-navy-900 rounded-4xl overflow-hidden px-6 py-16 lg:px-16 lg:py-24 text-center">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-0">
              <div className="absolute top-0 right-0 w-96 h-96 bg-navy-700/40 rounded-full blur-[120px]" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-600/15 rounded-full blur-[100px]" />
            </div>
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '32px 32px'
            }} />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-[44px] lg:text-5xl font-bold text-white mb-5 leading-tight text-balance">
                جاهز للحصول على ملفك؟
              </h2>
              <p className="text-navy-200 text-lg mb-10 leading-relaxed">
                احصل على وصول رقمي سريع من خلال عملية شراء بسيطة وآمنة.
              </p>
              <button
                onClick={onBuyClick}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-navy-900 text-base font-semibold rounded-2xl shadow-soft hover:bg-navy-50 hover:shadow-navy hover:-translate-y-0.5 transition-all duration-300 ease-premium active:scale-95"
              >
                احصل على الملف الآن
                <ArrowLeft className="w-5 h-5" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
