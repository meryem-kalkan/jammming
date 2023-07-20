# JAMMMING

Jammming is a React web application that enables users to create and add playlists to their Spotify account. It does this by utilizing the Spotify API to connect and authenticate to a user's account, and to search for Tracks, Artists or Albums. The results are then presented in a list where individual tracks can easily be added to or removed from a new playlist. Once the playlist has been assembled, it can be given a name and then saved to the user's Spotify account with the click of a button.

## Technologies used

- React with function components
- useState() React hook
- Fetch API with GET and POST requests
- Spotify API
- Dealing with Restful API and Json data
- Hiding API token in an environmental variable
- Deployment with Netlify

## Features

- Spotify Login — the first time a user searches for a song, album, or artist, Spotify will ask them to log in or set up a new account.
- Search by Song, Album, or Artist — a user can type the name of a song, artist, or album into the search bar and click the SEARCH button. The app will request song data about the user's input from the Spotify library.
- Populate Results List — Jammming displays the list of returned tracks from the user's query.
- Add Song to a Custom Playlist — users can add a track to their playlist by selecting a `+` sign on the right side of the track's display container.
- Remove Song from Custom Playlist — users can remove a track from their playlist by selecting a `-` sign on the right side of the track's display container.
- Change Playlist Title — users can change the title of their custom playlist.
- Save Playlist to Account — users can save their custom playlist by clicking a button called SAVE TO SPOTIFY.

## Using the App

This app can be viewed and used at:

- https://jammming-app-000.netlify.app