import Card from "./Card";
import artwork from "../assets/img/artwork.jpg";
import photography from "../assets/img/photography.jpg";
import singer from "../assets/img/singer.jpg";
import videography from "../assets/img/videography.jpg";

function Services() {
    return (
        <div id="services">
            <div className="mb-5">
                <h1 style={{ fontFamily: "'Oswald', sans-serif" }} className="text-center uppercase text-4xl font-extrabold text-wrap mb-1">OUR*Services</h1>
                <p className="text-xs text-wrap text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, reiciendis.</p>
            </div>
            <div className="flex flex-col gap-3">
                <Card
                    img={photography}
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, reiciendis."
                >photography</Card>
                <Card
                    img={videography}
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, reiciendis."
                >videography</Card>
                <Card
                    img={artwork}
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, reiciendis."
                >artwork</Card>
                <Card
                    img={singer}
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, reiciendis."
                >singer</Card>
            </div>
        </div>
    );
}

export default Services;