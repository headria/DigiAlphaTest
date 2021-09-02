import { useSelector } from "react-redux";
import { IReducer } from "src/redux/store/types";
import { HeaderStyle } from "./styles";

export const Header = () => {
  const userData = useSelector(({ users }: IReducer) => users.selectedUser);
  return (
    <HeaderStyle>
      <div className="profile-header-cover"></div>
      <div className="profile-header-content">
        <div className="profile-header-img">
          <img src={userData?.avatar} alt="" />
        </div>
        <div className="profile-header-info">
          <h4 className="m-t-10 m-b-5">
            {userData?.first_name + " " + userData?.last_name}
          </h4>
          <p className="m-b-10">{userData?.email}</p>
        </div>
      </div>
    </HeaderStyle>
  );
};
