import React from "react";
import { Card, Text, Flex, Avatar, Box, Tooltip } from "@radix-ui/themes";

interface MsgboxProps {
  id: string;
  email: string;
  name: string;
  data: string;
}
function Msgbox(props: MsgboxProps) {
  return (
    <>
      <Card variant="classic" style={{ width: "60%" }}>
        <a href="#">
          <Flex gap="3" align="center">
            <Avatar
              size="3"
              src="https://images.unsplash.com/photo-160736256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
              radius="full"
              fallback={props.name[0]}
            />
            <Box>
              <Text as="div" size="2" weight="bold">
                {props.name}
              </Text>
              <Tooltip draggable={true} content={props.data}>
                <Text as="div" size="2" color="gray">
                  {props.data.slice(0, 101)} . . . . .
                </Text>
              </Tooltip>
            </Box>
          </Flex>
        </a>
      </Card>
    </>
  );
}

export default Msgbox;
