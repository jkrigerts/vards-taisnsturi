let poga = document.getElementById("ievadit");

poga.addEventListener("click", () => {
  let vards = document.getElementById("ievade").value;

  document.getElementById("teksts").innerHTML = vards;

  let kvadrats = document.querySelector(".kvadrats");
  kvadrats.style.display = "flex";
});