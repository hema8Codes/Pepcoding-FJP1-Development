(function() {

    let btnAddFolder = document.querySelector("#btnAddFolder");
    let divContainer = document.querySelector("#divContainer");
    let pageTemplates = document.querySelector("#pageTemplates")

    btnAddFolder.addEventListener("click", function() {

        let fname = prompt("Enter a folder's name?");
        if (fname == null) {
            return;
        }
        let divFolderTemplate = pageTemplates.content.querySelector(".folder");
        let divFolder = document.importNode(divFolderTemplate, true);

        let divName = divFolder.querySelector("[purpose='name']");
        divName.innerHTML = fname;

        divContainer.appendChild(divFolder);

    });

})();