/* eslint-disable react/prop-types */
function Button(props){
    const { children } = props
    
    return(
        <a href="#contact" className="text-[10px] uppercase border rounded-full px-3 hover:bg-black transition-colors duration-300 ease-in-out hover:text-white">
            <span>{children}</span>
        </a>
    )
}

export default Button