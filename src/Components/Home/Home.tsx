import './Home.css'

export const Home = () => {
  return (
    <div className='home-section'>

        <div className="content-container">
       
            <h2 className="hero-title">
            Introduce Your Product Quickly & Effectively
            </h2>

            <p className="description">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
            <br />
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </p>

            <div className="call-to-action">
                <div className="button btn-dark-blue">Purchase UI Kit</div>
                <div className="button btn-dark-blue-borderd">Learn More</div>
            </div>
       
        </div>

        <img className="home-bg-image" src="src\assets\designer_1.png" alt="" />
        

    </div>
  )
}
