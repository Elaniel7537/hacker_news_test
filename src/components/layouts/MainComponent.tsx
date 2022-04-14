import { Layout } from "antd";
import HeaderComponent from "@components/layouts/HeaderComponent";

const { Content } = Layout;
export const MainComponent = ({ children }: any) => {
  return (
    <Layout>
      <HeaderComponent />
      <Layout className="main-contend">
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default MainComponent;
