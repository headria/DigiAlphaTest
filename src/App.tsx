import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./App.css";
import { Header } from "./components";
import { HeaderTab } from "./layouts/HeaderTab";
import { UserList } from "src/layouts/UsersList";
import Provider from "react-redux/es/components/Provider";
import store from "./redux";
import { TabType } from "./types/userTypes";
import { ProductList } from "./layouts/ProductsList";
import { CryptoCards } from "./layouts/CryptoCards";

function App() {
  const [tabSelected, setSelectedTab] = useState<TabType>("Users");
  return (
    <Provider store={store}>
      <div className="App">
        <Row>
          <Col md={12}>
            <div id="content" className="content content-full-width">
              <Header />
              <CryptoCards />

              <HeaderTab setSelectedTab={setSelectedTab} />
              {tabSelected === "Users" ? <UserList /> : <ProductList />}
            </div>
          </Col>
        </Row>
      </div>
    </Provider>
  );
}

export default App;
