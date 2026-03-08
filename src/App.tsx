import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Rocket,
  Shield,
  Zap,
  Layers,
  Cpu,
  BookOpen,
  ArrowRight,
  Check,
  Menu,
  X,
  Lock,
  Globe,
  Database,
  User,
  LogOut,
  CreditCard
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

// --- Types ---
interface MockUser {
  displayName: string | null;
  photoURL: string | null;
  email: string | null;
}

// --- Components ---

const AuthModal = ({ isOpen, onClose, onLogin }: { isOpen: boolean; onClose: () => void; onLogin: (user: MockUser) => void }) => {
  const { t } = useTranslation();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-md bg-zinc-900 border border-white/10 rounded-[2.5rem] p-10 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 to-blue-500" />
        <button onClick={onClose} className="absolute top-6 right-6 text-white/40 hover:text-white">
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-10">
          <div className="w-10 h-10 mx-auto mb-4">
            <img src="/logo.png" alt={t('company')} className="w-full h-full object-contain rounded-lg shadow-md shadow-emerald-500/5" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Welcome to Onrivi</h2>
          <p className="text-white/60">{t('hero.description')}</p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => {
              onLogin({
                displayName: "Onrivi User",
                photoURL: null,
                email: "user@onrivi.com"
              });
              onClose();
            }}
            className="w-full py-4 rounded-2xl bg-white text-black font-bold flex items-center justify-center gap-3 hover:bg-emerald-400 transition-all"
          >
            <img src="https://www.google.com/favicon.ico" className="w-5 h-5" alt="Google" />
            Google로 계속하기 (데모)
          </button>

          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="bg-zinc-900 px-2 text-white/40 tracking-widest">Or</span></div>
          </div>

          <button className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all">
            이메일로 가입하기
          </button>
        </div>

        <p className="mt-8 text-center text-xs text-white/40">
          계속함으로써 온리비의 <Link to="/terms" className="underline">서비스 약관</Link> 및 <Link to="/privacy" className="underline">개인정보 처리방침</Link>에 동의하게 됩니다.
        </p>
      </motion.div>
    </div>
  );
};

const PaymentModal = ({ isOpen, onClose, plan }: { isOpen: boolean; onClose: () => void; plan: any }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-md bg-zinc-900 border border-white/10 rounded-[2.5rem] p-10 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 to-blue-500" />
        <button onClick={onClose} className="absolute top-6 right-6 text-white/40 hover:text-white">
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <CreditCard className="text-blue-400 w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">결제하기</h2>
          <p className="text-white/60">{plan.name} 플랜 구독을 시작합니다</p>
        </div>

        <div className="bg-white/5 rounded-2xl p-6 mb-8 border border-white/5">
          <div className="flex justify-between items-center mb-4">
            <span className="text-white/60">선택한 플랜</span>
            <span className="font-bold text-white">{plan.name}</span>
          </div>
          <div className="flex justify-between items-center pt-4 border-t border-white/5">
            <span className="text-white/60">결제 금액</span>
            <span className="text-2xl font-bold text-emerald-400">₩{plan.price}</span>
          </div>
        </div>

        <button
          onClick={() => {
            alert('결제가 완료되었습니다! (데모)');
            onClose();
          }}
          className="w-full py-4 rounded-2xl bg-emerald-500 text-black font-bold hover:bg-emerald-400 transition-all"
        >
          결제 완료하기
        </button>
      </motion.div>
    </div>
  );
};

const Navbar = ({ onAuthClick, user, onLogout }: { onAuthClick: () => void; user: MockUser | null; onLogout: () => void }) => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/60 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="relative p-2 rounded-2xl bg-white/5 border border-white/10 group-hover:border-onrivi-yellow/50 transition-all">
            <img src="/logo.png" alt={t('company')} className="w-6 h-6 object-contain transition-transform duration-700 group-hover:rotate-[360deg]" />
          </div>
          <div className="flex flex-col -gap-1">
            <span className="text-sm font-black tracking-tighter text-white uppercase group-hover:text-onrivi-yellow transition-colors">{t('company')}</span>
            <span className="text-[8px] font-bold text-white/30 tracking-[0.2em] uppercase">Human-Centric AI</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8 px-6 py-2 rounded-full bg-white/5 border border-white/5 group/nav">
            <a href="#overview" className="text-[10px] font-bold text-white/50 hover:text-onrivi-yellow transition-all uppercase tracking-widest leading-none">Story</a>
            <a href="#mission" className="text-[10px] font-bold text-white/50 hover:text-onrivi-yellow transition-all uppercase tracking-widest leading-none">Vision</a>
            <a href="#products" className="text-[10px] font-bold text-white/50 hover:text-onrivi-yellow transition-all uppercase tracking-widest leading-none">Assets</a>
            <a href="#pricing" className="text-[10px] font-bold text-white/50 hover:text-onrivi-yellow transition-all uppercase tracking-widest leading-none">Pricing</a>
          </div>

          <div className="flex items-center gap-2 p-1 rounded-full bg-white/5 border border-white/5">
            <button onClick={() => toggleLanguage('ko')} className={`px-3 py-1.5 rounded-full text-[9px] font-black transition-all ${i18n.language === 'ko' ? 'bg-onrivi-yellow text-black' : 'text-white/30 hover:text-white'}`}>KO</button>
            <button onClick={() => toggleLanguage('en')} className={`px-3 py-1.5 rounded-full text-[9px] font-black transition-all ${i18n.language === 'en' ? 'bg-onrivi-yellow text-black' : 'text-white/30 hover:text-white'}`}>EN</button>
          </div>

          {user ? (
            <div className="flex items-center gap-4">
              <button onClick={onLogout} className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white/40 hover:text-onrivi-yellow hover:border-onrivi-yellow/50 transition-all">
                <LogOut className="w-4 h-4" />
              </button>
              <div className="w-8 h-8 rounded-full border-2 border-onrivi-yellow/30 p-0.5 overflow-hidden">
                <div className="w-full h-full rounded-full bg-zinc-800 flex items-center justify-center overflow-hidden">
                  {user.photoURL ? <img src={user.photoURL} alt="" /> : <User className="w-4 h-4 text-onrivi-yellow" />}
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={onAuthClick}
              className="px-5 py-2 rounded-full bg-onrivi-yellow text-black text-[10px] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-onrivi-yellow/20"
            >
              Start Creating
            </button>
          )}
        </div>

        <button className="md:hidden text-white p-2 rounded-xl bg-white/5" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-zinc-900 border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            <a href="#overview" onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold text-white/70">Overview</a>
            <a href="#mission" onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold text-white/70">Mission</a>
            <a href="#products" onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold text-white/70">Products</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold text-white/70">Pricing</a>
            {user ? (
              <button onClick={onLogout} className="w-full py-4 rounded-xl bg-white/5 text-white font-black">Logout</button>
            ) : (
              <button onClick={() => { onAuthClick(); setMobileMenuOpen(false); }} className="w-full py-4 rounded-xl bg-emerald-500 text-black font-black">Get Started</button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onAuthClick }: { onAuthClick: () => void }) => {
  const { t } = useTranslation();
  return (
    <section id="overview" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-circuit">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-onrivi-yellow/5 border border-onrivi-yellow/20 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-onrivi-yellow animate-pulse" />
              <span className="text-onrivi-yellow text-[10px] font-black tracking-widest uppercase">
                {t('hero.badge')}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-8 leading-[1.05]">
              기술에 <span className="text-onrivi-yellow italic">인간의 숨결</span>을<br />
              더하는 <span className="onrivi-gradient-text">하이테크 혁명.</span>
            </h1>

            <p className="max-w-xl text-lg text-white/60 mb-12 leading-relaxed font-medium border-l-2 border-onrivi-yellow/30 pl-6">
              정적인 도구를 넘어, 당신의 창의성이 살아 움직이는 디지털 자산이 되는 공간. 온리비는 1인 기업가들의 가장 신뢰할 수 있는 지적 파트너입니다.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onAuthClick}
                className="group relative w-full sm:w-auto px-10 py-4 overflow-hidden rounded-2xl bg-onrivi-yellow text-black font-black text-sm transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-onrivi-yellow/20"
              >
                <div className="relative z-10 flex items-center justify-center gap-2">
                  {t('hero.ctaStart')}
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </div>
              </button>
              <button className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                Brand Story
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 floating-element p-8 rounded-[3rem] glass-premium">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-onrivi-yellow/20 blur-[80px] -z-10" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-onrivi-mint/20 blur-[80px] -z-10" />

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-onrivi-yellow flex items-center justify-center shadow-lg shadow-onrivi-yellow/20">
                    <Rocket className="text-black w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-white/30 uppercase tracking-widest">Growth Engine</div>
                    <div className="text-xl font-bold text-white tracking-tight">Onrivi Intelligence</div>
                  </div>
                </div>
                <div className="h-px bg-white/10 w-full" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <div className="text-[9px] font-bold text-onrivi-mint uppercase mb-1">Efficiency</div>
                    <div className="text-2xl font-black text-white">+142%</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <div className="text-[9px] font-bold text-onrivi-yellow uppercase mb-1">Safety</div>
                    <div className="text-2xl font-black text-white">99.9%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 비정형 장식 요소 */}
            <div className="absolute -top-12 -left-12 p-6 rounded-3xl glass-warm floating-element [animation-delay:2s]">
              <Zap className="text-onrivi-yellow w-8 h-8" />
            </div>
            <div className="absolute -bottom-8 right-12 p-4 rounded-2xl glass-premium floating-element [animation-delay:4s]">
              <div className="w-3 h-3 rounded-full bg-onrivi-mint" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MissionVision = () => {
  const { t } = useTranslation();
  return (
    <section id="mission" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[50%] h-full bg-onrivi-yellow/[0.02] -z-10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="relative">
              <div className="absolute -left-6 top-0 w-1 h-12 bg-onrivi-yellow rounded-full" />
              <h2 className="text-xs font-black text-onrivi-yellow uppercase tracking-[0.3em] mb-4">Our Core Story</h2>
              <h3 className="text-3xl md:text-5xl font-black text-white leading-[1.1] tracking-tight">
                단순한 코드가 아닌,<br />
                당신의 <span className="text-onrivi-yellow italic">영감이 자산</span>이 되는 곳.
              </h3>
            </div>

            <div className="grid gap-8">
              <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-onrivi-yellow/20 transition-all">
                <h4 className="text-xs font-black text-white/30 uppercase tracking-widest mb-3">Our Mission</h4>
                <p className="text-lg text-white/80 leading-relaxed font-medium">
                  {t('hero.description')}
                </p>
              </div>
              <div className="p-8 rounded-[2rem] bg-onrivi-yellow/[0.03] border border-onrivi-yellow/10 hover:border-onrivi-yellow/30 transition-all ml-4 md:ml-8 lg:ml-12">
                <h4 className="text-xs font-black text-onrivi-yellow/50 uppercase tracking-widest mb-3">Our Vision</h4>
                <p className="text-lg text-white/80 leading-relaxed font-medium">
                  전 세계 모든 AI 사용자가 자신의 창의성을 가장 완벽하게 보관하고 활용할 수 있는 글로벌 No.1 프롬프트 관리 플랫폼 기업으로 도약합니다.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 relative group">
              <img
                src="/brain/9a828d40-cf94-479a-9c43-a8bf425eec8a/onrivi_human_centric_tech_1772980512657.png"
                alt="Human-Centric AI Vision"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8 right-8 p-6 glass-premium rounded-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-onrivi-mint" />
                  <span className="text-[10px] font-black text-white/50 uppercase tracking-widest">Human & AI Synergy</span>
                </div>
                <p className="text-sm font-bold text-white leading-snug">
                  "기술은 수단일 뿐, 온리비는 당신의 다음 위대한 성취를 설계합니다."
                </p>
              </div>
            </div>

            {/* 비대칭 장식 요소 */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-onrivi-yellow/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CoreValues = () => {
  const { t } = useTranslation();
  const values = [
    {
      title: t('values.v1.title'),
      desc: t('values.v1.desc'),
      icon: <Zap className="w-6 h-6 text-emerald-400" />,
      tag: "프리미엄 경험"
    },
    {
      title: t('values.v2.title'),
      desc: t('values.v2.desc'),
      icon: <Lock className="w-6 h-6 text-blue-400" />,
      tag: "철저한 보안"
    },
    {
      title: t('values.v3.title'),
      desc: t('values.v3.desc'),
      icon: <Layers className="w-6 h-6 text-purple-400" />,
      tag: "하이브리드 혁신"
    }
  ];

  return (
    <section className="py-20 border-b border-white/5 bg-zinc-950/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-tight">핵심 가치</h2>
          <p className="text-xs font-bold text-white/30 uppercase tracking-[0.2em]">Our Core Philosophy</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-7 rounded-[1.5rem] bg-zinc-900/50 border border-white/5 hover:border-emerald-500/30 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-emerald-500/10 transition-colors">
                {v.icon}
              </div>
              <span className="text-[10px] font-black text-emerald-500/80 uppercase tracking-widest mb-3 block">{v.tag}</span>
              <h3 className="text-lg font-bold text-white mb-3">{v.title}</h3>
              <p className="text-xs text-white/40 leading-relaxed font-medium">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Products = () => {
  const { t } = useTranslation();
  const products = [
    {
      name: t('services.s1.title'),
      desc: t('services.s1.desc'),
      features: ["계층 구조 탐색기", "동적 변수 ({{...}})", "데스크톱 & 클라우드 연동"],
      icon: <Cpu className="w-8 h-8 text-emerald-400" />,
      type: "주력 상품"
    }
  ];

  return (
    <section id="products" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-tight">제품 및 서비스</h2>
            <p className="text-sm text-white/40 leading-relaxed">프롬프트를 넘어, 당신의 아이디어를 체계적인 지적 자산으로 전환하는 가장 완벽한 방법을 제안합니다.</p>
          </div>
          <div className="h-px flex-1 bg-white/5 mx-8 hidden md:block mb-4" />
          <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-1">Product Lineup</span>
        </div>

        <div className="space-y-6">
          {products.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 md:p-8 rounded-[1.5rem] bg-zinc-900/80 border border-white/5 hover:border-white/10 flex flex-col md:flex-row gap-8 items-center group transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/10 transition-colors">
                {p.icon}
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                  <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">{p.type}</span>
                  <div className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">v1.0 Ready</span>
                </div>
                <h3 className="text-xl font-black text-white mb-3">{p.name}</h3>
                <p className="text-sm text-white/50 mb-6 max-w-2xl leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {p.features.map((f, fi) => (
                    <span key={fi} className="px-3 py-1 rounded-lg bg-white/5 text-white/40 text-[10px] font-bold border border-white/10">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
              <button className="w-full md:w-auto px-7 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-black hover:bg-white hover:text-black transition-all shrink-0">
                자세히 보기
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = ({ onSelectPlan }: { onSelectPlan: (plan: any) => void }) => {
  const plans = [
    {
      name: "Starter",
      price: "0",
      desc: "개인 창작자를 위한 시작 플랜",
      features: ["기본 프롬프트 관리", "로컬 저장소 지원", "커뮤니티 가이드"],
      cta: "무료로 시작하기",
      highlight: false
    },
    {
      name: "Pro",
      price: "29,000",
      desc: "전문적인 AI 자산 관리를 위한 플랜",
      features: ["무제한 계층 구조", "클라우드 동기화", "동적 변수 시스템", "우선 지원"],
      cta: "지금 구독하기",
      highlight: true
    },
    {
      name: "Enterprise",
      price: "별도 문의",
      desc: "기업용 보안 및 커스텀 솔루션",
      features: ["커스텀 AI 프록시", "사용자 격리 설계", "전담 매니저 지원", "SLA 보장"],
      cta: "문의하기",
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">요금제</h2>
          <p className="text-white/60">당신의 성장에 맞는 최적의 플랜을 선택하세요</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <div
              key={i}
              className={`p-10 rounded-[2.5rem] flex flex-col ${p.highlight ? 'bg-emerald-500 text-black' : 'bg-zinc-900 text-white border border-white/5'}`}
            >
              <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
              <p className={`text-sm mb-8 ${p.highlight ? 'text-black/70' : 'text-white/50'}`}>{p.desc}</p>
              <div className="mb-8">
                <span className="text-4xl font-bold">₩{p.price}</span>
                {p.price !== "별도 문의" && <span className="text-sm font-medium"> / 월</span>}
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                {p.features.map((f, fi) => (
                  <li key={fi} className="flex items-center gap-3 text-sm font-medium">
                    <Check className={`w-5 h-5 ${p.highlight ? 'text-black' : 'text-emerald-500'}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => onSelectPlan(p)}
                className={`w-full py-4 rounded-2xl font-bold transition-all ${p.highlight ? 'bg-black text-white hover:bg-zinc-800' : 'bg-white text-black hover:bg-emerald-400'}`}
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="py-12 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt={t('company')} className="w-8 h-8 object-contain rounded-lg" />
            <span className="text-lg font-bold tracking-tighter text-white uppercase">{t('company')}</span>
          </div>
          <p className="text-white/40 text-sm">
            {t('footer.copy')}
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-white/40 hover:text-white transition-colors">{t('footer.privacy')}</Link>
            <Link to="/terms" className="text-white/40 hover:text-white transition-colors">{t('footer.terms')}</Link>
            <a href="mailto:support@onrivi.com" className="text-white/40 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Overview = () => {
  const { t } = useTranslation();
  return (
    <section id="overview-detail" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-zinc-900 to-black border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[100px] -z-10 group-hover:bg-emerald-500/10 transition-colors" />
          <div className="max-w-3xl">
            <h2 className="text-sm font-bold text-emerald-500 uppercase tracking-widest mb-6">Overview</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              "{t('hero.badge')}"<br />
              <span className="text-white/40">(Beyond Prompts, Into Assets)</span>
            </h3>
            <p className="text-xl text-white/70 leading-relaxed mb-8">
              {t('hero.description')}
            </p>
            <p className="text-lg text-white/50 leading-relaxed">
              1인 기업 특유의 기동성과 대규모 SaaS 인프라의 안정성을 결합하여, 사용자가 AI 시대의 핵심 지적 자산을 가장 완벽하게 보관하고 활용할 수 있는 최적의 환경을 구축하고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Main App ---

export default function App() {
  const { t } = useTranslation();
  const [user, setUser] = useState<MockUser | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);

  const handleSelectPlan = (plan: any) => {
    if (!user) {
      setIsAuthModalOpen(true);
    } else {
      setSelectedPlan(plan);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-500/30">
      <Navbar
        onAuthClick={() => setIsAuthModalOpen(true)}
        user={user}
        onLogout={() => setUser(null)}
      />
      <Hero onAuthClick={() => setIsAuthModalOpen(true)} />
      <Overview />
      <MissionVision />
      <CoreValues />
      <Products />
      <Pricing onSelectPlan={handleSelectPlan} />

      <section className="py-24 bg-emerald-500 text-black text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
            {t('closing.title')}
          </h2>
          <p className="text-xl font-medium mb-12 text-black/80">
            {t('closing.content')}
          </p>
          <button
            onClick={() => user ? document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }) : setIsAuthModalOpen(true)}
            className="px-12 py-5 rounded-full bg-black text-white font-bold text-xl hover:bg-zinc-800 transition-all shadow-2xl"
          >
            지금 시작하기
          </button>
        </div>
      </section>

      <Footer />

      <AnimatePresence>
        {isAuthModalOpen && (
          <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} onLogin={(u) => setUser(u)} />
        )}
        {selectedPlan && (
          <PaymentModal isOpen={!!selectedPlan} onClose={() => setSelectedPlan(null)} plan={selectedPlan} />
        )}
      </AnimatePresence>
    </div>
  );
}
