import { Avatar, Select } from "antd";

const { Option } = Select;

const SelectComponent = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="select-contend">
      <Select
        style={{ width: 250 }}
        onChange={handleChange}
        placeholder="Select your news"
      >
        <Option value="angular">
          <Avatar src="./angular.png" className="mr1" />
          Angular
        </Option>
        <Option value="reacts">
          <Avatar src="./reacts.png" className="mr1" />
          Reacts
        </Option>
        <Option value="vuejs">
          <Avatar src="./vuejs.png" className="mr1" />
          Vuejs
        </Option>
      </Select>
    </div>
  );
};

export default SelectComponent;
