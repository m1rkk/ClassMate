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
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
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

const bookLesson = async (price = "20", date, time, theme, teacherId, studentId) =>{
    try{
        const response = await api.post("/appointment/book",{
            Maksa: price,
            Datums: date,
            Laiks: time,
            Tema: theme,
            SkolotajaId: teacherId,
            StudentuId: studentId,
        },{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
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

const getStudentLessonsWithFilter = async (studentId, filter) => {
    try {
        const response = await api.get(`/appointments/${filter}/${studentId}/byStudent`,{
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



const getStudentLessonsCountToday = async () => {
    try {
        const studentId = localStorage.getItem("studentId");
        const todayLessons = await getStudentLessonsWithFilter(studentId,"day");
        return todayLessons.length;
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}
const getStudentLessonsCountThisWeek = async () => {
    try {
        const studentId = localStorage.getItem("studentId");
        const thisWekLessons = await getStudentLessonsWithFilter(studentId,"week");
        return thisWekLessons.length;
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}

const getTeachersLessons = async (teacherId) => {
    try {
        const response = await api.get(`/appointments/${teacherId}/byTeacher`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}
const getTeacherLessonsWithFilter = async (teacherId, filter) => {
    try {
        const response = await api.get(`/appointments/${filter}/${teacherId}/byTeacher`,{
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

const getTeacherLessonsCountToday = async () => {
    try {
        const teacherId = localStorage.getItem("teacherId")
        const todayLessons = await getTeacherLessonsWithFilter(teacherId,"day");
        return todayLessons.length;
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}
const getTeacherLessonsCountThisWeek = async () => {
    try {
        const teacherId = localStorage.getItem("teacherId");
        const thisWekLessons = await getTeacherLessonsWithFilter(teacherId,"week");
        return thisWekLessons.length;
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}

const getRoleByPerson = async (personId) =>{
    try {
        const response = await api.get(`/getRole/${personId}`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        console.log(response.data);
        return response.data;
    }catch (error) {
        console.error(error);
    }
}

const deletePerson = async (personId) => {
    try {
        const response = await api.delete(`/deletePerson/${personId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
const getTeacherByPerson = async (personId) => {
    try {
        const response = await api.get(`/teacherByPerson/${personId}`,{
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
const getAllTeachers = async () => {
    try {
        const response = await api.get(`/allTeachers`,{
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
const searchForTeacher = async (searchTerm) => {
    try {
        const response = await api.get(`/teacherSearch/${encodeURIComponent(searchTerm)}`,{
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
const getTeachersStudents = async () =>{
    try {
        const teacherId = localStorage.getItem("teacherId");
        const response = await api.get(`/allStudentsOfTeacher/${teacherId}`,{
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
const studentSearch = async (searchTerm) =>{
    try {
        const teacherId = localStorage.getItem("teacherId");
        const response = await api.get(`/studentSearchByTeacher/${teacherId}/${encodeURIComponent(searchTerm)}`,{
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
const getNotes = async (studentId, teacherId) => {
    try {
        const response = await api.get(`/note/${studentId}/${teacherId}/getNote`,{
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
const postNote = async (text, date, teacherId, studentId) => {
    try {
        const response = await api.post(`/note/create`,{
            Teksts: text,
            Datums: date,
            SkolotajaId: teacherId,
            StudentuId: studentId,
        },{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        console.log(response.data);
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}
const updateLesson = async (noteId, theme, date, time) => {
    try {
        const response = await api.put(`appointment/${noteId}/update`,{
            Tema: theme,
            Datums: date,
            Laiks: time,
        },{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        return response.data;
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}

export { login, register, me,
    getStudentLessons, getStudentByPerson, deleteLesson,
    getStudentLessonsCountToday,getStudentLessonsCountThisWeek,getStudentLessonsWithFilter
    ,getRoleByPerson, deletePerson, getTeacherByPerson, getAllTeachers, searchForTeacher,
    getTeachersStudents, studentSearch,getTeachersLessons,getTeacherLessonsWithFilter,getTeacherLessonsCountToday,getTeacherLessonsCountThisWeek, bookLesson,
    getNotes, postNote, updateLesson};

