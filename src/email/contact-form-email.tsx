import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
  firstName: string;
  phoneNumber: string;
  subject: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
  firstName,
  phoneNumber,
  subject,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                You received the following message from the contact form
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender&apos;s name is: {firstName}</Text>
              <Text>The sender&apos;s email is: {senderEmail}</Text>
              <Text>The sender&apos;s subject is: {subject}</Text>

              <Text>The sender&apos;s phone number is: {phoneNumber}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
