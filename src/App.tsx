import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Sparkles, Heart, ArrowRight, Zap, Target, Cpu, Workflow, UserCheck, Languages, Copy, Check } from 'lucide-react';

const OnriviLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <div className={`${className} bg-blue-600 rounded-[1.25rem] flex items-center justify-center shadow-lg shadow-blue-500/20 overflow-hidden relative`}>
    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-none stroke-current stroke-2" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  </div>
);

export default function App() {
  const { t, i18n } = useTranslation();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const keyValues = [
    { icon: <Zap />, title: t('values.v1.title'), desc: t('values.v1.desc') },
    { icon: <Target />, title: t('values.v2.title'), desc: t('values.v2.desc') },
    { icon: <Heart />, title: t('values.v3.title'), desc: t('values.v3.desc') }
  ];

  const techFocus = [
    { icon: <Cpu />, title: t('tech.f1.title'), desc: t('tech.f1.desc') },
    { icon: <Workflow />, title: t('tech.f2.title'), desc: t('tech.f2.desc') },
    { icon: <UserCheck />, title: t('tech.f3.title'), desc: t('tech.f3.desc') }
  ];

  const toggleLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-blue-100 bg-white text-slate-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-white/80 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <OnriviLogo className="w-8 h-8" />
          <span className="text-xl font-extrabold tracking-tighter lowercase">{t('company')}</span>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6 text-xs font-bold uppercase tracking-widest text-slate-400">
            <a href="#hero" className="hover:text-blue-600 transition-colors">{t('nav.intro')}</a>
            <a href="#features" className="hover:text-blue-600 transition-colors">{t('nav.features')}</a>
            <a href="#pricing" className="hover:text-blue-600 transition-colors">{t('nav.pricing')}</a>
            <a href="#roadmap" className="hover:text-blue-600 transition-colors">{t('nav.roadmap')}</a>
            <a href="mailto:firstonrivi@onrivi.com" className="hover:text-blue-600 transition-colors">{t('nav.support')}</a>
          </div>

          <div className="relative">
            <button onClick={() => setIsLangMenuOpen(!isLangMenuOpen)} className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
              <Languages className="w-5 h-5" />
            </button>
            <AnimatePresence>
              {isLangMenuOpen && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden">
                  <button onClick={() => toggleLanguage('ko')} className="w-full px-4 py-2 text-left text-sm hover:bg-blue-50 transition-colors font-medium">KO</button>
                  <button onClick={() => toggleLanguage('en')} className="w-full px-4 py-2 text-left text-sm hover:bg-blue-50 transition-colors font-medium">EN</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>

      <main className="pt-32">
        {/* Hero */}
        <section id="hero" className="max-w-5xl mx-auto px-8 py-20 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest rounded-full mb-8">
            {t('hero.badge')}
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-none">
            {t('hero.title')} <br />
            <span className="text-blue-600">{t('hero.titleAccent')}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-slate-500 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            {t('hero.description')}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex justify-center gap-4">
            <a href="#pricing" className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25">
              {t('hero.ctaStart')}
            </a>
            <a href="#demo" className="px-8 py-4 border-2 border-slate-900 rounded-full font-bold hover:bg-slate-900 hover:text-white transition-all">
              {t('hero.ctaGuide')}
            </a>
          </motion.div>
        </section>

        {/* App Demo or Image (Optional Full Width) */}
        <section className="max-w-6xl mx-auto px-8 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="aspect-video bg-slate-900 rounded-[2rem] shadow-2xl overflow-hidden border-8 border-slate-800 relative flex items-center justify-center group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent z-10" />

            {/* 플레이스홀더: 실제 앱 UI 스크린샷으로 교체 예정 */}
            <div className="text-center z-20">
              <Sparkles className="w-16 h-16 text-blue-400 mx-auto mb-4 opacity-50 group-hover:scale-110 transition-transform duration-500" />
              <p className="text-slate-400 font-medium">OnriviPrompt DualPanel Interface Preview</p>
            </div>
          </motion.div>
        </section>

        {/* AI Chat Demo with Markdown */}
        <section id="demo" className="py-32 bg-white">
          <div className="max-w-5xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">{t('chat.title')}</h2>
            </div>

            <div className="max-w-4xl mx-auto bg-slate-50 rounded-[3rem] p-6 md:p-12 shadow-inner border border-slate-100">
              <div className="space-y-8">
                {/* User Message */}
                <div className="flex justify-end gap-4">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-blue-600 text-white px-7 py-5 rounded-[2.5rem] rounded-tr-sm shadow-xl shadow-blue-500/10 max-w-[80%] text-sm md:text-base font-medium leading-relaxed"
                  >
                    {t('chat.userQuery')}
                  </motion.div>
                  <div className="w-12 h-12 bg-white border border-slate-200 rounded-full flex-shrink-0 flex items-center justify-center font-black text-slate-300 shadow-sm">U</div>
                </div>

                {/* AI Message */}
                <div className="flex justify-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-[1rem] flex-shrink-0 flex items-center justify-center overflow-hidden shadow-lg shadow-blue-500/20">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="bg-white border border-slate-200 px-8 py-8 rounded-[2.5rem] rounded-tl-sm shadow-sm max-w-[90%] text-slate-700"
                  >
                    <div className="prose prose-slate prose-sm md:prose-base max-w-none 
                      prose-headings:font-bold prose-headings:tracking-tighter prose-headings:text-slate-900
                      prose-p:leading-relaxed prose-pre:p-0 prose-pre:bg-transparent
                      prose-strong:text-blue-600 prose-strong:font-bold prose-li:marker:text-blue-500
                    ">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          pre: ({ children }) => <pre className="bg-slate-900 rounded-2xl overflow-hidden my-6 relative group">{children}</pre>,
                          code: ({ node, inline, className, children, ...props }: any) => {
                            const match = /language-(\w+)/.exec(className || '');
                            const codeContent = String(children).replace(/\n$/, '');
                            const [isCopied, setIsCopied] = useState(false);

                            const copyToClipboard = () => {
                              navigator.clipboard.writeText(codeContent);
                              setIsCopied(true);
                              setTimeout(() => setIsCopied(false), 2000);
                            };

                            if (!inline && match) {
                              return (
                                <div className="relative">
                                  <div className="absolute right-3 top-3 z-10">
                                    <button
                                      onClick={copyToClipboard}
                                      className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white/50 hover:text-white transition-all backdrop-blur-sm border border-white/5"
                                      title="Copy code"
                                    >
                                      {isCopied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                                    </button>
                                  </div>
                                  <code className={`${className} block p-6 pt-12 overflow-x-auto text-blue-400 font-mono text-sm leading-relaxed`} {...props}>
                                    {children}
                                  </code>
                                </div>
                              );
                            }
                            return <code className={`${className} bg-slate-100 text-blue-600 px-1.5 py-0.5 rounded-md font-bold`} {...props}>{children}</code>;
                          }
                        }}
                      >
                        {t('chat.aiResponse')}
                      </ReactMarkdown>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features (Key Features of OnriviPrompt) */}
        <section id="features" className="bg-slate-50 py-32">
          <div className="max-w-5xl mx-auto px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-center tracking-tighter mb-20">{t('features.title')}</h2>
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              {[
                { icon: <Workflow />, title: t('features.f1.title'), desc: t('features.f1.desc') },
                { icon: <Sparkles />, title: t('features.f2.title'), desc: t('features.f2.desc') },
                { icon: <Zap />, title: t('features.f3.title'), desc: t('features.f3.desc') },
                { icon: <Cpu />, title: t('features.f4.title'), desc: t('features.f4.desc') }
              ].map((feat, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                    {feat.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="max-w-5xl mx-auto px-8 py-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">{t('pricing.title')}</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">{t('pricing.desc')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free/Trial Plan */}
            <div className="p-8 rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/50 flex flex-col hover:border-blue-200 transition-colors">
              <h3 className="text-2xl font-bold mb-2">{t('pricing.free.name')}</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold tracking-tighter">{t('pricing.free.price')}</span>
                <span className="text-slate-500 ml-2 font-medium">/ {t('pricing.free.period')}</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {[t('pricing.free.f1'), t('pricing.free.f2'), t('pricing.free.f3')].map((item, idx) => (
                  <li key={idx} className="flex flex-start gap-3 items-center text-slate-700">
                    <UserCheck className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-xl font-bold bg-slate-100 text-slate-900 hover:bg-slate-200 transition-colors">
                {t('pricing.free.btn')}
              </button>
            </div>

            {/* Pro Plan */}
            <div className="p-8 rounded-[2rem] border-2 border-blue-600 bg-blue-600 text-white shadow-2xl shadow-blue-600/30 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Target className="w-32 h-32" />
              </div>
              <h3 className="text-2xl font-bold mb-2 relative z-10">{t('pricing.pro.name')}</h3>
              <div className="mb-6 relative z-10">
                <span className="text-5xl font-bold tracking-tighter">{t('pricing.pro.price')}</span>
                <span className="text-blue-200 ml-2 font-medium">/ {t('pricing.pro.period')}</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1 relative z-10">
                {[t('pricing.pro.f1'), t('pricing.pro.f2'), t('pricing.pro.f3'), t('pricing.pro.f4')].map((item, idx) => (
                  <li key={idx} className="flex flex-start gap-3 items-center text-blue-50">
                    <Heart className="w-5 h-5 text-blue-300 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-xl font-bold bg-white text-blue-600 hover:bg-blue-50 transition-colors relative z-10 shadow-lg">
                {t('pricing.pro.btn')}
              </button>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section id="roadmap" className="bg-slate-900 text-white py-32 overflow-hidden relative">
          <div className="absolute inset-0 bg-blue-600/5 z-0" />
          <div className="max-w-5xl mx-auto px-8 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center tracking-tighter mb-20">{t('roadmap.title')}</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((step) => (
                <div key={step} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group">
                  <div className="text-blue-400 font-black text-4xl mb-6 opacity-30 group-hover:opacity-100 transition-opacity">0{step}</div>
                  <p className="text-lg font-bold leading-tight">{t(`roadmap.step${step}`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="max-w-3xl mx-auto px-8 py-40 text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12">
            {t('closing.content')}
          </h2>
          <a href="#demo" className="inline-block px-8 py-4 border-2 border-slate-900 rounded-full font-bold hover:bg-slate-900 hover:text-white transition-all">
            {t('hero.ctaGuide')}
          </a>
        </section>

        {/* Footer */}
        <footer className="max-w-5xl mx-auto px-8 py-12 border-t border-slate-100 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-slate-400">
          <div className="flex items-center gap-2">
            <OnriviLogo className="w-5 h-5" />
            <span>{t('company')}</span>
          </div>
          <div className="flex gap-8">
            <a href="mailto:firstonrivi@onrivi.com" className="hover:text-blue-600 transition-colors">firstonrivi@onrivi.com</a>
            <Link to="/terms" className="hover:text-slate-900 transition-colors">{t('footer.terms')}</Link>
            <Link to="/privacy" className="hover:text-slate-900 transition-colors">{t('footer.privacy')}</Link>
          </div>
          <div className="flex items-center gap-2">
            <span>{t('footer.copy')}</span>
            <Link to="/admin" className="opacity-0 hover:opacity-10 pointer-events-auto cursor-default text-[8px] transition-opacity">admin</Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
