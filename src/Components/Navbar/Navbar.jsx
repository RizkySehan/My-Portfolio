import { BsFillMoonStarsFill } from "react-icons/bs";

function Navbar() {
  return (
    <nav className="flex justify-between pt-10 xl:pb-10 xl:mb-12">
      <h1 className="text-xl font-bold font-burtons">RizkySehan</h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill className="cursor-pointer text-xl" />
        </li>
        <li>
          <a
            href="#"
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-4"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
