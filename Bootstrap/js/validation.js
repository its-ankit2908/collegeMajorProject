const form = document.getElementById("modal-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

// todo: add event to the button
form.addEventListener("submit", (event) => {
  event.preventDefault();
  Validate();
});

// todo: sendData function
const sendData = (sRate, count,userData) => {
  if (sRate === count) {
      
    console.log(userData);
  }
};

// todo: successStatus function
const successStatus = (userData) => {
  let formCon = document.getElementsByClassName("modal-form-control");

  var count = formCon.length - 1;
  for (let i = 0; i < formCon.length; i++) {
    if (formCon[i].className === "modal-form-control success") {
      var sRate = 0 + i;
      sendData(sRate, count,userData); //* sendData function
    } else {
      return false;
    }
  }
};

// todo: isEmail Function

const isEmail = (emailVal) => {
  var atSymbol = emailVal.indexOf("@");
  if (atSymbol < 1) {
    return false;
  }

  var dot = emailVal.lastIndexOf(".");
  if (dot <= atSymbol + 2) {
    return false;
  }

  if (dot === emailVal.length - 1) {
    //! last mai dot hai ya nhi
    return false;
  }

  return true;
};

// ! set Error message
const setErrorMsg = (input, msg) => {
  const formControl = input.parentElement;
  console.log(formControl);
  const small = formControl.querySelector("small");
  small.innerText = msg;
  formControl.className = "modal-form-control error";
};

// ! set success message
const setSuccessMsg = (input) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = "";
  formControl.className = "modal-form-control success";
};

// todo: validate function
const Validate = () => {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const phoneVal = phone.value.trim();
  const passwordVal = password.value.trim();
  const cpasswordVal = cpassword.value.trim();

  //* validate usename
  if (usernameVal === "") {
    setErrorMsg(username, "username cannot be blank");
  } else if (usernameVal.length <= 2) {
    setErrorMsg(username, "Minimum three characters should be Required");
  } else {
    setSuccessMsg(username);
  }

  //* validate email
  if (emailVal === "") {
    setErrorMsg(email, "email cannot be blank");
  } else if (!isEmail(emailVal)) {
    setErrorMsg(email, "Invalid Email");
  } else {
    setSuccessMsg(email);
  }

  //* validate Phone
  if (phoneVal === "") {
    setErrorMsg(phone, "Mobile Number cannot be blank");
  } else if (phoneVal.length !== 10) {
    setErrorMsg(phone, "It must contain 10 digits");
  } else {
    setSuccessMsg(phone);
  }

  //* validate password
  if (passwordVal === "") {
    setErrorMsg(password, "Password cannot be blank");
  } else if (passwordVal.length <= 5) {
    setErrorMsg(password, "minimum five letters or digits required");
  } else {
    setSuccessMsg(password);
  }

  //* validate confirm password
  if (cpasswordVal === "") {
    setErrorMsg(cpassword, "Password cannot be blank");
  } else if (cpasswordVal.length <= 5) {
    setErrorMsg(cpassword, "minimum five letters or digits required");
  } else if (cpasswordVal !== passwordVal) {
    setErrorMsg(cpassword, "Password not matched with the above Password");
  } else {
    setSuccessMsg(cpassword);
  }

  //todo: check all things are success or not
  successStatus({usernameVal,emailVal,phoneVal,passwordVal});
};
