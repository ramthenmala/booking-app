import Footer from "../Footer/Footer";
import Header from "../Header/Header"
import Hero from "../Hero/Hero"

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Hero />
            <div className="container py-10 flex-1">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout