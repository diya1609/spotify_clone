import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import { getTokenFromUrl } from "./components/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDispatch, useSelector } from 'react-redux';
import {selectToken, setDiscoverWeekly, setPlaylists, setToken, setUser } from './components/Store/Slices/SpotifySlice';
import Player from "./components/Player";

const spotify = new SpotifyWebApi();

function App() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    console.log("tokennn=================", _token);
    if (_token) {
      dispatch(setToken(_token)); // Dispatch the setToken action with the received token
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch(setUser(user)); // Dispatch the setUser action with the received user
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch(setPlaylists(playlists)); // Dispatch the setPlaylists action with the received playlists
      });
      spotify.getPlaylist("37i9dQZF1E34Ucml4HHx1w").then((playlist) => {
        dispatch(setDiscoverWeekly(playlist)); // Dispatch the setDiscoverWeekly action with the received playlist
      });
    }
  }, [dispatch]); // Remove `token` from the dependency array

  useEffect(() => {
    console.log("[token]", token); // Log the token value after it's updated in the Redux store
  }, [token]); // Add `token` to this useEffect's dependency array

  return <div className="app">{token ? <Player spotify={spotify} /> : <Login />}</div>;
}

// {token ? <Player spotify={spotify} /> : <Login />}
export default App;