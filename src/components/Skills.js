function Skills() {
  return (
    <div className="section">
      <div className="column">
        <p className="column__titel">Мои навыки</p>
        <div className="skills">
          <p className="skills__scale">Photoshop</p>
          <p className="skills__scale">HTML</p>
          <p className="skills__scale">CSS</p>
          <p className="skills__scale">JavaScript</p>
          <p className="skills__scale">Angular</p>
          <div className="scale">
            <div className="scale__line">1</div>
            <div className="scale__line">2</div>
            <div className="scale__line">3</div>
            <div className="scale__line">4</div>
            <div className="scale__line">5</div>
          </div>
        </div>
      </div>
      <div className="column">
        <p className="column__titel">Что я делаю</p>
        <ul className="my-work">
          <li className="my-work__list">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
            commodi eaque. Ex similique veritatis assumenda.
          </li>
          <li className="my-work__list">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
            commodi eaque. Ex similique veritatis assumenda.
          </li>
          <li className="my-work__list">Lorem ipsum dolor sit amet</li>
          <li className="my-work__list">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
            commodi eaque. Ex similique veritatis assumenda.
          </li>
          <li className="my-work__list">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
            commodi eaque. Ex similique veritatis assumenda.
          </li>
          <li className="my-work__list">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
            commodi eaque. Ex similique veritatis assumenda.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
