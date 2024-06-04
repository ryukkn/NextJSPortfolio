export default function Container(props:any){
    return  props.hide ? null : <div id={props.id ?? ''} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} className={props.className}>
        {props.children}
    </div>
}