async function doEverything() {
let rawFileData = '';
  await fetch('./file.txt')
    .then(response => response.text())
    .then((data) => {
      rawFileData = data;
    });
  
  let rol = "right";

  rawFileData.split("New Note").forEach(note => {
    note = note.replace(/((?:http|https):\/\/.*(?:.png|.jpg))/gm, "<img src=\"$1\"/>");
    note = note.replace(/\./gm, ".<br/>");
    document.getElementById("notes").innerHTML += `<br/><br/><div class="${rol}">${note}</div>`;
    rol = (rol === "right") ? "left" : "right";
  });
}
doEverything();