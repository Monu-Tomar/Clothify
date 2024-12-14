import banner from '../Assets/MidBanner.jpg';

const MiddleBanner = () => {
    return (
        <div className="bg-gray-100 py-24">
            <div className="relative max-w-7xl mx-auto md:rounded-2xl pt-28 bg-cover bg-center h-[550px] md:h-[600px]" style={{ backgroundImage: `url(${banner})`, backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
                <div className='absolute inset-0 bg-black md:rounded-2xl bg-opacity-50 flex items-center justify-center'>
                    <div className='text-center text-white px-4'>
                        <h1 className='text-4xl md:text-5xl font-bold'>Winter Collection
                            <span className='text-orange-500'> 2024 </span>
                        </h1>
                        <p className='text-xl md:text-2xl'>Discover the hotest trends for the season. Limited time offer: 20% for all new arrivals! </p>
                        <button className='bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300 my-3'>Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MiddleBanner;