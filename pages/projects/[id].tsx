import { useRouter } from "next/router";

export default function Project(){
    const router =  useRouter();
    const {id} = router.query;
    return <h1> This is Project {id}</h1>
}