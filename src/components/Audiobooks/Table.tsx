import React from "react";
import {
  Button, Dialog, DialogActions, DialogTitle,
  Grid, ListItem, ListItemText, Menu, MenuItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow
} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {NavLink} from "react-router-dom";
import {IAudiobook} from "../../models/audiobook";
import List from "@material-ui/core/List";
import {ICategory} from "../../models/category";

interface Column {
  id: string;
  label: string;
  maxWidth?: number;
  align?: 'right';
  format?: string;
}
const columns: Column[] = [
  { id: 'findawayId', label: 'Findaway Id', maxWidth: 100 },
  { id: 'title', label: 'Title', maxWidth: 100 },
  { id: 'author', label: 'Author', maxWidth: 100 },
  { id: 'publisher', label: 'Publisher', maxWidth: 100 },
  { id: 'category', label: 'Main category', maxWidth: 100, format: 'array' },
  { id: 'year', label: 'Year', maxWidth: 100, format: 'date' },
  { id: 'playtime', label: 'Playtime', maxWidth: 100, format: 'time'},
  { id: 'language', label: 'Language', maxWidth: 100 },
  { id: 'model', label: 'Business model', maxWidth: 100 },
  { id: 'cover', label: 'Cover image (provided by Findaway)', maxWidth: 80, format: 'image' },
  { id: 'image', label: 'Image (our)', maxWidth: 80, format: 'image' },
  { id: 'deeplink', label: 'Deeplink', maxWidth: 100 },
  { id: 'action', label: 'Action', maxWidth: 100 }
];
const useStyles = makeStyles({
  root: {
    width : '100%',
  },
  container: {
    maxHeight: 440,
  },
  head: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '13px',
    lineHeight: 'normal'
  },
  td: {
    padding: '14px'
  },
  listItem: {
    paddingTop: 0,
    paddingBottom: 0
  }
});

const AudiobooksTable: React.FC<{audiobooks:IAudiobook[], onDeleteAudiobook: any}>= ({ audiobooks,onDeleteAudiobook}) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorElId, setAnchorElId] = React.useState<null | number>(null);

  const handleClick = (row: IAudiobook, event: React.MouseEvent<HTMLElement> ) => {
    setAnchorEl(event.currentTarget);
    setAnchorElId(row.id)
  };
  const [open, setOpen] = React.useState(false);

  const handleOpenModal = (audiobookId: number, event: React.MouseEvent<HTMLElement>) => {
    setAnchorElId(audiobookId)
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };
  const handleConfirmModal = () => {
    onDeleteAudiobook(anchorElId)
    setAnchorEl(null);
    setOpen(false);
  }

  const handleClose = () => {
    setAnchorEl(null);
  };
    return (
      <>
        <Grid item xs={12}>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={audiobooks.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Grid>
          <Table stickyHeader
                 aria-label="sticky table"
                 style={{ minWidth: "340px", overflowX:"auto" }}>
            <TableHead>
              <TableRow >
                {columns.map((column) => (
                  <TableCell key={column.id}
                             className={classes.head}
                             align={column.align}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>

            </TableHead>
            <TableBody>
              {audiobooks.map((row) => {
                return (
                  <TableRow hover
                            tabIndex={-1}
                            key={row.id as number}>
                    {columns.map((column:Column, index) => {
                      // @ts-ignore
                      const value = row[column.id];
                      if(value) {
                        return (
                          <TableCell key={index}
                                     align={column.align}
                                     className={classes.td}>
                            {column.format ?
                              column.format === 'date' ?  value.toLocaleString('en-US') :
                                column.format === 'array'?   <List >
                                    {row?.category.map((category:ICategory)=>(
                                      <ListItem key={category.id}
                                                className={classes.listItem}>
                                        <ListItemText
                                          primary={category.title}/>
                                      </ListItem>
                                    ))
                                    }
                                  </List> :
                                column.format === 'image'? <img style={{ maxWidth: column.maxWidth }}
                                                                src={value}
                                                                alt="value"/> : value
                              : value
                            }
                          </TableCell>
                        )
                      }
                    })}
                    <TableCell className={classes.td}>
                      <Button size="small"
                              variant="contained"
                              color="primary"
                              aria-controls="simple-menu"
                              aria-haspopup="true">
                        Generate
                      </Button>
                    </TableCell>
                    <TableCell className={classes.td}>
                      <Button size="small"
                              variant="contained"
                              aria-controls="simple-menu"
                              aria-haspopup="true"
                              onClick={handleClick.bind(null, row)}>
                        Actions
                      </Button>
                      <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl) && row.id===anchorElId}
                        onClose={handleClose}
                      >
                        <MenuItem >
                          <NavLink to={`/audiobooks/${row.id}?mode=view` } className="w100">
                            Show
                          </NavLink>
                        </MenuItem>
                        <MenuItem>
                          <NavLink to={`/audiobooks/${row.id}?mode=edit` } className="w100">
                            Edit
                          </NavLink>
                        </MenuItem>
                        <MenuItem onClick={handleOpenModal.bind(null,row.id as number)}>Delete</MenuItem>
                        <MenuItem onClick={handleClose}>AudioBook Awards</MenuItem>
                      </Menu>
                    </TableCell>
                   </TableRow>
                );
              })}
            </TableBody>
          </Table>
        <Dialog
          open={open}
          onClose={handleCloseModal}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Are you really wanna delete?"}</DialogTitle>
          <DialogActions>
            <Button onClick={handleCloseModal} color="primary">
              No
            </Button>
            <Button onClick={handleConfirmModal} color="primary" autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
        </>
    );
}

export default AudiobooksTable
