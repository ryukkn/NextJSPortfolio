export default function Text(props:any) {
    return props.hide ? null : <p onClick={props.onClick} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} className={props.className ?? ''}>
        {props.children}
    </p>
}