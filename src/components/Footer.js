import logo from "./img/cat-logo.png";

function Footer() {
  return (
    <>
      <div className="sect">
        <img className="sect__logo" src={logo} alt="" />
        <p className="sect__text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius veniam
          cumque illum ipsam perferendis numquam blanditiis recusandae modi
          nemo, nisi magni tempore nam esse nostrum ex ratione beatae
          consectetur hic!
        </p>
      </div>
      <footer className="footer">
        <div className="footer_section">
          <div className="contacts">
            <h3 className="contacts__text">КОНТАКТЫ</h3>
            <div className="links">
              <span className="links__type">e-mail:</span>
              <a className="links__link" href="mailto:cat@i.ua">
                cat@i.ua
              </a>
            </div>
            <div className="links">
              <span className="links__type">моб.</span>
              <a className="links__link" href="tel:+380990001122">
                +380990001122
              </a>
            </div>
          </div>
          <div className="contacts">
            <h3 className="contacts__text">СОЦСЕТИ</h3>
            <div>
              <a href="./" className="links__link links_uderline">
                facebook
              </a>
            </div>
            <div>
              <a href="./" className="links__link links_uderline">
                vk
              </a>
            </div>
            <div>
              <a href="./" className="links__link links_uderline">
                linkedin
              </a>
            </div>
          </div>
        </div>
        <p className="school">Hillel, 2022</p>
      </footer>
    </>
  );
}

export default Footer;
