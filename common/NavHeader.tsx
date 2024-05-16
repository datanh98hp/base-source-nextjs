import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import React from "react";

export default function NavHeader() {
  return (
    <div className="p-4 flex justify-center items-center">
      <Menubar className="w-fit h-fit border-transparent">
        <MenubarMenu >
          <div className="">
            <MenubarTrigger className="p-4 w-fit hover:bg-gray-300 hover:bg-opacity-50">Item 1</MenubarTrigger>
            <MenubarContent>
              <MenubarItem className="">
                Item 1- 1 <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Item 1- 2 <MenubarShortcut>⌘N</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled>New Incognito Window</MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger> Item 1- 3</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem> Item 1- 3 -1</MenubarItem>
                  <MenubarItem>Item 1- 3 -2</MenubarItem>
                  <MenubarItem>Item 1- 3 -3</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>
                Item 1- 4 <MenubarShortcut>⌘P</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </div>
        </MenubarMenu>
        <MenubarMenu>
          <div className="">
            <MenubarTrigger className="p-4 w-fit">Item 2</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Item - 2 - 1 <MenubarShortcut>⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Item - 2 - 2 <MenubarShortcut>⇧⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Item - 2 - 3</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Item - 2 - 3 -1</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Item - 2 - 3 -2</MenubarItem>
                  <MenubarItem>Item - 2 - 3 -3</MenubarItem>
                  <MenubarItem>Item - 2 - 3 -4</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>Item - 2 - 4</MenubarItem>
              <MenubarItem>Item - 2 - 6</MenubarItem>
              <MenubarItem>Item - 2 - 6</MenubarItem>
            </MenubarContent>
          </div>
        </MenubarMenu>
        <MenubarMenu>
          <div className="">
            <MenubarTrigger className="p-4 w-fit">Item 3</MenubarTrigger>
            <MenubarContent>
              <MenubarCheckboxItem>Item 3 - 1</MenubarCheckboxItem>
              <MenubarCheckboxItem checked>Item 3 - 2</MenubarCheckboxItem>
              <MenubarSeparator />
              <MenubarItem inset>
                Item 3 - 3 <MenubarShortcut>⌘R</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled inset>
                Item 3 - 4 <MenubarShortcut>⇧⌘R</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset>Item 3 - 5</MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset>Item 3 - 6</MenubarItem>
            </MenubarContent>
          </div>
        </MenubarMenu>
        <MenubarMenu>
          <div className="">
            <MenubarTrigger className="p-4 w-fit">Item - 4 </MenubarTrigger>
            <MenubarContent>
              <MenubarRadioGroup value="benoit">
                <MenubarRadioItem value="andy">Item - 4 -2 </MenubarRadioItem>
                <MenubarRadioItem value="benoit">Item - 4 - 3</MenubarRadioItem>
                <MenubarRadioItem value="Luis">Item - 4 - 4</MenubarRadioItem>
              </MenubarRadioGroup>
              <MenubarSub>
                <MenubarSubTrigger>Item - 4 - 2</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Item - 4 - 2 - 1</MenubarItem>
                  <MenubarItem>Item - 4 - 2 - 2</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Item - 3 - 1</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarCheckboxItem checked>
                    Item - 4 - 3 - 1
                  </MenubarCheckboxItem>
                  <MenubarCheckboxItem>Item - 4 - 3 - 2</MenubarCheckboxItem>
                </MenubarSubContent>
              </MenubarSub>

              <MenubarItem inset>Item - 4 - 4</MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset>Item - 4 - 5</MenubarItem>
            </MenubarContent>
          </div>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
