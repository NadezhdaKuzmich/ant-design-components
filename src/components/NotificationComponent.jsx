import { Button, notification } from "antd";

const openNotification = () => {
    notification.warning({
    message: "Увага!",
    description: "Доброго вечора, ми з України!",
    onClick: () => {
      console.log("Notification Clicked!");
    },
  });
};

const NotificationComponent = () => (
  <Button type="primary" onClick={openNotification}>
    Open the notification box
  </Button>
);
export default NotificationComponent;