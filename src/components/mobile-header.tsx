import bar from '@/img/burger_1.svg';
import Image from 'next/image';
import LightSwitch from './light-switch';

export default function MobileHeader() {

  return (
    <header className='flex flex-row items-center xsm:w-[20rem] justify-between my-6 border border-black'>
      <h1 className='xsm:text-4xl w-fit h-fit font-semibold border border-black'>if(C)</h1>
      <div className='flex flex-row items-center space-x-4 border border-black'>
        <button className='w-10 h-10 border border-black'>
          <Image
          src={bar}
          alt='Barra'
          className='object-contain'/>
        </button>
        <LightSwitch />
      </div>
    </header>
  );
}