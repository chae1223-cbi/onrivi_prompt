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
    <section id="overview" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-circuit selection:bg-onrivi-yellow/40">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-onrivi-yellow/[0.03] via-transparent to-onrivi-mint/[0.03] -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-10 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl">
              <span className="w-2.5 h-2.5 rounded-full bg-onrivi-yellow animate-pulse shadow-[0_0_12px_rgba(255,214,0,0.8)]" />
              <span className="text-white text-[10px] font-black tracking-[0.2em] uppercase">
                {t('hero.badge')} • Human-Centric
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-10 leading-[1] whitespace-pre-line">
              꿈에 <span className="text-onrivi-yellow italic">온기</span>를,<br />
              기술에 <span className="onrivi-gradient-text">생명</span>을.
            </h1>

            <p className="max-w-xl text-xl text-white/60 mb-12 leading-relaxed font-medium border-l-4 border-onrivi-yellow/40 pl-8">
              데이터의 차가움을 넘어 당신의 이야기가 흐르는 공간.<br />
              온리비는 AI 시대를 살아가는 당신의 가장 따뜻한 지적 자산 파트너입니다.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-5">
              <a
                href="https://prompt.onrivi.com"
                className="group relative w-full sm:w-auto px-12 py-5 overflow-hidden rounded-3xl bg-onrivi-yellow text-black font-black text-base transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_-10px_rgba(255,214,0,0.3)] flex items-center justify-center gap-3"
              >
                {t('hero.ctaStart')}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </a>
              <button className="w-full sm:w-auto px-10 py-5 rounded-3xl bg-white/[0.03] border border-white/10 text-white font-bold text-base hover:bg-white/10 transition-all">
                Brand Story
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 floating-element p-10 rounded-[4rem] glass-premium border-onrivi-yellow/20">
              <div className="absolute inset-0 bg-gradient-to-br from-onrivi-yellow/10 to-transparent blur-[120px] -z-10" />

              <div className="space-y-8">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-3xl bg-onrivi-yellow flex items-center justify-center shadow-2xl shadow-onrivi-yellow/40 rotate-3">
                    <Rocket className="text-black w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] mb-1">Empowering Humanity</div>
                    <div className="text-2xl font-black text-white tracking-tight italic">Beyond Intelligence</div>
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-onrivi-yellow/30 via-white/10 to-transparent w-full" />
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-md">
                    <div className="text-[10px] font-black text-onrivi-mint uppercase mb-2 tracking-widest text-center">Stability</div>
                    <div className="text-3xl font-black text-white text-center">99.9%</div>
                  </div>
                  <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-md">
                    <div className="text-[10px] font-black text-onrivi-yellow uppercase mb-2 tracking-widest text-center">Speed</div>
                    <div className="text-3xl font-black text-white text-center">0.02s</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-16 -left-16 p-8 rounded-[2.5rem] glass-warm floating-element [animation-delay:2s] border-onrivi-yellow/30">
              <Zap className="text-onrivi-yellow w-10 h-10 fill-onrivi-yellow/20" />
            </div>
            <div className="absolute -bottom-12 right-16 p-6 rounded-full glass-premium floating-element [animation-delay:4s] border-onrivi-mint/30 shadow-[0_0_40px_rgba(0,245,160,0.2)]">
              <div className="w-4 h-4 rounded-full bg-onrivi-mint shadow-lg shadow-onrivi-mint" />
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
    <section id="mission" className="py-24 md:py-40 relative bg-warm-cream-canvas">
      <div className="absolute left-0 top-0 w-[40%] h-full bg-onrivi-yellow/[0.03] pointer-events-none blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] md:aspect-[3/4] rounded-[4rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] relative group">
              <img
                src="/brain/9a828d40-cf94-479a-9c43-a8bf425eec8a/onrivi_warm_human_story_1772982074973.png"
                alt="Human-Centric Tech Atmosphere"
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-zinc-900/20 to-transparent" />
              <div className="absolute bottom-10 left-10 p-8 glass-warm-intensive rounded-[2.5rem] max-w-[80%] border-white/40">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-onrivi-yellow shadow-[0_0_10px_rgba(255,214,0,0.8)]" />
                  <span className="text-[11px] font-black text-zinc-600 uppercase tracking-[0.25em]">Human Connection</span>
                </div>
                <p className="text-xl font-bold text-zinc-900 leading-snug">
                  "기술이 머무는 곳에 당신의 일상이 더 빛나도록."
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-12"
          >
            <div className="relative">
              <span className="text-[11px] font-black text-onrivi-yellow/80 uppercase tracking-[0.4em] mb-4 block">The Warmth of Tech</span>
              <h2 className="text-4xl md:text-6xl font-black text-zinc-950 leading-[1.1] tracking-tight">
                기능을 넘어,<br />
                당신을 <span className="text-onrivi-yellow shadow-onrivi-yellow/10">이해하는</span> AI.
              </h2>
            </div>

            <div className="space-y-10">
              <div className="flex gap-6 group">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-zinc-100 flex items-center justify-center group-hover:bg-onrivi-yellow/10 transition-colors border border-zinc-200">
                  <User className="text-zinc-400 group-hover:text-onrivi-yellow w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-zinc-900 mb-2">당신을 위한 편안한 질감</h4>
                  <p className="text-zinc-500 leading-relaxed font-medium">
                    눈이 편안한 색감과 부드러운 레이아웃은 당신의 창의적인 흐름을 방해하지 않습니다.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-zinc-100 flex items-center justify-center group-hover:bg-onrivi-yellow/10 transition-colors border border-zinc-200">
                  <BookOpen className="text-zinc-400 group-hover:text-onrivi-yellow w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-zinc-900 mb-2">지적 동반자로서의 이야기</h4>
                  <p className="text-zinc-500 leading-relaxed font-medium">
                    데이터의 나열이 아닌, 당신의 성장을 돕는 친절한 가이드를 제공합니다.
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <button className="flex items-center gap-4 text-zinc-900 font-black text-sm uppercase group tracking-widest leading-none">
                  Learn about our philosophy
                  <div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              </div>
            </div>
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
      features: ["지능형 계층 구조 관리", "동적 변수 시스템 ({{...}})", "실시간 멀티 디바이스 동기화"],
      icon: <Cpu className="w-8 h-8 text-emerald-400" />,
      type: "SaaS Platform"
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
              <a
                href="https://prompt.onrivi.com"
                className="w-full md:w-auto px-7 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-black hover:bg-white hover:text-black transition-all shrink-0 flex items-center justify-center"
              >
                자세히 보기
              </a>
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
      desc: "개인 창작자를 위한 무료 시작 플랜",
      features: ["무제한 프롬프트 저장", "웹 대시보드 제공", "커뮤니티 가이드"],
      cta: "무료로 시작하기",
      highlight: false
    },
    {
      name: "Pro",
      price: "29,000",
      desc: "전문적인 AI 자산 관리를 위한 올인원 SaaS",
      features: ["초고속 클라우드 동기화", "팀 협업 도구 지원", "고급 동적 변수 시스템", "우선 기술 지원"],
      cta: "지금 구독하기",
      highlight: true
    },
    {
      name: "Enterprise",
      price: "별도 문의",
      desc: "기업용 보안 및 커스텀 클라우드 솔루션",
      features: ["전용 클라우드 인프라", "SSO 및 보안 정책 적용", "1:1 전담 매니저", "99.9% SLA 보장"],
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
                onClick={() => window.location.href = "https://prompt.onrivi.com"}
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
