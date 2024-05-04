import React, { useRef, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import {
  TextField,
  Text,
  Separator,
  DropdownMenu,
  Button,
} from "@radix-ui/themes";

function Editor() {
  const arr = ["some data"];
  const [value, setValue] = React.useState<string | undefined>(
    "**Hello world!!!**"
  );
  const [users, setUsers] = useState<string[]>([]);
  const btnRef = useRef<HTMLParagraphElement | null>(null);
  function openDrop() {
    console.log(">>>>>", btnRef.current);

    if (btnRef.current !== null) {
      btnRef.current.click();
    }
  }
  function handleTextChange() {
    openDrop();
  }

  return (
    <div className="container h-full w-3/5" data-color-mode="light">
      <TextField.Root onChange={handleTextChange} placeholder="" size="3">
        <TextField.Slot>
          <Text className="text-black" size="6">
            To :
          </Text>
          <DropDown arr={arr} btnRef={btnRef} users={users} />
        </TextField.Slot>
      </TextField.Root>
      <Separator my="3" size="4" />
      <MDEditor height="70vh" value={value} onChange={(e) => setValue(e)} />
    </div>
  );
}

interface DropDownProps {
  arr: any;
  btnRef: any;
  users: any;
}

function DropDown(props: DropDownProps) {
  function dothis() {
    console.log(props.btnRef.current);
  }

  return (
    <DropdownMenu.Root>
      <button>
        <DropdownMenu.Trigger ref={props.btnRef} onClick={dothis}>
          <p>hello</p>
        </DropdownMenu.Trigger>
      </button>

      <DropdownMenu.Content>
        <DropdownMenu.Item shortcut="⌘ E">
          <Text> helfjl ;fwe ojpojf peo poej pfoojwefp</Text>
        </DropdownMenu.Item>
        <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

export default Editor;
