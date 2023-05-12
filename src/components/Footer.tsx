import "../Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return <div className="fabio">{`Copyright © Famatos ${year}`}</div>;
};

export default Footer;
