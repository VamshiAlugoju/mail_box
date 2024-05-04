import React from "react";
import { Box, Flex } from "@radix-ui/themes";
import Navbar from "../components/Navbar";
import Editor from "../components/Editor";
function ComposeMail() {
  return (
    <Box>
      <Navbar />
      <Flex justify="center">
        <Editor />
      </Flex>
    </Box>
  );
}

export default ComposeMail;
