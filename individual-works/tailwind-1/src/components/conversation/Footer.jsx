function Footer() {

    return (
        <div className="bg-neutral-700 flex flex-row flex-nowrap gap-6 items-center p-5 pl-6">
            <div className="w-8">
                <img className="w-full h-full" src="/add-icon.png" alt="add-icon" />
            </div>
            <div className="w-full bg-neutral-600 p-2 rounded-lg mr-8">
                <p className="text-base text-neutral-800">Start typing...</p>
            </div>
        </div>
    )
}

export default Footer;