import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Sparkles, Heart, ArrowRight, Zap, Target, Cpu, Workflow, UserCheck, Languages } from 'lucide-react';

const OnriviLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <div className={`${className} bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 overflow-hidden relative`}>
    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
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
          <span className="text-lg font-bold tracking-tight">{t('company')}</span>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6 text-xs font-bold uppercase tracking-widest text-slate-400">
            <a href="#identity" className="hover:text-blue-600 transition-colors">{t('nav.intro')}</a>
            <a href="#mission" className="hover:text-blue-600 transition-colors">{t('nav.mission')}</a>
            <a href="#values" className="hover:text-blue-600 transition-colors">{t('nav.values')}</a>
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
        <section className="max-w-5xl mx-auto px-8 py-20 text-center">
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
            <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25">
              {t('hero.ctaStart')}
            </button>
          </motion.div>
        </section>

        {/* Identity & Mission */}
        <section id="identity" className="max-w-5xl mx-auto px-8 py-40 grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">{t('identity.title')}</h2>
            <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100 bg-slate-50">
              <img 
                src="https://picsum.photos/seed/identity-vision/800/600" 
                alt="Identity Vision" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          <motion.div 
            id="mission"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">{t('mission.title')}</h2>
            <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100 bg-slate-50">
              <img 
                src="https://picsum.photos/seed/mission-future/800/600" 
                alt="Mission Future" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </section>

        {/* Values */}
        <section id="values" className="bg-slate-50 py-40">
          <div className="max-w-5xl mx-auto px-8">
            <div className="grid md:grid-cols-3 gap-12">
              {keyValues.map((val, i) => (
                <div key={i} className="space-y-6">
                  <div className="w-10 h-10 text-blue-600">{val.icon}</div>
                  <h3 className="text-xl font-bold">{val.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech */}
        <section className="max-w-5xl mx-auto px-8 py-40">
          <div className="grid md:grid-cols-3 gap-12">
            {techFocus.map((tech, i) => (
              <div key={i} className="space-y-6">
                <div className="w-10 h-10 text-slate-300">{tech.icon}</div>
                <h3 className="text-xl font-bold">{tech.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing */}
        <section className="max-w-3xl mx-auto px-8 py-40 text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12">
            {t('closing.content')}
          </h2>
          <button className="px-8 py-4 border-2 border-slate-900 rounded-full font-bold hover:bg-slate-900 hover:text-white transition-all">
            {t('hero.ctaGuide')}
          </button>
        </section>

        {/* Footer */}
        <footer className="max-w-5xl mx-auto px-8 py-12 border-t border-slate-100 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-slate-400">
          <div className="flex items-center gap-2">
            <OnriviLogo className="w-5 h-5" />
            <span>{t('company')}</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-900">{t('footer.terms')}</a>
            <a href="#" className="hover:text-slate-900">{t('footer.privacy')}</a>
          </div>
          <div>{t('footer.copy')}</div>
        </footer>
      </main>
    </div>
  );
}
