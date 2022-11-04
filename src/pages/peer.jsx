import { Connector } from "@espruino-tools/peer"
import { useEffect, useState } from "react"

export const PeerPage = () => {

    const [p] = useState(new Connector())

    useEffect(()=>{
        p.connectData()
    },[])

    return(
        <h1>Peer Connection Page</h1>
    )
}