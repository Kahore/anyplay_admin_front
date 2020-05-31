import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Link,
  ListItem,
  ListItemText,
  Typography,
  List
} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import {NavLink} from "react-router-dom";
import {IAudiobook} from "../../models/audiobook";
import {ICategory} from "../../models/category";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 500
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  listItem: {
    paddingTop: 0,
    paddingBottom: 0
  }
});

const AudiobookDetails: React.FC<{audiobook:IAudiobook|undefined}> = ({audiobook}) => {
  const classes = useStyles();
  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2"  gutterBottom>
          {audiobook?.title}
        </Typography>
        <Typography >
        The authors are:
          <List >
              <ListItem className={classes.listItem}>
                <ListItemText
                  primary={audiobook?.author}/>
              </ListItem>
          </List>
        </Typography>
        <Typography className={classes.pos}>
          The year: {audiobook?.year}
        </Typography>
        <Typography className={classes.pos}>
         Playtime: {audiobook?.playtime}
        </Typography>
        <Typography className={classes.pos}>
          Publisher: {audiobook?.publisher}
        </Typography>
        <Typography className={classes.pos}>
          This books is findaway content with an id: {audiobook?.findawayId}
        </Typography>
        <Typography className={classes.pos}>
          Belongs the following categories:
          <List >
            {audiobook?.category.map((category:ICategory)=>(
              <ListItem key={category.id} className={classes.listItem}>
                <ListItemText
                  primary={category.title}/>
              </ListItem>
            ))
            }
          </List>
        </Typography>
        <Typography className={classes.pos}>
          Has the the following subscription models:
          <List >
            <ListItem className={classes.listItem}>
              <NavLink to='/models/some' className="w100">
                <Link onClick={preventDefault}>
                  <ListItemText
                    primary={audiobook?.model}/>
                </Link>
              </NavLink>

            </ListItem>
          </List>
        </Typography>
        <Typography variant="body2" component="p">
          some external description here
        </Typography>
      </CardContent>
      <CardActions>
        <NavLink to={`/audiobooks/${audiobook?.id}?mode=edit` }>
          <Button size="small"
                  color="primary"
                  variant="contained"
                  startIcon={<EditIcon/>}>
            Edit
          </Button>
        </NavLink>
      </CardActions>
    </Card>
  );
}
export default AudiobookDetails
