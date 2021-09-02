import { FC, memo, useEffect } from "react";
import { useState } from "react";
import { TabContainer } from "./styles";
import { getUsers } from "src/redux/store/userSlice";
import { getProducts } from "src/redux/store/producSlice";
import { useDispatch } from "react-redux";
import { TabType } from "src/types/userTypes";

interface HeaderTabProps {
  setSelectedTab(value: TabType): void;
}
export const HeaderTab: FC<HeaderTabProps> = memo(({ setSelectedTab }) => {
  const dispatch = useDispatch();
  const [tabSelected, setTablSelected] = useState<TabType>("Users");

  useEffect(() => {
    setSelectedTab(tabSelected);

    if (tabSelected === "Users") dispatch(getUsers());
    if (tabSelected === "Products") dispatch(getProducts());
  }, [tabSelected]);

  return (
    <TabContainer className="profile-header-tab nav nav-tabs">
      <li className="nav-item">
        <button
          className={`nav-link ${tabSelected === "Users" ? "active show" : ""}`}
          data-toggle="tab"
          onClick={() => setTablSelected("Users")}
        >
          Users
        </button>
      </li>
      <li className="nav-item">
        <button
          className={`nav-link ${
            tabSelected === "Products" ? "active show" : ""
          }`}
          onClick={() => setTablSelected("Products")}
          data-toggle="tab"
        >
          Products
        </button>
      </li>
    </TabContainer>
  );
});
