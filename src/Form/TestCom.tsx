import { Button, Input } from "antd";
import Form from "./index";

interface valuesProps {
  username?: string;
  remark?: string;
}

const Basic: React.FC = () => {
  const onFinish = (values: valuesProps) => {
    console.log("收集表单数据:", values);
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item name="username">
        <Input />
      </Form.Item>

      <Form.Item name="remark">
        <Input.TextArea />
      </Form.Item>

      <Form.Item>
        <div>
          <Button type="primary" htmlType="submit">
            获取数据
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};

export default Basic;
