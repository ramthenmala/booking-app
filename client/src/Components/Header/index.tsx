import { Link } from "react-router-dom"
import { useAppContext } from "../../context/AppContext"
import SignOut from "../SignOut";

const Header = () => {

    const { isLoggedIn } = useAppContext();

    return (
        <div className="bg-black py-6">
            <div className="container flex justify-between">
                <div className="text-white text-3xl font-bold tracking-tight">
                    <Link to='/'>booking.com</Link>
                </div>
                <div className="flex justify-center space-x-8 items-center">

                    {
                        isLoggedIn ? (
                            <>
                                <Link to='/my-bookings' className="text-white tracking-tight font-light">My Bookings</Link>
                                <Link to='/my-hotels' className="text-white tracking-tight font-light">My Hotels</Link>
                                <SignOut />
                            </>
                        ) : <>
                            (
                            <Link to='/signin' className="text-white tracking-tight font-light">Register Your property</Link>
                            <div className="flex justify-center space-x-4 items-center">
                                <Link to='/register' className="py-2 px-4 tracking-tight text-black-800 bg-white rounded-full hover:text-black-500">Register</Link>
                                <Link to='/signin' className="py-2 px-4 tracking-tight text-black-800 bg-white rounded-full hover:text-black-500">Sign in</Link>
                            </div>
                            )
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header