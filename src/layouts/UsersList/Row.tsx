import { memo } from "react";
import { FC } from "react";
import { IUser } from "src/services/users";

interface UserRowProps {
  userData?: IUser;
}
const UserRow: FC<UserRowProps> = ({ userData }) => {
  return (
    <tr className="alert" role="alert">
      <td>{userData.id}</td>

      <td className="d-flex align-items-center">
        <div
          className="img"
          style={{
            backgroundImage: `url(${userData.avatar})`,
          }}
        ></div>
        <div className="pl-3 email">
          <span>{userData.email}</span>
        </div>
      </td>
      <td>{userData.first_name}</td>
      <td>{userData.last_name}</td>
    </tr>
  );
};

export default memo(UserRow);
