import bar from '@/img/burger_1.svg';
import Image from 'next/image';
import LightSwitch from './light-switch';
import Reveal from './reveal';

export default function MobileHeader() {

  return (
    <header className='anima z-[2] flex flex-row items-center xsm:w-full justify-center space-x-20 py-4'>
      <Reveal>
        <h1 className='relative xsm:text-4xl w-fit h-fit font-semibold'>if(C)</h1>
      </Reveal>
      <Reveal>
        <div className='flex flex-row items-center space-x-4'>
          <LightSwitch />
          <button className='w-10 h-10'>
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