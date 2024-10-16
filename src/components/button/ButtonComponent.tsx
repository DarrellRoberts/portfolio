import { Button } from "antd";
import "./button.css";

export default function ButtonComponent({ text }) {
  return (
    <Button className="buttonCon" type="primary" size="middle">
      {text}
    </Button>
  );
}
