import React, {useEffect, useState} from "react";
import AudiobooksFilters from "../components/Audiobooks/Filters";
import AudiobooksTable from "../components/Audiobooks/Table";
import AudiobooksService from "../service/audiobooks";
import {IAudiobook} from "../models/audiobook";
import AudiobookService from "../service/audiobook";


const AudiobooksView: React.FC = () => {
  const [audiobooks, setAudiobooks] = useState<IAudiobook[]>([])
  useEffect(() => {
    // const abortController = new AbortController();
    AudiobooksService.getAudiobooks().then((response:IAudiobook[])=> {
      setAudiobooks(response)
    })
    // return function cleanup() {
    //     abortController.abort();
    // };
  },[])
  const onDeleteAudiobook = async (audiobookId: number) => {
    await AudiobookService.deleteAudiobook(audiobookId)
    setAudiobooks(audiobooks.filter(audiobook=>audiobook.id !== audiobookId))
  }
  return (
    <>
      <AudiobooksFilters/>
      <AudiobooksTable audiobooks={audiobooks} onDeleteAudiobook={onDeleteAudiobook}/>
      </>
  )
}
export default AudiobooksView
