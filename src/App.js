import TabsComponent from "./components/TabsComponent";
import TableComponent from "./components/TableComponent";
import CalendarComponent from "./components/CalendarComponent";
import TreeComponent from "./components/TreeComponent";
import DropdownComponent from "./components/DropdownComponent";
import NotificationComponent from "./components/NotificationComponent";
import { Collapse, Divider, theme } from "antd";
const { Panel } = Collapse;

function App() {
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 4,
    background: "#f4f7ff",
    borderRadius: token.borderRadiusLG,
    border: 'none',
  };

  return (
    <div className="container">
      <TabsComponent />
      <div style={{ padding: "0 0 40px" }}>
        <Divider orientation="left" style={{ fontSize: "24px" }}>
          Приклади використання компонентів Ant Design:
        </Divider>
        <Collapse
          bordered={false}
          size="large"
          defaultActiveKey={["1"]}
          style={{
            background: token.colorBgContainer,
          }}
          accordion>
          <Panel header="Simple Table" key="1" style={panelStyle}>
            <TableComponent />
          </Panel>
          <Panel header="Calendar" key="2" style={panelStyle}>
            <CalendarComponent />
          </Panel>
          <Panel header="Dropdown" key="3" style={panelStyle}>
            <DropdownComponent />
          </Panel>
          <Panel header="TreeView" key="4" style={panelStyle}>
            <TreeComponent />
          </Panel>
          <Panel header="Notification" key="5" style={panelStyle}>
            <NotificationComponent />
          </Panel>
        </Collapse>
      </div>
    </div>
  );
}

export default App;