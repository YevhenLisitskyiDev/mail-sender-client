import { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import { Divider, Stack } from "@mui/material";

const Header: FC = () => {
  return (
    <AppBar position="fixed" color="secondary" component="nav">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
          <Link href={"/"}>
            <a>Mails Sender</a>
          </Link>
        </Typography>

        <Stack direction="row" spacing={2}>
          <Link href={"/senders"}>
            <a>
              <Button color="primary">Senders</Button>
            </a>
          </Link>
          <Link href={"/schedule"}>
            <a>
              <Button color="primary">Schedule</Button>
            </a>
          </Link>
          <Link href={"/templates"}>
            <a>
              <Button color="primary">Templates</Button>
            </a>
          </Link>
          <Link href={"/"}>
            <a>
              <Button variant="outlined" color="primary">
                Logout
              </Button>
            </a>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
