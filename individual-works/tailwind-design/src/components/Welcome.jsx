function Welcome() {

    return (
        <div className="flex flex-col gap-16 items-center">
            <div className="flex flex-col gap-8 items-center max-w-xl text-center">
                <h1 className="text-6xl font-bold leading-snug">Top Quality Digital Products To Explore</h1>
                <p className="text-lg font-normal max-w-lg leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed accusamus aut commodi sequi quod saepe qui perspiciatis ex, ut reprehenderit asperiores deserunt esse expedita suscipit exercitationem eum! Quisquam, doloremque ipsum.</p>
                <button className="btn">Explore</button>
            </div>
            <div className="flex flex-col gap-2 items-center">
                <img src="/images/screen-sample.png" alt="screen-sample" className="drop-shadow-2xl" />
            </div>
        </div>
    )
}

export default Welcome;