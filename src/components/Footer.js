import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-30 bg-black ">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center  ">
          <p className="font-playfair font-semibold text-2xl text-yellow ">
          Kali Amdie
          </p>
          <p className="font-playfair text-md text-yellow ">
            ©2022 Amdie. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;