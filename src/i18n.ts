import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      brand: "Onrivi Prompt",
      company: "onrivi",
      slogan: "Future Tech, Daily Life",
      nav: {
        intro: "Identity",
        mission: "Mission",
        values: "Values",
        tech: "Tech",
        try: "Start"
      },
      hero: {
        badge: "Operating New Reality",
        title: "Connect Future,",
        titleAccent: "Operate Today",
        description: "onrivi redefines reality through intelligent interfaces. We turn future potential into daily enrichment.",
        ctaStart: "Get Started",
        ctaGuide: "Profile"
      },
      identity: {
        title: "Identity",
        content: "onrivi (Intelligent Visionary Interface) redefines reality. We remove complexity to provide intuitive connections."
      },
      mission: {
        title: "Mission",
        content: "We help you operate your 'New Reality' more efficiently using 'Visionary Interface'."
      },
      values: {
        title: "Values",
        v1: {
          title: "Intelligent",
          desc: "Simplifying complex processes with AI for professional results."
        },
        v2: {
          title: "Visionary",
          desc: "Innovative interfaces that lower the barrier to technology."
        },
        v3: {
          title: "Enrichment",
          desc: "Focusing on making life more valuable through technology."
        }
      },
      tech: {
        title: "Focus",
        f1: {
          title: "Optimization",
          desc: "Solving business problems with intelligent interfaces."
        },
        f2: {
          title: "Everyday AI",
          desc: "Implementing cutting-edge tech for immediate experience."
        },
        f3: {
          title: "Seamless",
          desc: "Technology that blends naturally into your daily life."
        }
      },
      closing: {
        title: "Promise",
        content: "Technology as a key, not a barrier. Your future becomes reality now."
      },
      footer: {
        terms: "Terms",
        privacy: "Privacy",
        contact: "Contact",
        copy: "© 2026 onrivi."
      }
    }
  },
  ko: {
    translation: {
      brand: "Onrivi Prompt",
      company: "onrivi",
      slogan: "미래 기술, 일상이 되다",
      nav: {
        intro: "정체성",
        mission: "미션",
        values: "가치",
        tech: "역량",
        try: "시작"
      },
      hero: {
        badge: "Operating New Reality",
        title: "미래를 연결하여",
        titleAccent: "오늘을 운영하다",
        description: "온리비(onrivi)는 지능형 인터페이스로 현실을 새롭게 정의합니다. 기술의 잠재력을 일상의 윤택함으로 바꿉니다.",
        ctaStart: "시작하기",
        ctaGuide: "소개서"
      },
      identity: {
        title: "Identity",
        content: "onrivi는 지능적 인터페이스를 통해 현실을 재정의합니다. 복잡함을 걷어내고 직관적인 연결을 제공합니다."
      },
      mission: {
        title: "Mission",
        content: "‘미래 기술’을 도구 삼아, 당신의 ‘현재 일상’을 더 효율적으로 운영하도록 돕습니다."
      },
      values: {
        title: "Values",
        v1: {
          title: "지능형 운영",
          desc: "AI 기술로 복잡한 프로세스를 단순화하여 최적의 환경을 제공합니다."
        },
        v2: {
          title: "미래형 접점",
          desc: "혁신적 인터페이스로 기술 활용의 진입장벽을 낮춥니다."
        },
        v3: {
          title: "현실의 풍요",
          desc: "기술을 통해 사용자의 삶을 더 가치 있게 만드는 데 집중합니다."
        }
      },
      tech: {
        title: "Focus",
        f1: {
          title: "현실 최적화",
          desc: "지능형 인터페이스로 비즈니스와 일상의 효율을 극대화합니다."
        },
        f2: {
          title: "기술의 일상화",
          desc: "최첨단 기술을 즉각 체감할 수 있는 형태로 구현합니다."
        },
        f3: {
          title: "심리스 경험",
          desc: "기술이 일상에 자연스럽게 녹아드는 편리함을 선사합니다."
        }
      },
      closing: {
        title: "Promise",
        content: "기술은 장벽이 아닌 열쇠입니다. 당신의 미래는 지금 이 순간 현실이 됩니다."
      },
      footer: {
        terms: "약관",
        privacy: "개인정보",
        contact: "문의",
        copy: "© 2026 onrivi."
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ko',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
