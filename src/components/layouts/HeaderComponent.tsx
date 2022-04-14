import { Layout } from "antd";

const { Header } = Layout;

export const HeaderComponent = (): JSX.Element => {
  return (
    <Header className="header-content">
      <div className="header-title">HACKER NEWS</div>
    </Header>
  );
};

export default HeaderComponent;
