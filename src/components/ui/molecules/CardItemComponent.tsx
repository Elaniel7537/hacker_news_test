import { RootStateOrAny, useDispatch } from "react-redux";
import { useAppSelector } from "@app/hooks";
import {
  setListaHackerNews,
  setListHackerNewsFaves,
} from "@features/hackerNewsSlice";

import { Button, Col, Row } from "antd";
import {
  HeartFilled,
  HeartOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";

const CardItemComponent = ({ content, id }: any) => {
  const dispatch = useDispatch();
  const { listHackerNews } = useAppSelector(
    (state: RootStateOrAny) => state.hackerNews
  );

  // agregar favorito
  const pushFaves = (item: any) => {
    const hackerNewsFaves = listHackerNews?.data.map((resp: any) => {
      if (item.objectID === resp.objectID)
        return (resp = { ...resp, faves: !item.faves });
      return resp;
    });

    const localFaves = hackerNewsFaves.filter(
      (resp: any) => resp.faves === true
    );

    dispatch(setListHackerNewsFaves(localFaves));
    dispatch(setListaHackerNews(hackerNewsFaves));
  };

  return (
    <Col xs={24} md={12} key={id}>
      <Row className="card-content">
        <Col xs={18} lg={20} className="card-item">
          <div className="card-time">
            <FieldTimeOutlined />
            {`${content?.created_at} By Author ${content?.author}`}
          </div>
          <div className="card-text">
            <a target="_blank" href={content?.story_url} rel="noreferrer">
              {content?.story_title ? content?.story_title : "Not Title"}
            </a>
          </div>
        </Col>
        <Col xs={6} lg={4} className="card-action flexbox">
          <Button
            icon={content?.faves ? <HeartFilled /> : <HeartOutlined />}
            type="link"
            onClick={() => pushFaves(content)}
          />
        </Col>
      </Row>
    </Col>
  );
};

export default CardItemComponent;
