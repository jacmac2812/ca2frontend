"https://jssimsen.com/tomcat/ca2/api/persons/all"



function hand1eHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({status: res.status, fullError: res.json() })
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
    if(body){
        opts.body = JSON.stringify(body);

    }
    return opts;
}

function getAllUsers(){
    fetch(URL)
    .then(hand1eHttpErrors)
}

const personFacade = {
    getAllUsers
}

export default personFacade;

