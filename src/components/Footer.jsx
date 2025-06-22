const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Food corner. All rights
          reserved.
        </p>
        <p className="text-xs mt-2">
          Developed with Techlead by {" "}
          <a
            href="https://yourwebsite.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:underline"
          >
            Yokesh kumar
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
