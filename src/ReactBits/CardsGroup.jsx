import * as React from 'react';
import Box from '@mui/joy/Box';
import CardLayers3d from './CardLayers3d';

// Import your 6 different project images
import image1 from '../assets/myproject1.jpg';
import image2 from '../assets/myproject2.jpg';
import image3 from '../assets/myproject3.jpg';
import image4 from '../assets/myproject4.jpg';
import image5 from '../assets/myproject5.jpg';
import image6 from '../assets/myproject6.jpg';

export default function ProjectsGrid() {
  const projects = [
    {
      title: "AR Enterprises",
      coverText: "Wordpress",
      contentText: "AR Enterprises ia a demolition and dismantling industry",
      imageSrc: image1,
    },
    {
      title: "SCR Technology",
      coverText: "Wordpress",
      contentText: "SCR Technical Services Nig. Ltd. is a premier provider of technical consultancy and industrial solutions in Kano, Nigeria.",
      imageSrc: image2,
    },
    {
      title: "Old Portfolio",
      coverText: "HTML, CSS, JavaScript",
      contentText: "Personal Portfolio Site showcases some of the projects from 2020 - 2022",
      imageSrc: image3,
    },
    {
      title: "Latest Portfolio",
      coverText: "ReactJS, Nodejs, Express, Framer, React Bits, MUI, Emotion",
      contentText: "Personal Portfolio Site showcases some of the projects I've built so far.",
      imageSrc: image4,
    },
    {
      title: "Dummy Project",
      coverText: "HTML, CSS, JavaScript",
      contentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus nisl odio",
      imageSrc: image5,
    },
    {
      title: "Dummy Project",
      coverText: "HTML, CSS, JavaScript",
      contentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus nisl odio",
      imageSrc: image6,
    },
  ];

  return (
    <Box
      sx={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 3,
        padding: '40px',
      }}
    >
      {projects.map((proj, i) => (
        <CardLayers3d
          key={i}
          title={proj.title}
          coverText={proj.coverText}
          contentText={proj.contentText}
          imageSrc={proj.imageSrc}
        />
      ))}
    </Box>
  );
}
