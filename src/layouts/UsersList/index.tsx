import { memo } from "react";
import { useSelector } from "react-redux";
import { Loading, TableContainer } from "src/components";
import { IReducer } from "src/redux/store/types";
import UserRow from "./Row";
import { UserContainer } from "./styles";

const HeaderColumns = memo(() => (
  <thead>
    <tr>
      <th>Id</th>
      <th>Email</th>
      <th>FirstName</th>
      <th>LastName</th>
    </tr>
  </thead>
));

export const UserList = () => {
  const userList = useSelector(({ users }: IReducer) => users);

  return (
    <UserContainer>
      {userList?.loading ? (
        <Loading />
      ) : (
        <TableContainer className="table-striped">
          <HeaderColumns />

          <tbody>
            {userList?.entities?.map((user) => (
              <UserRow key={user.id} userData={user} />
            ))}
          </tbody>
        </TableContainer>
      )}
    </UserContainer>
  );
};
