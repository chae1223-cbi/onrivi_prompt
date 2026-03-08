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
          <div className="w-16 h-16 mx-auto mb-6">
            <img src="/logo.png" alt={t('company')} className="w-full h-full object-contain rounded-xl shadow-lg shadow-emerald-500/10" />
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            <img src="/logo.png" alt={t('company')} className="w-9 h-9 object-contain rounded-lg transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-emerald-500/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="text-lg font-bold tracking-tighter text-white uppercase">{t('company')}</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#overview" className="text-sm font-medium text-white/70 hover:text-white transition-colors">{t('nav.intro')}</a>
          <a href="#mission" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Mission</a>
          <a href="#products" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Products</a>
          <a href="#pricing" className="text-sm font-medium text-white/70 hover:text-white transition-colors">{t('nav.pricing')}</a>

          <div className="flex items-center gap-2 bg-white/5 p-1 rounded-full border border-white/10">
            <button onClick={() => toggleLanguage('ko')} className={`px-3 py-1 rounded-full text-[10px] font-black transition-all ${i18n.language === 'ko' ? 'bg-white text-black' : 'text-white/40 hover:text-white'}`}>KO</button>
            <button onClick={() => toggleLanguage('en')} className={`px-3 py-1 rounded-full text-[10px] font-black transition-all ${i18n.language === 'en' ? 'bg-white text-black' : 'text-white/40 hover:text-white'}`}>EN</button>
          </div>

          {user ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center overflow-hidden">
                  {user.photoURL ? <img src={user.photoURL} alt="" /> : <User className="w-4 h-4 text-black" />}
                </div>
                <span className="text-sm font-medium text-white/80">{user.displayName || 'User'}</span>
              </div>
              <button onClick={onLogout} className="p-2 rounded-full hover:bg-white/5 text-white/40 hover:text-white transition-all">
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <button
              onClick={onAuthClick}
              className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-emerald-400 transition-colors"
            >
              Get Started
            </button>
          )}
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
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
    <section id="overview" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-widest uppercase">
            {t('hero.badge')}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
            {t('hero.title')}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
              {t('hero.titleAccent')}
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 mb-10 leading-relaxed">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={onAuthClick} className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-500 text-black font-bold text-lg hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 group">
              {t('hero.ctaStart')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all">
              {t('hero.ctaGuide')}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const MissionVision = () => {
  const { t } = useTranslation();
  return (
    <section id="mission" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-sm font-bold text-emerald-500 uppercase tracking-widest mb-4">Our Mission</h2>
              <p className="text-3xl md:text-4xl font-bold text-white leading-tight">
                {t('hero.description').slice(0, 50)}...
              </p>
            </div>
            <div>
              <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-4">Our Vision</h2>
              <p className="text-xl text-white/70">
                전 세계 모든 AI 사용자가 자신의 창의성을 가장 완벽하게 보관하고 활용할 수 있는 글로벌 No.1 프롬프트 관리 플랫폼 기업으로 도약합니다.
              </p>
            </div>
          </motion.div>
          <div className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 opacity-50 group-hover:opacity-70 transition-opacity" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20">
                <Rocket className="w-10 h-10 text-emerald-400" />
              </div>
            </div>
          </div>
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
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">핵심 가치</h2>
          <p className="text-white/60">온리비가 추구하는 세 가지 철학</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {v.icon}
              </div>
              <span className="text-xs font-bold text-white/40 uppercase tracking-widest mb-2 block">{v.tag}</span>
              <h3 className="text-2xl font-bold text-white mb-4">{v.title}</h3>
              <p className="text-white/60 leading-relaxed">{v.desc}</p>
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
    <section id="products" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">제품 및 서비스</h2>
          <p className="text-white/60">당신의 아이디어를 체계적인 데이터로 관리하세요</p>
        </div>
        <div className="space-y-8">
          {products.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-[2rem] bg-zinc-900 border border-white/5 flex flex-col md:flex-row gap-8 items-center"
            >
              <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center shrink-0">
                {p.icon}
              </div>
              <div className="flex-1 text-center md:text-left">
                <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest mb-2 block">{p.type}</span>
                <h3 className="text-3xl font-bold text-white mb-4">{p.name}</h3>
                <p className="text-lg text-white/60 mb-6 max-w-2xl">{p.desc}</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  {p.features.map((f, fi) => (
                    <span key={fi} className="px-4 py-1.5 rounded-full bg-white/5 text-white/80 text-sm border border-white/10">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
              <button className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-emerald-400 transition-colors shrink-0">
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
      <Navbar onAuthClick={() => setIsAuthModalOpen(true)} user={user} onLogout={() => setUser(null)} />
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
