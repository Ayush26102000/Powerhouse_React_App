// import React from 'react';
import '../components/Beforeafter.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ba1 from '../assets/ba1.jpg';
import ba2 from '../assets/ba2.jpg';
import ba3 from '../assets/ba3.jpg';
import { GrLike } from 'react-icons/gr';

const Beforeafter = () => {
    return (
        <div className='beforeafter'>
            <div className='ba-head'>
                <h1>BEFORE AND AFTER</h1>
            </div>
            <div className='ba-cards'>
                <Card sx={{ maxWidth: 400, marginBottom: 2 }} className='card'>
                    <CardActionArea>
                        <CardMedia className='CardMedia'
                            component="img"
                            height="140"
                            image={ba1}
                            alt="ba"
                        />
                        <CardContent className='c-con'>
                            <Typography gutterBottom variant="h5" component="div">
                                Client 1
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                loseit has lost more than 150 pounds naturally in 13 months by
                                getting in 5 a.m. HIIT classes at the gym and tracking her calories
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Like <GrLike className='like' />
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 400, marginBottom: 2 }} className='card'>
                    <CardActionArea>
                        <CardMedia className='CardMedia'
                            component="img"
                            height="140"
                            image={ba2}
                            alt="ba"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Client 2 
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Most of the weight-loss warriors here tried from
                                going vegan to intermittent fasting before finding the methods
                                that worked with their lifestyles.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">

                            Like <GrLike className='like' />
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 400, marginBottom: 2 }} className='card'>
                    <CardActionArea>
                        <CardMedia className='CardMedia'
                            component="img"
                            height="140"
                            image={ba3}
                            alt="ba"
                        />
                        <CardContent>
                            
                            <Typography gutterBottom variant="h5" component="div">
                                Client 3 
                            </Typography>
                           
                            <Typography variant="body2" color="text.secondary">
                                If you’re like any of the women in these incredible weight-loss transformation
                                stories, you’ve struggled.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">

                            Like  <GrLike className='like' />
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
}


export default Beforeafter