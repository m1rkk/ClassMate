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

const me = async () => {
    try {
        const response = await api.get("/auth/me",{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

const getStudentLessons = async (studentId) => {
    try {
        const response = await api.get(`appointment/${studentId}/byStudent`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}
const getStudentByPerson = async (personId) => {
    try {
        const response = await api.get(`/getStudent/${personId}`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}
const deleteLesson = async (lessonId) =>{
    try {
        const response = await api.delete(`appointment/${lessonId}/delete`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        console.log(response.data);
        return response.data;
    }catch (error) {
        console.error(error);
        throw error;
    }
}

const getLessonsInMonth = async () => {
    try {
        const response = await api.get(`/appointments/month`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        console.log(response.data);
        return response.data;
    }catch (error) {}
}

const getLessonsInWeek = async () => {
    try {
        const response = await api.get(`/appointments/week`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        console.log(response.data);
        return response.data;
    }catch (error) {}
}

const getLessonsInThreeDays = async () => {
    try {
        const response = await api.get(`/appointments/inThreeDays`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        console.log(response.data);
        return response.data;
    }catch (error) {}
}

const getLessonsInDay = async () => {
    try {
        const response = await api.get(`/appointments/day`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        console.log(response.data);
        return response.data;
    }catch (error) {}
}





export { login, register, me, getStudentLessons, getStudentByPerson, deleteLesson, getLessonsInMonth, getLessonsInWeek, getLessonsInThreeDays, getLessonsInDay };

