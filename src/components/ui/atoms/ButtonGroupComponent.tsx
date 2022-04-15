import { useState } from "react";
import { Radio } from "antd";

const ButtonGroupComponent = () => {
  const [size, setSize] = useState({ size: "all" });

  const onChange = (e: any) => {
    setSize({ size: e.target.value });
  };

  return (
    <div className="tabs-group">
      <div className="flexbox">
        <Radio.Group
          value={size.size}
          onChange={onChange}
          className="btn-group"
        >
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
