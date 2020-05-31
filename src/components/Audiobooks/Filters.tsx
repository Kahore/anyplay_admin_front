import React, {SyntheticEvent} from "react";
import {
  Button,
  createStyles, Divider,
  FormControl,
  Grid,
  Icon,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Theme
} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import {IAudiobookFiters} from "../../models/audiobook";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    imageIcon: {
      height: '100%',
      display: 'flex'
    },
    iconRoot: {
      textAlign: 'center'
    },
    items: {
      paddingRight: theme.spacing(2),
    },
    formControl: {
      minWidth: 154,
    },
  }))

const AudiobooksFilters: React.FC<{audiobooksFilter:IAudiobookFiters,
  onFillFilter: any,onFilterSearch:any}> = ({audiobooksFilter,onFillFilter,onFilterSearch}) => {
  const classes = useStyles();
  const updateInputValue= (key: string, value: any ) => {
    onFillFilter(key, value)
  }
  const handleSearch = (event:SyntheticEvent) => {
    event.preventDefault()
    onFilterSearch()
  }
  const icon =(
    <Icon className={classes.iconRoot}>
      <img className={classes.imageIcon}
           src={require("../../assets/plus.svg")}
           alt="plus"/>
    </Icon>
  )
    return (
        <>
          <Grid container
                alignItems="center">
            <Grid item xs={3} md={3}>
              <NavLink to={`/audiobooks/new?mode=edit` } className="w100">
              <Button size="small"
                      color="primary"
                      variant="contained"
                      startIcon={icon}>
                Create new
              </Button>
            </NavLink>
            </Grid>
            <Grid item xs={6} md={3}>
              <FormControl className={[classes.items, 'w100'].join(' ')}>
                <InputLabel htmlFor="search">Findaway id</InputLabel>
                <Input name="some"
                       value=''/>

              </FormControl>
            </Grid>
            <Grid item xs={6} md={3}>
              <Button size="small"
                      color="primary"
                      variant="contained">
                Redirect
              </Button>
            </Grid>
          </Grid>
          <Divider/>
          <div className={classes.root}>
            <Grid container
                  alignItems="center">
              <Grid item xs={6} md={6}>
                <FormControl className={[classes.items, 'w100'].join(' ')}>
                  <InputLabel htmlFor="search">Search</InputLabel>
                  <Input name="search"
                         value={audiobooksFilter?.search}
                         onChange={((event: any)=> updateInputValue(event.target.name, event.target.value, ))}/>
                </FormControl>
              </Grid>
              <Grid item xs={6} md={6}>
                <FormControl className={[classes.formControl,classes.items].join(' ')}>
                  <InputLabel id="publisher">Search throw</InputLabel>
                  <Select labelId="publisher"
                          name="publisher"
                          value={audiobooksFilter?.throwLine}
                          onChange={((event:any )=> updateInputValue(event.target.name, event.target.value))}
                  >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value={'All'}>All</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={6} md={3}>
                <FormControl className={[classes.formControl,classes.items, 'w100'].join(' ')}>
                  <InputLabel id="lang">Language</InputLabel>
                  <Select labelId="lang"
                          name="language"
                          value={audiobooksFilter?.language}
                          onChange={((event:any )=> updateInputValue(event.target.name, event.target.value))}
                  >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value={'English'}>English</MenuItem>
                    <MenuItem value={'Swedish'}>Swedish</MenuItem>
                    <MenuItem value={'Russian'}>Russian</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6} md={3}>
                <FormControl className={[classes.formControl,classes.items, 'w100'].join(' ')}>
                  <InputLabel id="publisher">Publisher</InputLabel>
                  <Select labelId="publisher"
                          name="publisher"
                          value={audiobooksFilter?.publisher}
                          onChange={((event:any )=> updateInputValue(event.target.name, event.target.value))}
                  >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value={'English'}>publisher 1</MenuItem>
                    <MenuItem value={'Swedish'}>publisher 2</MenuItem>
                    <MenuItem value={'Russian'}>publisher 3</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6} md={3}>
                <Button size="small"
                        variant="contained"
                        color="primary"
                        type="button"
                        onClick={handleSearch}>
                  Search
                </Button>
              </Grid>
            </Grid>
          </div>

        </>

    )
}
export default AudiobooksFilters
