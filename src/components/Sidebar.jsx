import Vector from '../../src/Assets/Vector.svg'
import home from '../assets/Home.svg';
import edit from '../assets/EditBlue.svg';

export default function Sidebar() {
  return (
    <aside className="w-48 sm:w-56 md:w-60 lg:w-64 h-screen fixed top-0 left-0 z-10 shadow-md bg-white">
      <div className="flex items-center justify-center bg-blue-950 text-white gap-2 px-2 py-[10px] sm:py-[11px] border-b">
        <div className="flex gap-2 sm:gap-4 items-center justify-center">
          <img src={Vector} alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-xs sm:text-sm md:text-base font-extrabold leading-[100%] tracking-[0%] font-outfit">
            Admin Portal
          </span>
        </div>
      </div>
      <nav className="mt-4">
        <ul>
          <li className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3">
            <img src={home} alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">Home</span>
          </li>
          <li className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 text-blue-600">
            <img src={edit} alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">Application</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
