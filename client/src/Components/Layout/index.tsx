import Footer from "../Footer";
import Header from "../Header"
import Hero from "../Hero"

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