import { RootStateOrAny, useDispatch } from "react-redux";
import { useAppSelector } from "@app/hooks";
import {
  getHackerNewsFilter,
  setFilterSelect,
} from "@features/hackerNewsSlice";

import { Avatar, Select, Spin } from "antd";

const { Option } = Select;

const SelectComponent = () => {
  const dispatch = useDispatch();
  const { listHackerNews, selectFilter } = useAppSelector(
    (state: RootStateOrAny) => state.hackerNews
  );

  const handleChange = (value: string) => {
    dispatch(getHackerNewsFilter({ query: value }));
    dispatch(setFilterSelect(value));
  };

  return (
    <div className="select-content">
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
      <Spin
        spinning={listHackerNews.loading}
        className="loading"
        tip="Loading"
      />
    </div>
  );
};

export default SelectComponent;
