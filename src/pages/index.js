import * as React from "react"
import { Link } from "gatsby"
export default function Home() {
  return (
    <div className="home" style={{height:'100vh',width:"100vw",display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <h1>Home</h1>
        <h3>Click the below link to navigate '/microsoft-partner/'</h3>
        <Link to='/microsoft-partner'>microsoft-partner</Link>
    </div>
  )
}

