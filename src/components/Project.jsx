/* eslint-disable react/prop-types */
import rightup from '../assets/img/right-up.png'

function Project(props){
    const { img, desc, children} = props
    return (
        <div className='mb-10'>
            <div className="w-full uppercase">
                <img className="mb-5 h-72 w-full" src={img} alt="" />
                <h2 className='text-xs tracking-[2px] mb-1' style={{ fontFamily: "'Oswald', sans-serif" }}>{desc}</h2>
                <div className="flex justify-between items-start" style={{ fontFamily: "'Oswald', sans-serif" }}>
                    <h1 className='font-extrabold text-xl'>{children}</h1>
                    <img className='w-6' src={rightup} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Project