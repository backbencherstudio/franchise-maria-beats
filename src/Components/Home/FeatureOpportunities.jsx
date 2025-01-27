import { BsArrowRight } from 'react-icons/bs'
import img1 from '../../assets/Image/partnership/img1.png'
import img2 from '../../assets/Image/partnership/img2.png'
import img3 from '../../assets/Image/partnership/img3.png'
import img4 from '../../assets/Image/partnership/img4.png'
import img5 from '../../assets/Image/partnership/img5.png'
import img6 from '../../assets/Image/partnership/img6.png'
import img7 from '../../assets/Image/partnership/img7.png'

const FeatureOpportunities = () => {
  return (
    <div className='max-w-screen-xl mx-auto px-4 py-24 '>
      <div className='flex flex-col lg:flex-row items-center  justify-between'>
        {/* left side */}
        <div>
          <div className='flex items-center gap-2'>
            <div className='h-[2px] w-4 bg-[#B2030A]'></div>{' '}
            <p className='text-[16px] text-[#B2030A]'> Feature Opportunities</p>
          </div>
          <h3 className='text-[#1D1F2C] text-[40px] font-semibold'>
            Partners with exceptional growth.
          </h3>
          <p className='text-[#4A4C56] text-[16px]'>
            Trusted by government and top companies, exceeding expectations.
          </p>
        </div>
        {/* right side */}
        <div className='mt-10'>
          <button className='px-8 py-4 bg-[#B2030A] text-white rounded-lg hover:bg-white hover:text-[#B2030A]  hover:border-[#B2030A] transition-colors duration-200 font-medium w-full md:w-auto text-[18px] flex items-center gap-2'>
            Search Franchise Directory
            <BsArrowRight />
          </button>
        </div>
      </div>
      {/* partner images */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-10 mt-12'>
        <div className='border border-[#B2030A] rounded-md '>
          <img src={img1} alt='' className='w-full h-48 p-3 ' />
        </div>
        <div className='border border-[#B2030A] rounded-md '>
          <img src={img2} alt='' className='w-full h-48 p-3 ' />
        </div>
        <div className='border border-[#B2030A] rounded-md '>
          <img src={img3} alt='' className='w-full h-48 p-3 ' />
        </div>
        <div className='border border-[#B2030A] rounded-md '>
          <img src={img4} alt='' className='w-full h-48 p-3 ' />
        </div>
        <div className='border border-[#B2030A] rounded-md '>
          <img src={img5} alt='' className='w-full h-48 p-3 ' />
        </div>
        <div className='border border-[#B2030A] rounded-md '>
          <img src={img6} alt='' className='w-full h-48 p-3 ' />
        </div>
        <div className='border border-[#B2030A] rounded-md '>
          <img src={img7} alt='' className='w-full h-48 p-3 ' />
        </div>
      </div>
    </div>
  )
}

export default FeatureOpportunities
