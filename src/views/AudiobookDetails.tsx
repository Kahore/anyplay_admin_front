import React, {useEffect, useState} from "react";
import AudiobookDetails from "../components/AudiobookDetails/Details";
import AudiobookForm from "../components/AudiobookDetails/Form";
import AudiobooksService from "../service/audiobooks";
import { useParams, useLocation, useHistory } from 'react-router-dom';
import PlaylistsTable from "../components/AudiobookDetails/PlaylistsTable";
import {IAudiobook} from "../models/audiobook";
import AudiobookService from "../service/audiobook";

const AudiobookDetailsView: React.FC = () => {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const DEFAULT_AUDIOBOOK:IAudiobook  = {
    id: null,
    findawayId: null,
    title: '',
    author: '',
    playtime: null,
    language: '',
    cover: null,
    image: null,
    model: '',
    publisher: '',
    year: null,
    category: []
  }
  let query = useQuery();
  const mode =query.get('mode')
  const history = useHistory();
  const {id} = useParams()
  const [audiobook, setAudiobook] = useState<IAudiobook>()

  const onFillForm = (key: any, value: any) => {
  // @ts-ignore
    setAudiobook({...audiobook, [key]:value })
  }
  const onArrayChange = (arrayName: 'category', object: any) => {
    if (audiobook) {
      let isExist = (audiobook[arrayName].findIndex((x: any) => x.id === object.id) !== -1)
      let newCategory
      if(isExist) {
        newCategory = audiobook[arrayName].filter((item: any) => item.id !== object.id)
        } else {
        newCategory = [...audiobook[arrayName]]
        newCategory.push({...object})
      }
        setAudiobook({...audiobook, [arrayName]:[...newCategory] })
    }
  }
 const onPostForm = () => {

    if(audiobook?.id) {
      AudiobookService.updateAudiobook(audiobook).then((response:IAudiobook)=>{
        setAudiobook(response)
      })
    } else {
      AudiobookService.postAudiobook(audiobook as IAudiobook).then((response:IAudiobook)=>{
        setAudiobook(response)
      })
    }
   history.push(`/audiobooks/${audiobook?.id}?mode=view`);
 }
  useEffect(() => {
    if(id === 'new')  {
      const newAudiobook = {...DEFAULT_AUDIOBOOK}
      setAudiobook(newAudiobook)
    } else {
      AudiobooksService.getAudiobooks().then((response:IAudiobook[])=> {
        response = response.filter((audiobook:IAudiobook)=>audiobook.id === parseInt(id))
        setAudiobook(response[0])
      })
    }
  },[])
  useEffect(() => {
    document.title = "Audiobook details"
  }, []);
  return (
    <>
      {mode === 'edit' ?
        <>
          <AudiobookForm audiobook={audiobook}
                         onFillForm={onFillForm}
                         onArrayChange={onArrayChange}
                         onPostForm={onPostForm}/>
        </>
        :
        <>
        <AudiobookDetails audiobook={audiobook}/>
        <PlaylistsTable/>
        </>
      }
    </>
  )
}
export default AudiobookDetailsView
