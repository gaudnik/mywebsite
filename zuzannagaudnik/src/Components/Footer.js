import React, { useRef, useEffect, useState } from "react";

const Footer = () => {
  const footerRef = useRef(null);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    setFooterHeight(footerRef.current.clientHeight);
  }, []);

  return (
    <div ref={footerRef} className="footer" style={{ marginTop: footerHeight }}>
      <h3 className="footer__header">©2023 Zuzanna Gaudnik · All rights reserved.</h3>
    </div>
  );
};

export default Footer;
