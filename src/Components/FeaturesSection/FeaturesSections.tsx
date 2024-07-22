import React from "react";
import "./FeaturesSections.css";
import Feature from "../Feature/Feature";

interface Feature {
  title: string | null;
  description: string | null;
  image: string | null;
}

export const FeaturesSections = () => {
  const features = [
    {
      title: "Light, Fast & Powerful",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
      image: "src\\assets\\undraw_happy_news_hxmt.png",
      button: "",
    },
    {
      title: "Light, Fast & Powerful",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
      image: "src\\assets\\undraw_social_influencer_sgsv.png",
      button: ""
    },
    {
      title: "Light, Fast & Powerful",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
      image: "src\\assets\\undraw_mention_6k5d.png",
    button: "Purchase Now"
    },
  ];

  return (
    <div>
      {features.map((feature, index) => (
        <Feature
          title={feature.title}
          description={feature.description}
          image={feature.image}
          key={index}
          button={feature.button}
        />
      ))}
      {/* <Feature title="Light, Fast & Powerful" />
      <Feature title="Light, Fast & Powerful" />
      <Feature title="Light, Fast & Powerful" /> */}
    </div>
  );
};
