export default function Profile(props:any) {
    return <div className={props.className ?? '' + ' relative'} >
        {/* <div className=" -rotate-45 bg-white h-12 w-full absolute bottom-0 -right-32 z-10"> </div> */}
        <div className="overflow-hidden rounded-full absolute z-0 h-full w-[102%] cursor-pointer bg-black mt-2  transition-all">
        </div>
        <div className="overflow-hidden rounded-full absolute z-10 h-full w-full cursor-pointerbg-[url('/images/trippings.jpg')] bg-cover bg-top hover:bg-center  transition-all">
            <img className=" mt-20 scale-[200%] z-0" src="/images/profile-alt.jpg" alt="" />
        </div>
    </div>
}