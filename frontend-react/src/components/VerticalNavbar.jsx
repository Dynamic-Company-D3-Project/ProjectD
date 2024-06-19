import React from 'react'
import { Link } from 'react-router-dom'

const VerticalNavbar = () => {
const change = (event) => {
    event.target.style.borderRadius = '15px'
    event.target.style.backgroundColor = '#FEFFD2'
}
const reset = (event) => {
    event.target.style.backgroundColor = ''
}
const click = (event) => {
    event.target.style.backgroundColor = '#FEFFD2'
}
  return (
    <div className='sidebar bg-light' style={{width: '200px', height: '100vh'}}>
        <nav className='nav flex-column align-content-center text-center mt-1' style={{fontSize: '1.2rem'}}>
            <div onMouseOver={change} onMouseOut={reset} onClick={click}><Link className='nav-link text-primary text-black' >Category-1</Link></div>
            <div onMouseOver={change} onMouseOut={reset} ><Link className='nav-link text-primary text-black' >Category-2</Link></div>
            <div onMouseOver={change} onMouseOut={reset} ><Link className='nav-link text-primary text-black' >Category-3</Link></div>
            <div onMouseOver={change} onMouseOut={reset} ><Link className='nav-link text-primary text-black' >Category-4</Link></div>
            <div onMouseOver={change} onMouseOut={reset} ><Link className='nav-link text-primary text-black' >Category-5</Link></div>
            <div onMouseOver={change} onMouseOut={reset} ><Link className='nav-link text-primary text-black' >Category-6</Link></div>
            <div onMouseOver={change} onMouseOut={reset} ><Link className='nav-link text-primary text-black' >Category-7</Link></div>
            <div onMouseOver={change} onMouseOut={reset} ><Link className='nav-link text-primary text-black' >Category-8</Link></div>
            <div onMouseOver={change} onMouseOut={reset} ><Link className='nav-link text-primary text-black' >Category-9</Link></div>
            <div onMouseOver={change} onMouseOut={reset} ><Link className='nav-link text-primary text-black' >Category-10</Link></div>

        </nav>
    </div>
  )
}

export default VerticalNavbar