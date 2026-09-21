import { FileText } from 'lucide-react';

const footerLinks = [
  {
    title: 'المنتج',
    links: [
      { label: 'الرئيسية', href: '#hero' },
      { label: 'المميزات', href: '#features' },
      { label: 'الأسئلة الشائعة', href: '#faq' },
    ],
  },
  {
    title: 'الشركة',
    links: [
      { label: 'تواصل معنا', href: '#' },
      { label: 'الشروط والأحكام', href: '#' },
      { label: 'سياسة الخصوصية', href: '#' },
      { label: 'سياسة الاسترجاع', href: '#' },
    ],
  },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy-950 text-white pt-20 pb-10">
      <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 lg:gap-12 mb-14">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-navy-700 flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">نُسخة</span>
            </div>
            <p className="text-navy-300 text-[15px] leading-relaxed max-w-sm">
              منصة عربية لبيع المنتجات الرقمية. نوفّر محتوى عمليًا ومنظمًا يصلك فورًا بعد الدفع، بتجربة شراء سهلة وآمنة.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="font-bold text-white mb-5 text-[15px]">{col.title}</h4>
              <ul className="space-y-3.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-navy-300 text-[15px] hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-navy-800 mb-6" />

        {/* Copyright */}
        <div className="text-center text-navy-400 text-sm">
          © 2026 جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}
