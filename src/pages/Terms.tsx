import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Terms() {
    return (
        <div className="min-h-screen bg-slate-50 py-12 px-6 text-slate-800">
            <div className="max-w-3xl mx-auto bg-white p-8 md:p-16 rounded-[2rem] shadow-xl shadow-slate-200 border border-slate-100">
                <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-bold mb-12 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>

                <h1 className="text-4xl font-bold tracking-tight mb-4">Terms of Service</h1>
                <p className="text-slate-500 font-medium mb-12">Last Updated: February 27, 2026</p>

                <div className="space-y-8 leading-relaxed">
                    <p>These Terms of Service ("Terms") govern your use of the software, website (www.onrivi.com), and services provided by onrivi ("we," "us," or "our"). By purchasing or using our software, you agree to be bound by these Terms.</p>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">1. Description of Service</h2>
                        <p className="text-slate-600">onrivi provides intelligent visionary interface software solutions and related digital products. Our software is designed to optimize everyday tasks through advanced technology.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">2. License Grant and Restrictions</h2>
                        <p className="text-slate-600 mb-4">Upon successful payment, onrivi grants you a non-exclusive, non-transferable, and revocable license to use the software corresponding to your purchased plan.</p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-600">
                            <li><strong>Prohibited Conduct:</strong> You may not reverse engineer, decompile, crack, or share your license key with unauthorized users.</li>
                            <li><strong>Verification:</strong> The software requires periodic online verification to validate the integrity of your license key via our secure servers.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">3. Payment and Subscriptions</h2>
                        <p className="text-slate-600 mb-4">Currently, we process payments through authorized globally recognized Merchant of Record (MoR) platforms (e.g., Paddle, Lemon Squeezy).</p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-600">
                            <li>All fees are clearly displayed on our Pricing page prior to purchase.</li>
                            <li>Subscriptions (if applicable) will automatically renew unless canceled prior to the renewal date.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">4. Refund Policy</h2>
                        <p className="text-slate-600">We offer a 7-day money-back guarantee for initial purchases, provided the software has not been extensively utilized or abused. To request a refund, please contact us at firstonrivi@onrivi.com with your order details.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">5. Disclaimer of Warranties</h2>
                        <p className="text-slate-600">Our software is provided "AS IS" without warranties of any kind. onrivi does not guarantee that the software will meet your specific requirements or operate continuously without errors.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
                        <p className="text-slate-600">In no event shall onrivi be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our software, including data loss or business interruption.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">7. Contact Information</h2>
                        <p className="text-slate-600">If you have any questions regarding these Terms, please contact us at:</p>
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
