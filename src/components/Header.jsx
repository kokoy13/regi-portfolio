import Regi from '../assets/img/regi.jpg';

function Header(){
    return (
        <header className='mb-12'>
            <div className="w-full" style={{ fontFamily: "'Oswald', sans-serif" }}>
                <h1 className="text-4xl text-center font-extrabold w-full uppercase mb-2">Regi Hidayatullah</h1>
                <div className="relative w-full py-1 h-96 uppercase font-extrabold">
                    <img className='absolute h-96 w-full' src={Regi} alt="Regi Hidayatullah"/>
                    <div className='flex justify-between items-end h-full text-white px-2'>
                        <h1 className='text-wrap max-w-28 leading-5 relative z-20'>BASED in indonesia* available worldwide</h1>
                        <span className='relative z-20'>Since 2016</span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;