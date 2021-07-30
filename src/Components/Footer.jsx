import React from 'react';

const Footer = () => (
    <footer className="text-center py-3 mt-5 bg-dark text-light fixed-bottom">
        <p>copyright &copy; {new Date().getFullYear()}</p>
    </footer>
);

export default Footer;
