"use client";
import Link from "next/link";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { AiOutlineMenu } from "react-icons/ai";

const options = [
  {
    link: "/whatWeDo",
    name: "What we do",
  },
  {
    link: "/pricing",
    name: "Pricing",
  },
  {
    link: "/editing",
    name: "Editing",
  },
  {
    link: "/preset",
    name: "Presets",
  },
  {
    link: "/preset",
    name: "Assets",
  },
  {
    link: "/preset",
    name: "Sound Effects",
  },
];

const ITEM_HEIGHT = 48;

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <AiOutlineMenu />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {options.map((option) => (
          <Link href={option.link} key={option.name}>
            <MenuItem
              onClick={handleClose}
            >
              {option.name}
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </div>
  );
}
