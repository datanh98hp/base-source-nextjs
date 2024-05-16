"use client";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Menu } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function NavHeader() {
  const { data: session } = useSession();
//   console.log("session", session);
  return (
    <div className="shadow-md  h-fit shadow-gray-800 flex items-center md:justify-evenly justify-between">
      <div className="p-4 md:flex hidden justify-evenly items-center ">
        {/* desktop */}
        <Menubar className="md:flex hidden border-transparent">
          <MenubarMenu>
            <div className="">
              <MenubarTrigger className="p-4 w-fit hover:bg-gray-300 hover:bg-opacity-50">
                Title 1
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem className="">
                  Title 1 - 1<MenubarShortcut>⌘T</MenubarShortcut>
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
              <MenubarTrigger className="p-4 w-fit hover:bg-gray-300 hover:bg-opacity-50">
                Item 1
              </MenubarTrigger>
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
              <MenubarTrigger className="p-4 w-fit hover:bg-gray-300 hover:bg-opacity-50">
                Item 1
              </MenubarTrigger>
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
                  <MenubarRadioItem value="benoit">
                    Item - 4 - 3
                  </MenubarRadioItem>
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

        {/* <div className="block md:hidden"></div> */}
      </div>
      {/* mobile */}
      <div className="md:hidden py-3 flex justify-between items-center">
        <Menubar className="border-none">
          <MenubarMenu>
            <MenubarTrigger className=" p-4 w-fit border-none bg-none">
              <Menu size={20} />
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem className="p-3">Item - 1</MenubarItem>
              <MenubarItem className="p-3">Item - 2</MenubarItem>
              <MenubarItem className="p-3">Item - 3</MenubarItem>
              <MenubarSub>
                <MenubarSubTrigger>Item - 4</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Item - 4 - 1</MenubarItem>
                  <MenubarItem>Item - 4 - 2</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>

              <MenubarSub>
                <MenubarSubTrigger>Item - 5</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarCheckboxItem checked>
                    Item - 5 - 1
                  </MenubarCheckboxItem>
                  <MenubarItem>Item - 5 - 2</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger>Item - 6</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Item - 6 - 1</MenubarItem>
                  <MenubarItem>Item - 6 - 1</MenubarItem>
                  <MenubarRadioGroup value="1">
                    <MenubarRadioItem value="1">
                      Item - 6 - 2 -1
                    </MenubarRadioItem>
                    <MenubarRadioItem value="2">
                      Item - 6 - 2 -1
                    </MenubarRadioItem>
                    <MenubarRadioItem value="3">
                      Item - 6 - 2 -1
                    </MenubarRadioItem>
                  </MenubarRadioGroup>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
      <div>
        <span className="text-white">{session?.user?.email}</span>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className="outline-none">
              <AvatarImage
                className="outline-none"
                src="https://github.com/shadcn.png"
              />
              <AvatarFallback>Avartar</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>
              {!session ? (
                <Link href="/login">Login</Link>
              ) : (
                <Button variant={"outline"} onClick={() => signOut()}>
                  Sign Out
                </Button>
              )}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
