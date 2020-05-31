import {ICategory} from "./category";

export interface IAudiobook {
  id: number | null
  findawayId: number | null,
  title: string
  author: string
  publisher: string
  category: ICategory[]
  year: string | null
  playtime: string | null
  language: string
  model: string
  cover: string | null
  image: string | null,
  drm?: string
}
export interface IAudiobookFiters {
  search: string;
  language: string | null;
  publisher: string | null;
  throwLine: string | null
}
