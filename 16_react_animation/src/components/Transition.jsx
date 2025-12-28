import { AnimatePresence, motion } from 'motion/react'
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom'

const Transition = () => {
    return (
        <BrowserRouter>
            <div className="min-h-screen w-full bg-linear-to-br from-gray-900 via-gray-800 to-black text-white">
                {/* Navbar */}
                <nav className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
                    <div className="max-w-6xl mx-auto px-6 h-16 flex items-center gap-6">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </div>
                </nav>

                {/* Animated pages */}
                <AnimatedRoutes />
            </div>
        </BrowserRouter>
    )
}

/* ---------------------------------- */
/* Animated Routes                     */
/* ---------------------------------- */
const AnimatedRoutes = () => {
    const location = useLocation()

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route
                    path="/"
                    element={
                        <PageTransition>
                            <HomePage />
                        </PageTransition>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <PageTransition>
                            <AboutPage />
                        </PageTransition>
                    }
                />
                <Route
                    path="/contact"
                    element={
                        <PageTransition>
                            <ContactPage />
                        </PageTransition>
                    }
                />
            </Routes>
        </AnimatePresence>
    )
}

/* ---------------------------------- */
/* Page Transition Wrapper             */
/* ---------------------------------- */
const PageTransition = ({ children }) => {
    return (
        <motion.main
            className="flex justify-center items-center px-4 py-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
        >
            {children}
        </motion.main>
    )
}

/* ---------------------------------- */
/* Reusable UI Components              */
/* ---------------------------------- */
const PageCard = ({ title, description }) => (
    <motion.div
        className="max-w-md w-full rounded-2xl bg-white/5 backdrop-blur border border-white/10 shadow-xl p-8"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
    >
        <h2 className="text-3xl font-semibold mb-4">{title}</h2>
        <p className="text-gray-300 leading-relaxed">{description}</p>
    </motion.div>
)

const NavLink = ({ to, children }) => (
    <Link
        to={to}
        className="px-4 py-1.5 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
    >
        {children}
    </Link>
)

/* ---------------------------------- */
/* Pages                               */
/* ---------------------------------- */
const HomePage = () => {
    return (
        <PageCard
            title="🏠 Home"
            description="This is the Home page. Click the navigation links above to see smooth animated page transitions using AnimatePresence and motion components."
        />
    )
}

const AboutPage = () => {
    return (
        <PageCard
            title="ℹ️ About"
            description="This page slides in and out when routing changes. The animation happens because Routes are wrapped with AnimatePresence."
        />
    )
}

const ContactPage = () => {
    return (
        <PageCard
            title="📩 Contact"
            description="Each route is wrapped in a PageTransition component, which controls entry and exit animations."
        />
    )
}

export default Transition
