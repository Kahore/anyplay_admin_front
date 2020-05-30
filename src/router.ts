import React from "react";
import AudiobooksView from "./views/Audiobooks";
import AudiobooksDetailsView from "./views/AudiobooksDetails";
import UsersView from "./views/Users";

export interface IRoute {
    path: string,
    title: string,
    isUsedInMenu: boolean,
    component: React.FC
}

const routes:IRoute[] = [
    {
        path: '/audiobooks',
        title: 'Audiobooks',
        isUsedInMenu: true,
        component: AudiobooksView
    },
    {
        path: '/audiobooks/:id',
        title: 'Audiobook details',
        isUsedInMenu: false,
        component: AudiobooksDetailsView
    },
    {
        path: '/users',
        isUsedInMenu: true,
        title: 'Users',
        component: UsersView,
    }
]
export default routes;