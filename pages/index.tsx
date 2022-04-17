import type { NextPage } from "next";
import { useEffect } from "react";
import { RootStateOrAny, useDispatch } from "react-redux";
import { useAppSelector } from "@app/hooks";

import { getHackerNews } from "@services/services";
import {
  setListaHackerNews,
  getHackerNewsFilter,
  setPagination,
} from "@features/hackerNewsSlice";
import { ListTypeEnum } from "@utils/enum";
import { Row, Col, Empty, Pagination } from "antd";

import ButtonGroupComponent from "@components/ui/atoms/ButtonGroupComponent";
import SelectComponent from "@components/ui/atoms/SelectComponent";
import CardItemComponent from "@components/ui/molecules/CardItemComponent";

const Home: NextPage = ({ serviseHackerNews }: any) => {
  const dispatch = useDispatch();
  const {
    listHackerNews,
    listType,
    listHackerNewsFaves,
    pageSize,
    pagination,
    selectFilter,
  } = useAppSelector((state: RootStateOrAny) => state.hackerNews);

  const onchange = (page: any, pageSize: any) => {
    const changePage = { ...pagination, page: page - 1 };
    dispatch(setPagination(changePage));
    dispatch(
      getHackerNewsFilter({
        ...changePage,
        query: selectFilter ? selectFilter : undefined,
      })
    );
  };

  useEffect(() => {
    let aux = serviseHackerNews?.hits?.map(
      (resp: any) => (resp = { ...resp, faves: false })
    );
    let hackerNewsFinal = { ...serviseHackerNews, hits: aux };
    dispatch(setListaHackerNews(hackerNewsFinal));
  }, [serviseHackerNews.page]);

  return (
    <>
      <ButtonGroupComponent />

      {listType === ListTypeEnum.ALL && <SelectComponent />}

      {/* lista de News */}
      <Row gutter={[16, 16]} style={{ marginTop: "5rem" }}>
        {listHackerNews.data?.length && listType === ListTypeEnum.ALL
          ? listHackerNews.data.map((resp: any, index: any) => {
              return (
                <CardItemComponent content={resp} key={index} id={index} />
              );
            })
          : listHackerNewsFaves?.map((resp: any, index: any) => {
              return (
                <CardItemComponent content={resp} key={index} id={index} />
              );
            })}

        {listType === ListTypeEnum.MYFAVES && !listHackerNewsFaves?.length && (
          <div className="flexbox">
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description="Not Faves"
            />
          </div>
        )}
        
        <Col xs={24} className="flexbox">
          {listHackerNews.loading && <span>Loading</span>}
        </Col>

        <Col xs={24} className="flexbox mt2 mb2">
          <Pagination
            defaultCurrent={pagination.page}
            current={pagination.page + 1}
            showSizeChanger={false}
            onChange={onchange}
            total={pageSize}
            responsive={true}
          />
        </Col>
      </Row>
    </>
  );
};

Home.getInitialProps = async () => {
  const serviseHackerNews = await getHackerNews({ page: 0, hitsPerPage: 10 });
  return { serviseHackerNews };
};

export default Home;
