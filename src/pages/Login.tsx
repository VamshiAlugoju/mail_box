import React, { useState } from "react";
import { Box, Card, Flex, Text, TextField, Button } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../apiCalls/userApis";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const naviagate = useNavigate();

  async function login() {
    if (email != "" && password != "") {
      try {
        const data = await userLogin({
          email,
          password,
        });
        localStorage.setItem("email", data.data.email);
        localStorage.setItem("token", data.data.token);
        naviagate("/home");
      } catch (err) {
        console.log(err);
      }
    } else {
      toast("fields are empty");
    }
  }
  return (
    <div className="container w-full h-lvh flex justify-center items-center mx-auto ">
      <Box width="500px" maxWidth="600px">
        <Card>
          <Box width="100%" p="3">
            <Flex direction="column" gap="4">
              <Text size="7" weight="bold">
                Login
              </Text>
              <Flex width="100%" direction="column" gap="2">
                <Text size="4">Email</Text>
                <TextField.Root
                  size="3"
                  placeholder="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                ></TextField.Root>
              </Flex>
              <Flex width="100%" direction="column" gap="2">
                <Text size="4">Password</Text>
                <TextField.Root
                  size="3"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></TextField.Root>
              </Flex>

              <Button size="3" variant="soft" onClick={login}>
                Login
              </Button>
            </Flex>
          </Box>
        </Card>
      </Box>
    </div>
  );
}

export default Login;
