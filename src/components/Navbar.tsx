import React from "react";
import { Box, Flex, Separator } from "@radix-ui/themes";
import Mailboxfont from "./ui/Mailboxfont";
import NavLinks from "./NavLinks";

function Navbar() {
  return (
    <Box width="100%" p="5" className="">
      <Flex className="" width="100%" justify="center" gapX="9">
        <Box>
          <Mailboxfont />
        </Box>
        <Flex align="center" gap="5">
          <NavLinks />
        </Flex>
      </Flex>
      <Separator my="3" size="4" />
    </Box>
  );
}

export default Navbar;
