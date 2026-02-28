import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ShieldCheck, HelpCircle, AlertTriangle, FileText, CheckCircle2 } from 'lucide-react';

export default function RefundPolicy() {
    const { i18n } = useTranslation();
    const isKo = i18n.language === 'ko';

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-6 text-slate-800 font-sans">
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-[2rem] shadow-xl shadow-slate-200 border border-slate-100">
                <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-bold mb-12 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> {isKo ? '홈으로 돌아가기' : 'Back to Home'}
                </Link>

                <div className="mb-12">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">
                        Standard Terms of Service & Compliance
                    </span>
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-slate-900 leading-tight">
                        {isKo ? (
                            <>1인 개발자를 위한 글로벌 MoR 플랫폼 <br /> <span className="text-blue-600">통합 환불 및 고객 지원 정책</span></>
                        ) : (
                            <>Global MoR Platform Integrated <br /> <span className="text-blue-600">Refund & Support Policy</span></>
                        )}
                    </h1>
                    <p className="text-slate-500 font-medium text-lg leading-relaxed">
                        {isKo
                            ? "본 문서는 Paddle, FastSpring, Lemon Squeezy와 같은 MoR(Merchant of Record) 플랫폼을 통해 글로벌 시장에 소프트웨어를 공급하는 개발자를 위한 전문 법적 정책 가이드라인입니다."
                            : "This document provides professional legal guidelines for individual developers supplying software to global markets via Merchant of Record (MoR) platforms such as Paddle, FastSpring, and Lemon Squeezy."}
                    </p>
                </div>

                <div className="space-y-12 leading-relaxed text-slate-700">
                    {/* Section 1 */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-900">
                                <FileText className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900">
                                {isKo ? "1. 서론: MoR(Merchant of Record) 모델 고지" : "1. Introduction: MoR Model Legal Notice"}
                            </h2>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl space-y-4 text-sm md:text-base border border-slate-100">
                            <p>
                                {isKo
                                    ? "본 서비스의 모든 결제 및 라이선스 배포는 공식 판매 대행사인 MoR 플랫폼을 통해 법적으로 완결됩니다."
                                    : "All payments and license distributions for this service are legally finalized through the official Merchant of Record (MoR) platform."}
                            </p>
                            <ul className="list-disc pl-6 space-y-3">
                                <li>
                                    <strong>{isKo ? "법적 판매 주체 (Seller of Record):" : "Seller of Record:"}</strong>{" "}
                                    {isKo
                                        ? "선택된 플랫폼(Paddle 등)은 소프트웨어의 '공식 판매자'로서 세금 징수, 결제 보안(PCI-DSS), 사기 방지 검증에 대한 법적 책임을 집니다."
                                        : "The selected platform (e.g., Paddle) serves as the 'Official Seller' and assumes all legal responsibilities for VAT/Sales Tax, payment security (PCI-DSS), and fraud prevention."}
                                </li>
                                <li>
                                    <strong>{isKo ? "결제 증빙 및 영수증:" : "Payment Evidence & Receipts:"}</strong>{" "}
                                    {isKo
                                        ? "카드 명세서에는 개발자 이름 대신 결제 플랫폼 명칭이 표시됩니다. 이는 MoR 모델의 표준 절차입니다."
                                        : "Transaction records and receipts will display the name of the payment platform instead of the developer's name, which is standard procedure for the MoR model."}
                                </li>
                                <li>
                                    <strong>{isKo ? "서비스 제공자 (Service Provider):" : "Service Provider:"}</strong>{" "}
                                    {isKo
                                        ? "개발자는 저작권자로서 제품 기능 유지 및 기술 지원에 대한 책임을 집니다."
                                        : "The developer remains the copyright holder and is responsible for product maintenance and technical support."}
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900">
                                {isKo ? "2. 환불 및 분쟁 해결 표준 약관" : "2. Standard Refund & Dispute Resolution"}
                            </h2>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-bold mb-3 text-slate-800">
                                    {isKo ? "2.1 환불 가능 기간 및 조건" : "2.1 Refund Eligibility & Conditions"}
                                </h3>
                                <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
                                    <li><strong>{isKo ? "청구 기간:" : "Claim Period:"}</strong> {isKo ? "구매일로부터 14일 이내 접수된 요청에 한해 검토 가능합니다." : "Refund requests submitted in writing within 14 days of purchase are eligible for review."}</li>
                                    <li><strong>{isKo ? "승인 사유:" : "Approved Reasons:"}</strong> {isKo ? "기술적 중대 결함(해결 불가 시), 중복 결제, 24시간 이내 라이선스 미발송 등." : "Major technical defects (unfixable), duplicate billing, or license key delivery failure within 24 hours."}</li>
                                </ul>
                            </div>
                            <div className="p-6 border-2 border-red-50 rounded-2xl bg-red-50/30">
                                <h3 className="text-lg font-bold mb-3 text-red-600">
                                    {isKo ? "2.2 환불 불가 사유 (오남용 방지)" : "2.2 Non-Refundable Reasons (Abuse Prevention)"}
                                </h3>
                                <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-slate-600 font-medium">
                                    <li><strong>{isKo ? "라이선스 활성화 완료:" : "License Activated:"}</strong> {isKo ? "제품 인증을 마친 경우 디지털 콘텐츠 특성상 환불이 불가합니다." : "Activated licenses are non-refundable due to the nature of digital content."}</li>
                                    <li>{isKo ? "단순 변심, 미숙지, 시스템 요구사항 미확인으로 인한 구동 불가 등." : "Change of mind, misunderstanding of features, or failure to meet system requirements."}</li>
                                </ul>
                            </div>
                            <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100">
                                <h3 className="text-lg font-bold mb-3 text-amber-700 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5" /> {isKo ? "차지백(Chargeback) 경고" : "Chargeback Warning"}
                                </h3>
                                <p className="text-sm font-medium text-amber-800">
                                    {isKo
                                        ? "지불 거절(Dispute) 요청 전 반드시 개발자 지원팀에 먼저 문의해야 합니다. 사전 협의 없는 일방적 차지백 발생 시 해당 사용자는 MoR 네트워크 블랙리스트로 등록될 수 있습니다."
                                        : "Users must contact the developer support team before initiating a chargeback via a bank or card issuer. Unauthorized chargebacks may result in permanent blacklisting across the MoR network."}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-900">
                                <HelpCircle className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900">
                                {isKo ? "3. 글로벌 고객 지원 정책" : "3. Global Customer Support Policy"}
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                                <h3 className="font-bold mb-2">{isKo ? "공식 지원 채널" : "Official Support Channel"}</h3>
                                <p className="text-sm text-slate-500 font-medium">
                                    {isKo
                                        ? "모든 지원은 도메인 기반 이메일(firstonrivi@onrivi.com)을 통해 전문적으로 이루어집니다."
                                        : "All support is professionally handled via our domain-based email (firstonrivi@onrivi.com)."}
                                </p>
                            </div>
                            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                                <h3 className="font-bold mb-2">{isKo ? "서비스 수준 (SLA)" : "Service Level Agreement (SLA)"}</h3>
                                <p className="text-sm text-slate-500 font-medium">
                                    {isKo ? "영업일 기준 24~48시간 이내 첫 응답을 원칙으로 합니다." : "We aim to provide the first response within 24-48 hours on business days."}
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="pt-12 border-t border-slate-100 text-center">
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-4">OnriviPrompt Compliance</p>
                        <p className="text-sm text-slate-500 max-w-2xl mx-auto">
                            {isKo
                                ? "본 정책은 일반적인 가이드라인이며, 최종 법적 책임은 개발자에게 있습니다. 각 MoR 플랫폼의 최신 정책 및 국가별 세법에 따라 사전 예고 없이 수정될 수 있습니다."
                                : "This policy provides general guidelines, and legal responsibility lies with the developer. Terms are subject to change according to MoR platform policies and international tax laws."}
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
