import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Privacy() {
    return (
        <div className="min-h-screen bg-slate-50 py-12 px-6 text-slate-800">
            <div className="max-w-3xl mx-auto bg-white p-8 md:p-16 rounded-[2rem] shadow-xl shadow-slate-200 border border-slate-100">
                <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-bold mb-12 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>

                <h1 className="text-4xl font-bold tracking-tight mb-4">Privacy Policy</h1>
                <p className="text-slate-500 font-medium mb-12">Effective Date: February 27, 2026</p>

                <div className="space-y-8 leading-relaxed">
                    <p>Your privacy is important to onrivi ("we," "us," or "our"). This Privacy Policy describes how we collect, use, and handle your information when you use our website (www.onrivi.com) and our SaaS platform.</p>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                        <p className="text-slate-600 mb-4">We only collect information necessary to provide and improve our services to you:</p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-600">
                            <li><strong>Personal Information:</strong> When you subscribe or contact our support team, we may collect your name, email address, and billing information.</li>
                            <li><strong>Payment Processing Details:</strong> All actual payment processing is handled securely by our Merchant of Record. We do not store full credit card details on our servers.</li>
                            <li><strong>Usage Data & Subscription Validation:</strong> Our platform communicates with our servers to verify your subscription status. During this process, we may collect non-personally identifiable technical information solely for service maintenance and authorization.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                        <p className="text-slate-600 mb-4">We use the collected information for the following purposes:</p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-600">
                            <li>To process your subscriptions and automatically provision your service account.</li>
                            <li>To provide customer support and respond to your inquiries.</li>
                            <li>To communicate updates, security alerts, and service messages.</li>
                            <li>To prevent fraudulent transactions and unauthorized service access.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">3. Data Sharing and Disclosure</h2>
                        <p className="text-slate-600 mb-4">We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. However, we may share info with trusted third parties:</p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-600">
                            <li><strong>Service Providers:</strong> Like our payment gateways necessary for processing transactions.</li>
                            <li><strong>Legal Compliance:</strong> When required by law or to protect our rights, property, or safety.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
                        <p className="text-slate-600">We implement a variety of security measures, including SSL encryption (HTTPS), to maintain the safety of your personal information. Despite our efforts, no method of transmission over the Internet is 100% secure.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">5. Your Consent</h2>
                        <p className="text-slate-600">By using our site and purchasing our products, you consent to our website's Privacy Policy.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">6. Changes to Our Privacy Policy</h2>
                        <p className="text-slate-600">If we decide to change our privacy policy, we will post those changes on this page and update the "Effective Date" at the top.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
                        <p className="text-slate-600">If there are any questions regarding this privacy policy, you may contact us using the information below:</p>
                        <ul className="mt-4 text-slate-600">
                            <li><strong>Email:</strong> firstonrivi@onrivi.com</li>
                            <li><strong>Website:</strong> www.onrivi.com</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}
