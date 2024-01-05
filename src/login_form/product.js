import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography, Button} from '@mui/material';

const Product = () => {
    const cardData = [
        {
            image: 'https://i5.walmartimages.com/asr/500cd6b2-39c2-431d-b76b-8924f82d3135_1.01f905d94d3796ffe61135758224b6b6.jpeg',
            alt: 'Image 9',
            title: 'Equate Multivitamin',
            price: '$10.99',
        },
        {
            image: 'https://i.etsystatic.com/24799909/r/il/5ff4a9/3026161262/il_1588xN.3026161262_4hzn.jpg',
            alt: 'Image 10',
            title: 'Herbalite Multivitamin',
            price: '$19.99',
        },
        {
            image: 'https://www.chemist-4-u.com/media/catalog/product/S/2/S2DMBFKR3LY_1.jpg',
            alt: 'Image 11',
            title: 'Panadol',
            price: '$15.50',
        },
        {
            image: 'http://cdn.shopify.com/s/files/1/0279/8177/4927/products/pilex-tablets_1200x1200.png?v=1591001906',
            alt: 'Image 12',
            title: 'Pilex',
            price: '$8.99',
        },
        {
            image: 'https://www.graphicpear.com/wp-content/uploads/2020/04/Pills-Box-Mockup-PSD.jpg',
            alt: 'Image 1',
            title: 'Cloroxomin',
            price: '$12.99',
        },
        {
            image: 'https://getmeds.ph/blog/wp-content/uploads/2021/06/Biogesic-500-MG-Paracetamol-1024x1024.jpg',
            alt: 'Image 2',
            title: 'Paracetmol Biogesic',
            price: '$14.99',
        },
        {
            image: 'https://cascaremedies.com/wp-content/uploads/2023/10/CasdrylCold-1024x1024.jpg',
            alt: 'Image 3',
            title: 'Casdryl-cold',
            price: '$29.99',
        },
        {
            image: 'https://i5.walmartimages.com/asr/85dfd16e-e00d-4f5a-8873-ec732bf78dc9_1.8c0cbbf7f44289cb90478296e6d001d9.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
            alt: 'Image 4',
            title: 'Cetirizine',
            price: '$17.50',
        },
        {
            image: 'https://images.heb.com/is/image/HEBGrocery/001134193',
            alt: 'Image 5',
            title: 'H.E.B-Allergy relief',
            price: '$24.99',
        },
        {
            image: 'https://www.rehabmart.com/include-mt/img-resize.asp?path=/imagesfromrd/vnbral_1.jpg&newwidth=650',
            alt: 'Image 6',
            title: 'Vital Protiens',
            price: '$22.50',
        },
        {
            image: 'https://i5.walmartimages.com/asr/f0d15d25-70a9-4408-87f3-56605728cfae.9c51ef9cd0be875d05479cad3d96554f.jpeg',
            alt: 'Image 7',
            title: 'Herbal-BP',
            price: '$9.99',
        },
        {
            image: 'https://i5.walmartimages.com/asr/ad420833-990a-48f2-b0db-d566b7ff655e.b5da08629a7f0e8a5454bf76624dbea4.jpeg',
            alt: 'Image 8',
            title: 'Nature Strong',
            price: '$15.99',
        },
    ];

    return (
        <div className="product-page-container">
            <p className='multi'>Multivitamins and Supplements</p>
            <Grid container spacing={3}>
                {cardData.map((card, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="240"
                                    image={card.image}
                                    alt={card.alt}
                                />
                                <CardContent style={{ backgroundColor: '#f4f4f4' }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {card.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" style={{ color: '#333' }}>
                                        <strong>Price:</strong> {card.price}
                                    </Typography>
                                    <center>
                                        {/* Increased the length and changed button color to yellow */}
                                        <Button variant="contained" color="success" sx={{ width: '75%', mt: 2 }}>
                                            Add to Cart
                                        </Button>
                                    </center>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Product;