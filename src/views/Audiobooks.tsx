import React, {useEffect, useState} from "react";
import AudiobooksFilters from "../components/Audiobooks/Filters";
import AudiobooksTable from "../components/Audiobooks/Table";
import AudiobooksService from "../service/audiobooks";
import {IAudiobook, IAudiobookFiters} from "../models/audiobook";
import AudiobookService from "../service/audiobook";

const AudiobooksView: React.FC = () => {
  const [audiobooks, setAudiobooks] = useState<IAudiobook[]>([])
  const [audiobooksFilter, setAudiobooksFilter] = useState<IAudiobookFiters>({
    search: '',
    publisher: null,
    language: null,
    throwLine: 'All'
  })
  useEffect(() => {
    getAudiobooks()
  },[])
  const getAudiobooks = async () => {
    const data:IAudiobook[] = await AudiobooksService.getAudiobooks(audiobooksFilter)
    setAudiobooks(data)
  }
  useEffect(() => {
    document.title = "Audiobooks"
  }, []);
  const onDeleteAudiobook = async (audiobookId: number) => {
    await AudiobookService.deleteAudiobook(audiobookId)
    setAudiobooks(audiobooks.filter(audiobook=>audiobook.id !== audiobookId))
  }
  const onFillFilter = (key: any, value: any) => {
    setAudiobooksFilter({...audiobooksFilter, [key]:value })
  }
  return (
    <>
      <AudiobooksFilters audiobooksFilter={audiobooksFilter}
                         onFillFilter={onFillFilter}
                         onFilterSearch={getAudiobooks}
      />
      <AudiobooksTable audiobooks={audiobooks}
                       onDeleteAudiobook={onDeleteAudiobook}/>
      </>
  )
}
export default AudiobooksView
