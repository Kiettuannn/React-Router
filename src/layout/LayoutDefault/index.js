import { NavLink, Outlet } from "react-router-dom";
import "./LayoutDefault.scss"
function LayoutDefault(){
  const navLinkActive = (e) => {
    return e.isActive ? "menu__link--active" : "menu__link"
  }
  return(
    <>
    <div className="layout-default">
      <header className="layout-default__header">
        <div className="layout-default__logo">Logo</div>
        <div className="menu">
          <ul>
            <li>
              <NavLink className={navLinkActive} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className={navLinkActive} to="/about">About</NavLink>
            </li>
            <li>
              <NavLink className={navLinkActive} to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink className={navLinkActive} to="/blog">Blog</NavLink>
              <ul className="menu__sub">
                <li>
                  <NavLink to="/blog/news" className={navLinkActive}>Blog News</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink className={navLinkActive} to="/info-user">InfoUser</NavLink>
            </li>
          </ul>
        </div>
      </header>
      <main className="layout-default__main">
        <Outlet></Outlet>
      </main>
      <footer className="layout-default__footer">Coppyright @ 2025</footer>
    </div>
    </>
  )
}
export default LayoutDefault;