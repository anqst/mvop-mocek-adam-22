function Menu() {

    return (
        <div className="flex flex-col gap-8 items-center lg:flex-row">
            <ul className="flex flex-col items-center gap-4 text-base font-medium lg:flex-row">
                <li className="text-rose-600">Home</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Testimonial</li>
            </ul>
            <div className="flex flex-col items-center pt-4 lg:flex-row lg:justify-center lg:pt-0">
                <button className="btn btn-reverse">Get Started</button>
            </div>
        </div>
    )
}

export default Menu;