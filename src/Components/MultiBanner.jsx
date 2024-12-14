const MultiBanner = () => {
    return (
        <>
            <div className="bg-gray-100">
                <div className="grid grid-cols-1 px-4 md:px-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-6 max-w-7xl mx-auto">
                    {/* first banner */}
                    <div className="relative h-[250px]">
                        <img src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="New Arrivals" className="w-full h-full object-cover rounded-lg shadow-lg" />
                        <div className='absolute inset-0 bg-gray-800 rounded-lg bg-opacity-50 flex flex-col items-center justify-center'>
                            <h2 className='text-white text-2xl font-bold'>New Arrivals</h2>
                            <button className='mt-2 px-3 py-1 bg-white text-green-800 rounded-md shadow hover:bg-gray-200'>Discover</button>
                        </div>
                    </div>
                    {/* second banner */}
                    <div className="relative h-[250px]">
                        <img src="https://images.pexels.com/photos/6214133/pexels-photo-6214133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Limited Offer" className="w-full h-full object-cover rounded-lg shadow-lg" />
                        <div className='absolute inset-0 bg-blue-900 rounded-lg bg-opacity-50 flex flex-col items-center justify-center'>
                            <h2 className='text-white text-2xl font-bold'>Limited Offer</h2>
                        </div>
                    </div>
                    {/* third banner */}
                    <div className="relative h-[250px] col-span-1 sm:col-span-2">
                        <img src="https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Season sale" className="w-full h-full object-cover rounded-lg shadow-lg" />
                        <div className="absolute inset-0 bg-yellow-800 rounded-lg bg-opacity-50 flex flex-col items-center justify-center">
                            <h2 className="text-white text-4xl font-bold">Season Sale</h2>
                            <p className="text-white my-2 text-lg">Up to 70% Off</p>
                            <button className='px-3 py-2 text-white bg-yellow-600 rounded-md hover:bg-yellow-500'>Sop Now</button>
                        </div>
                    </div>
                    {/* fourth banner */}
                    <div className="relative h-[250px] col-span-1 sm:col-span-2">
                        <img src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Season sale" className="w-full h-full object-cover rounded-lg shadow-lg" />
                        <div className="absolute inset-0 bg-orange-800 rounded-lg bg-opacity-50 flex flex-col items-center justify-center">
                            <h2 className="text-white text-4xl font-bold">Season Sale</h2>
                            <p className="text-white my-2 text-lg">Up to 70% Off</p>
                            <button className='px-3 py-2 text-white bg-red-500 rounded-md hover:bg-red-600'>Sop Now</button>
                        </div>
                    </div>
                    {/* Fifth banner  */}
                    <div className="relative h-[250px]">
                        <img src="https://images.pexels.com/photos/5622859/pexels-photo-5622859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Limited Offer" className="w-full h-full object-cover rounded-lg shadow-lg" />
                        <div className='absolute inset-0 bg-blue-900 rounded-lg bg-opacity-50 flex flex-col items-center justify-center'>
                            <h2 className='text-white text-2xl font-bold'>Limited Offer</h2>
                        </div>
                    </div>
                    {/* sixth banner  */}
                    <div className="relative h-[250px]">
                        <img src="https://images.pexels.com/photos/8886954/pexels-photo-8886954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="New Arrivals" className="w-full h-full object-cover rounded-lg shadow-lg" />
                        <div className='absolute inset-0 bg-gray-800 rounded-lg bg-opacity-50 flex flex-col items-center justify-center'>
                            <h2 className='text-white text-2xl font-bold'>New Arrivals</h2>
                            <button className='mt-2 px-3 py-1 bg-white text-green-800 rounded-md shadow hover:bg-gray-200'>Discover</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default MultiBanner;