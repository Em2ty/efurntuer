'use client';
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Moon, MoonIcon, Sun, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
function DarkMode() {
  const { setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className='cursor-pointer' variant="outline" size={"icon"}>
          <SunIcon className='h-[1.2rem]  w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'/>
          <MoonIcon className='absolute h-[1.2rem]  w-[1.2rem] rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100'/> 
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem className='cursor-pointer' onClick={() => setTheme("light")}>Light</DropdownMenuItem>
        <DropdownMenuItem className='cursor-pointer' onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
        <DropdownMenuItem className='cursor-pointer' onClick={() => setTheme("system")}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DarkMode