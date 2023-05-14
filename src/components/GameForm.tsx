import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from '../api/server'
import { useDispatch, useStore } from 'react-redux';
import { chooseGameID, chooseTitle, chooseThumbnail, chooseShortDescription, chooseGameURL, 
  chooseGenre, choosePlatform, choosePublisher, chooseDeveloper, chooseReleaseDate, chooseFreeToGameProfileURL } from "../redux/slices/RootSlice";

// interfaces

interface GameFormProps {
  id?: string[]
}

const GameForm = (props:GameFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.game_id } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 500);
      event.target.reset()
    } else {
      // Use dispatch to update our state in our store
      dispatch(chooseGameID(data.game_id));
      dispatch(chooseTitle(data.title));
      dispatch(chooseThumbnail(data.thumbnail));
      dispatch(chooseShortDescription(data.short_description));
      dispatch(chooseGameURL(data.game_url));
      dispatch(chooseGenre(data.genre));
      dispatch(choosePlatform(data.platform));
      dispatch(choosePublisher(data.publisher));
      dispatch(chooseDeveloper(data.developer));
      dispatch(chooseReleaseDate(data.release_date));
      dispatch(chooseFreeToGameProfileURL(data.freetogame_profile_url));

      server_calls.create(store.getState())
      setTimeout( () => {window.location.reload()}, 500);
    }
    
  }

  return (


      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="game_id">Game ID</label>
            <Input {...register('game_id')} name='game_id' placeholder="Game ID"/>
          </div>
          <div>
            <label htmlFor="title">Title</label>
            <Input {...register('title')} name='title' placeholder="Title"/>
          </div>
          {/* <div>
            <label htmlFor="thumbnail">Thumbnail</label>
            <Input {...register('thumbnail')} name='thumbnail' placeholder="Thumbnail"/>
          </div> */}
          <div>
            <label htmlFor="short_description">Short Description</label>
            <Input {...register('short_description')} name='short_description' placeholder="Short Description"/>
          </div>
          <div>
            <label htmlFor="game_url">Game URL</label>
            <Input {...register('game_url')} name='game_url' placeholder="Game URL"/>
          </div>
          <div>
            <label htmlFor="genre">Genre</label>
            <Input {...register('genre')} name='genre' placeholder="Genre"/>
          </div>
          <div>
            <label htmlFor="platform">Platform</label>
            <Input {...register('platform')} name='platform' placeholder="Platform"/>
          </div>
          <div>
            <label htmlFor="publisher">Publisher</label>
            <Input {...register('publisher')} name='publisher' placeholder="Publisher"/>
          </div>
          <div>
            <label htmlFor="developer">Developer</label>
            <Input {...register('developer')} name='developer' placeholder="Developer"/>
          </div>
          <div>
            <label htmlFor="release_date">Release Date</label>
            <Input {...register('release_date')} name='release_date' placeholder="Release Date"/>
          </div>
          <div>
            <label htmlFor="freetogame_profile_url">FreeToGame Profile URL</label>
            <Input {...register('freetogame_profile_url')} name='freetogame_profile_url' placeholder="FreeToGame Profile URL"/>
          </div>
          <div className="flex p-1">
            <Button
              className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
              >
                Submit
            </Button>
          </div>
        </form>
      </div>
  )
}

export default GameForm