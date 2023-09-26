

const Banner = () => {
    return (
        <section>
            <div className="hero min-h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/4gDRvKq/banner-bg.jpg)' }}>
                <div className="hero-overlay bg-white bg-opacity-90"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className=" space-y-12">
                        <h1 className="mb-5 text-5xl font-bold text-black">I Grow By Helping People In Need</h1>
                        <div className="relative w-9/12 mx-auto">
                            <input type="text" placeholder="Search by category..." className="input input-bordered w-full pr-16" />
                            <button className="btn bg-red-500 text-white hover:text-red-500 font-bold absolute top-0 right-0 rounded-l-none">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;