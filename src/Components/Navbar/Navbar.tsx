import { useState } from 'react'
import './Navbar.css'

export const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

  return (
    <>
    {/* <nav>
        <div className="container">
            <div className="menu-items">
                <ul>
                    <li className='menu-item'>Home</li>
                    <li className='menu-item'>About</li>
                    <li className='menu-item'>Contact</li>
                </ul>
            </div> 

            <div className="logo">
                <h1>Landing</h1>    
            </div> 

            <div className="button-conatainer">
                <button className="button btn-dark-blue buy-button">Buy Now</button>
            </div>
        </div>
    </nav> */}
    <nav>
        <div className="container">
         

          <div className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li className='menu-item'>Home</li>
              <li className='menu-item'>About</li>
              <li className='menu-item'>Contact</li>
            </ul>
          </div>

          <div className="logo">
            <h1>Landing</h1>
          </div>

          <div className="button-container">
            <button className="button btn-dark-blue buy-button">Buy Now</button>
          </div>


          <div className="menu-container">
  <a id="menu-toggle"  className={`menu-toggle ${isMenuOpen ? "nav-open" : ""}`} onClick={toggleMenu}>
    <span className="menu-toggle-bar menu-toggle-bar--top"></span>
    <span className="menu-toggle-bar menu-toggle-bar--middle"></span>
    <span className="menu-toggle-bar menu-toggle-bar--bottom"></span>
  </a>
</div>
        </div>
      </nav>
    </>
  )
}
