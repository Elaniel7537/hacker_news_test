import { RootStateOrAny, useDispatch } from "react-redux";
import { useAppSelector } from "@app/hooks";
import {
  getHackerNewsFilter,
  setFilterSelect,
  setPagination,
} from "@features/hackerNewsSlice";

import { Row, Col, Avatar, Select, Spin } from "antd";

const { Option } = Select;

const SelectComponent = () => {
  const dispatch = useDispatch();
  const { listHackerNews, selectFilter, pagination } = useAppSelector(
    (state: RootStateOrAny) => state.hackerNews
  );

  const handleChange = (value: string) => {
    dispatch(setPagination({ page: 0 }));
    dispatch(getHackerNewsFilter({ ...pagination, page: 0, query: value }));
    dispatch(setFilterSelect(value));
  };

  return (
    <Row gutter={[16, 16]} align="middle">
      <Col xs={24} md={18} className="select-content">
        <Select
          value={selectFilter}
          style={{ width: 250 }}
          onChange={handleChange}
          placeholder="Select your news"
        >
          <Option value="angular" key="0">
            <Avatar src="./angular.png" className="mr1" />
            Angular
          </Option>
          <Option value="reacts" key="1">
            <Avatar src="./reacts.png" className="mr1" />
            Reacts
          </Option>
          <Option value="vuejs" key="2">
            <Avatar src="./vuejs.png" className="mr1" />
            Vuejs
          </Option>
        </Select>
      </Col>
      <Col xs={24} md={6}>
        <Spin spinning={listHackerNews.loading} tip="Loading" />
      </Col>
    </Row>
  );
};

export default SelectComponent;
