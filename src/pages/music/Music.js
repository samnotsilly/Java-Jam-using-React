import React from "react";
import "./Music.css";
import melaniethumb from "../../assets/images/melaniethumb.jpg";
import melanie from "../../assets/images/melanie.jpg";
import gregthumb from "../../assets/images/gregthumb.jpg";
import greg from "../../assets/images/greg.jpg";

const detailsData = [
  {
    title: "January",
    img: melanie,
    thumbData: {
      img: melaniethumb,
      alt: "melanie thumb",
    },
    desc: "Melanie Morris entertains with her melodic folk style.",
  },
  {
    title: "February",
    img: greg,
    thumbData: {
      img: gregthumb,
      alt: "greg thumb",
    },
    desc: "Tahoe Greg is back from his tour. New songs. New stories",
  },
];
const Music = () => {
  const details = detailsData.map((data) => (
    <div key={data.title}>
      <h4>{data.title}</h4>
      <div className="details">
        <a href={data.img}>
          <img
            src={data.thumbData.img}
            alt={data.thumbData.alt}
            height="60"
            width="80"
          />
        </a>
        <p>{data.desc}</p>
      </div>
    </div>
  ));

  return (
    <>
      <div id="heroguitar"></div>
      <h2>Music at JavaJam</h2>
      <p>
        The first Friday night each month at JavaJam is a special night. Join us
        from 8 pm to 11 pm for some music you won't want to miss!
      </p>
      {details}
    </>
  );
};

export default Music;
