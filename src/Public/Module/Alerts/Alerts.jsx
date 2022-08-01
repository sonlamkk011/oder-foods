import { Alert } from "antd";

import "./Alerts.scss";

const Alerts = () => {
  return (
    <>
      <div id="alerts">
        <Alert
        className="alert"
          message="Success"
          description="Thêm vào giỏ hàng thành công."
          type="success"
          showIcon
        />
      </div>
    </>
  );
};
export default Alerts;
