import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

function PokemonCard(props) {
    const classes = useStyles();

    let imgUrl = `https://img.pokemondb.net/artwork/${props.name}.jpg`;

    return (
        <Card className={classes.root} >
            <CardActionArea>
                <CardMedia
                    onClick={props.catchPokemon}
                    component="img"
                    alt={props.name}
                    image={imgUrl}
                    width="150"
                    title={props.name}
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h3"
                        component="h2"
                    >{props.name}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
          </Typography>
                </CardContent>

            </CardActionArea>
        </Card>
    )
}

export default PokemonCard;