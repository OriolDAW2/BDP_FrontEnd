import { startLoadingEvents, setError, setEvents, setEvent, setPages, setPage } from "./eventSlice";


export const getEvents = (authToken, page = 0) => {
    return async (dispatch) => {
        dispatch(startLoadingEvents());

        const headers = {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + authToken,
            },
            method: "GET",
        };
        let url = "https://95.217.20.145/back/api/events/";

        const data = await fetch(url, headers);
        const resposta = await data.json();

        if(resposta != null) {
            dispatch(setEvents(resposta));
            console.log(resposta);
        }else {
            console.log("Catch");
        }
    }
}

export const getEvent = (id, authToken) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingEvents());

        const headers = {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authToken,
            },
            method: "GET",
        };
        const url = "http://95.217.20.145/back/api/events/" + id

        const data = await fetch(url, headers);
        const resposta = await data.json();

        if(resposta != null) {
            dispatch(setEvent(resposta));
            console.log(resposta);
        }else {
            console.log("Catch");
        }
    };
}
