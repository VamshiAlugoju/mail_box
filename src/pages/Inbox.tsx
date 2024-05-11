import React, { useEffect, useState } from "react";
import { Box, Flex, Text } from "@radix-ui/themes";
import Navbar from "../components/Navbar";
import Msgbox from "../components/ui/Msgbox";
import { getMails } from "../apiCalls/mailApis";
function Inbox() {
  const [messages, setMessages] = useState<
    { name: string; email: string; _id: string; mailData: string }[]
  >([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getMails();
        console.log(data);
        setMessages(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  useEffect(() => {
    console.log(messages);
  }, [messages]);

  return (
    <Box>
      <Navbar />
      <Box>
        <Flex
          width="100%"
          justify="center"
          direction="column"
          align="center"
          gap="2"
        >
          {messages.map((message) => {
            return (
              <Msgbox
                key={message._id}
                name={message.name}
                email={message.email}
                id={message._id}
                data={message.mailData}
              />
            );
          })}
        </Flex>
      </Box>
    </Box>
  );
}

export default Inbox;
