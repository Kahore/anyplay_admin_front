import React, {useEffect} from "react";
import PublisherDetails from "../components/PublisherDetails/Details";

const PublisherDetailsView: React.FC = () => {
  useEffect(() => {
    document.title = "Publisher details"
  }, []);
  return (
    <>
      <PublisherDetails/>
    </>
  )
}
export default PublisherDetailsView
