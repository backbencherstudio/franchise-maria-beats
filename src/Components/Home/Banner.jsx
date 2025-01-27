import { BsArrowRight } from 'react-icons/bs'
import bannerimg from '../../assets/Image/bannerimg.png'

const Banner = () => {
  return (
    <section className='relative min-h-[calc(100vh-64px)] flex items-center justify-center '>
      <div
        className='absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: `url(${bannerimg})` }}
      />

      {/* Overlay */}
      <div className='absolute inset-0 -z-10 ' />

      {/* Content Container */}
      <div className='max-w-screen-xl mx-auto px-4 py-16 text-center text-white relative z-10'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl  font-bold mb-4'>
          Take Your <span >Franchise</span>
          <br />
          To The World
        </h1>

        <p className='text-base md:text-lg max-w-2xl mx-auto mb-12 text-gray-200'>
          Gulf Franchise Hub is a leading franchise consultancy and mediation
          company in the Gulf region, specializing in connecting franchisors and
          franchisees to foster mutual growth and success.
        </p>

        {/* Glass Effect Container */}
        <div className='relative max-w-screen-lg mx-auto rounded-xl '>
          {/* Glassmorphism background */}
          <div className='absolute inset-0  bg-white/10 border rounded-xl border-gray-200 shadow-lg' />

          {/* Search Controls */}
          <div className='relative flex flex-col md:flex-row gap-4 justify-center p-6'>
            <select className='px-4 py-3 rounded-lg bg-white/90 text-gray-900 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 w-full md:w-1/3 lg:w-3/4 text-xl'>
              <option value=''>Industry</option>
              <option value='food'>Food & Beverage</option>
              <option value='retail'>Retail</option>
              <option value='services'>Services</option>
            </select>

            <select className='px-4 py-3 rounded-lg bg-white/90 text-gray-900 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 w-full md:w-1/3 lg:w-3/4 text-xl'>
              <option value=''>Location</option>
              <option value='uae'>UAE</option>
              <option value='ksa'>Saudi Arabia</option>
              <option value='qatar'>Qatar</option>
            </select>

            <select className='px-4 py-3 rounded-lg bg-white/90 text-gray-900 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 w-full md:w-1/3 lg:w-3/4 text-xl'>
              <option value=''>Investment</option>
              <option value='low'>Under $100k</option>
              <option value='medium'>$100k - $500k</option>
              <option value='high'>$500k+</option>
            </select>
          </div>
        </div>
        <div className='mt-10 flex justify-center'>
          <button className='px-8 py-4 bg-[#B2030A] text-white rounded-lg hover:bg-white hover:text-[#B2030A]  hover:border-[#B2030A] transition-colors duration-200 font-medium w-full md:w-auto text-[20px] flex items-center gap-2'>
            Find Your Franchise <BsArrowRight />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Banner
