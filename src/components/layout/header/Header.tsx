"use client"
import scss from "./Header.module.scss";

const Header = () => {
 return (
  <section className={scss.Header}>
   <div className="container">
    <div className={scss.content}></div>
   </div>
  </section>
 );
};

export default Header;
