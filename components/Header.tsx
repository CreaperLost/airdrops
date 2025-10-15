import React from 'react';

type Page = 'exchanges' | 'calculator';

interface NavLinkProps {
    page: Page;
    activePage: Page;
    setActivePage: (page: Page) => void;
    children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ page, activePage, setActivePage, children }) => {
    const isActive = page === activePage;
    return (
        <button
            onClick={() => setActivePage(page)}
            className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive ? 'text-blue-600 bg-blue-100' : 'text-slate-600 hover:bg-slate-100'
            }`}
        >
            {children}
        </button>
    );
};


interface HeaderProps {
    activePage: Page;
    setActivePage: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ activePage, setActivePage }) => {
    return (
        <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <span className="font-bold text-lg text-slate-800">Aero Airdrops</span>
                    </div>
                    <nav className="hidden md:flex items-center space-x-2">
                        <NavLink page="exchanges" activePage={activePage} setActivePage={setActivePage}>Exchanges</NavLink>
                        <NavLink page="calculator" activePage={activePage} setActivePage={setActivePage}>Points Calculator</NavLink>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;