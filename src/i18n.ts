import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      brand: "OnriviPrompt",
      company: "Onrivi",
      slogan: "Beyond Prompts, Into Assets",
      nav: {
        intro: "Intro",
        features: "Features",
        pricing: "Pricing",
        roadmap: "Roadmap",
        support: "Support",
      },
      hero: {
        badge: "Beyond Prompts, Into Assets",
        title: "Scale Your",
        titleAccent: "Creative Assets",
        description: "Onrivi is an AI asset management solution company that helps creators' ideas and AI conversation records accumulate as valuable data. Experience the perfect environment to store and utilize your intellectual assets.",
        ctaStart: "Start SaaS Now",
        ctaGuide: "Service Guide",
      },
      values: {
        v1: { title: "Premium Experience", desc: "Going beyond simple tools to provide a refined UI and UX that gives joy in use." },
        v2: { title: "Privacy & Security", desc: "Prioritizing the security of your intellectual assets through user isolation, cloud infrastructure, and local-data-based design without complex servers." },
        v3: { title: "Hybrid Innovation", desc: "Providing Onrivi's unique architecture combining local file system power with cloud SaaS flexibility." }
      },
      services: {
        s1: { title: "Onrivi Prompt", desc: "Premium prompt engineering desktop app & SaaS platform with hierarchical explorer and dynamic variable system." },
        s2: { title: "Prompt Engineering Guide", desc: "Providing professional prompt writing and management methodologies." },
        s3: { title: "Custom AI Proxy", desc: "Support for enterprise-specific AI integration and data management solutions." }
      },
      features: {
        title: "Key Features",
        f1: {
          title: "DualPanel UI",
          desc: "Manage folders on the left, edit and chat with AI on the right. Compact, icon-only design saves your screen space."
        },
        f2: {
          title: "Gemini AI Integrated",
          desc: "Chat with Google Gemini to analyze and improve your prompts instantly. Apply changes with a single click."
        },
        f3: {
          title: "Robust Image Generation",
          desc: "Generate high-quality images from text. Features automatic backend retry mechanism for unstable networks."
        },
        f4: {
          title: "100% Local Storage",
          desc: "Your data stays on your PC. Safely manage massive markdown documents with our recursive tree structure."
        }
      },
      pricing: {
        title: "SaaS Plans",
        desc: "Flexible plans for individuals and teams. Scale your business with Onrivi.",
        free: {
          name: "Starter",
          price: "$0",
          period: "Free Tier",
          f1: "Essential company intro features",
          f2: "User registration & profile",
          f3: "Community support",
          btn: "Join for Free"
        },
        pro: {
          name: "Enterprise Pro",
          price: "$49",
          period: "Monthly",
          f1: "Full payment & billing management",
          f2: "Direct product link access",
          f3: "Advanced security & data isolation",
          f4: "24/7 Priority support",
          btn: "Manage Payments"
        }
      },
      roadmap: {
        title: "Future Roadmap",
        step1: "Build Brand Identity & Landing Page",
        step2: "Meet Global Deployment Requirements",
        step3: "Integrate Payment & License Systems (WIP)"
      },
      closing: {
        title: "Manage Your Ideas as Structured Data",
        content: "Onrivi makes your AI experience assetized in the most elegant way."
      },
      footer: {
        terms: "Terms of Service",
        privacy: "Privacy Policy",
        contact: "Contact",
        copy: "© 2026 onrivi."
      },
      chat: {
        title: "AI Chat Demo",
        userQuery: "Can you help me refine this sales email prompt?",
        aiResponse: "Certainly! Here is a refined version of your sales email prompt using **Markdown** formatting:\n\n### 📧 Refined Sales Email Prompt\n- **Tone**: Professional yet approachable\n- **Target**: B2B Decision Makers\n\n```markdown\nSubject: Quick question about [Company Name]'s [Goal]\n\nHi [Name],\n\nI noticed you're working on [Relevant Topic]. Our solution helps [Benefit]...\n```\n\nYou can apply this to your editor with one click!"
      }
    }
  },
  ko: {
    translation: {
      brand: "OnriviPrompt",
      company: "온리비",
      slogan: "프롬프트를 넘어, 자산으로",
      nav: {
        intro: "소개",
        features: "기능",
        pricing: "요금 안내",
        roadmap: "로드맵",
        support: "고객 지원",
      },
      hero: {
        badge: "프롬프트를 넘어, 자산으로",
        title: "당신의 아이디어를",
        titleAccent: "가치 있는 자산으로",
        description: "온리비(Onrivi)는 창작자들의 아이디어와 AI 대화 기록이 가치 있는 데이터로 축적될 수 있도록 돕는 AI 자산 관리 솔루션 기업입니다. 1인 기업의 기동성과 SaaS의 안정성이 결합된 최적의 환경을 경험하세요.",
        ctaStart: "SaaS 시작하기",
        ctaGuide: "서비스 안내",
      },
      values: {
        v1: { title: "Premium Experience", desc: "단순한 툴을 넘어, 사용하는 즐거움을 주는 세련된 UI와 사용자 경험을 지향합니다." },
        v2: { title: "Privacy & Security", desc: "사용자 격리 설계와 클라우드 인프라, 그리고 로컬 데이터를 기반으로 하는 설계를 통해 고객의 소중한 지적 자산 보안을 최우선으로 합니다." },
        v3: { title: "Hybrid Innovation", desc: "로컬 파일 시스템의 강력함과 클라우드 SaaS의 유연성을 결합한 온리비만의 독보적인 아키텍처를 제공합니다." }
      },
      services: {
        s1: { title: "Onrivi Prompt (온리비 프롬프트)", desc: "폴더/파일 계층 구조와 동적 변수 시스템을 통해 AI 프롬프트를 체계적으로 관리하는 데스크톱 앱 및 SaaS 플랫폼입니다." },
        s2: { title: "Prompt Engineering Guide", desc: "전문적인 프롬프트 작성 및 관리 방법론을 제공합니다." },
        s3: { title: "Custom AI Proxy", desc: "기업 특화형 AI 연동 및 데이터 관리 솔루션을 지원합니다." }
      },
      features: {
        title: "Key Features",
        f1: {
          title: "심플한 듀얼패널 UI",
          desc: "좌측은 내 문서(탐색기), 우측은 AI 작업창(에디터)입니다. 텍스트 대신 깔끔한 아이콘으로 화면 공간을 극대화했습니다."
        },
        f2: {
          title: "제미나이(Gemini) AI 연동",
          desc: "단순 저장을 넘어, AI와 대화하며 기존 프롬프트를 더 전문적인 톤으로 쉽게 업그레이드하고 적용할 수 있습니다."
        },
        f3: {
          title: "안정적인 고화질 이미지 생성",
          desc: "프롬프트로 그림을 그려냅니다. 통신 불안정으로 이미지가 깨져도 백그라운드 3회 자동 재시도 로직으로 안전하게 결과물을 받아냅니다."
        },
        f4: {
          title: "안전한 100% 로컬 저장소",
          desc: "클라우드 유출 걱정 없이 모든 프롬프트 마크다운(.md) 파일은 내 PC 로컬 디스크에 재귀적 트리 구조로 안전하게 보관됩니다."
        }
      },
      pricing: {
        title: "SaaS 요금 정책",
        desc: "귀하의 비즈니스 규모에 맞는 최적의 플랜을 선택하세요.",
        free: {
          name: "Starter (무료)",
          price: "₩0",
          period: "평생 무료",
          f1: "기본 회사 소개 및 대시보드",
          f2: "간편 회원가입 및 프로필 관리",
          f3: "커뮤니티 지원 서비스",
          btn: "지금 가입하기"
        },
        pro: {
          name: "Enterprise Pro",
          price: "₩59,000",
          period: "월간 구독",
          f1: "통합 결제 및 정산 관리 시스템",
          f2: "상품 상세 및 서비스 즉시 이동",
          f3: "강력한 데이터 보안 수준 보장",
          f4: "전담 매니저 우선 지원",
          btn: "결제 관리하기"
        }
      },
      roadmap: {
        title: "Future Roadmap",
        step1: "브랜드 정체성 및 랜딩 페이지 구축",
        step2: "글로벌 배포 필수 요건 충족",
        step3: "결제 및 라이선스 시스템 연동 (예정)"
      },
      closing: {
        title: "당신의 아이디어를 체계적인 데이터로 관리하세요",
        content: "Onrivi는 당신의 AI 경험을 가장 우아하게 자산화해 드립니다."
      },
      footer: {
        terms: "이용약관(Terms)",
        privacy: "개인정보처리방침",
        contact: "문의하기",
        copy: "© 2026 onrivi."
      },
      chat: {
        title: "AI 채팅 데모",
        userQuery: "마케팅용 인스타그램 캡션 프롬프트 좀 다듬어줘.",
        aiResponse: "네, 물론이죠! **마크다운** 형식을 사용하여 더 매력적인 인스타그램 캡션 프롬프트를 작성해 보았습니다:\n\n### 📸 인스타그램 캡션 프롬프트\n- **톤앤매너**: 트렌디하고 친근한 느낌\n- **핵심 요소**: 이모지 활용, 해시태그 포함\n\n```markdown\n[컨셉]: 20대 타겟의 미니멀 감성 카페\n[내용]: 무채색 인테리어와 핸드드립 커피의 조화...\n\n#카페추천 #감성카페 #성수동맛집\n```\n\n클릭 한 번으로 에디터에 바로 적용할 수 있습니다!"
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
