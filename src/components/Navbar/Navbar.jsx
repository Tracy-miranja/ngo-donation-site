import { FaCaretDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container">
        <div className="text-2xl md:text-3xl text-white uppercase">
          {/* logo section */}
          <a href="#">
            Needy<span className="text-primary font-bold">Funds</span>
          </a>
        </div>
        {/* desktop menu section */}
        <div>
          <ul>
            <li>
              <a href="#" className="flex flex-row items-center gap-2">
                Home{" "}
                <span>
                  <FaCaretDown />
                </span>
              </a>
            </li>
          </ul>
        </div>
        {/* mobile menu section */}
      </div>
    </nav>
  );
};

export default Navbar;
