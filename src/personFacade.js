const SERVER_URL = "https://jssimsen.com/tomcat/ca2/api/persons/"
function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}

function makeOptions(method, body) {
    var opts = {
        method: method,
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        }
    }
    if (body) {
        opts.body = JSON.stringify(body);
    }
    return opts;
}

function mapPerson(persons){
   return persons.map(person => `
    <tr>
        <td>${person.id}</td>
        <td>${person.firstName}</td>
        <td>${person.lastName}</td>
        <td>${person.email}</td>
        <td>${person.street}</td>
        <td>${person.zipCode}</td>
        <td>${person.city}</td>
        <td>${person.hobbies.map(hobby => hobby.name).join(",<br>")}</td>
        <td>${person.phones.map(phone => phone.number).join(",<br>")}</td>
    </tr>
    `)
}

function getAllPersons() {
    return fetch(SERVER_URL + "all")
        .then(handleHttpErrors)
}

function getById(phone) {
    return fetch(SERVER_URL + phone)
        .then(handleHttpErrors)
}

function getByHobby(hobby) {
    return fetch(SERVER_URL + "hobbies/" + hobby)
        .then(handleHttpErrors)
}

function getByCity(city) {
    return fetch(SERVER_URL + "cities/" + city)
        .then(handleHttpErrors)
}

function addPerson(person) {
    const options = makeOptions("POST", person)
    return fetch(SERVER_URL, options)
        .then(handleHttpErrors)
}

function editPerson(person, id) {
    const options = makeOptions("PUT", person)
    return fetch(SERVER_URL + id , options)
}

function deletePerson(id){
    const options = makeOptions("DELETE")
    return fetch(SERVER_URL+id, options)
    .then(handleHttpErrors)

}

const personFacade = {
    getAllPersons,
    getById,
    mapPerson,
    addPerson,
    editPerson,
    deletePerson,
    getByHobby,
    getByCity
}

export default personFacade;

