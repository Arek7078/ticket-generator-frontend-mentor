
export function formDataHandler (){
   //form data handler
 const inputUpload = document.getElementById('upload');
 const form = document.getElementById('form');
 const labelUpload = document.getElementById('UploadLabel');
 //ticket section handler
 const ticketSection = document.getElementById('ticketSection');
 const descriptionH3 = document.getElementById('description-ticket');
 const descriptionP = document.getElementById('description-p-ticket');
 const dateTicket = document.getElementById('date');
 const avatarContainer = document.getElementById('avatarContainer');
 const nameTicket = document.getElementById('name-ticket');
 const gitHubTicket = document.getElementById('github-ticket');

 let fileURL = '';

 inputUpload.addEventListener('change', () =>{
    const file = inputUpload.files[0];
    
    if(file){
        fileURL =URL.createObjectURL(file);
        const img = document.createElement('img');
        img.src = fileURL;
        img.className = 'max-w-[100px] max-h-[100px] p-1 m-auto';
        labelUpload.innerHTML = '';
        labelUpload.appendChild(img);
    }

 })
 form.addEventListener('submit',(e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    console.log(data); // name/upload/github/email
    form.classList.add('hidden');
    ticketSection.classList.remove('hidden');
    ticketSection.classList.add('flex');

    const date = Date.now();
      descriptionH3.textContent = `Congrats, ${data.name}! Your ticket is ready.`;
      descriptionP.textContent = `We've emailed your ticket to ${data.email} and will send updates in the run up to the event.`;
      dateTicket.textContent = `Date: ${new Date(date).toLocaleDateString()}`;
      avatarContainer.innerHTML = `<img src="${fileURL}" alt="avatar" class="rounded-lg">`;
      nameTicket.textContent = data.name;
      gitHubTicket.textContent = data.github;
      
 })

}

