import bar from '@/img/burger_1.svg';
import Image from 'next/image';
import LightSwitch from './light-switch';
import Reveal from './reveal';
import Link from 'next/link';

export default function MobileHeader() {

  return (
    <header className='anima z-[2] flex flex-row items-center justify-center xsm:w-full  xsm:space-x-32 py-4'>
      <Reveal>
        <Link 
        href="#homeSection"
        scroll={true}>
          <h1 className='select-none xsm:text-4xl w-fit h-fit font-semibold'>if(C)</h1>
        </Link>
      </Reveal>
      <Reveal>
        <div className='flex flex-row items-center space-x-4'>
          <LightSwitch />
          <button className='w-6 h-6'>
            <Image
            src={bar}
            alt='Barra'
            className='object-contain'/>
          </button>
        </div>
      </Reveal>
    </header>
  );
}