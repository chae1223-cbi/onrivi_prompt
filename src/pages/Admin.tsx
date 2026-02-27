import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    LayoutDashboard,
    Key,
    CreditCard,
    Users,
    Settings,
    ChevronRight,
    Search,
    Bell,
    LogOut,
    TrendingUp,
    UserPlus,
    ShieldAlert,
    Download,
    Copy,
    Check
} from 'lucide-react';
import { motion } from 'motion/react';

// Mock Data
const stats = [
    { label: 'Total Revenue', value: '$12,450', change: '+12.5%', icon: <CreditCard className="w-5 h-5" /> },
    { label: 'Active Licenses', value: '428', change: '+18.2%', icon: <Key className="w-5 h-5" /> },
    { label: 'New Users', value: '84', change: '+5.4%', icon: <UserPlus className="w-5 h-5" /> },
    { label: 'Pending Support', value: '12', change: '-2', icon: <Bell className="w-5 h-5" /> },
];

const licenses = [
    { id: '1', email: 'user1@example.com', key: 'ONRIVI-XXXX-1234', status: 'Active', date: '2026-02-25' },
    { id: '2', email: 'user2@test.net', key: 'ONRIVI-YYYY-5678', status: 'Active', date: '2026-02-26' },
    { id: '3', email: 'badactor@spam.com', key: 'ONRIVI-ZZZZ-9012', status: 'Revoked', date: '2026-02-20' },
    { id: '4', email: 'client3@corp.com', key: 'ONRIVI-AAAA-3333', status: 'Active', date: '2026-02-27' },
];

export default function Admin() {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [copiedId, setCopiedId] = useState<string | null>(null);

    const handleCopy = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-slate-200 flex flex-col p-6 fixed h-full z-20">
                <div className="flex items-center gap-3 mb-10 px-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">!</div>
                    <span className="font-extrabold tracking-tighter lowercase text-xl">onrivi admin</span>
                </div>

                <nav className="flex-1 space-y-1">
                    {[
                        { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
                        { id: 'licenses', label: 'Licenses', icon: <Key className="w-4 h-4" /> },
                        { id: 'transactions', label: 'Transactions', icon: <CreditCard className="w-4 h-4" /> },
                        { id: 'users', label: 'Users', icon: <Users className="w-4 h-4" /> },
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === item.id
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                                : 'text-slate-400 hover:text-slate-900 hover:bg-slate-50'
                                }`}
                        >
                            {item.icon}
                            {item.label}
                        </button>
                    ))}
                </nav>

                <div className="pt-6 border-t border-slate-100 flex flex-col gap-1">
                    <button className="flex items-center gap-3 px-4 py-3 text-sm text-slate-400 hover:text-red-600 transition-colors font-bold">
                        <LogOut className="w-4 h-4" /> Sign Out
                    </button>
                    <Link to="/" className="flex items-center gap-3 px-4 py-3 text-sm text-slate-400 hover:text-slate-900 transition-colors font-bold">
                        <ChevronRight className="w-4 h-4" /> View Site
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-64 p-10">
                <header className="flex justify-between items-center mb-10">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Welcome, Admin</h1>
                        <p className="text-slate-400 font-medium">Monitoring OnriviPrompt performance and health.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all w-64"
                            />
                        </div>
                        <button className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-slate-50 transition-colors relative">
                            <Bell className="w-4 h-4 text-slate-500" />
                            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 border-2 border-slate-50 rounded-full" />
                        </button>
                        <div className="w-10 h-10 bg-slate-200 rounded-full border-2 border-white shadow-sm overflow-hidden">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" alt="Avatar" />
                        </div>
                    </div>
                </header>

                {activeTab === 'dashboard' && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {stats.map((stat, i) => (
                                <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-blue-600">
                                            {stat.icon}
                                        </div>
                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${stat.change.startsWith('+') ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                                            {stat.change}
                                        </span>
                                    </div>
                                    <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest">{stat.label}</h3>
                                    <p className="text-2xl font-extrabold mt-1 tracking-tight">{stat.value}</p>
                                </div>
                            ))}
                        </div>

                        {/* Charts & Activity Placeholder */}
                        <div className="grid lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-2 bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm min-h-[400px]">
                                <div className="flex justify-between items-center mb-8">
                                    <h2 className="text-lg font-bold">Revenue Analytics</h2>
                                    <select className="text-xs font-bold bg-slate-50 border-none rounded-lg px-3 py-2 outline-none">
                                        <option>Last 30 Days</option>
                                        <option>Last 6 Months</option>
                                    </select>
                                </div>
                                {/* Mock Chart Area */}
                                <div className="h-64 flex items-end justify-between gap-2 px-4">
                                    {[40, 60, 45, 90, 65, 85, 55, 75, 50, 95, 70, 80].map((h, i) => (
                                        <div key={i} className="flex-1 bg-blue-50 hover:bg-blue-600 transition-colors rounded-t-lg group relative" style={{ height: `${h}%` }}>
                                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-bold">
                                                ${h * 10}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-between text-[10px] font-bold text-slate-300 mt-4 px-2 tracking-widest uppercase">
                                    <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                                </div>
                            </div>

                            <div className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-xl overflow-hidden relative">
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <ShieldAlert className="w-32 h-32" />
                                </div>
                                <h2 className="text-lg font-bold mb-6 relative z-10">System Status</h2>
                                <div className="space-y-6 relative z-10">
                                    {[
                                        { label: 'License API', status: 'Healthy', color: 'bg-green-500' },
                                        { label: 'Paddle Webhook', status: 'Healthy', color: 'bg-green-500' },
                                        { label: 'Gemini Proxy', status: 'Slow', color: 'bg-yellow-500' },
                                        { label: 'Database', status: 'Healthy', color: 'bg-green-500' },
                                    ].map((sys, i) => (
                                        <div key={i} className="flex justify-between items-center">
                                            <span className="text-sm font-medium text-slate-400">{sys.label}</span>
                                            <div className="flex items-center gap-2">
                                                <span className={`w-2 h-2 rounded-full ${sys.color}`} />
                                                <span className="text-xs font-bold">{sys.status}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <button className="w-full mt-10 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-bold transition-colors">
                                    Run Diagnostics
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}

                {activeTab === 'licenses' && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
                        <div className="p-8 border-b border-slate-50 flex justify-between items-center">
                            <div>
                                <h2 className="text-lg font-bold">License Management</h2>
                                <p className="text-sm text-slate-400 font-medium">Issue, track and revoke client licenses.</p>
                            </div>
                            <div className="flex gap-3">
                                <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-sm font-bold hover:bg-slate-50 transition-colors">
                                    <Download className="w-4 h-4" /> Export CSV
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">
                                    Generate New Key
                                </button>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse border border-slate-200">
                                <thead className="bg-slate-100 text-[10px] font-bold uppercase tracking-widest text-slate-600 border-b border-slate-200">
                                    <tr>
                                        <th className="px-8 py-4 border-r border-slate-200">Customer Email</th>
                                        <th className="px-8 py-4 border-r border-slate-200">License Key</th>
                                        <th className="px-8 py-4 border-r border-slate-200">Status</th>
                                        <th className="px-8 py-4 border-r border-slate-200">Issue Date</th>
                                        <th className="px-8 py-4 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200">
                                    {licenses.map((item) => (
                                        <tr key={item.id} className="hover:bg-blue-50/50 transition-colors group">
                                            <td className="px-8 py-4 border-r border-slate-200">
                                                <span className="text-sm font-bold text-slate-700">{item.email}</span>
                                            </td>
                                            <td className="px-8 py-4 border-r border-slate-200 text-slate-500 font-mono text-xs">
                                                <div className="flex items-center justify-between gap-2">
                                                    <span>{item.key}</span>
                                                    <button
                                                        onClick={() => handleCopy(item.key, item.id)}
                                                        className="p-1 hover:bg-slate-100 rounded transition-colors text-slate-300 hover:text-blue-600"
                                                        title="Copy Key"
                                                    >
                                                        {copiedId === item.id ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="px-8 py-4 border-r border-slate-200">
                                                <span className={`text-[10px] font-extrabold px-2 py-1 rounded-full ring-1 ${item.status === 'Active'
                                                    ? 'bg-green-50 text-green-700 ring-green-200'
                                                    : 'bg-red-50 text-red-700 ring-red-200'
                                                    }`}>
                                                    {item.status}
                                                </span>
                                            </td>
                                            <td className="px-8 py-4 text-sm text-slate-500 font-medium border-r border-slate-200">{item.date}</td>
                                            <td className="px-8 py-4 text-right">
                                                <button className="text-xs font-bold text-blue-600 hover:underline transition-colors opacity-0 group-hover:opacity-100">
                                                    Manage
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                )}
            </main>
        </div>
    );
}
