import { useRouteError } from "react-router-dom"

export default function Error(){
    const err = useRouteError();
    console.log('error router',err);
    return(
        <div>
            <h1>Oops!</h1>
            <h2>Something went wrong</h2>
            <h3>{err.status}:{err.statusText}</h3>
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/something-went-wrong-illustration-svg-png-download-2133695.png"></img>
        </div>
    )
}