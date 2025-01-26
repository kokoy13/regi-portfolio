/* eslint-disable react/prop-types */
function Link(props){
    const{to, children, img} = props

    return(
        <div className="flex items-center uppercase text-xs justify-between mb-2">
            <div className="flex gap-3 items-center">
                <img className="w-5" src={img} alt="" />
                <span>{children}</span>
            </div>
            <a className="underline text-blue-500" href={to}>link</a>
        </div>
    )
}

export default Link