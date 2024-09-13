const Footer = () => {
    return (
        <div className="bg-blue-800 py-10">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-3xl text-white font-bold tracking-light">booking.com</div>
                <div className="text-white tracking-tight flex gap-4">
                    <p className="cursor-pointer">Privacy Policy</p>
                    <p className="cursor-pointer">Terms & Conditions</p>
                </div>
            </div>
        </div>
    )
}

export default Footer