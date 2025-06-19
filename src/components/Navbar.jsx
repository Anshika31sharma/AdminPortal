import line from "../Assets/line.svg";
import bell from "../Assets/notification.svg";
import user from "../Assets/user.svg";
import Vector from "../Assets/Vector.svg";

export default function Navbar({ onMenuClick }) {
  return (
    <div className="bg-blue-950 text-white px-4 md:px-6 py-3.5 flex justify-between items-center fixed top-0 left-0 right-0 z-40">
      <div className="flex items-center gap-3">
        <button className="block lg:hidden" onClick={onMenuClick}>
          <img src={line} alt="" />
          
        </button>
         <div className=' flex gap-4 items-center justify-center'>
        <img src={Vector} alt="" />
        <span className="text-lg font-extrabold text-[12px] leading-[100%] tracking-[0%] font-outfit">Admin Portal</span>
       </div>
      <img src={line} alt="Logo" className="hidden ml-32 lg:block w-5 h-5" />
      </div>
      <div className="flex items-center gap-4">
        <img src={bell} alt="" />
        <img src={user} alt="" />
      </div>
    </div>
  );
}
