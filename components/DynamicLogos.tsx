export default function DynamicLogos(props:any){
    return props.hide ? null :  props.tags.map((item:any, index:number) => (
        <div className={props.className} key={index} >
          <img src={`/images/${item}.png`} className="w-full h-full object-contain object-center"/>
        </div>
      ))
}