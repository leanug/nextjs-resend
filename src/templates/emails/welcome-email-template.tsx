import * as React from "react";
import {
  Body,
  Head,
  Html,
  Container,
  Preview,
  Text,
  Img,
  Link,
} from "@react-email/components";

type WelcomeEmailTemplateProps = {
  message: string;
  email: string;
  magicLink: string; // New prop for the magic link
};

export const WelcomeEmailTemplate = ({
  message,
  email,
  magicLink,
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
            We&apos;ve sent you a magic link to complete your login or verification. Please click the link below to continue:
          </Text>
          <Text style={textStyle}>
            <Link href={magicLink} style={{ ...linkStyle, display: "inline-block", marginTop: "10px" }}>
              Click here to activate your account
            </Link>
          </Text>
          <Text style={textStyle}>
            This link will expire in 30 minutes.
          </Text>
          <Text style={textStyle}>
            If you didn&apos;t request this, please ignore this message.
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
