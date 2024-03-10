import React from "react";
import { Search } from "@material-ui/icons";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import { selectUser} from "./Store/Slices/SpotifySlice";
import { useSelector } from "react-redux";

function Header() {
  const user = useSelector(selectUser)

  return (
    <div className="header">
      <div className="header__left">
      <Search style={{ color: "#fff" }} />
        <input
          className="header__input"
          placeholder="Search for Artists, Songs, or Albums"
          type="text"
        />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;