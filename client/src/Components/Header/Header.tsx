import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="bg-blue-800 py-6">
            <div className="container flex justify-between">
                <div className="text-white text-3xl font-bold tracking-tight">
                    <Link to='/'>booking.com</Link>
                </div>
                <div className="flex justify-center space-x-8 items-center">
                    <Link to='/sing-in' className="text-white tracking-tight font-light">Register Your property</Link>
                    <div className="flex justify-center space-x-4 items-center">
                        <Link to='/sing-in' className="py-2 px-4 tracking-tight text-blue-800 bg-white rounded-full hover:text-blue-500">Register</Link>
                        <Link to='/sing-in' className="py-2 px-4 tracking-tight text-blue-800 bg-white rounded-full hover:text-blue-500">Sign in</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header