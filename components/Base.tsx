export default function Base(props:any){
    return <div id={props.id} className="animated-background bg-gradient-to-r from-blue-500 via-blue-500 to-indigo-500 w-[100vw] h-[100vh] relative">
        {props.children}
    </div>
}