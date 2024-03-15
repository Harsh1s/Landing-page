import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import HeroSec from '../assets/Herosec.jpg';

const useStyles = makeStyles((theme) => ({
  heroSection: {
    position: 'relative',
    width: '100vw',
    height: '70vh',
  },
  heroText: {
    position: 'absolute',
    top: '64px',
    left: '10px',
    color: 'white',
    [theme.breakpoints.up('md')]: {
      fontSize: '7rem',
    },
    fontSize: '5rem',
    fontWeight: 'bold',
  },
  featureSection: {
    marginTop: theme.spacing(10),
  },
  featureCard: {
    width: '25vw',
    height: '30vh',
    borderRadius: '16px',
    marginBottom: theme.spacing(4),
  },
  featureImage: {
    height: '50%',
  },
  featureText: {
    color: 'rgba(0, 0, 0, 0.6)',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
  exploreButton: {
    backgroundColor: '#7b1fa2',
    color: 'white',
    '&:hover': {
      backgroundColor: '#691884',
    },
  },
}));

function LandingPage() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.heroSection}>
        <Typography variant="h1" className={classes.heroText}>
          This is a Landing Page
        </Typography>
        <img src={HeroSec} alt="" className={classes.heroImage} />
      </div>
      <Container className={classes.featureSection}>
        <Typography variant="h1" align="center" gutterBottom>
          Our Features
        </Typography>
        <Grid container spacing={4} justify="center">
          {[1, 2, 3].map((feature) => (
            <Grid item key={feature}>
              <Card className={classes.featureCard}>
                <CardMedia
                  component="img"
                  image={HeroSec}
                  alt={`Feature ${feature}`}
                  className={classes.featureImage}
                />
                <CardContent>
                  <Typography variant="body1" className={classes.featureText}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum nulla facere assumenda provident modi quasi natus dicta debitis reprehenderit, eligendi ex dolorem?
                  </Typography>
                  <Button variant="contained" className={classes.exploreButton}>
                    Explore
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default LandingPage;
