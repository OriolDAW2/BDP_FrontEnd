import { useEffect, useContext } from "react";
import { UserContext } from "../usercontext";

export const useRegister = () => {

    let { username, setUsername, authToken, setAuthToken, email, setEmail } = useContext(UserContext);

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

    const doRegister = (formState) => {
        console.log("Comprovant credencials....")
        // Enviam dades a l'aPI i recollim resultat
        fetch ("http://95.217.20.145/back/api/users/",{
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          method: "POST",
          body: JSON.stringify(formState)
        }).then(data => data.json())
          .then(resposta => { 
            if (resposta.username != null ) {
              setUsername(resposta.username);
              setEmail(resposta.email);
              alert("Usuario Creat");
            } else { 
              alert("Usuario o Contraseña Incorrecta");
            }
        }).catch((data) => {
          console.log("Network error")
        });
      }
      

    // useEffect(() => {
    //     checkAuthToken();
    // })
    return {doRegister};
}