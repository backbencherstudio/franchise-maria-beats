import React from 'react'
import graphics from '../../assets/Image/about/grapicestop.png'
import img from '../../assets/Image/about/image.png'
import graphics2 from '../../assets/Image/about/Frame 2147225819.png'
import graphics3 from '../../assets/Image/about/Vector.png'

const About = () => {
  return (
    <div className='bg-[#F8FAFB] py-28 relative'>
      <div className='absolute top-0 left-0 z-10'>
        <img src={graphics} alt='' />
      </div>
      <div className='max-w-screen-xl mx-auto px-4 relative z-20'>
        <div className='flex flex-col items-center'>
          <div className='flex items-center gap-2'>
            <div className='h-[2px] w-4 bg-[#B2030A]'></div>{' '}
            <p className='text-[16px] text-[#B2030A] capitalize'>
              {' '}
              Feature Opportunities
            </p>
          </div>
          <h3 className='text-[#1D1F2C] text-[24px] sm:text-[32px] lg:text-[40px] font-bold capitalize'>
            Message From Founder
          </h3>
        </div>

        <div className='mt-16 flex flex-col lg:flex-row items-center justify-between gap-20'>
          {/* left side */}
          <div className='w-full lg:w-6/12 relative'>
            <div className='absolute -top-8 -left-14 z-10 w-[80px]'>
              <img src={graphics3} alt='' className='w-full h-auto' />
            </div>
            <p className='text-[#4A4C56] text-[18px] leading-[28px]'>
              Thank you for considering Gulf Franchise Hub as your trusted
              partner in achieving your franchise goals. With extensive
              expertise in franchise development and business consultancy, We
              have built a platform designed to deliver customised solutions for
              scalable growth and long-term success.
            </p>
            <p className='text-[#4A4C56] text-[18px] leading-[28px] mt-10'>
              We understand the unique challenges of the franchise landscape and
              Business startup’s eco system here to help you navigate them, from
              identifying what matters ensuring that every aspect of your
              journey is optimized for measurable impact.
            </p>
            <div className='mt-5'>
              <p className='text-[#B2030A] text-[24px] font-bold'>
                Salim A. Itani{' '}
              </p>
              <p className='text-[#4A4C56] text-[24px] font-medium'>Founder</p>
            </div>
          </div>
          {/* right side */}
          <div className='w-full lg:w-5/12'>
            <div className='absolute -bottom-14  md:right-[390px] xl:right-[440px] z-10 w-[200px]'>
              <img src={graphics2} alt='' className='w-full h-auto' />
            </div>
            <div className='z-20 relative'>
              <img src={img} alt='' className='w-full h-auto' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
