let status = window.localStorage.getItem("status");
if (status == "false") {
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

<div class="col-sm-12 col-lg-3 col-md-3 float-left my-5">
      <a href="showLab.html" class="text-decoration-none" ><button type="button" onclick = "showlab.html" class="btn btn-warning p-2">
      <i class="fa fa-backward px-2" aria-hidden="true"></i>  
        Go back</button></a>
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
        title.setAttribute(
          "class",
          " text-center text-primary border-bottom border-danger"
        );
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
} else {
  alert("Please Login");
  window.location = "showLab.html";
}
let name = window.localStorage.getItem("name");
document.getElementById("body").innerHTML = `
<!-- header -->
    <header id="loginandsignup">
      <nav class="navbar navbar-expand-lg navbar-light nav-bar">
        <a
          class="navbar-brand header-brand"
          href="index.html"
          style="color: #f83839;"
          >TrackMyHealth</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <span class="border"></span>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item ">
              <a
                class="nav-link anchor-links text-decoration-none header-cases text-dark"
                href="showLab.html"
                >VIEW LABS <span class="sr-only">(current)</span></a
              >
            </li>
            <li class="nav-item ">
              <a
                class="nav-link anchor-links text-decoration-none header-cases text-dark"
                href="about.html"
                >ABOUT US</a
              >
            </li>
            <li class="nav-item ">
              <a
                class="nav-link anchor-links text-decoration-none header-cases text-dark"
                href="contact.html"
                >CONTACT</a
              >
            </li>
          </ul>

          <form
            class="form-inline my-2 my-lg-0 login-reg justify-content-center"
          >
            <a
              href=""
              id=""
              class="nav-link header-cases text-dark"
              data-toggle="modal"
              data-target="#sign-out"
              >LOGIN / SIGNUP</a
            >
          </form>

          <!-- modal -->
          <div class="modal fade" id="sign-out">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <!-- <h4 class="modal-title">Login</h4> -->
                  <div class="text-center">
                    <a
                      href=""
                      class="nav-link"
                      data-toggle="modal"
                      data-target="#register"
                    >
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Register
                      </button>
                    </a>
                  </div>

                  <button type="button" class="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>

                <div class="modal-body">
                  <!-- <h4 class="modal-title">Login</h4> -->
                  <!-- Press logout to leave -->
                  <div class="container-fluid">
                    <h3 class="login-key">
                      <i class="fa fa-user mb-4" aria-hidden="true"></i> LOGIN
                    </h3>
                    <div class="login-inputs">
                      <label class="mb-2" for="emailid">Email Id</label>
                      <input
                        id="uname"
                        type="email"
                        required
                        class="input-group-text mb-4"
                        id="inputGroup-sizing-lg"
                      />
                      <label class="mb-2" for="password">Password</label>
                      <input
                        id="upass"
                        type="password"
                        class="input-group-text"
                        id="inputGroup-sizing-lg"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-success"
                    data-dismiss="modal"
                    onclick="return makeCors()"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="modal fade" id="register">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title">Register Here...</h4>
                  <button type="button" class="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
                <div class="modal-body">
                  <label for="username">Username</label>
                  <input
                    id="username"
                    class="form-control"
                    type="text"
                    placeholder="rockyjson"
                    required
                  /><br />
                  <label for="email">Email Id</label>
                  <input
                    id="emailId"
                    class="form-control"
                    type="email"
                    placeholder="rockyjson@example.com"
                    required
                  /><br />
                  <label for="phone-number">Phone Number</label>
                  <input
                    id="phoneNumber"
                    class="form-control"
                    type="number"
                    placeholder="8723969491"
                    required
                  /><br />
                  <label for="password">Password</label>
                  <input
                    id="password1"
                    class="form-control"
                    type="password"
                    placeholder="0000000"
                    required
                  /><br />
                  <label for="re-type-password">Retype Password</label>
                  <input
                    id="password2"
                    class="form-control"
                    type="password"
                    placeholder="0000000"
                    required
                  /><br />
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-info"
                    data-dismiss="modal"
                    onclick="savingTheUserDetailsToDataBase()"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- end of modal -->
        </div>
      </nav>
    </header>
    <!-- end of header -->
    `;
