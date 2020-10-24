import "./style.css"
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import personFacade from "./personFacade"

/* 
  Add your JavaScript for all exercises Below or in separate js-files, which you must the import above
*/
document.getElementById("error").style.display = "none"
/* JS For Exercise-1 below */


/* JS For Exercise-2 below */



/* JS For Exercise-3 below */
/*Her starter den function der laver en liste af alle personer*/
document.getElementById("getAllBTN").addEventListener("click", makeListOfAllUsers);
function makeListOfAllUsers() {
  personFacade.getAllPersons()
    .then(data => {
      document.getElementById("error").style.display = "none"  /* søger for at fjerne error div'en når functionen bliver kaldt efter en fejl */
      const persons = data.all;
      const tableRows = personFacade.mapPerson(persons);
      const tableRowsAsString = tableRows.join("");
      document.getElementById("allUserRows").innerHTML = tableRowsAsString;
    })
    .catch(err => {
      if (err.status) {
        document.getElementById("error").style.display = "block"
        err.fullError.then(e => {
          document.getElementById("error").innerHTML = e.detail
          console.log(e.detail)
        })
      }
      else { console.log("Network error"); }
    });
}
/*Her slutter den function der laver en liste af alle personer*/

/*Her starter find person by phone number */
document.getElementById("findByBTN").addEventListener("click", findByID);
function findByID() {
  let phone = document.getElementById("findByPhone").value;
  personFacade.getById(phone)
    .then(data => {
      document.getElementById("error").style.display = "none" /* søger for at fjerne error div'en når functionen bliver kaldt efter en fejl */
      const persons = [];
      persons.push(data);
      const tableRow = personFacade.mapPerson(persons);
      const tableRowAsString = tableRow.join("");
      document.getElementById("allUserRows").innerHTML = tableRowAsString;
    })
    .catch(err => {
      if (err.status) {
        document.getElementById("error").style.display = "block"
        err.fullError.then(e => {
          document.getElementById("error").innerHTML = e.detail
          console.log(e.detail)
        })
      }
      else { console.log("Network error"); }
    });
}
/*Her slutter find person by phone number*/


let addPersonBtn = document.getElementById("addPersonBtn");
addPersonBtn.addEventListener('click', (event) => {
  event.preventDefault()

  let saveBtn = document.getElementById("saveBtn");
  saveBtn.addEventListener('click', (event) => {
    event.preventDefault()


    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let street = document.getElementById("street").value;
    let zipCode = document.getElementById("zipCode").value;
    let number = document.getElementById("number").value;
    let phoneDesc = document.getElementById("phoneDesc").value;

    let name = document.getElementById("name").value;
    let hobbyDesc = document.getElementById("hobbyDesc").value;
    let city = document.getElementById("city").value;

    const hobbyObject = {
      name,
      description : hobbyDesc
    }

    const phoneObject = {
      number,
      description : phoneDesc
    }

    const hobbies = [
      hobbyObject
    ]

    const phones = [
      phoneObject
    ]



    const newPerson = {
      firstName,
      lastName,
      email,
      street,
      zipCode,
      city,
      phones,
      hobbies
    }


    console.log(newPerson)
    document.getElementById("error").innerHTML = "";

    personFacade.addPerson(newPerson)
      .then(makeListOfAllUsers())
      .catch(err => {
        if (err.status) {
          err.fullError.then(e => document.getElementById("error").innerHTML = e.message)
        } else { console.log("Network error"); }
      });
  });
});


let addPhoneCount = 0
let editPhoneCount = 0


/* 
Do NOT focus on the code below, UNLESS you want to use this code for something different than
the Period2-week2-day3 Exercises
*/

function hideAllShowOne(idToShow) {
  document.getElementById("about_html").style = "display:none"
  document.getElementById("ex1_html").style = "display:none"
  document.getElementById("ex2_html").style = "display:none"
  document.getElementById("ex3_html").style = "display:none"
  document.getElementById(idToShow).style = "display:block"
}

function menuItemClicked(evt) {
  const id = evt.target.id;
  switch (id) {
    case "ex1": hideAllShowOne("ex1_html"); break
    case "ex2": hideAllShowOne("ex2_html"); break
    case "ex3": hideAllShowOne("ex3_html"); break
    default: hideAllShowOne("about_html"); break
  }
  evt.preventDefault();
}
document.getElementById("menu").onclick = menuItemClicked;
hideAllShowOne("about_html");