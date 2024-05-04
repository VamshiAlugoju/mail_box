import React from "react";
import { Link } from "react-router-dom";
import { Text } from "@radix-ui/themes";

function NavLinks() {
  return (
    <>
      <Link to="/compose">
        <Text size="4" weight="bold">
          Compose Mail
        </Text>
      </Link>
      <Link to="/inbox">
        <Text size="4" weight="bold">
          Inbox
        </Text>
      </Link>{" "}
      <Link to="/outbox">
        <Text size="4" weight="bold">
          Sent Mail
        </Text>
      </Link>
    </>
  );
}

export default NavLinks;
