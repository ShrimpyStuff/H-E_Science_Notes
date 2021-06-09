async function doEverything() {
let rawFileData = '';
  await fetch('./file.txt')
    .then(response => response.text())
    .then((data) => {
      rawFileData = data;
    });
  
  let rol = "right";

  rawFileData.split("New Note").forEach(note => {
    note = note.replace(/URL(.*\.jpg)/, `${window.location.href}$1`);
    note = note.replace(/((?:http|https):\/\/.*(?:.png|.jpg))/gm, "<img src=\"$1\"/>");
    document.getElementById("notes").innerHTML += `<div class="${rol}">${note}<br/><br/></div>`;
    rol = (rol === "right") ? "left" : "right";
  });
}
doEverything();