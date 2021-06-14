async function doEverything() {
let rawFileData = '';
  await fetch('./file.txt')
    .then(response => response.text())
    .then((data) => {
      rawFileData = data;
    });
  
  let rol = "right";

  rawFileData.split("New Note").forEach(note => {
    note = note.replace(/URL(.*(?:.png|.jpg))/, `${window.location.href}$1`);
    note = note.replace(/((?:http|https):\/\/.*(?:.png|.jpg))/gm, `</div> <img src="$1"/>`);
    const endDiv = (note.match(/<\/div>/)) ? "" : "</div>"
    document.getElementById("notes").innerHTML += `<div class="${rol}">${note}${endDiv}`;
    rol = (rol === "right") ? "left" : "right";
  });
}
doEverything();