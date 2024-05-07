import React from "react";
import { Box, Flex, Text } from "@radix-ui/themes";
import Navbar from "../components/Navbar";
import Msgbox from "../components/ui/Msgbox";
function Inbox() {
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
          <Msgbox
            key="1"
            name="vamshi"
            email="vamsh@gmail.com"
            id="3"
            data="loremfjj fpsodj fpo cij f eff fsd;k ;c 'sdkc 'k 'v ks ;bv j;a fj dsfk sodf jpcksdp ojwpf kpwef kcs ;fksd; f c spdkfs;f jte  j a;jte lj the sea l vel all ov erht eopwor is tahakne to be rorsl spojp ofjjf;sfjs csldfjslfjspfjsapfosp spcj slfsf l fj dfjsfksj;f pofj pofepo fjpwfjp ofwpefj pw fspfjd"
          />
          <Msgbox
            key="1"
            name="vamshi"
            email="vamsh@gmail.com"
            id="3"
            data="loremfjj fpsodj fpo cij f eff fsd;k ;c 'sdkc 'k 'v ks ;bv j;a fj dsfk sodf jpcksdp ojwpf kpwef kcs ;fksd; f c spdkfs;f jte  j a;jte lj the sea l vel all ov erht eopwor is tahakne to be rorsl spojp ofjjf;sfjs csldfjslfjspfjsapfosp spcj slfsf l fj dfjsfksj;f pofj pofepo fjpwfjp ofwpefj pw fspfjd"
          />
        </Flex>
      </Box>
    </Box>
  );
}

export default Inbox;
