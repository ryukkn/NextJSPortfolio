export default function Icon(props:any) {
    return <img onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} id={props.id ?? ''} className={props.className + ' object-contain hover:scale-125  cursor-pointer select-none transition-all'} src={props.src} alt="" />
} 