let rawFileData = '';
fetch('https://shrimpystuff.github.io/H-E_Science_Notes/file.txt')
  .then(response => response.text())
  .then((data) => {
    rawFileData = data;
  });
console.log(rawFileData);