import { useState, useEffect } from "react";
import Menu from "./Menu";

function Header() {

    const [mobileMenuVisible, toggleMobileMenu] = useState(false);

    return (
        <>
            <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
                <div className="flex flex-row gap-6 items-center justify-between lg:justify-center">
                    <img className="w-14 lg:w-12" src="/images/logo.png" alt="logo" />
                    <p className="text-lg font-bold">Startup Landing</p>
                    <button
                        type="button"
                        onClick={function () { toggleMobileMenu(!mobileMenuVisible) }}
                    >
                        <img src="/images/burger.png" alt="burger menu" className="w-14 lg:hidden" />
                    </button>
                </div>
                <div className={`${mobileMenuVisible === true ? "" : "hidden"} lg:hidden`}>
                    <Menu />
                </div>
                <div className="hidden lg:block">
                    <Menu />
                </div>
            </div>
        </>
    )
}

export default Header;