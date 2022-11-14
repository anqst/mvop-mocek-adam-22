function Header() {

    return (
        <>
            <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
                <div className="flex flex-row gap-6 lg:gap-2 items-center justify-center">
                    <img className="w-14 lg:w-12" src="/images/logo.png" alt="logo" />
                    <p className="text-lg font-bold">Startup Landing</p>
                </div>
                <div className="flex flex-row items-center justify-center">
                    <ul className="flex flex-col lg:flex-row items-center gap-4 lg:gap-10 text-base font-medium">
                        <li className="text-rose-600">Home</li>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Testimonial</li>
                    </ul>
                </div>
                <div className="flex flex-col items-center pt-4 lg:flex-row lg:p-0">
                    <button className="btn btn-reverse">Get Started</button>
                </div>
            </div>
        </>
    )
}

export default Header;