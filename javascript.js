document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Variables
    let isValid = true;
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("pass").value.trim();

    // Clear previous errors
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passError").innerText = "";

    // Name Validation
    if (name === "") {
        document.getElementById("nameError").innerText = "Please enter your name.";
        isValid = false;
    }

    // Email Validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById("emailError").innerText = "Please enter your email address.";
        isValid = false;
    }else if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Please enter a valid email address.";
        isValid = false;
    }

    // Password Validation
    let passPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (password === "") {
        document.getElementById("passError").innerText = "Please enter your password.";
        isValid = false;
    } else if (!passPattern.test(password)) {
        document.getElementById("passError").innerText = "Please enter a password with at least 8 characters, with letters & numbers.";
        isValid = false;
    }

     // Form Validated
     if (isValid) {
        alert("Form Submitted Successfully!");
        this.submit();
    }
});


getUsers = async () => {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        response = await response.json();
        document.getElementById("userdata").innerHTML = response.map(user =>
            `<tr>
                <td>${user.email}</td>
                <td>${user.name}</td>
            </tr>`
        ).join('');
    } catch (error) {
        console.error("Error fetching users: ", error);
    }
}
