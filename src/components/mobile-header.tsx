import bar from '@/img/burger_1.svg';
import Image from 'next/image';
import LightSwitch from './light-switch';
import Reveal from './reveal';

export default function MobileHeader() {

  return (
    <header className='flex flex-row items-center xsm:w-[20rem] justify-between my-6'>
      <Reveal>
        <h1 className='xsm:text-4xl w-fit h-fit font-semibold'>if(C)</h1>
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