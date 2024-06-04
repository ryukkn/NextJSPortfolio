import Tray from '@/components/Tray';
import Text from '@/components/Text';
import { BiSolidCircle } from 'react-icons/bi';

export default function Header() {
    const handleSectionJump = (section:string) => {
        window.location.href = `#${section}`;
   };
    return <header className='relative z-50' >
        <div className='h-5 bg-black'></div>
        <div className='h-16 bg-white drop-shadow-lg flex justify-between'>
            <Tray className={`justify-start items-center h-full`}>
                <BiSolidCircle className='ml-10 text-black text-xs'/>
                <Text className={`text-black select-none text-xl font-bold h-full px-3 flex justify-center items-center  border-black border-opacity-15`}> v </Text>
                <BiSolidCircle className='text-black text-xs'/>
            </Tray>
            <Tray className={`justify-end items-center h-full`}>
                <Text onClick={()=>handleSectionJump('home')} className={`text-black select-none cursor-pointer text-xl hover:text-blue-900 h-full px-4 flex justify-center items-center hover:bg-slate-50`}> Home </Text>
                <Text onClick={()=>handleSectionJump('about')} className={`text-black select-none cursor-pointer text-xl hover:text-blue-900 h-full px-4 flex justify-center items-center hover:bg-slate-50`}> About </Text>
                <Text onClick={()=>handleSectionJump('experience')} className={`text-black select-none cursor-pointer text-xl hover:text-blue-900 h-full px-4 flex justify-center items-center hover:bg-slate-50`}> Experience </Text>
                <Text onClick={()=>handleSectionJump('contact')} className={`text-black select-none cursor-pointer text-xl hover:text-blue-900 h-full px-4 pr-10 flex justify-center items-center hover:bg-slate-50`}> Contact </Text>
            </Tray>
        </div>
    </header>
}