function Header() {

    return (
        <>
            <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-2 items-center">
                    <img className="w-12" src="/images/logo.png" alt="logo" />
                    <p className="text-lg font-bold">Startup Landing</p>
                </div>
                <div className="flex flex-row items-center">
                    <ul className="flex flex-row items-center gap-10 text-base font-medium">
                        <li className="text-rose-600">Home</li>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Testimonial</li>
                    </ul>
                </div>
                <div className="flex flex-row items-center">
                    <button className="btn btn-reverse">Get Started</button>
                </div>
            </div>
        </>
    )
}

export default Header;