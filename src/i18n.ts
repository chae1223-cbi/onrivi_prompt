import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      brand: "OnriviPrompt",
      company: "onrivi",
      slogan: "Your Ultimate AI Prompt Management Assistant",
      nav: {
        intro: "Intro",
        features: "Features",
        pricing: "Pricing",
        support: "Support",
      },
      hero: {
        badge: "Smart Prompt Organizer",
        title: "Stop Losing",
        titleAccent: "Your Prompts",
        description: "OnriviPrompt is a desktop app designed for non-developers. Manage your folders, chat with Google Gemini AI, and generate high-quality images all in one unified DualPanel interface.",
        ctaStart: "Download Trial",
        ctaGuide: "View Demo",
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
        title: "Simple Pricing",
        desc: "Choose the plan that fits your workflow. One-time payment for lifetime access.",
        free: {
          name: "Trial Version",
          price: "$0",
          period: "14 Days",
          f1: "Basic prompt management",
          f2: "Local file import (.md, .txt)",
          f3: "Limited AI interactions",
          btn: "Download Free"
        },
        pro: {
          name: "Pro License",
          price: "$29",
          period: "Lifetime",
          f1: "Unlimited folder & prompt management",
          f2: "Unlimited Gemini AI Chat integration",
          f3: "AI Image Generation & Save",
          f4: "Priority support (firstonrivi@onrivi.com)",
          btn: "Buy License"
        }
      },
      closing: {
        title: "Ready to optimize?",
        content: "Stop copy-pasting. Start generating with OnriviPrompt."
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
      company: "onrivi",
      slogan: "나만의 완벽한 AI 프롬프트 관리 비서",
      nav: {
        intro: "소개",
        features: "기능",
        pricing: "요금 안내",
        support: "고객 지원",
      },
      hero: {
        badge: "Smart Prompt Organizer",
        title: "더 이상 프롬프트를",
        titleAccent: "잃어버리지 마세요",
        description: "OnriviPrompt는 비개발자 실무자를 위한 데스크톱 전용 앱입니다. 좌측에서 폴더를 관리하고 우측에서 구글 제미나이(Gemini)와 대화하며 이미지를 생성하는 듀얼패널의 혁신을 경험하세요.",
        ctaStart: "체험판 다운로드",
        ctaGuide: "데모 보기",
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
        title: "Simple Pricing",
        desc: "불필요한 구독 없이, 단 한 번의 결제로 평생 소장하세요.",
        free: {
          name: "Trial Version (체험판)",
          price: "₩0",
          period: "14일 무료",
          f1: "기본 폴더 및 파일 관리",
          f2: "외부 파일 한번에 가져오기 (.md, .txt)",
          f3: "제한적 AI(Gemini) 대화 테스트",
          btn: "무료로 다운로드"
        },
        pro: {
          name: "Pro License",
          price: "₩39,000",
          period: "평생 소장(Lifetime)",
          f1: "무제한 폴더 생성 및 계층 관리",
          f2: "무제한 Gemini AI 연동 및 자동 수정",
          f3: "AI 고화질 이미지 생성 및 로컬 다운로드",
          f4: "우선 고객 지원 (firstonrivi@onrivi.com)",
          btn: "라이선스 구매하기"
        }
      },
      closing: {
        title: "Ready to optimize?",
        content: "메모장 복붙은 그만. 이제 OnriviPrompt와 함께 칼퇴하세요."
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
