import './Navbar.css'

export const Navbar = () => {

  return (
    <>
    <nav>
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
    </nav>
    </>
  )
}
