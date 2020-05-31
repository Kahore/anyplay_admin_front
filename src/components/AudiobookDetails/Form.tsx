import React, {SyntheticEvent, useEffect, useState} from "react";
import {IAudiobook} from "../../models/audiobook";
import CategoryService from "../../service/category";
import {ICategory} from "../../models/category";
import {
  Checkbox,
  createStyles,
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Theme, FormControlLabel
} from "@material-ui/core";
import {Redirect} from 'react-router-dom'
import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import {makeStyles} from "@material-ui/core/styles";
import moment from "moment";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    items: {
      paddingRight: theme.spacing(2),
    },
    formControl: {
      minWidth: 154,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);
const AudiobookForm: React.FC<{audiobook:IAudiobook | undefined,
  onFillForm: any, onArrayChange: any, onPostForm: any, isSave: boolean}> = ({audiobook, onFillForm, onArrayChange, onPostForm, isSave}) => {
  const classes = useStyles();
  const [categories, setCategories] = useState<ICategory[]>()

  const updateInputValue= (key: string, value: any ) => {
    onFillForm(key, value)
  }
  useEffect(() => {
    CategoryService.getCategories().then((response:ICategory[])=> {
      setCategories(response)
    })
  },[])
  const handleSubmit = (event:SyntheticEvent) => {
    event.preventDefault()
    onPostForm()
  }
  const handleChange = (event:SyntheticEvent,arrayName: string, object: any) => {
    onArrayChange(arrayName,object)
  }
  if (isSave) {
    return (<Redirect to={`/audiobooks/${audiobook?.id}?mode=view`}/>)
  }
  return (
    <form onSubmit={handleSubmit}
          className={classes.root}>
      <div>
        <FormControl className={classes.items}>
          <InputLabel htmlFor="title">Title</InputLabel>
          <Input name="title"
                 value={audiobook?.title}
                 onChange={((event: any)=> updateInputValue(event.target.name, event.target.value, ))}/>
        </FormControl>
        <FormControl className={classes.items}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <KeyboardDatePicker disableToolbar
                                variant="inline"
                                format="yyyy-MM-DD"
                                name="year"
                                label="Year"
                                value={audiobook?.year}
                                onChange={((event:any )=> updateInputValue('year', moment(event).format('yyyy-MM-DD')))}
            />
          </MuiPickersUtilsProvider>
        </FormControl>
        <FormControl className={[classes.formControl,classes.items].join(' ')}>
          <InputLabel id="drm">DRM</InputLabel>
            <Select labelId="drm"
                    name="drm"
                    value={audiobook?.drm}
                    onChange={((event:any )=> updateInputValue(event.target.name, event.target.value))}
            >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value={'free'}>Free</MenuItem>
              <MenuItem value={'Some'}>Some</MenuItem>
              <MenuItem value={'Some 1'}>Some 1</MenuItem>
            </Select>
        </FormControl>
      </div>
      <div>
        <Grid container spacing={3}>
          <Grid item xs={10} sm={9} md={7} lg={7}>
            {categories?.map( category=> (
              <FormControl key={category.id}
                           className={classes.items} >
                <FormControlLabel
                  control={
                    <Checkbox checked={(audiobook?.category.findIndex(x => x.id === category.id) !== -1)}
                              onChange={((event:any )=> handleChange(event,'category', category)) }
                              name="checkedB"
                              color="primary"
                    />
                  }
                  label={category.title}
                />
              </FormControl>
            ))}
          </Grid>
        </Grid>
      </div>

    </form>


  )
}
export default AudiobookForm
