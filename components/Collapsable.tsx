import { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

export default function Collapsable(props:any) {
    
    return props.shown ? <div onMouseLeave={props.onMouseLeave} onMouseEnter={props.onMouseEnter} className={props.className ?? ''}>
        <button onClick={props.onClick} className=' transition-all w-7 h-7 text-black flex justify-center items-center text-xl mt-2 hover:bg-black rounded-full hover:text-white'> <BiChevronDown/> </button>
            {props.children}
    </div> : ''
}