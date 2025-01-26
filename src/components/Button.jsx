/* eslint-disable react/prop-types */
function Button(props){
    const { children, to } = props
    
    return(
        <a href={to} className="text-[10px] uppercase border rounded-full px-3 hover:bg-black transition-colors duration-300 ease-in-out hover:text-white">
            <span>{children}</span>
        </a>
    )
}

export default Button