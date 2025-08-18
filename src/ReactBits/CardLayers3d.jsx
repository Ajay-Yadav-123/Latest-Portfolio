import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
// Remove the fixed image import here

export default function CardLayers3d({ title = "Card Title", coverText = "Cover", contentText = "Content", imageSrc }) {
  return (
    <Box
      sx={{
        perspective: '1000px',
        transition: 'transform 0.4s',
        '& > div, & > div > div': { transition: 'inherit' },
        '&:hover': {
          '& > div': {
            transform: 'rotateY(30deg)',
            '& > div:nth-child(2)': { transform: 'scaleY(0.9) translate3d(20px, 30px, 40px)' },
            '& > div:nth-child(3)': { transform: 'translate3d(45px, 50px, 40px)' },
          },
        },
      }}
    >
      <Card
        variant="outlined"
        sx={{
          minHeight: '300px',
          width: '100%',
          height: "100%",
          backgroundColor: 'var(--secondary-bg)',
          borderColor: 'var(--border)',
        }}
      >
        <Typography
          level="h2"
          textColor="var(--text-color)"
          sx={{
            fontSize: 'lg', p: 1,
            fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
          }}
        >
          {title}
        </Typography>
        <CardCover
          sx={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
            border: '1px solid',
            borderColor: 'var(--border)',
            backdropFilter: 'blur(1px)',
            fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            p: 0,
            position: 'relative',
            overflow: 'hidden',
            height: '180px',
          }}
        >
          <img
            src={imageSrc}
            alt={`${title} screenshot`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              display: 'block'
            }}
          />
          <Typography
            level="h3"
            textColor="#ffffff"
            sx={{
              position: 'absolute',
              bottom: 12,
              left: 0,
              right: 0,
              fontSize: 'lg',
              fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
              background: "rgba(0, 0, 0, 0.5)",
              p: "7px 0",
            }}
          >
            {coverText}
          </Typography>
        </CardCover>
        <CardContent
          sx={{
            alignItems: 'self-end',
            justifyContent: 'flex-end',
            border: '1px solid',
            borderColor: 'var(--border)',
            backdropFilter: 'blur(1px)',
            borderRadius: 'var(--CardCover-radius)',
            backgroundColor: 'var(--secondary-bg)'
          }}
        >
          <Typography
            level="p"
            textColor="var(--text-color)"
            sx={{
              fontSize: '16px', m: 2,
              fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
            }}
          >
            {contentText}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
