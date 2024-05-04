import Link from "next/link";

const Nav = () => {
  return (
    <div className="grid grid-cols-6">
      <h2 className="col-span-2">Home</h2>
      <ul className="col-span-6">
        <li>
          <Link href="/generate">All Teams</Link>
        </li>
        <li>
          <Link href="/generate?team=bt">Bengal Tigers</Link>
        </li>
        <li>
          <Link href="/generate?team=bt2">Bengal Tigers 2</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
