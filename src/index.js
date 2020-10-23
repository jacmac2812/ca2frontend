import "./style.css"
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import "./jokeFacade"
import personFacade from "./personFacade"
import jokeFacade from "./jokeFacade"


 
document.getElementById("all-content").style.display = "block"

/*

const URL ="https://jssimsen.com/tomcat/ca2/api/persons/all"


personFacade.getAllUsers()
.then(data=> {
  const persons = data.all;
  const tableRows = persons.map(person => `
   <tr>
    <td>${person.id}</td>
    <td>${person.firstName}</td>
    <td>${person.lastName}</td>
    <td>${person.phone}</td>
    <td>${person.street}</td>
    <td>${person.zip}</td>
    <td>${person.city}</td>
    </tr>
    `) 
  const tableRowsAsStr = tablerows.join("");
  document.getElementById("tbody").innerHTML = tableRowsAsStr

})
.catch(err => {
  if (err.status) {
    err.fullError.then(e =>  {
      console.log(e.message)
      document.getElementById("error").innerHTML = e.message;

    })
  }
  else { console.log("Network error"); }
});

*/



/* 
  Add your JavaScript for all exercises Below or in separate js-files, which you must the import above
*/

/* JS For Exercise-1 below */


/* JS For Exercise-2 below */



/* JS For Exercise-3 below */


/* 
Do NOT focus on the code below, UNLESS you want to use this code for something different than
the Period2-week2-day3 Exercises
*/

function hideAllShowOne(idToShow) {
  document.getElementById("home_html").style = "display:none"
  document.getElementById("api_html").style = "display:none"
  document.getElementById("links_html").style = "display:none"
  document.getElementById(idToShow).style = "display:block"
}

function menuItemClicked(evt) {
  const id = evt.target.id;
  switch (id) {
    case "home": hideAllShowOne("home_html"); break
    case "api": hideAllShowOne("api_html"); break
    case "links": hideAllShowOne("links_html"); break
    default: hideAllShowOne("home_html"); break
  }
  evt.preventDefault();
}
document.getElementById("menu").onclick = menuItemClicked;
hideAllShowOne("home_html");



