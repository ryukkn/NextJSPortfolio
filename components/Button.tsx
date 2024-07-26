export default function Container(props:any){
    return  props.hide ? null : <button id={props.id ?? ''} onClick={props.onClick} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} className={ 
        'flex bg-blue-500 rounded p-2 hover:bg-blue-400 items-center gap-2  transition-all'
        + ' '+ props.className?? ''}>
        {props.children}
    </button>
}