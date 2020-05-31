import React from "react";
import {Button, Icon} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  imageIcon: {
    height: '100%',
    display: 'flex'
  },
  iconRoot: {
    textAlign: 'center'
  }
});


const AudiobooksFilters: React.FC = () => {
  const classes = useStyles();
  const icon =(
    <Icon className={classes.iconRoot}>
      <img className={classes.imageIcon} src={require("../../assets/plus.svg")} alt="plus"/>
    </Icon>
  )
    return (
        <>
          <h2>Filters here</h2>
          <NavLink to={`/audiobooks/new?mode=edit` } className="w100">
          <Button size="small"
                  color="primary"
                  variant="contained"
                  startIcon={icon}>
            Create new
          </Button>
          </NavLink>

        </>

    )
}
export default AudiobooksFilters
