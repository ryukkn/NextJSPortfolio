export default function Tray(props:any)  {
    return <div className={"flex " + props.className ?? ''}>
        {props.children}
    </div>
}