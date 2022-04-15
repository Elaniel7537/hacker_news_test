import type { NextPage } from "next";
import { useEffect } from "react";
import { RootStateOrAny, useDispatch } from "react-redux";
import { useAppSelector } from "@app/hooks";

import { getHackerNews } from "@services/services";
import { setHackerNews } from "@features/hackerNewsSlice";

import { Button, Col, Row } from "antd";
import {
  HeartFilled,
  HeartOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";

import ButtonGroupComponent from "@components/ui/atoms/ButtonGroupComponent";
import SelectComponent from "@components/ui/atoms/SelectComponent";

const Home: NextPage = ({ serviseHackerNews }: any) => {
  const dispatch = useDispatch();
  const { hackerNews } = useAppSelector(
    (state: RootStateOrAny) => state.hackerNews
  );

  useEffect(() => {
    dispatch(setHackerNews(serviseHackerNews.hits));
  }, [serviseHackerNews.page]);

  return (
    <>
      <ButtonGroupComponent />
      <SelectComponent />
      {/* lista de News */}
      <Row gutter={[16, 16]} style={{ marginTop: "5rem" }}>
        {hackerNews.data?.length &&
          hackerNews.data.map((resp: any, index: any) => {
            return (
              <Col xs={24} md={12} key={index}>
                <Row className="card-content">
                  <Col xs={18} lg={20} className="card-item">
                    <div className="card-time">
                      <FieldTimeOutlined />{" "}
                      {`${resp?.created_at} By Author ${resp?.author}`}
                    </div>
                    <div className="card-text">
                      <a
                        target="_blank"
                        href={resp?.story_url}
                        rel="noreferrer"
                      >
                        {resp?.story_title ? resp?.story_title : "Not Title"}
                      </a>
                    </div>
                  </Col>
                  <Col xs={6} lg={4} className="card-action flexbox">
                    {/* <HeartFilled /> */}
                    <Button icon={<HeartOutlined />} type="link" />
                  </Col>
                </Row>
              </Col>
            );
          })}
      </Row>
    </>
  );
};

Home.getInitialProps = async () => {
  const serviseHackerNews = await getHackerNews({ page: 0, hitsPerPage: 4 });
  return { serviseHackerNews };
};

export default Home;
