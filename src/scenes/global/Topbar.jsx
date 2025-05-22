// import { Box, IconButton, useTheme } from "@mui/material";
// import { useContext } from "react";
// import { ColorModeContext, tokens } from "../../theme";
// import InputBase from "@mui/material/InputBase";
// import NotificationAddOutlinedIcon from "@mui/icons-material/NotificationAddOutlined";
// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import SearchIcon from "@mui/icons-material/Search";
// import Avatar from "@mui/material/Avatar";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import { useState } from "react";

// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import Typography from "@mui/material/Typography";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

// import SwitchAccountOutlinedIcon from "@mui/icons-material/SwitchAccountOutlined";
// import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

// const Topbar = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const colorMode = useContext(ColorModeContext);

//   return (
//     <Box display="flex" justifyContent="space-between" p={3}>
//       {/* SEARCH BAR */}
//       <Box
//         display="flex"
//         backgroundColor={"#303030"}
//         borderRadius="8px"
//         padding="10px 10px"
//         width="60%"
//       >
//         <IconButton type="button" sx={{ p: 1 }}>
//           <SearchIcon />
//         </IconButton>
//         <InputBase
//           sx={{ flex: 1, fontSize: 16 }}
//           placeholder="Search here..."
//         />
//       </Box>

//       {/* ICONS */}
//       <Box display="flex" alignItems="center">
//         <IconButton>
//           <NotificationAddOutlinedIcon sx={{ fontSize: 25 }} />
//         </IconButton>
//         <Box display="flex" alignItems="center" ml={2}>
//           <Avatar src="./assets/1.jpg" sx={{ width: 40, height: 40 }} />
//           <IconButton>
//             <ArrowDropDownIcon />
//           </IconButton>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Topbar;

import { Box, IconButton, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import NotificationAddOutlinedIcon from "@mui/icons-material/NotificationAddOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import SwitchAccountRoundedIcon from "@mui/icons-material/SwitchAccountRounded";
import HelpCenterRoundedIcon from "@mui/icons-material/HelpCenterRounded";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";



const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  // Add state for dropdown menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    <KeyboardArrowUpOutlinedIcon />;
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box display="flex" justifyContent="space-between" p={3}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={"#1F1F24"}
        borderRadius="8px"
        padding="10px 10px"
        width="60%"
      >
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ flex: 1, fontSize: 16 }}
          placeholder="Search here..."
        />
      </Box>

      {/* ICONS */}
      <Box display="flex" alignItems="center">
        <IconButton>
          <NotificationAddOutlinedIcon sx={{ fontSize: 25 }} />
        </IconButton>
        <Box display="flex" alignItems="center" ml={2}>
          <Avatar src="./assets/1.jpg" sx={{ width: 40, height: 40 }} />
          <IconButton onClick={handleClick}>
            {open ? (
              <KeyboardArrowUpOutlinedIcon />
            ) : (
              <KeyboardArrowDownOutlinedIcon />
            )}
          </IconButton>
          {/* Profile Dropdown Menu */}
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "profile-dropdown",
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            PaperProps={{
              sx: {
                bgcolor: "# ",
                borderRadius: "15px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                mt: 1,
                minWidth: "200px",
              },
            }}
          >
            <MenuItem
              sx={{ color: "#9e9e9e", py: 1.5, px: 2 }}
              onClick={handleClose}
            >
              <PersonIcon sx={{ mr: 2, fontSize: 22 }} />
              <Typography sx={{ fontWeight: "bold", fontSize: 16 }}>
                View Profile
              </Typography>
            </MenuItem>

            <MenuItem
              sx={{ color: "#9e9e9e", py: 1.5, px: 2 }}
              onClick={handleClose}
            >
              <ManageAccountsIcon sx={{ mr: 2, fontSize: 22 }} />
              <Typography sx={{ fontWeight: "bold", fontSize: 16 }}>
                Account Settings
              </Typography>
            </MenuItem>

            <MenuItem
              sx={{ color: "#9e9e9e", py: 1.5, px: 2 }}
              onClick={handleClose}
            >
              <NotificationsRoundedIcon sx={{ mr: 2, fontSize: 22 }} />
              <Typography sx={{ fontWeight: "bold", fontSize: 16 }}>
                Notifications
              </Typography>
            </MenuItem>

            <MenuItem
              sx={{ color: "#9e9e9e", py: 1.5, px: 2 }}
              onClick={handleClose}
            >
              <SwitchAccountRoundedIcon sx={{ mr: 2, fontSize: 22 }} />
              <Typography sx={{ fontWeight: "bold", fontSize: 16 }}>
                Switch Account
              </Typography>
            </MenuItem>

            <MenuItem
              sx={{ color: "#9e9e9e", py: 1.5, px: 2 }}
              onClick={handleClose}
            >
              <HelpCenterRoundedIcon sx={{ mr: 2, fontSize: 22 }} />
              <Typography sx={{ fontWeight: "bold", fontSize: 16 }}>
                Help Center
              </Typography>
            </MenuItem>

            <MenuItem
              sx={{ color: "#e74c3c", py: 1.5, px: 2 }}
              onClick={handleClose}
            >
              <LogoutOutlinedIcon sx={{ mr: 2, fontSize: 22 }} />
              <Typography sx={{ fontWeight: "bold", fontSize: 16 }}>
                Logout
              </Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
