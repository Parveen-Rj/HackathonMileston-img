var _a;
//listing element
(_a = document
    .getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    //profile picture
    var profilePictureInput = document.getElementById('profilePicture');
    //type assertion
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    //check if all element 
    if (profilePictureInput &&
        nameElement &&
        emailElement &&
        phoneElement &&
        educationElement &&
        experienceElement &&
        skillsElement) {
        //usernameElement 
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var education = educationElement.value;
        var phone = phoneElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        //picture element
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ?
            URL.createObjectURL(profilePictureFile) : "";
        //creat resume output
        var resumeHTML = "\n    <h2>Resume</h2>\n    ".concat(profilePictureURL
            ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"ProfilePicture\">")
            : "", "\n    <p><strong>name</strong> ").concat(name_1, " </span> </p>\n    <p><strong>email</strong> ").concat(email, " </span> </p>\n    <p><strong>phone</strong>  ").concat(phone, " </span> </p>\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n    <h3>Experienc</h3>\n    <p>").concat(experience, "</p>\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n    ");
        //Disply the resume output
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeHTML;
            resumeOutputElement.style.display = "block";
        }
    }
    else {
        console.error("form element are missing");
    }
});
/*function makeEditable(){
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
        element.addEventListener('click', function(){
            const curentElement = element as HTMLElement;
            const curentValue = curentElement.textContent ||
            "";
            //replace content
            if(curentElement.tagName === "P" || curentElement.tagName === 'SPAN'){
                const input = document.createElement('input')
                input.type = 'text'
                input.value = curentValue
                input.classList.add('editing-input')

                input.addEventListener('blur', function (){
                    curentElement.textContent = input.value;
                    curentElement.style.display = 'inline'
                    input.remove()
                })

                curentElement.style.display = 'none'
                curentElement.parentNode?.insertBefore(input, curentElement)
                input.focus()
            }
        })
    })
}*/
