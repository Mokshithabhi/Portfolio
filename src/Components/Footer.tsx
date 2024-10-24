import React from "react";
const Footer : React.FC = () => {
  return (
    <footer className="container mx-auto py-1 fixed bottom-0  bg-white dark:bg-dark-mode">
      <p className="text-xs text-center text-dark-content dark:text-light-content w-full">
        Designed and Coded by
        <a
          className="font-medium m-1 text-blue-400"
          href="https://github.com/electrifire-123"
          target="_blank"
          rel="noreferrer noopener"
        >
           Bhagavan Mokshith
        </a>
        with
        <span className="text-gradient font-medium"> Love</span> &
        <span className="text-gradient font-medium"> Tea</span>
      </p>
    </footer>
  );
}
export default Footer;
