import cat from "./img/cat.jpg";

function SectAboutMe() {
  return (
    <div className="section">
      <div className="column">
        <img className="column__picture" src={cat} alt="cat" />
      </div>
      <div className="column">
        <p className="column__titel">Пара слов про меня</p>
        <p className="column__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          quae et perspiciatis nesciunt nisi. Autem accusamus debitis cum quam
          necessitatibus magni rem repudiandae qui cupiditate, iure sapiente
          itaque culpa quasi!
        </p>
        <div className="column__box">
          <p className="column__box_style-italic">
            &#171;Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Incidunt ipsam fuga quis iusto eaque quasi nulla tenetur ducimus.
            Omnis hic, doloremque reiciendis sed totam quibusdam eius error
            aperiam itaque sequi.
          </p>
          <p className="text column__box_position">
            Иван Пупкин, <b>Web Designer</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export { SectAboutMe };
