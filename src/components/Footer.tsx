
const Footer = () => {
  const year = new Date().getFullYear();

  return <div className="p-1 bg-blue-500 w-full text-center text-white font-bold">{`Copyright © Famatos ${year}`}</div>;
};

export default Footer;
