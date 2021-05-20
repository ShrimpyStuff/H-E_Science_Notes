async function doEverything() {
let rawFileData = '';
  await fetch('https://shrimpystuff.github.io/H-E_Science_Notes/file.txt')
    .then(response => response.text())
    .then((data) => {
      rawFileData = data;
    });
  
  let rol = "right";

  rawFileData.split("New Note").forEach(note => {
    document.getElementById("notes").innerHTML += `<br/><br/><div class="${rol}">${note}</div>`;
    rol = (rol === "right") ? "left" : "right";
  });
}
doEverything();