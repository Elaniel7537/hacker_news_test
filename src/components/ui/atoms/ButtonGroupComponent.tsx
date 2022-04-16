import { RootStateOrAny, useDispatch } from "react-redux";
import { useAppSelector } from "@app/hooks";
import { setListType } from "@features/hackerNewsSlice";

import { Radio } from "antd";

const ButtonGroupComponent = () => {
  const dispatch = useDispatch();
  const { listType } = useAppSelector(
    (state: RootStateOrAny) => state.hackerNews
  );
  const onChange = (e: any) => {
    dispatch(setListType(e.target.value));
  };

  return (
    <div className="tabs-group">
      <div className="flexbox">
        <Radio.Group value={listType} onChange={onChange} className="btn-group">
          <Radio.Button value="all" className="btn-item">
            All
          </Radio.Button>
          <Radio.Button value="faves" className="btn-item">
            My faves
          </Radio.Button>
        </Radio.Group>
      </div>
    </div>
  );
};

export default ButtonGroupComponent;
