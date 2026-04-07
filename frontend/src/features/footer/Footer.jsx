import { Box, Container, IconButton, Stack, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { QRCodePng, appStorePng, googlePlayPng ,facebookPng,instagramPng,twitterPng,linkedinPng} from '../../assets'
import SendIcon from '@mui/icons-material/Send';
import { MotionConfig, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { glassTokens } from '../../theme/theme';

export const Footer = () => {

    const theme=useTheme()
    const is700=useMediaQuery(theme.breakpoints.down(700))

    const labelStyles={
        fontWeight:400,
        cursor:'pointer',
        color: 'rgba(255,255,255,0.78)',
        '&:hover': { color: 'common.white' },
    }

  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        backgroundColor: glassTokens.dark,
        backdropFilter: `blur(${glassTokens.blurStrong})`,
        WebkitBackdropFilter: `blur(${glassTokens.blurStrong})`,
        color: 'common.white',
        borderTop: '1px solid',
        borderColor: glassTokens.darkBorder,
        boxShadow: '0 -12px 40px rgba(15, 23, 42, 0.12)',
      }}
    >
    <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 }, px: { xs: 2, sm: 3 } }}>
    <Stack rowGap={5}>

            <Stack flexDirection={'row'} rowGap={'2rem'} justifyContent={is700?"flex-start":'space-between'} flexWrap={'wrap'}>

                <Stack rowGap={1.5} padding={'0'} maxWidth={280}>
                    <Typography variant='h6' sx={{ fontWeight: 700, letterSpacing: '-0.02em' }}>Exclusive</Typography>
                    <Typography variant='subtitle2' sx={{ color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}>Subscribe</Typography>
                    <Typography sx={{ ...labelStyles, cursor: 'default' }}>Get 10% off your first order</Typography>
                    <TextField
                      placeholder='Enter your email'
                      size="small"
                      fullWidth
                      sx={{
                        mt: 1,
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          bgcolor: 'rgba(255,255,255,0.06)',
                          color: 'common.white',
                          '& fieldset': { borderColor: 'rgba(255,255,255,0.12)' },
                          '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.25)' },
                        },
                        '& input::placeholder': { color: 'rgba(255,255,255,0.45)', opacity: 1 },
                      }}
                      InputProps={{
                        endAdornment:(
                          <IconButton size="small" sx={{ color: 'common.white' }}>
                            <SendIcon fontSize="small" />
                          </IconButton>
                        ),
                      }}
                    />
                </Stack>

                <Stack rowGap={1.5} padding={'0'} minWidth={200}>
                    <Typography variant='h6' sx={{ fontWeight: 700 }}>Support</Typography>
                    <Typography sx={{ ...labelStyles, cursor: 'default' }}>11th Main Street, Dhaka, DH 1515, California.</Typography>
                    <Typography sx={labelStyles} component="a" href="mailto:exclusive@gmail.com" style={{ textDecoration: 'none' }}>exclusive@gmail.com</Typography>
                    <Typography sx={labelStyles}>+88015-88888-9999</Typography>
                </Stack>

                <Stack rowGap={1.5} padding={'0'} minWidth={160}>
                    <Typography variant='h6' sx={{ fontWeight: 700 }}>Account</Typography>
                    <Typography sx={labelStyles} component={Link} to="/profile" style={{ textDecoration: 'none' }}>My Account</Typography>
                    <Typography sx={labelStyles} component={Link} to="/login" style={{ textDecoration: 'none' }}>Login / Register</Typography>
                    <Typography sx={labelStyles} component={Link} to="/cart" style={{ textDecoration: 'none' }}>Cart</Typography>
                    <Typography sx={labelStyles} component={Link} to="/wishlist" style={{ textDecoration: 'none' }}>Wishlist</Typography>
                    <Typography sx={labelStyles} component={Link} to="/" style={{ textDecoration: 'none' }}>Shop</Typography>
                </Stack>

                <Stack rowGap={1.5} padding={'0'} minWidth={160}>
                    <Typography variant='h6' sx={{ fontWeight: 700 }}>Quick Links</Typography>
                    <Typography sx={{ ...labelStyles, cursor: 'default' }}>Privacy Policy</Typography>
                    <Typography sx={{ ...labelStyles, cursor: 'default' }}>Terms Of Use</Typography>
                    <Typography sx={{ ...labelStyles, cursor: 'default' }}>FAQ</Typography>
                    <Typography sx={{ ...labelStyles, cursor: 'default' }}>Contact</Typography>
                </Stack>

                <Stack rowGap={1.5} padding={'0'} minWidth={240}>
                    <Typography variant='h6' sx={{ fontWeight: 700 }}>Download App</Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontWeight: 500, fontSize: '0.875rem' }}>Save $3 with App New User Only</Typography>
                    <Stack flexDirection={'row'} columnGap={1.5} alignItems="stretch">

                        <Box width={'100px'} height={"100px"} sx={{ borderRadius: 2, overflow: 'hidden', bgcolor: 'rgba(255,255,255,0.06)' }}>
                            <img src={QRCodePng} height={'100%'} width={'100%'} style={{objectFit:'contain'}} alt="QR Code"/>
                        </Box>

                        <Stack justifyContent={'space-between'} flex={1}>
                            <Box sx={{ borderRadius: 1, overflow: 'hidden' }}>
                                <img style={{width:"100%",height:"100%",cursor:"pointer"}} src={googlePlayPng} alt="GooglePlay" />
                            </Box>
                            <Box sx={{ borderRadius: 1, overflow: 'hidden' }}>
                                <img style={{width:"100%",height:'100%',cursor:"pointer"}} src={appStorePng} alt="AppStore" />
                            </Box>
                        </Stack>
                    </Stack>

                    <Stack mt={1} flexDirection={'row'} columnGap={2}>
                        <MotionConfig whileHover={{scale:1.08}} whileTap={{scale:0.98}}>
                            <motion.img style={{cursor:"pointer", opacity: 0.85}} src={facebookPng} alt="Facebook" />
                            <motion.img style={{cursor:"pointer", opacity: 0.85}} src={twitterPng} alt="Twitter" />
                            <motion.img style={{cursor:"pointer", opacity: 0.85}} src={instagramPng} alt="Instagram" />
                            <motion.img style={{cursor:"pointer", opacity: 0.85}} src={linkedinPng} alt="Linkedin" />
                        </MotionConfig>
                    </Stack>
                </Stack>

            </Stack>

            <Stack alignSelf={"center"} sx={{ pt: 2, borderTop: '1px solid rgba(255,255,255,0.08)', width: '100%' }}>
                <Typography textAlign="center" sx={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.875rem' }}>
                  &copy; {new Date().getFullYear()} MERN Shop. All rights reserved
                </Typography>
            </Stack>

    </Stack>
    </Container>
    </Box>
  )
}
