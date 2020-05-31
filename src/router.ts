import AudiobooksView from "./views/Audiobooks";
import AudiobookDetailsView from "./views/AudiobookDetails";
import UsersView from "./views/Users";
import {IRoute} from "./models/route";


const routes:IRoute[] = [
    {
        path: '/audiobooks',
        title: 'Audiobooks',
        mode: 'exact',
        isUsedInMenu: true,
        component: AudiobooksView
    },
    {
        path: '/audiobooks/:id',
        title: 'Audiobook details',
        mode: 'strict',
        isUsedInMenu: false,
        component: AudiobookDetailsView
    },
    {
        path: '/users',
        mode: 'exact',
        isUsedInMenu: true,
        title: 'Users',
        component: UsersView,
    }
]
export default routes;
