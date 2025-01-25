/* eslint-disable react/prop-types */
function Card(props){
    const { img, desc, children} = props
    return(
        <div className='mb-10'>
            <div className="w-full">
                <img className="mb-3 h-48 w-1/2 mx-auto" src={img} alt="" />
                <h1 className='font-extrabold text-center text-2xl uppercase mb-2' style={{ fontFamily: "'Oswald', sans-serif" }}>{children}</h1>
                <h2 className='text-xs text-center'>{desc}</h2>
            </div>
        </div>
    );
}

export default Card;