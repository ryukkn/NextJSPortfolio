export default function InputField(props:any){
    const theme = 'placeholder-gray-300 rounded border-gray-300 border-0 text-gray-800 border-b-2 focus:outline-none p-2 focus-within:border-blue-300 bg-gray-50 transition-all';
    return props.textarea ? 
    <textarea placeholder={props.placeholder} className={theme + props.className?? ''} /> 
    : <input placeholder={props.placeholder} type={props.type} className={theme + ' '+ props.className?? ''}/>
}