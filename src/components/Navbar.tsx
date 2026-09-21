import { useEffect, useState } from 'react';
import { Menu, X, FileText, ArrowLeft } from 'lucide-react';
import { useScrollSpy } from '@/hooks/useScrollSpy';

const navLinks = [
  { id: 'hero', label: 'الرئيسية' },
  { id: 'what-you-get', label: 'ماذا ستحصل عليه؟' },
  { id: 'features', label: 'المميزات' },
  { id: 'how-it-works', label: 'كيف يعمل؟' },
  { id: 'faq', label: 'الأسئلة الشائعة' },
];

type NavbarProps = {
  onBuyClick: () => void;
};

export default function Navbar({ onBuyClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(navLinks.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4">
        <nav
          className={`max-w-content mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 transition-all duration-300 ease-premium ${
            scrolled
              ? 'glass-nav-scrolled shadow-card py-2.5 rounded-2xl'
              : 'glass-nav shadow-soft py-3 rounded-2xl'
          }`}
        >
          {/* Brand */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2.5 shrink-0 group"
          >
            <div className="w-10 h-10 rounded-xl bg-navy-800 flex items-center justify-center shadow-soft transition-transform duration-300 group-hover:scale-105">
              <FileText className="w-5 h-5 text-white" strokeWidth={2} />
            </div>
            <span className="text-xl font-bold text-navy-900">نُسخة</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeId === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-4 py-2 text-[15px] font-medium transition-colors duration-200 group ${
                    isActive ? 'text-accent-600 font-semibold' : 'text-navy-600 hover:text-accent-600'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0.5 right-1/2 translate-x-1/2 h-0.5 rounded-full bg-accent-500 transition-all duration-300 ease-premium ${
                      isActive ? 'w-5 opacity-100' : 'w-0 opacity-0 group-hover:w-5 group-hover:opacity-100'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={onBuyClick}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-navy-800 text-white text-[15px] font-semibold rounded-xl shadow-soft hover:bg-navy-700 hover:shadow-card hover:-translate-y-0.5 transition-all duration-300 ease-premium active:scale-95 active:translate-y-0"
            >
              احصل على الملف الآن
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl text-navy-700 hover:bg-navy-50 transition-colors"
              aria-label="القائمة"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-navy-950/40 backdrop-blur-sm animate-fade-in"
            onClick={() => setMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 z-50 w-[85%] max-w-sm bg-white shadow-navy-lg animate-slide-in-right lg:hidden flex flex-col">
            <div className="flex items-center justify-between p-5 border-b border-navy-100">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-navy-800 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-navy-900">نُسخة</span>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-xl text-navy-600 hover:bg-navy-50 transition-colors"
                aria-label="إغلاق"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-1">
              {navLinks.map((link, i) => {
                const isActive = activeId === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`flex items-center justify-between w-full px-4 py-4 rounded-xl text-lg font-medium transition-colors duration-200 ${
                      isActive
                        ? 'bg-accent-50 text-accent-700'
                        : 'text-navy-700 hover:bg-navy-50'
                    }`}
                    style={{ animation: `fadeInUp 0.4s ease-out ${i * 0.05}s both` }}
                  >
                    {link.label}
                    {isActive && <span className="w-2 h-2 rounded-full bg-accent-500" />}
                  </button>
                );
              })}
            </div>

            <div className="p-5 border-t border-navy-100">
              <button
                onClick={() => { setMenuOpen(false); onBuyClick(); }}
                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-navy-800 text-white text-base font-semibold rounded-xl shadow-soft hover:bg-navy-700 transition-all duration-300 active:scale-95"
              >
                احصل على الملف الآن
                <ArrowLeft className="w-5 h-5" />
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
