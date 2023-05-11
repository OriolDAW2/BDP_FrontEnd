import { useEffect, useContext } from "react";
import { UserContext } from "../usercontext";

export const useLogin = () => {

    let { authToken, setAuthToken } = useContext(UserContext);

    // const checkAuthToken = () => {

    //     let token = localStorage.getItem("authToken") || ""
    //     if (token == ""){
    //         setAuthToken("");
    //     }else{
    //         fetch("http://localhost:8000/api/token/",{
        
    //      headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //         "Authorization": "Bearer " + token,  
    //     },
    //     method: "GET",
    //         }).then( data => data.json() )
    //         .then((resposta) => {
    //             if (resposta.success === true) {
    //                 setAuthToken(token);
    //                 console.log("Token Correcte: " + token);
    //                 setUsuari(resposta.user.email);
    //                 setIdUsuari(resposta.user.id);
    //             }else{
    //                 setAuthToken("");
    //             }
    //         });
    //     }
    // };

    const doLogin = (formState) =>  {
    
        console.log("Comprovant credencials....")
        // Enviam dades a l'aPI i recollim resultat
        fetch ("http://localhost:8000/api/token/",{
            
             headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: "POST",
            body: JSON.stringify(formState)
        }
        ).then( data => data.json() )
        .then (resposta => { 
                if (resposta.access != null )
                {
                    setAuthToken(resposta.access);
                    console.log(resposta.access);
                }
                else
                { 
                    setAuthToken("");
                    alert("Usuario o Contraseña Incorrecta");
                }
            } ) 
        .catch((data) => {
            console.log("Network error")
        });
    }

    // useEffect(() => {
    //     checkAuthToken();
    // })
    return {doLogin};
}