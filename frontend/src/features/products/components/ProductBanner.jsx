import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Box, Stack, useTheme } from '@mui/material';
import { useState } from 'react';
import { glassTokens } from '../../../theme/theme';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const ProductBanner = ({images}) => {

    const theme=useTheme()

    const [activeStep, setActiveStep] = useState(0);

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        borderRadius: { xs: 0, sm: 3 },
        overflow: 'hidden',
        bgcolor: glassTokens.surface,
        backdropFilter: `blur(${glassTokens.blur})`,
        WebkitBackdropFilter: `blur(${glassTokens.blur})`,
        border: '1px solid',
        borderColor: glassTokens.border,
        boxShadow: glassTokens.shadow,
      }}
    >
    <AutoPlaySwipeableViews style={{overflow:"hidden"}} width={'100%'} height={'100%'} axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={activeStep} onChangeIndex={handleStepChange} enableMouseEvents >
        {
        images.map((image,index) => (
        <div key={index} style={{width:"100%",height:'100%'}}>
            {
            Math.abs(activeStep - index) <= 2 
                ?
                <Box component="img" sx={{width:'100%',height:'100%',minHeight:{xs:220,md:360},objectFit:"cover",display:'block'}} src={image} alt="" />
                :
                    null
            }
        </div>
        ))
        }
    </AutoPlaySwipeableViews>
    <Stack direction="row" spacing={0.75} justifyContent="center" alignItems="center" sx={{ py: 1.5, px: 2, bgcolor: 'rgba(15, 23, 42, 0.02)' }}>
      {images.map((_, i) => (
        <Box
          key={i}
          sx={{
            width: i === activeStep ? 22 : 8,
            height: 8,
            borderRadius: 4,
            bgcolor: i === activeStep ? 'secondary.main' : 'action.disabledBackground',
            transition: 'width 0.25s ease, background-color 0.25s ease',
          }}
        />
      ))}
    </Stack>
    </Box>
  )
}
