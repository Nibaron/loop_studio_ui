import { Logo } from '@/assets/icons';

export const Hero = () => {
  return (
    <section id='hero'>
      {/**  Hero Container */}
      <div className='container max-w-6xl mx-auto px-6 py-12'>
        {/** Menu/Logo Container */}
        <nav className='flex items-center justify-between font-bold text-white'>
          {/** Logo */}
          <Logo/>
          {/** Menu */}
          <div className='hidden h-10 font-alata md:flex md:space-x-8'>
            <div className='group'>
              <a href='#'>About</a>
              <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
            </div>
            <div className='group'>
              <a href='#'>Careers</a>
              <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
            </div>
            <div className='group'>
              <a href='#'>Events</a>
              <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
            </div>
            <div className='group'>
              <a href='#'>Products</a>
              <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
            </div>
            <div className='group'>
              <a href='#'>Support</a>
              <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
            </div>
          </div>
          {/** Hamburger Button */}
          <div className="md:hidden">
          </div>
        </nav>

        <div className='max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl'>
          Impressive Experiences That Deliver
        </div>
      </div>
    </section>
  );
};
