// import { CardActionArea } from '@mui/material';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import * as React from 'react';
// import '../Assets/Style/home.css';

// function Home() {
//     return (
//         <>
//             <div className='hom'>
//                     {/* Your image div */}
//                     <div className='homeimage'>
//                         {/* Insert your image or background styles here */}
//                     {/* </div> */}

//                     {/* Your cards section */}
//                     <div className='card1'>
//                         <Card sx={{ maxWidth: 345 }}>
//                             <CardActionArea>
//                                 <CardMedia
//                                     component="img"
//                                     height="250"
//                                     image="/static/images/cards/contemplative-reptile.jpg"
//                                     alt="green iguana"
//                                 />
//                                 <CardContent>
//                                     <Typography gutterBottom variant="h5" component="div">
//                                         Lizard
//                                     </Typography>
//                                     <Typography variant="body2" color="text.secondary">
//                                         Lizards are a widespread group of squamate reptiles, with over 6,000
//                                         species, ranging across all continents except Antarctica
//                                     </Typography>
//                                 </CardContent>
//                             </CardActionArea>
//                         </Card>
//                     </div>
//                     </div>
//                 </div>
//         </>
//     );
// }

// export default Home;
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import '../Assets/Style/home.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import fast from '../Assets/Image/main_image_6.jpg';

const Home = () => {
    const cardData = [
        {
            image: 'https://download.logo.wine/logo/Dabur/Dabur-Logo.wine.png',
            alt: 'Image 9',
            title: 'Dabur',
        },
        {
            image: 'https://tse4.mm.bing.net/th?id=OIP.1Ri0-2kxFh4ej55bobDyQQHaEB&pid=Api&P=0&h=180',
            alt: 'Image 10',
            title: 'Healthcare',
        },
        {
            image: 'https://images.apollo247.in/pd-cms/cms/2023-07/zandu_logo.jpg',
            alt: 'Image 11',
            title: 'Zandu',
        },
        {
            image: 'https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/health-professionals/en_IN/pain-relief/Crocin/Crocin_logo_750x421.png?auto=format',
            alt: 'Image 12',
            title: 'Crocin',
        },
        {
            image: 'https://ext-opencms.cancercare.mb.ca/export/sites/default/Treatments/.galleries/images/medication-safety-images/Medication-Safety_shutterstock_544348294.jpg',
            alt: 'Image 1',
            title: 'Medicine',
        },
        {
            image: 'https://pharmaceutical-journal.com/wp-content/uploads/2021/01/herbal-medicines-ss-18-scaled.jpg',
            alt: 'Image 2',
            title: 'Ayurveda',
        },
        {
            image: 'https://mtelehealth.com/wp-content/uploads/2019/10/UPDATED-tablet-with-devices-compressed.png',
            alt: 'Image 3',
            title: 'Healthcare devices',
        },
        {
            image: 'https://www.momababyetc.com/wp-content/uploads/2019/09/387735a.jpg',
            alt: 'Image 4',
            title: 'Babycare Products',
        },
        {
            image: 'https://i.pinimg.com/originals/3b/55/1b/3b551bc58c75923ba733a5490fa749c8.jpg',
            alt: 'Image 5',
            title: 'Cosmetics',
        },
        {
            image: 'https://cosmeticschinaagency.com/wp-content/uploads/2020/06/cosmetics-products.jpg',
            alt: 'Image 6',
            title: 'Skincare',
        },
        {
            image: 'https://i.gadgets360cdn.com/large/Health-Drink-1590745067287.jpg',
            alt: 'Image 7',
            title: 'HealtDrinks',
        },
        {
            image: 'https://tse2.mm.bing.net/th?id=OIP.K9IpuzNpzQGOaRzRh4gpCQHaDY&pid=Api&P=0&h=180',
            alt: 'Image 8',
            title: 'AdultCare',
        },
        // Add more card data as needed
    ];

    return (
        <div>
            {/* Your image div */}
            <p className='wel'>WELCOME TO CURECART!</p>
            <p className='quote'>Bestsellers</p>
            {/* <img src={homeimg} alt="Logo" style={{ height: '700px', width: '1600px' }} className="img" /> */}

            {/* First set of cards */}
            <Grid container spacing={3} style={{ marginTop: '20px', height: '600px' }}>
                {cardData.slice(0, 4).map((card, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                        <Card sx={{ maxWidth: '600px', maxHeight: '600px', margin: 'auto' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={card.image}
                                    alt={card.alt}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {card.title}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Bestsellers section */}
            <div className='own'>
                <p>Categories</p>
            </div>

            {/* Second set of cards */}
            <Grid container spacing={3} style={{ marginTop: '20px', height: '600px' }}>
                {cardData.slice(4).map((card, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                        <Card sx={{ maxWidth: '600px', maxHeight: '600px', margin: 'auto' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={card.image}
                                    alt={card.alt}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {card.title}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <div className='fastimg'>
            <div style={{ display: 'flex', alignItems: 'right' }}>
                            <img src={fast} alt="Logo" style={{ height: '250px',width:'1300px' }} className="img" />
                        </div>
                        </div>

            {/* Footer with about, contact us, and social media icons */}
            <footer style={{ backgroundColor: '#333', color: '#fff', padding: '70px', textAlign: 'center' }}>
                <div className='footer'>
                    <p className='get'><h4>Get to Know Us</h4>
                    <p>About</p>
                    <p>Contact Us</p>
                    </p>
                    {/* Social media icons */}
                    <p className='media'><h4>Connect With Us</h4></p>
                    <div classname='social'>
                        
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <FaFacebook style={{ marginRight: '10px', color: '#fff', fontSize: '20px' }} />
                        </a>
                        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                            <FaTwitter style={{ marginRight: '10px', color: '#fff', fontSize: '20px' }} />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram style={{ marginRight: '10px', color: '#fff', fontSize: '20px' }} />
                        </a>
                    </div>
                   
                </div>
                <p className='help'><h4>Let Us Help U</h4>
                <p>Pandemic Situations</p>
                <p>Genuine Medicines</p>
                <p>Fast Delivery</p>
                <p>Help</p>
                </p>
                <p className='copy'>© 2023 Your Company. All rights reserved</p>
            </footer>
        </div>
    );
};

export default Home;

