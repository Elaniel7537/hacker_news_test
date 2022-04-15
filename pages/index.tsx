import type { NextPage } from "next";

import { Col, Row } from "antd";
import { HeartFilled, FieldTimeOutlined } from "@ant-design/icons";

import ButtonGroupComponent from "@components/ui/atoms/ButtonGroupComponent";
import SelectComponent from "@components/ui/atoms/SelectComponent";

const Home: NextPage = () => {
  return (
    <>
      <ButtonGroupComponent />
      <SelectComponent />
      {/* lista de News */}
      <Row gutter={[16, 16]} style={{ marginTop: "5rem" }}>
        <Col xs={24} md={12}>
          <Row className="card-content">
            <Col xs={18} lg={20} className="card-item">
              <div className="card-time">
                <FieldTimeOutlined /> 3 hours ago by author
              </div>
              <div className="card-text">
                Yes, React is taking over front-end development. The question is
                why.
              </div>
            </Col>
            <Col xs={6} lg={4} className="card-action flexbox">
              <HeartFilled />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Home;
