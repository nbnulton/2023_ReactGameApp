import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: "root",
    initialState: {
        game_id: "Game ID",
        title: 'Title',
        thumbnail: "Thumbnail",
        short_description: "Short Description",
        game_url: "Game URL",
        genre: 'Genre',
        platform: "Platform",
        publisher: "Publisher",
        developer: 'Developer',
        release_date: "Release Date",
        freetogame_profile_url: "FreeToGame Profile URL",
    },
    reducers: {
        // action is submitted elsewhere - written to state.name
        chooseGameID: (state, action) => { state.game_id = action.payload }, // All we're doing is setting the input to the state.name
        chooseTitle: (state, action) => { state.title = action.payload },
        chooseThumbnail: (state, action) => { state.thumbnail = action.payload },
        chooseShortDescription: (state, action) => { state.short_description = action.payload },
        chooseGameURL: (state, action) => { state.game_url = action.payload },
        chooseGenre: (state, action) => { state.genre = action.payload },
        choosePlatform: (state, action) => { state.platform = action.payload },
        choosePublisher: (state, action) => { state.publisher = action.payload },
        chooseDeveloper: (state, action) => { state.developer = action.payload },
        chooseReleaseDate: (state, action) => { state.release_date = action.payload },
        chooseFreeToGameProfileURL: (state, action) => { state.freetogame_profile_url = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const { chooseGameID, chooseTitle, chooseThumbnail, chooseShortDescription, chooseGameURL, chooseGenre, 
    choosePlatform, choosePublisher, chooseDeveloper, chooseReleaseDate, chooseFreeToGameProfileURL} = rootSlice.actions