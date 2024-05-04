import React, { useState } from "react";
import { Box, Card, Flex, Text, TextField, Button } from "@radix-ui/themes";

import { userSignUp } from "../apiCalls/userApis";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const naviagate = useNavigate();

  async function signUp() {
    if (name != "" && email != "" && password != "") {
      try {
        await userSignUp({
          name,
          email,
          password,
        });
        naviagate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <div className="container w-full h-lvh flex justify-center items-center mx-auto ">
      <Box width="500px" maxWidth="600px">
        <Card>
          <Box width="100%" p="3">
            <Flex direction="column" gap="4">
              <Text size="7" weight="bold">
                Sign Up
              </Text>
              <Flex width="100%" direction="column" gap="2">
                <Text size="4">Name</Text>
                <TextField.Root
                  size="3"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></TextField.Root>
              </Flex>
              <Flex width="100%" direction="column" gap="2">
                <Text size="4">Email</Text>
                <TextField.Root
                  size="3"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></TextField.Root>
              </Flex>
              <Flex width="100%" direction="column" gap="2">
                <Text size="4"> Password</Text>
                <TextField.Root
                  size="3"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></TextField.Root>
              </Flex>

              <Button size="3" variant="soft" onClick={signUp}>
                Sign Up
              </Button>
            </Flex>
          </Box>
        </Card>
      </Box>
    </div>
  );
}

export default SignUp;
