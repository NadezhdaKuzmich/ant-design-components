import { Alert, Calendar, Divider} from "antd";
import dayjs from "dayjs";
import { useState } from "react";

const CalendarComponent = () => {
  const [value, setValue] = useState(() => dayjs(Date.now()));
  const [selectedValue, setSelectedValue] = useState(() => dayjs(Date.now()));
  const onSelect = (newValue) => {
    setValue(newValue);
    setSelectedValue(newValue);
  };
  const onPanelChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <div style={{ width: "300px", padding: "0 0 20px"}}>
      <Divider orientation="left" style={{ fontSize: "18px" }}>Календар:</Divider>
      <Alert
        message={`Ви обрали дату: ${selectedValue?.format("YYYY-MM-DD")}`}
      />
      <Calendar
        fullscreen={false}
        value={value}
        onSelect={onSelect}
        onPanelChange={onPanelChange}
      />
    </div>
  );
};

export default CalendarComponent;
