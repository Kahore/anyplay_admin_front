import React, {useEffect} from "react";

const UsersView: React.FC = () => {
  useEffect(() => {
    document.title = "Users"
  }, []);
  return (
    <>
      <h2>Users will be shown here</h2>
    </>
  )
}
export default UsersView
