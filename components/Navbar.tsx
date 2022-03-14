import Link from "next/link";
import navStyles from "../styles/Navbar.module.scss";


const Navbar = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/feed/1">Feed</Link>
        </li>
        <li>
          <Link href="/dom">DOM</Link>
        </li>
        <li>
          <Link href="https://twitter.com">Twitter</Link>
        </li>

      </ul>
    </nav>
  );
};


export default Navbar;
