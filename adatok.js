fetch('adatok.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById("tarolo").innerHTML +="<ul>";
    for (let index = 0; index < data.filmek.length; index++) {
      document.getElementById("tarolo").innerHTML += "<li>"+ data.filmek[index].filmcim+"</li>";
    }
    for (let index = 0; index < data.filmek.length; index++) {
        document.getElementById("tarolo").innerHTML += "<img src=data.filmek[`index`].kep>" +"</img>";
      }
  })
  .catch(error => {
    console.log(error);
  });
