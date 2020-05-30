import React from "react";
import AudiobooksFilters from "../components/Audiobooks/Filters";
import AudiobooksTable from "../components/Audiobooks/Table";

const AudiobooksView: React.FC = () => {
    return (
        <>
            <AudiobooksFilters/>
            <AudiobooksTable/>
        </>
    )
}
export default AudiobooksView