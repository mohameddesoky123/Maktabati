import { BookOpen, FileText, PackageCheck, Infinity, Download, ShieldCheck, type LucideIcon } from 'lucide-react';
import { product } from '@/data/product';
import ScrollReveal from '@/components/ScrollReveal';

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  FileText,
  PackageCheck,
  Infinity,
  Download,
  ShieldCheck,
};

export default function WhatYouGet() {
  return (
    <section id="what-you-get" className="py-20 lg:py-32">
      <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-navy-50 rounded-full mb-5">
            <span className="text-sm font-medium text-navy-600">المحتوى</span>
          </div>
          <h2 className="text-3xl sm:text-[42px] font-bold text-navy-900 mb-4 leading-tight">
            ماذا ستحصل عليه؟
          </h2>
          <p className="text-navy-500 text-lg leading-relaxed">
            كل ما تحتاجه في ملف واحد منظم وسهل الاستخدام
          </p>
        </ScrollReveal>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {product.whatYouGet.map((item, index) => {
            const Icon = iconMap[item.icon] ?? BookOpen;
            return (
              <ScrollReveal key={index} delay={index * 80}>
                <div className="group bg-white rounded-3xl p-7 shadow-soft border border-navy-50 hover:shadow-card-hover hover:-translate-y-1.5 hover:border-navy-100 transition-all duration-300 ease-premium h-full">
                  <div className="w-14 h-14 rounded-2xl bg-navy-50 flex items-center justify-center mb-6 group-hover:bg-navy-800 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-navy-700 group-hover:text-white transition-colors duration-300" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-navy-500 text-[15px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
