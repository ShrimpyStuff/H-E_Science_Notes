let rawFileData = '';
function fetchData() {
fetch('https://shrimpystuff.github.io/H-E_Science_Notes/file.txt')
  .then(response => response.text())
  .then((data) => {
    rawFileData = data;
  });
}
fetchData();

let jsondata;
fetch('https://shrimpystuff.github.io/H-E_Science_Notes/file.json').then(
        function(u){ return u.json();}
      ).then(
        function(json){
          jsondata = json;
        }
      )

console.log(jsondata);