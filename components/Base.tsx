export default function Base(props:any){
    return <div id={props.id} className="bg-black w-[100vw] h-[100vh] relative">
        {props.children}
    </div>
}