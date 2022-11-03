function Header(props) {

    return (
        <div className="bg-neutral-700 flex flex-row flex-nowrap justify-between p-6">
            <div className="flex flex-row flex-nowrap gap-4 items-center">
                <div className="w-8">
                    <img className="w-full h-full" src="/user-icon.png" alt="user-icon" />
                </div>
                <div className="flex flex-row flex-nowrap gap-3 items-center">
                    <p className="text-2xl">@{props.username}</p>
                    <span className="bg-green-500 rounded-full h-4 w-4 mt-1"></span>
                </div>
            </div>
            <div className="flex flex-row flex-nowrap gap-6 items-center">
                <div className="w-8">
                    <img className="w-full h-full" src="/call-icon.png" alt="call-icon" />
                </div>
                <div className="w-8">
                    <img className="w-full h-full" src="/set-icon.png" alt="set-icon" />
                </div>
            </div>
        </div>
    )
}

export default Header;