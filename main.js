var link = document.getElementById("link");

link.addEventListener("click", event => {
  event.stopImmediatePropagation();
  event.preventDefault();

  var container = document.createElement("div");
  container.id = "container";
  //containerId = document.getElementById("container");

  //var text = containerId.createElement("p");
  //text.innerText = "Esta seguro que desea abandonar la pagina?";

  document.body.appendChild(container);
});
