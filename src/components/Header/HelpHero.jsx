import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import './HelpHero.css'; // Importing the CSS file for the animation

export default function HelpHero() {
  return (
    <Box
      id="help-hero"
      sx={(theme) => ({
        width: '100%',
        paddingTop: '0px',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
        height: '990px',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
            }}
          >
           <Typography
  variant="h1"
  sx={{
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 'clamp(3.5rem, 10vw, 4rem)',
  }}
>
  <h1 className="blinking-text">How can we help you?</h1>
</Typography>
            <h1 className="blinking-text">How can we help you?</h1>
          </Typography>

          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
            We are here to provide you with all the support and resources you need. Let us know how we can assist!
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
            <Button variant="contained" color="primary">
              Contact Us
            </Button>
            <Button variant="outlined" color="primary">
              Learn More
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
