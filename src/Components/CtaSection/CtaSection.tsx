import './CtaSection.css';

export const CtaSection = () => {

  const price = 40;

  return (
    <div className='cta-section'>
<img src="assets\image.png" alt="" />
      <div className='cta-section__content'>
        <h2 className='cta-section__title'>A Price To Suit Everyone</h2>
        <p className='cta-section__description'>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus         </p>

        <div className='cta-section__priceContaienr'>
          <span className='cta-section__price'>${price}</span>
          <span className='cta-section__priceTag'>UI Design Kit</span>
        </div>

        <p className='cta-section__purchaseTagline'>See, One price. Simple.</p>
        <button className='button btn-dark-blue'>Get Started</button>
      </div>
    </div>
  )
}
