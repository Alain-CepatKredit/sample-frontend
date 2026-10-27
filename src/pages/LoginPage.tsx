import { Form, Input, Button, Checkbox, Card, Typography, Space } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const { Title, Text, Link } = Typography;

function LoginPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "16px",
      }}
    >
      <Card
        style={{
          width: "100%",
          maxWidth: 400,
          borderRadius: 12,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
        }}
      >
        {/* Header Section */}
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <Title level={3} style={{ marginBottom: 4 }}>
            Welcome Back
          </Title>
          <Text type="secondary">Please sign in to your account</Text>
        </div>

        {/* Form (UI Only - No submit handler logic) */}
        <Form
          name="login_form"
          layout="vertical"
          size="large"
          initialValues={{ remember: true }}
        >
          {/* Email / Username Field */}
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Email or Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Email or Username"
            />
          </Form.Item>

          {/* Password Field */}
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Password"
            />
          </Form.Item>

          {/* Remember Me & Forgot Password Link */}
          <Form.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <Link href="#">Forgot password?</Link>
            </div>
          </Form.Item>

          {/* Submit Button */}
          <Form.Item style={{ marginBottom: 12 }}>
            <Button type="primary" htmlType="submit" block>
              Sign In
            </Button>
          </Form.Item>

          {/* Sign Up Link */}
          <div style={{ textAlign: "center" }}>
            <Space>
              <Text type="secondary">Don't have an account?</Text>
              <Link href="#">Sign up now</Link>
            </Space>
          </div>
        </Form>
      </Card>
    </div>
  );
}

export default LoginPage;
