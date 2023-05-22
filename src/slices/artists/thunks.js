import { startLoadingArtists, setError, setArtists, setArtist, setPages } from "./artistSlice";


export const getArtists = (authToken, page = 0) => {
    return async (dispatch) => {
        dispatch(startLoadingArtists());

        const headers = {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + authToken,
            },
            method: "GET",
        };
        let url = "https://95.217.20.145/back/api/artists/";

        const data = await fetch(url, headers);
        const resposta = await data.json();

        if(resposta != null) {
            dispatch(setArtists(resposta));
            console.log(resposta);
        }else {
            console.log("Catch");
        }
    }
}
