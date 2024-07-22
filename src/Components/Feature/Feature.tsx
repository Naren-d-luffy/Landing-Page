import "./Feature.css";

interface Props {
  title: string | null;
  description: string | null;
  image: string | null;
  button: string | null ;
}

const Feature = ({ title, description, image, button }: Props) => {
  const default_description =
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus <br /> mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.";
  const default_title = "Light, Fast & Powerful";
  const default_image = "src\\assets\\undraw_happy_news_hxmt.png";

  return (
    <div className="feature-section">
      <img src={image || default_image} alt="" />

      <div className="content-container">
        <h3 className="hero-title">{title || default_title}</h3>
        <p className="description">{description || default_description}</p>

      {button && (
        <div className="call-to-action">
          <div className="button btn-dark-blue">Purchase Now</div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Feature;
