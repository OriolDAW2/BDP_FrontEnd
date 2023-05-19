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

    const doLogin = (formState) => {
        console.log("Comprobando credenciales....")
        
        // Comprobamos si hay un token guardado en local storage
        let token = localStorage.getItem("authToken") || ""
        
        if (token) {
          // Si ya hay un token guardado, lo seteamos y terminamos la función
          setAuthToken(token);
          return;
        }
        
        // Si no hay un token guardado, enviamos las credenciales al servidor
        fetch("http://95.217.20.145/api/token/", {
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(formState)
        })
        .then(data => data.json())
        .then(res => {
          if (res.access) {
            // Si el servidor devuelve un token, lo guardamos en local storage
            localStorage.setItem("authToken", res.access);
            setAuthToken(res.access);
            console.log(res.access);
          } else {
            setAuthToken("");
            alert("Usuario o contraseña incorrecta");
          }
        })
        .catch(err => {
          console.log("Error de red:", err);
        });
      };
      
      
      

    // useEffect(() => {
    //     checkAuthToken();
    // })
    return {doLogin};
}