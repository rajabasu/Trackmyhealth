// const typesOfTests = [{
//         name: "SGPT",
//         knownAs: "Aminotransferase, ALT",
//         testInformation: "No special preparation required.",
//         photo: "sgpt.jpg"
//     },

//     {
//         name: "LIVER FUNCTION TEST",
//         knownAs: " Hepatic Function Panel, LFT",
//         testInformation: "No special preparation required.",
//         photo: "liverFunctionTest.jpg"
//     },

//     {
//         name: "HbA1c",
//         knownAs: "Hemoglobin A1c, A1c",
//         testInformation: "No special preparation required.",
//         photo: "hba1c.jpg"
//     },

//     {
//         name: "LIPID PROFILE",
//         knownAs: "Lipid Panel, FLP",
//         testInformation: " Minimum 12 hours fasting is mandatory.",
//         photo: "lipidProfile.jpg"
//     },

//     {
//         name: "TSH",
//         knownAs: "Thyroid Stimulating Hormone",
//         testInformation: "Sample to be given at the same time.",
//         photo: "tsh.jpg"
//     },

//     {
//         name: "THYROID FUNCTION TEST",
//         knownAs: "Thyroid Panel, Thyroid Function Test",
//         testInformation: " No special preparation required.",
//         photo: "lipidProfile.jpg"
//     },
// ];

let name = window.localStorage.getItem("name");

const app = document.getElementById("app");
const appNew = document.getElementById("appNew");
let labId = window.localStorage.getItem("labId");

let xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://www.trackmyhealth.in:8443/api/getalltestsbylab/" + labId,
  true
);
xhr.onload = function() {
  var data = JSON.parse(this.response);
  if (data.length == 0) {
    appNew.innerHTML = `

<div class="row">

<div class="col-sm-12 col-lg-3 col-md-3 float-left my-5"><button type="button" class="btn btn-warning p-2">
<i class="fa fa-backward px-2" aria-hidden="true"></i>  
  Go back</button>
</div>

<div class="col-sm-12 col-md-9 col-lg-9">
  <p><h3 class="text-center text-danger">Sorry No Test Is Available For This Lab<span class="text-warning">	&#128542;</span></h3>
        <h6 class="text-center">Click Back button to goback to the labs page and check other labs for the test. </h6> 
  </p>
</div>

</div>
    
    `;
  }
  if (xhr.status >= 200 && xhr.status < 400) {
    data.forEach(details => {
      const card1 = document.createElement("div");
      card1.setAttribute(
        "class",
        " col-md-4 m-2  shadow-lg p-3 bg-white rounded "
      );
      // card.setAttribute("style", "width:25rem");

      const cardBody = document.createElement("div");
      cardBody.setAttribute("class", "card-body");

      const anchor = document.createElement("a");
      anchor.setAttribute("href", "labDetails.html");
      anchor.setAttribute("class", "text-decoration-none");
      const title = document.createElement("h5");
      title.setAttribute("class", " text-center border-bottom border-danger");
      title.textContent = details.test_name;

      const desDiv = document.createElement("div");
      desDiv.setAttribute("class", "text-justify");
      const description = document.createElement("span");
      description.innerHTML = `<span class="font-weight-bold">Description : </span>${
        details.description
      }
      <p><span class="font-weight-bold">Cost : </span>&#x20B9 <del>${
        details.cost
      }</del></p>
      <p><span class="font-weight-bold">Discount : </span>${
        details.discount
      }</p>
      <p><span class="font-weight-bold">Final Cost : </span>${details.cost -
        details.discount}</p>
        <div class="text-right"><button type="button" class="btn btn-primary text-center ">Add to cart</button></div>
      `;

      //   const costDiv = document.createElement("div");
      //   costDiv.setAttribute("class", "text-justify");
      //   const cost = document.createElement("span");
      //   cost.innerHTML = `<span class="font-weight-bold">Cost : &#x20B9</span>${details.cost}`;

      app.appendChild(card1);
      card1.appendChild(cardBody);
      card1.appendChild(title);

      card1.appendChild(desDiv);
      desDiv.appendChild(description);
    });
  }
};

xhr.send();

// document.getElementById("app").innerHTML = `
//     ${typesOfTests
//       .map(function(tests) {
//         return `

//         <div class="card mb-4 mt-4 shadow-lg p-3 mb-5 bg-white rounded" style="width: 25rem;">
//         <div class="card-body ">
//            <div class="">
//                <a href="#" class="text-decoration-none"> <h5 class="card-title text-center border-bottom border-danger">${tests.name}</h5></a>
//                 <p class="card-text font-weight-bold">Also known as ${tests.knownAs}</p>
//                 <p>Test Information: <span class="font-weight-bold">${tests.testInformation}</span></p>
//                 <div class="text-center"><button type="button" class="btn btn-secondary">Add to Cart</button></div>

//            </div>
//         </div>
//     </div>

//                    <!-- <p class="title"> </p>

//                 -->
//         `;
//       })
//       .join("")}
//  `;

//----------------nav bar-----------------------------------------

// document.getElementById("body").innerHTML = `
// <header>
// <a href="index.html" class="header-brand">Careathome</a>
// <nav>
//   <ul>
//     <!-- <li><a href="showLab.html">View Labs</a></li>--!>
//     <li><a href="#">About </a></li>
//     <li><a href="#">Contact</a></li>
//   </ul>

//  <div>
//  <a href="userRegiter.html" class="header-cases" ><i class="fa fa-user-plus mr-2" aria-hidden="true"></i>Regiter</a></div>

// </nav>
// </header>
// `;

// document.getElementById("body").innerHTML = `
// <header>
//   <a href="index.html" class="header-brand">Careathome</a>
//   <nav>
//     <ul>
//       <li><a href="showLab.html">View Labs</a></li>
//       <li><a href="#">About me</a></li>
//       <li><a href="#">Contact</a></li>
//     </ul>

//     <div>

//     <div class="dropdown float-right">
//       <div class="dropbtn">
//         <div class="user-name ">
//           <h3 >Hi, ${name} <div class="dropdown dropbottom">
//           <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

//           </button>
//           <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
//             <a class="dropdown-item" href="#" data-toggle="modal" data-target="#profile-update">Edit Profile</a>
//             <button type="button" class="btn btn-primary d-block text-center" onclick="logout()">Logout</button>
//           </div>
//         </div>

//         <!-- Modal -->
//         <div class="modal fade" id="profile-update" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//           <div class="modal-dialog" role="document">
//             <div class="modal-content">
//               <div class="modal-header">
//                 <h5 class="modal-title" id="exampleModalLabel">Edit Your Profile</h5>
//                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                   <span aria-hidden="true">&times;</span>
//                 </button>
//               </div>

//               <div class="modal-body">

//               <div class="input-group mb-3">
//                   <div class="input-group-prepend">
//                       <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
//                   </div>
//                   <input type="text" id="user-name" class="form-control" aria-label="Sizing example input"
//                       aria-describedby="inputGroup-sizing-default">
//               </div>

//               <div class="input-group mb-3">
//                     <div class="input-group-prepend">
//                         <span class="input-group-text" id="inputGroup-sizing-default">Phone No.</span>
//                     </div>
//                     <input type="number" id="user-phone" class="form-control" aria-label="Sizing example input"
//                         aria-describedby="inputGroup-sizing-default">
//                 </div>

//                 <div class="input-group mb-3">
//                 <div class="input-group-prepend">
//                     <span class="input-group-text" id="inputGroup-sizing-default">DOB</span>
//                 </div>
//                 <input type="date" id="user-dob" class="form-control" aria-label="Sizing example input"
//                     aria-describedby="inputGroup-sizing-default">
//             </div>

//             <div class="input-group mb-3">
//                     <div class="input-group-prepend">
//                         <span class="input-group-text" id="inputGroup-sizing-default">Address</span>
//                     </div>
//                     <input type="address" id="user-address" class="form-control" aria-label="Sizing example input"
//                         aria-describedby="inputGroup-sizing-default">
//                 </div>

//                 <div class="input-group mb-3">
//                 <div class="input-group-prepend">
//                     <span class="input-group-text" id="inputGroup-sizing-default">Create For</span>
//                 </div>
//                 <input type="text" id="create-for" class="form-control" placeholder="Father/Mother/Self.."
//                     aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
//             </div>

//             <div class="input-group mb-3">
//             <div class="input-group-prepend">
//                 <span class="input-group-text" id="inputGroup-sizing-default">City</span>
//             </div>
//             <input type="text" id="user-city" class="form-control" aria-label="Sizing example input"
//                 aria-describedby="inputGroup-sizing-default">
//         </div>

//         <div class="input-group mb-3">
//                     <div class="input-group-prepend">
//                         <span class="input-group-text" id="inputGroup-sizing-default">State</span>
//                     </div>
//                     <input type="text" id="user-state" class="form-control" aria-label="Sizing example input"
//                         aria-describedby="inputGroup-sizing-default">
//                 </div>
//                 <div class="input-group mb-3">
//                     <div class="input-group-prepend">
//                         <span class="input-group-text" id="inputGroup-sizing-default">Pin</span>
//                     </div>
//                     <input type="number" id="user-pin" class="form-control" aria-label="Sizing example input"
//                         aria-describedby="inputGroup-sizing-default">
//                 </div>
//                 <div class="input-group mb-3">
//                     <div class="input-group-prepend">
//                         <span class="input-group-text" id="inputGroup-sizing-default">Gender</span>
//                         <select name="gender" id="gender" class="fa-sm text-muted ">
//                             <option value="">Select a Gender</option>
//                             <option value="male">Male</option>
//                             <option value="Female">Female</option>
//                             <option value="others">Others</option>
//                         </select>
//                     </div>
//                 </div>

//             </div>

//             <div class="modal-footer">

//               <button type="button" class="btn btn-primary" data-modal="dismiss" onclick="patchingProfileDetailsToDb()">Submit</button>
//             </div>
//           </div>
//         </div>
//       </div>

//   </nav>
// </header>
// `;
