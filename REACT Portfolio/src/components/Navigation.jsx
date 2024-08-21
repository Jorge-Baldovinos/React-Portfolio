import { Link, useMatch, useResolvedPath } from "react-router-dom"

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <li className={isActive ?  "active" : ""}>
      <Link to={to} {...props}>
       {children}
      </Link>
    </li>
  )
}

function Navigation() {

return (
  <div className="navBar">
    <div className="navBar-header bg-primary">
      <h1>Jorge Baldovinos</h1>
      <h2>Full-Stack Web Developer</h2>
    </div>
    <div className="navBar-links">
      <ul>
        <CustomLink to="/">About Me</CustomLink>
        <CustomLink to="/portfolio">Portfolio</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
        <CustomLink to="/resume">Resume</CustomLink>
        {/* <li>
          <a href="/portfolio">Portfolio</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/resume">Resume</a>
        </li> */}
      </ul>
    </div>
  </div>
);
}

export default Navigation;
