import { startLoadingSong, setError, setSongs, setSong, setPages } from "./songSlice";


export const getSongs = (authToken, page = 0) => {
    return async (dispatch) => {
        dispatch(startLoadingSong());

        const headers = {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + authToken,
            },
            method: "GET",
        };
        let url = "http://95.217.20.145/api/songs/";

        const data = await fetch(url, headers);
        const resposta = await data.json();

        if(resposta != null) {
            dispatch(setSongs(resposta));
            console.log(resposta);
        }else {
            console.log("Catch");
        }
    }
}
