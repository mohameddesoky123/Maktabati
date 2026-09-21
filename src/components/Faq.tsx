import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { product } from '@/data/product';
import ScrollReveal from '@/components/ScrollReveal';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-32">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-navy-50 rounded-full mb-5">
            <span className="text-sm font-medium text-navy-600">الأسئلة الشائعة</span>
          </div>
          <h2 className="text-3xl sm:text-[42px] font-bold text-navy-900 mb-4 leading-tight">
            الأسئلة الشائعة
          </h2>
          <p className="text-navy-500 text-lg leading-relaxed">
            كل ما تحتاج معرفته قبل الشراء
          </p>
        </ScrollReveal>

        {/* FAQ accordion */}
        <ScrollReveal delay={100}>
          <div className="space-y-3">
            {product.faq.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl border transition-all duration-300 ease-premium ${
                    isOpen ? 'border-navy-200 shadow-card' : 'border-navy-50 shadow-soft hover:border-navy-100'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-right"
                    aria-expanded={isOpen}
                  >
                    <span className={`text-[16px] transition-colors duration-200 ${
                      isOpen ? 'text-navy-900 font-bold' : 'text-navy-700 font-semibold'
                    }`}>
                      {item.question}
                    </span>
                    <div className={`shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isOpen ? 'bg-navy-800 rotate-180' : 'bg-navy-50'
                    }`}>
                      <ChevronDown className={`w-4.5 h-4.5 transition-colors duration-300 ${
                        isOpen ? 'text-white' : 'text-navy-600'
                      }`} />
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-400 ease-premium ${
                      isOpen ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <p className="px-5 pb-5 pt-0 text-navy-500 leading-relaxed text-[15px]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
