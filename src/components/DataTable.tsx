import { useState } from 'react'
import Button from './Button'
import Modal from './Modal'
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 30, hideable: true },
    { field: 'game_id', headerName: "Game ID", flex: 1 },
    { field: 'title', headerName: "Title", flex: 1 },
    // { field: 'thumbnail', headerName: "Thumbnail", flex: 1 },
    { field: 'short_description', headerName: "Short Description", flex: 2 },
    { field: 'game_url', headerName: "Game URL", flex: 1 },
    { field: 'genre', headerName: "Genre", flex: 1 },
    { field: 'platform', headerName: "Platform", flex: 1 },
    { field: 'publisher', headerName: "Publisher", flex: 1 },
    { field: 'developer', headerName: "Developer", flex: 1 },
    { field: 'release_date', headerName: "Release Date", flex: 1 },
    { field: 'freetogame_profile_url', headerName: "FreeToGame URL", flex: 2 },
]



function DataTable() {
    const [ open, setOpen ] = useState(false);
    const { gameData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] =useState<string[]>([])


    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => { window.location.reload() }, 500)
    }



    return (
        <>
            <Modal 
                id={selectionModel}
                open={open}
                onClose={handleClose}
            />
            <div className="flex flex-row justify-center text-center">
                <div>
                    <button
                        className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white text-3xl"
                        onClick={() => handleOpen()}
                    >
                        Add New Game
                    </button>
                </div>
                <Button onClick={handleOpen} className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white text-3xl">Update Game</Button>
                <Button onClick={deleteData} className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white text-3xl">Delete Game</Button>
            </div>
            <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col bg-slate-300 bg-opacity-80 rounded"}
                style={{ height: 1200, width: '100%' }}
                >
                    <h2 className="p-3 bg-slate-300 my-2 rounded text-3xl justify-center text-center">My Games</h2>
                    <DataGrid rows={gameData} columns={columns} 
                    // rowsPerPageOptions={[5]}
                    checkboxSelection={true} 
                    // onSelectionModelChange={ (item:any) => {
                    onRowSelectionModelChange={ (item:any) => {
                        setSelectionModel(item)
                    }}
                    />
            </div>
        </>
    )
}

export default DataTable

