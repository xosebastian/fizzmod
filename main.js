var link = document.getElementById("link");
var url = "https://www.google.com.ar";

link.addEventListener("click", event => {
  event.stopImmediatePropagation();
  event.preventDefault();

  if(!document.getElementById("container")){
    var container = document.createElement("div");
    container.id = "container";
    document.body.appendChild(container);

    var text = document.createElement("p");
    text.innerText = "¿Esta seguro que desea abandonar la pagina?";

    var btnAccept = document.createElement("button");
    btnAccept.innerText = "Aceptar";
    btnAccept.id = "accept";
    var btnCancel = document.createElement("button");
    btnCancel.innerText = "Cancelar";
    btnCancel.id = "cancel";

    var fragment = document.createDocumentFragment();
    fragment.appendChild(text);
    fragment.appendChild(btnAccept);
    fragment.appendChild(btnCancel);
    document.getElementById("container").appendChild(fragment);

    document.getElementById("accept").addEventListener("click", event => {
      event.stopImmediatePropagation();
      event.preventDefault();
      window.location.href = url;
    });
    document.getElementById("cancel").addEventListener("click", event => {
      event.stopImmediatePropagation();
      event.preventDefault();
      document.getElementById("container").remove();
    });
  } 
});
