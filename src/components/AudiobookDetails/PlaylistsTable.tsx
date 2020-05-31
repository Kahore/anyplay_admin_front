import React, {useEffect} from "react";
import {Box, Button, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import AudiobooksService from "../../service/audiobooks";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {IPlaylist} from "../../models/playlist";

const useStyles = makeStyles({
  head: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: '13px',
    lineHeight: 'normal'
  },
});
const PlaylistsTable: React.FC = () => {
  const classes = useStyles();
  const [playlists, setPlaylists] = React.useState<IPlaylist[]>([]);
  useEffect(() => {
    AudiobooksService.getAudiobooksPlaylist().then((response:IPlaylist[])=> {
      setPlaylists(response)
    })
  },[])
  const handleClick = (row: IPlaylist, event: React.MouseEvent<any> ) => {
    console.log('handleClick -> row', row)
  }
  return (
    <Box mt={2}>
      <Table stickyHeader aria-label="sticky table"
             style={{ minWidth: "340px", overflowX:"auto" }}
      >
        <TableHead>
          <TableRow>
            <TableCell className={classes.head}>Playlist title</TableCell>
            <TableCell className={classes.head}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {playlists.map((playlist) => (
            <TableRow hover key={playlist.id}>
              <TableCell>{playlist.title}</TableCell>
              <TableCell>
                <Button size="small"
                        color="primary"
                        variant="contained"
                        onClick={handleClick.bind(null, playlist)}>
                  Add to playlist
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  )
}
export default PlaylistsTable
