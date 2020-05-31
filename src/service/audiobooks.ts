import {IAudiobook, IAudiobookFiters} from "../models/audiobook";
import {IPlaylist} from "../models/playlist";
const audiobooks :IAudiobook[] = [
  {
    id:1,
    findawayId: 111111,
    author: 'author1',
    category: [{id:1,title: 'Nature'}],
    year: '2020-01-01',
    title: 'title1',
    publisher: 'publisher1',
    playtime: '01:01:01',
    cover: 'https://dummyimage.com/600x400/857085/000000',
    image: 'https://dummyimage.com/600x400/10b060/000000',
    model: 'model1',
    language: 'language1'
  },
  {
    id:2,
    findawayId: 222222,
    author: 'author2',
    category: [{id:2,title: 'Performing Arts'}],
    year: '2020-01-01',
    title: 'title2',
    publisher: 'publisher2',
    playtime: '01:01:01',
    cover: 'https://dummyimage.com/600x400/857085/000000',
    image: 'https://dummyimage.com/600x400/10b060/000000',
    model: 'model2',
    language: 'language2'
  },
  {
    id:3,
    findawayId: 333333,
    author: 'author3',
    category: [{id:9,title: 'Language art & disciplines'}],
    year: '2020-01-01',
    title: 'title3',
    publisher: 'publisher3',
    playtime: '01:01:01',
    cover: 'https://dummyimage.com/600x400/857085/000000',
    image: 'https://dummyimage.com/600x400/10b060/000000',
    model: 'model3',
    language: 'language3'
  },
  {
    id:4,
    findawayId: 444444,
    author: 'author4',
    category: [{id:6,title: 'Music'},{id:8,title: 'Law'}],
    year: '2020-01-01',
    title: 'title4',
    publisher: 'publisher4',
    playtime: '01:01:01',
    cover: 'https://dummyimage.com/600x400/857085/000000',
    image: 'https://dummyimage.com/600x400/10b060/000000',
    model: 'model4',
    language: 'language4'
  },
  {
    id:5,
    findawayId: 55555,
    author: 'author5',
    category: [{id:3, title: 'Humor'}],
    year: '2020-01-01',
    title: 'Some another title',
    publisher: 'publisher5',
    playtime: '01:01:01',
    cover: 'https://dummyimage.com/600x400/857085/000000',
    image: 'https://dummyimage.com/600x400/10b060/000000',
    model: 'model5',
    language: 'language5'
  },
]
class AudiobooksService {
   public static async getAudiobooks(audiobooksFilter?:IAudiobookFiters):Promise<IAudiobook[]> {
     if(audiobooksFilter) {
       const {search, publisher, language, throwLine} = audiobooksFilter
       if(search !== '') {
         return audiobooks.filter(audiobook=>audiobook.title.toLowerCase().includes(search.toLowerCase()))
       }
     }
     return audiobooks
   }
  public static async getAudiobooksPlaylist(): Promise<IPlaylist[]> {
    return [
      {id: 1, title: 'Playlist title 1'},
      {id: 2, title: 'Playlist title 2'},
      {id: 3, title: 'Playlist title 3'},
    ]
  }
}
export default AudiobooksService;
