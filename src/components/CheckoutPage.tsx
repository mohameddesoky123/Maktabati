import { useState } from 'react';
import { ArrowRight, ShieldCheck, CreditCard, Apple, Wallet, Check, Lock } from 'lucide-react';
import { BrandIcon } from '@/components/BrandLogo';
import { product } from '@/data/product';

type CheckoutPageProps = {
  onBack: () => void;
  onProceedToPayment: (customerName: string, customerEmail: string, paymentMethod: string) => void;
};

type PaymentMethod = 'card' | 'applepay' | 'wallet';

export default function CheckoutPage({ onBack, onProceedToPayment }: CheckoutPageProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
  const [touched, setTouched] = useState<{ name?: boolean; email?: boolean }>({});

  const validateName = (val: string) => {
    if (!val.trim()) return 'يرجى إدخال الاسم الكامل';
    if (val.trim().length < 3) return 'الاسم قصير جدًا';
    return undefined;
  };

  const validateEmail = (val: string) => {
    if (!val.trim()) return 'يرجى إدخال البريد الإلكتروني';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(val)) return 'البريد الإلكتروني غير صحيح';
    return undefined;
  };

  const handleNameChange = (val: string) => {
    setName(val);
    if (touched.name) setErrors((e) => ({ ...e, name: validateName(val) }));
  };

  const handleEmailChange = (val: string) => {
    setEmail(val);
    if (touched.email) setErrors((e) => ({ ...e, email: validateEmail(val) }));
  };

  const handleBlur = (field: 'name' | 'email') => {
    setTouched((t) => ({ ...t, [field]: true }));
    if (field === 'name') setErrors((e) => ({ ...e, name: validateName(name) }));
    else setErrors((e) => ({ ...e, email: validateEmail(email) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nameError = validateName(name);
    const emailError = validateEmail(email);
    setErrors({ name: nameError, email: emailError });
    setTouched({ name: true, email: true });
    if (!nameError && !emailError) {
      onProceedToPayment(name, email, paymentMethod);
    }
  };

  const paymentMethods: { id: PaymentMethod; label: string; icon: typeof CreditCard }[] = [
    { id: 'card', label: 'بطاقة ائتمان / خصم', icon: CreditCard },
    { id: 'applepay', label: 'Apple Pay', icon: Apple },
    { id: 'wallet', label: 'محفظة رقمية', icon: Wallet },
  ];

  return (
    <div className="min-h-screen bg-navy-50/30 pt-28 pb-16">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Back button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-navy-600 hover:text-navy-900 mb-6 transition-colors group"
        >
          <ArrowRight className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          العودة للمتجر
        </button>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-2">إتمام الطلب</h1>
          <p className="text-navy-500 text-lg">أدخل بياناتك للمتابعة في عملية الدفع الآمنة</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Form side */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Customer info */}
              <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-soft">
                <h2 className="text-lg font-bold text-navy-900 mb-6">بيانات العميل</h2>

                {/* Name field */}
                <div className="mb-5">
                  <label className="block text-sm font-medium text-navy-700 mb-2">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => handleNameChange(e.target.value)}
                    onBlur={() => handleBlur('name')}
                    placeholder="أدخل اسمك الكامل"
                    className={`w-full px-4 py-3.5 rounded-xl border bg-navy-50/30 text-navy-900 text-[16px] placeholder:text-navy-300 transition-all duration-200 focus:outline-none focus:ring-2 ${
                      errors.name
                        ? 'border-error-400 focus:ring-error-300'
                        : touched.name && !errors.name
                        ? 'border-success-400 focus:ring-success-300'
                        : 'border-navy-200 focus:border-navy-400 focus:ring-navy-300'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-error-500 animate-fade-in">{errors.name}</p>
                  )}
                </div>

                {/* Email field */}
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => handleEmailChange(e.target.value)}
                    onBlur={() => handleBlur('email')}
                    dir="ltr"
                    placeholder="example@email.com"
                    className={`w-full px-4 py-3.5 rounded-xl border bg-navy-50/30 text-navy-900 text-[16px] placeholder:text-navy-300 transition-all duration-200 text-right focus:outline-none focus:ring-2 ${
                      errors.email
                        ? 'border-error-400 focus:ring-error-300'
                        : touched.email && !errors.email
                        ? 'border-success-400 focus:ring-success-300'
                        : 'border-navy-200 focus:border-navy-400 focus:ring-navy-300'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-error-500 animate-fade-in">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Payment method */}
              <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-soft">
                <h2 className="text-lg font-bold text-navy-900 mb-6">طريقة الدفع</h2>

                <div className="space-y-3">
                  {paymentMethods.map((method) => {
                    const Icon = method.icon;
                    const isSelected = paymentMethod === method.id;
                    return (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() => setPaymentMethod(method.id)}
                        className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-200 ${
                          isSelected
                            ? 'border-navy-700 bg-navy-50/50'
                            : 'border-navy-100 hover:border-navy-200 hover:bg-navy-50/30'
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-200 ${
                          isSelected ? 'bg-navy-800' : 'bg-navy-100'
                        }`}>
                          <Icon className={`w-6 h-6 ${isSelected ? 'text-white' : 'text-navy-600'}`} />
                        </div>
                        <span className={`flex-1 text-right text-[15px] font-medium ${
                          isSelected ? 'text-navy-900' : 'text-navy-600'
                        }`}>
                          {method.label}
                        </span>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                          isSelected ? 'border-navy-700 bg-navy-700' : 'border-navy-200'
                        }`}>
                          {isSelected && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <p className="flex items-center gap-2 mt-5 text-sm text-navy-400">
                  <Lock className="w-4 h-4" />
                  جميع المعاملات مشفّرة وآمنة
                </p>
              </div>

              {/* Submit button - mobile */}
              <button
                type="submit"
                className="w-full lg:hidden inline-flex items-center justify-center gap-2 px-6 py-4 bg-navy-800 text-white text-base font-semibold rounded-2xl shadow-soft hover:bg-navy-700 transition-all duration-300 active:scale-95"
              >
                متابعة للدفع
              </button>
            </form>
          </div>

          {/* Order summary side */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-soft lg:sticky lg:top-28">
              <h2 className="text-lg font-bold text-navy-900 mb-6">ملخص الطلب</h2>

              {/* Product */}
              <div className="flex gap-4 mb-5">
                <div className="w-16 h-16 rounded-2xl bg-navy-800 flex items-center justify-center shrink-0">
                  <BrandIcon size={32} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-navy-900 text-[15px] mb-1">الملف الرقمي PDF</h3>
                  <p className="text-sm text-navy-400">ملف رقمي كامل</p>
                </div>
              </div>

              {/* Price breakdown */}
              <div className="space-y-3 py-5 border-y border-navy-100">
                <div className="flex justify-between text-[15px]">
                  <span className="text-navy-500">سعر المنتج</span>
                  <span className="text-navy-700 font-medium">{product.price} {product.currency}</span>
                </div>
                <div className="flex justify-between text-[15px]">
                  <span className="text-navy-500">رسوم الخدمة</span>
                  <span className="text-navy-700 font-medium">مجاني</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center pt-5">
                <span className="font-bold text-navy-900 text-lg">الإجمالي</span>
                <div className="text-left">
                  <span className="text-3xl font-extrabold text-navy-900">{product.price}</span>
                  <span className="text-sm font-medium text-navy-500 mr-1">{product.currency}</span>
                </div>
              </div>

              {/* Submit button - desktop */}
              <button
                onClick={handleSubmit}
                className="hidden lg:flex w-full items-center justify-center gap-2 px-6 py-4 mt-6 bg-navy-800 text-white text-base font-semibold rounded-2xl shadow-soft hover:bg-navy-700 hover:shadow-navy hover:-translate-y-0.5 transition-all duration-300 ease-premium active:scale-95"
              >
                متابعة للدفع
              </button>

              <div className="flex items-center justify-center gap-2 mt-5 text-sm text-navy-400">
                <ShieldCheck className="w-4 h-4 text-navy-500" />
                <span>دفع آمن • تسليم رقمي فوري</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
