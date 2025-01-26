import Link from "./Link"
import ig from "../assets/img/instagram.png"
import fb from "../assets/img/facebook.png"
import os from "../assets/img/opensea.png"
import ss from "../assets/img/shutterstock.png"

function Contact(){
    return(
        <div className=' mb-8'>
            <h1 style={{ fontFamily: "'Oswald', sans-serif" }} className="text-center uppercase text-4xl font-extrabold text-wrap mb-8">*Contact</h1>
            <div>
                <Link to='https://www.instagram.com/haallut/' img={ig}>hallut</Link>
                <Link to='https://www.facebook.com/regiHidayatullah12361' img={fb}>Regi Hidayatullah</Link>
                <Link to='https://opensea.io/Inkchaos' img={os}>inkchaos</Link>
                <Link to='https://www.shutterstock.com/g/greenhavenn09/' img={ss}>greenhavenn09</Link>
            </div>
        </div>
    )
}   

export default Contact