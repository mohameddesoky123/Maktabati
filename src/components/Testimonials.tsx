import { Star, Quote } from 'lucide-react';
import { product } from '@/data/product';
import ScrollReveal from '@/components/ScrollReveal';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-white">
      <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-navy-50 rounded-full mb-5">
            <span className="text-sm font-medium text-navy-600">آراء العملاء</span>
          </div>
          <h2 className="text-3xl sm:text-[42px] font-bold text-navy-900 mb-4 leading-tight">
            ماذا يقول عملاؤنا؟
          </h2>
          <p className="text-navy-500 text-lg leading-relaxed">
            تجارب حقيقية من مستخدمين استفادوا من الملف
          </p>
        </ScrollReveal>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {product.testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="bg-navy-50/40 rounded-3xl p-7 border border-navy-50 hover:shadow-card hover:border-navy-100 hover:-translate-y-1 transition-all duration-300 ease-premium h-full flex flex-col">
                {/* Quote icon */}
                <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center mb-5 shadow-soft">
                  <Quote className="w-5 h-5 text-navy-300" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? 'fill-warning-400 text-warning-400'
                          : 'text-navy-200'
                      }`}
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-navy-600 leading-relaxed mb-6 text-[15px] flex-1">
                  "{testimonial.comment}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-navy-100">
                  <div className="w-11 h-11 rounded-full bg-navy-200 flex items-center justify-center text-navy-700 font-bold text-base">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-navy-900 text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-navy-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
