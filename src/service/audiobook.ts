import {IAudiobook} from "../models/audiobook";

class AudiobookService {
  public static async postAudiobook(data:IAudiobook) {
    data.id = Date.now()
    data.author ="Some author"
    data.findawayId = 999999
    data.model = "Some model"
    data.playtime= '09:09:09'
    data.publisher= "some publisher"
    return data
  }
  public static async updateAudiobook(data:IAudiobook) {
    return data
  }
  public static async deleteAudiobook(audiobookId:number) {
    return true
  }
}

export default AudiobookService
