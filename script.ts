//listing element
document
.getElementById('resumeForm')
?.addEventListener('submit', function(event){
    event.preventDefault();
//profile picture
const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
    //type assertion

    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

    //check if all element 
if (
    profilePictureInput && 
    nameElement &&
     emailElement &&
      phoneElement &&
       educationElement &&
        experienceElement &&
         skillsElement 
   
) {
//usernameElement 
    const name = nameElement.value;
    const email = emailElement.value;
    const education = educationElement.value;
    const phone = phoneElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;

//picture element
const profilePictureFile = profilePictureInput.files?.[0];
const profilePictureURL =  profilePictureFile ?
URL.createObjectURL(profilePictureFile) : "";


    //creat resume output
    const resumeHTML =`
    <h2>Resume</h2>
    ${
        profilePictureURL 
        ? `<img src="${profilePictureURL}" alt="Profile Picture" class="ProfilePicture">` 
        : ""
    }
    <p><strong>name</strong> ${name} </span> </p>
    <p><strong>email</strong> ${email} </span> </p>
    <p><strong>phone</strong>  ${phone} </span> </p>
    <h3>Education</h3>
    <p>${education}</p>
    <h3>Experienc</h3>
    <p>${experience}</p>
    <h3>Skills</h3>
    <p>${skills}</p>
    `;

    //Disply the resume output
    const resumeOutputElement = document.getElementById('resumeOutput')
if (resumeOutputElement){
    resumeOutputElement.innerHTML = resumeHTML;
resumeOutputElement.style.display = "block";
   

}
}else {
    console.error("form element are missing")
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













