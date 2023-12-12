import "boxicons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Copyright &copy; 2023 by Jonathan | All Rights Reserved.</p>
      </div>
      <div className="footer-iconTop">
        <a href="#home">
          {/* @ts-expect-error ts doesn't find the type */}
          <box-icon type="solid" name="up-arrow-square"></box-icon>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
