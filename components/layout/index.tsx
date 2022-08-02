import { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";

const Header: FC = () => {
  return (
    <AppBar position="fixed" component="nav">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
          <Link href={"/"}>
            <a>Mails Sender</a>
          </Link>
        </Typography>

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Link href={"/senders"}>
            <a>
              <Button color="inherit">Senders</Button>
            </a>
          </Link>
          <Link href={"/schedule"}>
            <a>
              <Button color="inherit">Schedule</Button>
            </a>
          </Link>
          <Link href={"/templates"}>
            <a>
              <Button color="inherit">Templates</Button>
            </a>
          </Link>
          <Link href={"/"}>
            <a>
              <Button color="inherit">Logout</Button>
            </a>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
