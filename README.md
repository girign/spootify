# Spootify

Spoof of Spotify with Browse Genres, Featured Playlists and Releases this Week pages. Assignment for Sentisum built using React with Grommet.

## Building and Running

Spootify follows the standard flow of apps created using CRA for building and running.

1. Install node modules using `npm install`.
2. Start in dev mode using `npm start`.
3. For building, use `npm run build`. The dist files would have to be served using a server like `serve`.

## Think about

The following decisions were made while creating this app. Besides DRY, convention etc, other factors like scale of the app and time available also played a part.

1. The data was categorised page wise. Hence, I thought of using slices convention in the redux store.
2. Each page/section could be associated with its data slice. So the standard "page" folder naming convention wouldn't be so appropriate. Therefore, I decided to follow the redux template convention of naming the folder "features" with each "feature" having its own page components and redux slices.
3. Any data that had to be persisted across navigation and/or be made accessible across the pages were put in the redux store. Page specific data was relegated to the state of the page component.
4. In case of Browse Genres, I have assumed that the search term need not persist across switching of pages. Hence, I haven't used the redux store for persisting the filtered list.
