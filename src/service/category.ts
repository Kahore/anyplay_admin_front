import {ICategory} from "../models/category";

class CategoryService {
  public static async getCategories():Promise<ICategory[]> {
    return [
      {id:1, title: 'Nature'},
      {id:2, title: 'Performing Arts'},
      {id:3, title: 'Humor'},
      {id:4, title: 'Pets'},
      {id:5, title: 'Games'},
      {id:6, title: 'Music'},
      {id:7, title: 'Drama'},
      {id:8, title: 'Law'},
      {id:9, title: 'Language art & disciplines'}
    ]
  }
}
export default CategoryService
