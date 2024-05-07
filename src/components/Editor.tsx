import React, { useEffect, useRef, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { Button, Flex } from "@radix-ui/themes";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { getAllUsers } from "../apiCalls/userApis";
import { sendMail } from "../apiCalls/mailApis";
import { toast } from "react-toastify";

type userItem = {
  id: string;
  name: string;
};

function Editor() {
  const [value, setValue] = React.useState<string>("**Hello world!!!**");

  const [users, setUsers] = useState<userItem[]>([]);
  const [selectedUser, setSelectedUser] = useState("");
  // const btnRef = useRef<HTMLParagraphElement | null>(null);
  // function openDrop() {
  //   console.log(">>>>>", btnRef.current);

  //   if (btnRef.current !== null) {
  //     btnRef.current.click();
  //   }
  // }

  async function sendMailHandler() {
    if (selectedUser === "") {
      return toast("please select user");
    }
    await sendMail({
      email: selectedUser,
      mailData: value,
    });
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
    setSelectedUser(item.name);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const formatResult = (item: { id: string; name: string }) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
      </>
    );
  };

  useEffect(() => {
    async function temp() {
      const data = await getAllUsers();
      console.log(data, "response");
      const dataArr = data.data.map((item) => {
        return {
          id: item._id,
          name: item.email,
        };
      });
      setUsers(dataArr);
    }
    temp();
  }, []);

  return (
    <div className="container h-full w-3/5" data-color-mode="light">
      <div className="grid grid-cols-8 gap-4">
        <div className="col-span-7">
          <ReactSearchAutocomplete
            items={users}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
            styling={{
              zIndex: 5,
            }}
          />
        </div>
        <div className="flex items-center justify-end">
          <Button onClick={sendMailHandler} size="3">
            SendMail
          </Button>
        </div>
      </div>

      <Flex my="2" justify="between" pr="4"></Flex>
      <MDEditor
        style={{ marginTop: "0.5rem" }}
        height="70vh"
        value={value}
        onChange={(e) => setValue(e)}
      />
    </div>
  );
}

export default Editor;
