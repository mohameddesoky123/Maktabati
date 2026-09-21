import { useState } from 'react';
import { ChevronRight, ChevronLeft, ZoomIn, ZoomOut, FileText, Maximize2 } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const previewPages = [1, 2, 3, 4, 5];

export default function PdfPreview() {
  const [currentPage, setCurrentPage] = useState(0);
  const [zoom, setZoom] = useState(1);

  const nextPage = () => setCurrentPage((p) => Math.min(p + 1, previewPages.length - 1));
  const prevPage = () => setCurrentPage((p) => Math.max(p - 1, 0));

  return (
    <section id="preview" className="py-20 lg:py-32 bg-white">
      <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-14 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-navy-50 rounded-full mb-5">
            <span className="text-sm font-medium text-navy-600">معاينة</span>
          </div>
          <h2 className="text-3xl sm:text-[42px] font-bold text-navy-900 mb-4 leading-tight">
            ألقِ نظرة داخل الملف
          </h2>
          <p className="text-navy-500 text-lg leading-relaxed">
            تصفّح جزءًا من المحتوى قبل اتخاذ قرار الشراء
          </p>
        </ScrollReveal>

        {/* Preview container */}
        <ScrollReveal delay={100}>
          <div className="max-w-4xl mx-auto">
            {/* Main preview */}
            <div className="relative bg-navy-50/40 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-card">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg shadow-soft">
                    <FileText className="w-4 h-4 text-navy-600" />
                    <span className="text-sm font-medium text-navy-700">معاينة</span>
                  </div>
                  <span className="text-sm text-navy-400">
                    صفحة {currentPage + 1} من {previewPages.length}
                  </span>
                </div>

                {/* Zoom controls */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setZoom((z) => Math.max(z - 0.1, 0.7))}
                    className="w-9 h-9 flex items-center justify-center bg-white rounded-lg shadow-soft text-navy-600 hover:bg-navy-50 transition-colors active:scale-95"
                    aria-label="تصغير"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="text-xs text-navy-400 w-10 text-center font-medium">
                    {Math.round(zoom * 100)}%
                  </span>
                  <button
                    onClick={() => setZoom((z) => Math.min(z + 0.1, 1.5))}
                    className="w-9 h-9 flex items-center justify-center bg-white rounded-lg shadow-soft text-navy-600 hover:bg-navy-50 transition-colors active:scale-95"
                    aria-label="تكبير"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* PDF page display */}
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-card">
                <div
                  className="transition-transform duration-300 ease-premium"
                  style={{ transform: `scale(${zoom})` }}
                >
                  <div className="aspect-[3/4] sm:aspect-[4/3] p-8 sm:p-12">
                    <div className="h-full flex flex-col">
                      {/* Page header */}
                      <div className="flex items-center justify-between mb-8 pb-4 border-b border-navy-100">
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 rounded-lg bg-navy-800 flex items-center justify-center">
                            <FileText className="w-4.5 h-4.5 text-white" />
                          </div>
                          <div className="space-y-1">
                            <div className="h-2.5 w-20 bg-navy-200 rounded-full" />
                            <div className="h-1.5 w-14 bg-navy-100 rounded-full" />
                          </div>
                        </div>
                        <div className="text-xs text-navy-300 font-medium">
                          صفحة {currentPage + 1}
                        </div>
                      </div>

                      {/* Page body */}
                      <div className="flex-1 space-y-5">
                        <div className="space-y-2">
                          <div
                            className="h-5 rounded-full bg-navy-800"
                            style={{ width: `${60 + (currentPage * 7) % 30}%` }}
                          />
                          <div className="h-3 w-1/3 bg-navy-200 rounded-full" />
                        </div>

                        {[1, 2, 3].map((block) => (
                          <div key={block} className="space-y-2">
                            <div className="h-2.5 w-full bg-navy-100 rounded-full" />
                            <div className="h-2.5 w-5/6 bg-navy-100 rounded-full" />
                            <div className="h-2.5 w-4/6 bg-navy-100 rounded-full" />
                          </div>
                        ))}

                        {/* Highlighted box */}
                        <div className="bg-navy-50 rounded-xl p-4 space-y-2">
                          <div className="h-2.5 w-1/2 bg-navy-300 rounded-full" />
                          <div className="h-2.5 w-full bg-navy-200 rounded-full" />
                          <div className="h-2.5 w-3/4 bg-navy-200 rounded-full" />
                        </div>

                        <div className="space-y-2">
                          <div className="h-2.5 w-full bg-navy-100 rounded-full" />
                          <div className="h-2.5 w-5/6 bg-navy-100 rounded-full" />
                        </div>
                      </div>

                      {/* Page footer */}
                      <div className="pt-4 border-t border-navy-100 flex justify-between items-center">
                        <div className="h-2 w-16 bg-navy-100 rounded-full" />
                        <div className="h-2 w-8 bg-navy-200 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation arrows */}
                <button
                  onClick={prevPage}
                  disabled={currentPage === 0}
                  className="absolute top-1/2 -translate-y-1/2 right-2 sm:-right-4 w-11 h-11 flex items-center justify-center bg-white rounded-full shadow-card text-navy-600 hover:bg-navy-50 hover:shadow-navy disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 active:scale-90"
                  aria-label="السابق"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button
                  onClick={nextPage}
                  disabled={currentPage === previewPages.length - 1}
                  className="absolute top-1/2 -translate-y-1/2 left-2 sm:-left-4 w-11 h-11 flex items-center justify-center bg-white rounded-full shadow-card text-navy-600 hover:bg-navy-50 hover:shadow-navy disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 active:scale-90"
                  aria-label="التالي"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex justify-center gap-3 mt-6 overflow-x-auto scrollbar-hide pb-2">
              {previewPages.map((page, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`shrink-0 w-16 h-20 sm:w-20 sm:h-24 rounded-xl border-2 transition-all duration-200 ${
                    currentPage === index
                      ? 'border-navy-700 shadow-card scale-105'
                      : 'border-navy-100 hover:border-navy-300 hover:scale-105'
                  }`}
                  aria-label={`صفحة ${page}`}
                >
                  <div className="h-full bg-navy-50 rounded-md p-1.5 flex flex-col gap-1">
                    <div className="h-1.5 w-3/4 bg-navy-300 rounded-full" />
                    <div className="h-1 w-full bg-navy-200 rounded-full" />
                    <div className="h-1 w-5/6 bg-navy-200 rounded-full" />
                    <div className="h-1 w-2/3 bg-navy-200 rounded-full" />
                    <div className="mt-auto h-1 w-1/3 bg-navy-100 rounded-full" />
                  </div>
                </button>
              ))}
            </div>

            {/* Fullscreen hint */}
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-navy-400">
              <Maximize2 className="w-4 h-4" />
              <span>استخدم أزرار التنقل للتصفح بين الصفحات</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
