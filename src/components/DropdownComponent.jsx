import { Button, Dropdown } from "antd";

const items = [
  {
    key: "1",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://react.dev/">
        React
      </a>
    ),
  },
  {
    type: "divider",
  },
  {
    key: "2",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://ant.design/">
        AntDesign
      </a>
    ),
  },
  {
    type: "divider",
  },
  {
    key: "3",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://mui.com/">
        Material-UI
      </a>
    ),
  },
];

const DropdownComponent = () => (
  <Dropdown
    menu={{
      items,
    }}
    placement="bottomRight"
    trigger={["click"]}
    arrow
  >
    <Button type="primary" ghost onClick={(e) => e.preventDefault()}>
      Корисні посилання
    </Button>
  </Dropdown>
);

export default DropdownComponent;