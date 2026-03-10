import axios from "axios";


const api = axios.create({
    baseURL: "http://localhost:8000/api",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    }
})
const register = async (name, surname, email,city = null,password, role) => {
    try {
        const response = await api.post("/auth/register", {     //post request na nash endpoint v funkciju peredaetsa dva argumeta iz inputa
            Vards: name,
            Uzvards: surname,
            Epasts: email,
            AtrasanasVieta: city,
            Parole: password,
            role: role,
        });
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}
const login = async (email, password) => {
    try {
        const response = await api.post("/auth/login", {     //post request na nash endpoint v funkciju peredaetsa dva argumeta iz inputa
            Epasts: email,
            Parole: password,
        });
        console.log(response.data);
        const token = response.data.token; //sohranajem token v peremenuju
        localStorage.setItem("token", token); // peremenuju v local storage
    } catch (error) {
        console.error(error);
    }
}

export { login, register };
