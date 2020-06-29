let count = 3;
let screenWidth = screen.width;
let notesDetailSec = document.getElementById("notesDetailSection");

function openTab(arg) {
  console.log("arg is", arg);
  let notesList = document.querySelectorAll(".noteBody");
  notesList.forEach((note) => {
    note.classList.remove("show");
  });
  let targetNote = document.getElementById(arg);
  targetNote.classList.add("show");

  if (screenWidth < 576) {
    openMobileScreen();
  }
}

function addNote() {
  addNoteBody();
  addNoteCard();
}

function addNoteCard() {
  let newNote = document.createElement("div");
  newNote.className = "notesCard";
  let newTitle = document.createElement("h1");
  newTitle.className = "title";
  newTitle.innerHTML = "Sample Title";
  let newDiv = document.createElement("div");
  newDiv.className = "content";
  newNote.appendChild(newTitle, newDiv);

  let notesSec = document.getElementById("notesListSection");
  notesSec.appendChild(newNote);

  let notecount = count;
  addClickToNote(notecount);
}

function addNoteBody() {
  let newNoteBody = document.createElement("div");
  newNoteBody.setAttribute("id", `tabContent${count + 1}`);
  count++;
  let newTitle = document.createElement("h1");
  newTitle.className = "title";
  newTitle.innerHTML = "Sample Title";
  let newDiv = document.createElement("div");
  newDiv.className = "content";
  newNoteBody.appendChild(newTitle, newDiv);
  newNoteBody.classList.add("noteBody");

  notesDetailSec.appendChild(newNoteBody);
}

function addClickToNote(c) {
  let newNoteCard = document.getElementById("notesListSection")
    .lastElementChild;
  newNoteCard.onclick = function () {
    openTab(`tabContent${c}`);
  };
}

if (screenWidth < 576) {
  console.log("this screen has little width");

  notesDetailSec.style.display = "none";
}

function openMobileScreen() {
  notesDetailSec.style.display = "block";
}

function closeMobileScreen() {
  notesDetailSec.style.display = "none";
}
