import { Box, FormHelperText, Paper, Stack, Typography, useMediaQuery, useTheme, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { selectWishlistItems } from '../../wishlist/WishlistSlice';
import { selectLoggedInUser } from '../../auth/AuthSlice';
import { addToCartAsync,selectCartItems } from '../../cart/CartSlice';
import { motion } from 'framer-motion'

export const ProductCard = ({id,title,price,thumbnail,brand,stockQuantity,handleAddRemoveFromWishlist,isWishlistCard,isAdminCard}) => {


    const navigate=useNavigate()
    const wishlistItems=useSelector(selectWishlistItems)
    const loggedInUser=useSelector(selectLoggedInUser)
    const cartItems=useSelector(selectCartItems)
    const dispatch=useDispatch()

    const theme=useTheme()
    const is1410=useMediaQuery(theme.breakpoints.down(1410))
    const is932=useMediaQuery(theme.breakpoints.down(932))
    const is752=useMediaQuery(theme.breakpoints.down(752))
    const is608=useMediaQuery(theme.breakpoints.down(608))
    const is488=useMediaQuery(theme.breakpoints.down(488))
    const is408=useMediaQuery(theme.breakpoints.down(408))

    const isProductAlreadyinWishlist=wishlistItems.some((item)=>item.product._id===id)

    const isProductAlreadyInCart=cartItems.some((item)=>item.product._id===id)

    const handleAddToCart=async(e)=>{
        e.stopPropagation()
        const data={user:loggedInUser?._id,product:id}
        dispatch(addToCartAsync(data))
    }

    const cardWidth = is408?'auto':is488?"200px":is608?"240px":is752?"300px":is932?'240px':is1410?'300px':'340px'

  return (
    <Paper
      elevation={0}
      sx={{
        cursor: 'pointer',
        mt: is408 ? 2 : 0,
        p: 2,
        width: cardWidth,
        borderRadius: 3,
        transition: 'box-shadow 0.25s ease, border-color 0.25s ease, transform 0.25s ease, background-color 0.25s ease',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.55)',
          boxShadow: '0 16px 48px rgba(15, 23, 42, 0.12)',
          borderColor: 'rgba(99, 102, 241, 0.45)',
          transform: 'translateY(-4px)',
        },
      }}
      onClick={()=>navigate(`/product-details/${id}`)}
    >
        <Stack spacing={1.5}>
            <Stack
              sx={{
                borderRadius: 2,
                overflow: 'hidden',
                bgcolor: 'action.hover',
              }}
            >
                <Box
                  component="img"
                  width="100%"
                  sx={{ aspectRatio: '1 / 1', objectFit: 'contain', display: 'block' }}
                  src={thumbnail}
                  alt=""
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
            </Stack>

            <Stack spacing={1} rowGap={1.5} flex={2} justifyContent="flex-end">

                <Stack spacing={0.5}>
                    <Stack flexDirection="row" alignItems="flex-start" justifyContent="space-between" gap={1}>
                        <Typography variant="subtitle1" fontWeight={600} sx={{ lineHeight: 1.35, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                {title}
                        </Typography>
                        {!isAdminCard && (
                            <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }} transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
                                <Checkbox
                                    size="small"
                                    onClick={(e)=>e.stopPropagation()}
                                    checked={isProductAlreadyinWishlist}
                                    onChange={(e)=>handleAddRemoveFromWishlist(e,id)}
                                    icon={<FavoriteBorder fontSize="small" />}
                                    checkedIcon={<Favorite sx={{ color: 'error.main' }} fontSize="small" />}
                                />
                            </motion.div>
                        )}
                    </Stack>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>{brand}</Typography>
                </Stack>

                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
                    <Typography variant="h6" fontWeight={700} sx={{ letterSpacing: '-0.02em' }}>${price}</Typography>
                    {!isWishlistCard && !isAdminCard && (
                        isProductAlreadyInCart ? (
                            <Typography variant="caption" color="success.main" fontWeight={600}>In cart</Typography>
                        ) : (
                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                onClick={(e)=>handleAddToCart(e)}
                                sx={{ minWidth: 0, px: 2, py: 0.75, fontSize: is408 ? '.8rem' : '.85rem' }}
                            >
                                Add to cart
                            </Button>
                        )
                    )}
                </Stack>

                {stockQuantity<=20 && stockQuantity !== undefined && (
                    <FormHelperText sx={{ fontSize: '.8rem', m: 0 }} error>
                        {stockQuantity===1 ? 'Only 1 left in stock' : 'Only a few left'}
                    </FormHelperText>
                )}
            </Stack>
        </Stack>
    </Paper>
  )
}
