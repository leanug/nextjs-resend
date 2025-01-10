import * as React from "react";
import {
  Body,
  Head,
  Html,
  Container,
  Preview,
  Text,
  Link,
} from "@react-email/components";

type WelcomeEmailTemplateProps = {
  message: string;
  email: string;
};

export const WelcomeEmailTemplate = ({
  message,
  email,
}: WelcomeEmailTemplateProps) => {
  const containerStyle = {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
  };

  const textStyle = {
    fontSize: "16px",
    color: "#333333",
    lineHeight: "1.5",
  };

  const linkStyle = {
    color: "#007bff",
    textDecoration: "none",
  };

  return (
    <Html>
      <Head />
      <Preview>Welcome to Our Website</Preview>
      <Body style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
        <Container style={containerStyle}>
          {/* SVG Image */}
          <Text style={textStyle}>
            YourLogo
          </Text>
          <Text style={textStyle}>
            Hi there,
          </Text>
          <Text style={textStyle}>
            Thank you for reaching out! Here&apos;s a message we received from you:
          </Text>
          <Text style={textStyle}>
            <strong>Email:</strong> {email}
          </Text>
          <Text style={textStyle}>
            <strong>Message:</strong> {message}
          </Text>
          <Text style={textStyle}>
            Best regards,<br />
            The Team
          </Text>
          <Text style={textStyle}>
            Visit us: <Link href="https://yourwebsite.com" style={linkStyle}>yourwebsite.com</Link>
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default WelcomeEmailTemplate;
