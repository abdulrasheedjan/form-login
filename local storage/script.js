 document.addEventListener('DOMContentLoaded', () => {
     checkUserLogin();

     const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (event) => {
         event.preventDefault();
        const email = document.getElementById('email').value;
        localStorage.setItem('userEmail', email);
       checkUserLogin();
    });

     const logoutBtn = document.getElementById('logoutBtn');
     logoutBtn.addEventListener('click', () => {
         localStorage.removeItem('userEmail');
         checkUserLogin();
    });

     const noteForm = document.getElementById('noteForm');
     noteForm.addEventListener('submit', (event) => {
         event.preventDefault();
         const note = document.getElementById('note').value;
         saveNoteToLocal(note);
         displayNotes();
    });

    displayNotes();
 });

 function checkUserLogin() {
     const userEmail = localStorage.getItem('userEmail');
     const loginDiv = document.getElementById('login');     const homeDiv = document.getElementById('home');
     if (userEmail) {
         loginDiv.style.display = 'none';
         homeDiv.style.display = 'block';
     } else {
         loginDiv.style.display = 'block';
         homeDiv.style.display = 'none';
     }
 }

function saveNoteToLocal(note) {
     let notes = JSON.parse(localStorage.getItem('notes')) || [];
     notes.push(note);
     localStorage.setItem('notes', JSON.stringify(notes));
 }

 function displayNotes() {
     const notesDisplay = document.getElementById('notesDisplay');
     const notes = JSON.parse(localStorage.getItem('notes')) || [];
     notesDisplay.innerHTML = notes.map(note => `<p>${note}</p>`).join('');
 }
// // function logout() {
// //     localStorage.removeItem("email");
// //     checkIsUserLogin();
// //   }
  
document.addEventListener('DOMContentLoaded', () => {
     checkUserLogin();

     const loginForm = document.getElementById('loginForm');
     loginForm.addEventListener('submit', (event) => {
         event.preventDefault();
         const email = document.getElementById('email').value;
         clearOldNotes();  // Clear previous user's notes
         localStorage.setItem('userEmail', email);
         checkUserLogin();
     });

     const logoutBtn = document.getElementById('logoutBtn');
     logoutBtn.addEventListener('click', () => {
         localStorage.removeItem('userEmail');
         checkUserLogin();
     });

     const noteForm = document.getElementById('noteForm');
    noteForm.addEventListener('submit', (event) => {
         event.preventDefault();
         const note = document.getElementById('note').value;
        saveNoteToLocal(note);
         displayNotes();
     });

     displayNotes();
 });

// function checkUserLogin() {
//     const userEmail = localStorage.getItem('userEmail');
//     const loginDiv = document.getElementById('login');
//     const homeDiv = document.getElementById('home');
//     if (userEmail) {
//         loginDiv.classList.add('hidden');
//         homeDiv.classList.remove('hidden');
//     } else {
//         loginDiv.classList.remove('hidden');
//         homeDiv.classList.add('hidden');
//     }
// }

// function saveNoteToLocal(note) {
//     let notes = JSON.parse(localStorage.getItem('notes')) || [];
//     notes.push(note);
//     localStorage.setItem('notes', JSON.stringify(notes));
// }

// function displayNotes() {
//     const notesDisplay = document.getElementById('notesDisplay');
//     const notes = JSON.parse(localStorage.getItem('notes')) || [];
//     notesDisplay.innerHTML = notes.map(note => `<p>${note}</p>`).join('');
// }

// function clearOldNotes() {
//     localStorage.removeItem('notes');
// }


