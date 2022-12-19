let signup_form = document.querySelector("#signupform");
let first_name = document.querySelector("#first_name");
let last_name = document.querySelector("#last_name");
let emails = document.querySelector("#email");
let password = document.querySelector("#password");

let signin_form = document.querySelector("#signin_form");
let signin_email = document.querySelector("#signin_email");
let signin_pwd = document.querySelector("#signin_pwd");

let login_failed_div = document.getElementById("login_failed_div");
let formData = JSON.parse(localStorage.getItem("signup_data")) || [];
signup_form.addEventListener("submit", function (event) {
	event.preventDefault();
	let fname = first_name.value,
		lname = last_name.value,
		email = emails.value,
		pwd = password.value;

	let exist =
		formData.length &&
		JSON.parse(localStorage.getItem("signup_data")).some(
			(data) =>
				data.fname.toLowerCase() == fname.toLowerCase() &&
				data.lname.toLowerCase() == lname.toLowerCase()
		);

	if (!exist) {
		formData.push({ fname, lname, email, pwd });
		localStorage.setItem("signup_data", JSON.stringify(formData));
		Swal.fire("Great", "Create account sccessfull", "success");
		signup_form.reset();
		first_name.focus();
	} else {
		Swal.fire("You have already registered", "Account already exist!", "question");
		signup_form.reset();
		first_name.focus();
	}
});

signin_form.addEventListener("submit", function (event) {
	event.preventDefault();
	let email = signin_email.value,
		pwd = signin_pwd.value;

	let exist =
		formData.length &&
		formData.some(
			(data) =>
				data.email.toLowerCase() == email.toLowerCase() &&
				data.pwd.toLowerCase() == pwd.toLowerCase()
		);

	if (!exist) {
		login_failed_div.innerHTML = `
            <div id="login_failed">
            <p id="failed">Invalid login or password</p>
            </div>
            `;
		// signin_form.reset();
		// signin_email.focus();
	} else {
		login_failed_div.innerHTML = null;
		signin_form.reset();
		signin_email.focus();
		Swal.fire("Good job!", "Login sccessfull", "success");
		setTimeout(() => {
			window.location.href = "/html/user.html";
		}, 4000);
        setTimeout(() => {
         let timerInterval;
            Swal.fire({
                title: "Redirecting...",
                html: "I will close in <b></b> milliseconds.",
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                    const b = Swal.getHtmlContainer().querySelector("b");
                    timerInterval = setInterval(() => {
                        b.textContent = Swal.getTimerLeft();
                    }, 100);
                },
                willClose: () => {
                    clearInterval(timerInterval);
                },
            }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log("I was closed by the timer");
                }
            });   
        }, 2000);
		
	}
});


window.onload = () => {
	document.body.style.opacity = 1;
	document.body.style.visibility = "visible";
};

let buttons = document.querySelectorAll("#left div");

buttons.forEach((x) => {
	x.onclick = () => {
		buttons.forEach((item) => {
			item.style.backgroundColor = "white";
		});
		x.style.backgroundColor = "#f2f2f2";
		if (x.innerHTML === "MEN") {
			window.location.href = "/html/men.html";
		} else if (x.innerHTML === "WOMEN") {
			window.location.href = "/home.htmlhome.html";
		} else if (x.innerHTML === "KIDS") {
			window.location.href = "/html/kids.html";
		} else if (x.innerHTML === "LIFE") {
			window.location.href = "/html/life.html";
		}
	};
});
