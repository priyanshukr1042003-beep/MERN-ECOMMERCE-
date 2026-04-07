import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import { Badge, Box, Button, Container, Stack, useMediaQuery, useTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserInfo } from '../../user/UserSlice';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { selectCartItems } from '../../cart/CartSlice';
import { selectLoggedInUser } from '../../auth/AuthSlice';
import { selectWishlistItems } from '../../wishlist/WishlistSlice';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TuneIcon from '@mui/icons-material/Tune';
import { selectProductIsFilterOpen, toggleFilters } from '../../products/ProductSlice';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';

export const Navbar = ({ isProductList = false }) => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const userInfo = useSelector(selectUserInfo);
  const cartItems = useSelector(selectCartItems);
  const loggedInUser = useSelector(selectLoggedInUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const is480 = useMediaQuery(theme.breakpoints.down(480));

  const wishlistItems = useSelector(selectWishlistItems);
  const isProductFilterOpen = useSelector(selectProductIsFilterOpen);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleToggleFilters = () => {
    dispatch(toggleFilters());
  };

  const settings = [
    { name: "Home", to: "/" },
    { name: "Profile", to: loggedInUser?.isAdmin ? "/admin/profile" : "/profile" },
    { name: loggedInUser?.isAdmin ? "Orders" : "My orders", to: loggedInUser?.isAdmin ? "/admin/orders" : "/orders" },
    { name: "Logout", to: "/logout" },
  ];

  const displayName = userInfo?.name?.toString() ?? "";

  return (
    <AppBar position="sticky" sx={{ color: "text.primary" }}>
      <Container maxWidth="xl" disableGutters sx={{ px: { xs: 2, sm: 3 } }}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: 64, sm: 72 },
            py: 1,
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.25,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: 2,
                display: "grid",
                placeItems: "center",
                background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
                color: "common.white",
              }}
            >
              <StorefrontOutlinedIcon fontSize="small" />
            </Box>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                }}
              >
                MERN Shop
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ display: "block", letterSpacing: "0.04em" }}>
                curated commerce
              </Typography>
            </Box>
          </Box>

          <Stack direction="row" alignItems="center" spacing={{ xs: 1, sm: 2 }}>
            <Tooltip title="Account">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0.5 }}>
                <Avatar
                  alt={userInfo?.name}
                  sx={{
                    width: 40,
                    height: 40,
                    border: "2px solid",
                    borderColor: "divider",
                    bgcolor: "primary.light",
                    color: "primary.main",
                    fontWeight: 700,
                  }}
                >
                  {displayName ? displayName.charAt(0).toUpperCase() : "?"}
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "48px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              PaperProps={{
                elevation: 0,
                sx: { borderRadius: 2, minWidth: 200, mt: 1, overflow: "hidden" },
              }}
            >
              {loggedInUser?.isAdmin && (
                <MenuItem onClick={handleCloseUserMenu} component={Link} to="/admin/add-product" sx={{ typography: "body2" }}>
                  Add new product
                </MenuItem>
              )}
              {settings.map((setting) => (
                <MenuItem key={setting.name} onClick={handleCloseUserMenu} component={Link} to={setting.to}>
                  <Typography textAlign="center">{setting.name}</Typography>
                </MenuItem>
              ))}
            </Menu>

            <Typography variant="body2" color="text.secondary" sx={{ display: { xs: "none", md: "block" }, maxWidth: 220 }} noWrap>
              {is480 ? displayName.split(" ")[0] : `Hey, ${displayName}`}
            </Typography>

            {loggedInUser?.isAdmin && (
              <Button variant="contained" color="secondary" size="small" sx={{ display: { xs: "none", sm: "inline-flex" } }}>
                Admin
              </Button>
            )}

            <Stack direction="row" spacing={0.5} alignItems="center">
              <Badge badgeContent={cartItems?.length || 0} color="error" invisible={!cartItems?.length}>
                <IconButton onClick={() => navigate("/cart")} aria-label="cart" sx={{ color: "text.primary" }}>
                  <ShoppingCartOutlinedIcon />
                </IconButton>
              </Badge>

              {!loggedInUser?.isAdmin && (
                <Badge badgeContent={wishlistItems?.length || 0} color="error" invisible={!wishlistItems?.length}>
                  <IconButton component={Link} to="/wishlist" aria-label="wishlist" sx={{ color: "text.primary" }}>
                    <FavoriteBorderIcon />
                  </IconButton>
                </Badge>
              )}

              {isProductList && (
                <IconButton onClick={handleToggleFilters} aria-label="filters" sx={{ color: isProductFilterOpen ? "secondary.main" : "text.primary" }}>
                  <TuneIcon />
                </IconButton>
              )}
            </Stack>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
