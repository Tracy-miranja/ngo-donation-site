import { BiPhoneCall, BiSolidSun } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-l from-gray-800 via-violet-900 to-gray-900 bg-fixed text-white left-0 w-full border-b-[1px] border-primary/50">
      <div className="container flex flex-row items-center justify-between">
        <div className="text-2xl md:text-3xl text-white uppercase">
          {/* logo section */}
          <a href="#">
            Needy<span className="text-primary font-bold">Funds</span>
          </a>
        </div>
        {/* desktop menu section */}
        <div>
          <ul className="flex flex-row items-center gap-4">
            <li className="group relative">
              <a href="#" className="flex items-center gap-2 h-[72px]">
                Home{" "}
                <span>
                  <FaCaretDown className="group-hover:rotate-180 transition-all duration-200" />
                </span>
              </a>
              {/* drop down section */}
              <div className="absolute -left-9 z-[99999] hidden w-[150px] bg-white shadow-md p-2 text-black rounded-md group-hover:block">
                <ul>
                  <li>Services</li>
                  <li>Donate</li>
                  <li>Terms and Condition</li>
                </ul>
              </div>
            </li>
            <li>About us</li>
            <li className="flex flex-row gap-2 items-center">
              <div>
                <BiPhoneCall className="text-2xl bg-primary w-[40px] h-[40px] hover:bg-inherit hover:text-primary hover:scale-50 rounded-md" />
              </div>
              <div>
                <p>+254769212978</p>
                <p>miranjatracy@gmail.com</p>
              </div>
            </li>
            <BiSolidSun className="text-2xl" />
          </ul>
        </div>
        {/* mobile menu section */}
      </div>
    </nav>
  );
};

export default Navbar;
