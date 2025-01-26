import Button from "./Button"
import Project from "./Project"
import art from '../assets/img/art.jpg'
import animal from '../assets/img/animal.jpg'
import nature from '../assets/img/nature.jpg'
import social from '../assets/img/social.jpg'

function Showcase(){
    return(
        <div className="mb-10" id="portfolio">
            <div style={{ fontFamily: "'Oswald', sans-serif" }} className="text-center uppercase text-4xl font-extrabold">
                <h1>PORTFOLIO SHOWCASE</h1>
                <span>*</span>
            </div>
            <p className="text-xs leading-4 text-wrap text-justify mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, dolor a fugiat esse ea quos enim beatae corrupti excepturi sapiente vero id dolores natus</p>
            <div className="flex gap-3 justify-center mb-10">
                <Button to='#art'>Art</Button>
                <Button to='#animal'>Animal</Button>
                <Button to='#nature'>Nature</Button>
                <Button to='#social'>Social</Button>
            </div>
            <div>
                <Project target='art' img={art} desc="art/paint">Queen Of Disaster</Project>
                <Project target='animal' img={animal} desc="animal/cats">Beautiful Eyes</Project>
                <Project target='nature' img={nature} desc="Nature/Wonderful">Walking On A Line</Project>
                <Project target='social' img={social} desc="Social/City">Abbey Road</Project>
            </div>
        </div>
    )
}

export default Showcase