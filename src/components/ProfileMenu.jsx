import { useAuthUser } from "react-auth-kit";
import { useSignOut } from "react-auth-kit";
import Images from "../util/Images";

const ProfileMenu = () => {
  const auth = useAuthUser()();
  const signOut = useSignOut();

  return (
    <div className="absolute top-16 right-0 bg-white shadow-2xl rounded z-50 w-[300px] p-8 border-[#ddd] border-1">
      <div className="text-center w-full">
        <img
          className="w-28 mx-auto"
          src={Images.avater}
          alt="avater"
        />
        <div className="mt-3">
          <h3 className="text-lg">{auth.name}</h3>
        </div>
      </div>
      <div className="divider"></div>
      <div>
        <ul>
          <li className="mx-auto my-2">Dashboard</li>
          <li onClick={() => signOut()} className="mx-auto my-2">
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileMenu;
