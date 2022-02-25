(function() {

    let btnAddFolder = document.querySelector("#btnAddFolder");
    let divContainer = document.querySelector("#divContainer");
    let pageTemplates = document.querySelector("#pageTemplates");
    let fid = 0;
    let folders = [];
    // let fjson = localStorage.getItem("data");
    // if (fjson != null && fjson.length > 0) {
    //     folders = JSON.parse(fjson);
    // }


    btnAddFolder.addEventListener("click", addFolder);

    function addFolder() {
        let fname = prompt("Enter a folder's name?");
        if (!fname) {
            return;
        }

        fid++;
        addFolderHTMLToPage(fname, fid);

        folders.push({
            id: fid,
            name: fname
        });
        persistDataToStorage();
    }

    function deleteFolder() {
        let divFolder = this.parentNode;
        let divName = divFolder.querySelector("[purpose='name']");
        let flag = confirm("Do you want to delete the folder " + divName.innerHTML);
        if (flag == true) {
            divContainer.removeChild(divFolder);

            let idx = folders.findIndex(f => f.id == parseInt(divFolder.getAttribute("fid")));
            folders.splice(idx, 1);
            persistDataToStorage();
        }
    }

    function editFolder() {
        let divFolder = this.parentNode;
        let divName = divFolder.querySelector("[purpose='name']");

        let fname = prompt("Enter the new folder's name for " + divName.innerHTML);
        if (!fname) {
            return;
        }

        divName.innerHTML = fname;

        let folder = folders.find(f => f.id == parseInt(divFolder.getAttribute("fid")));
        folder.name = fname;
        persistDataToStorage();
    }

    function addFolderHTMLToPage(fname, fid) {
        let divFolderTemplate = pageTemplates.content.querySelector(".folder");
        let divFolder = document.importNode(divFolderTemplate, true);

        let divName = divFolder.querySelector("[purpose='name']");
        divName.innerHTML = fname;
        divFolder.setAttribute("fid", fid);

        let spanDelete = divFolder.querySelector("span[action='delete']");
        spanDelete.addEventListener("click", deleteFolder);

        let spanEdit = divFolder.querySelector("span[action='edit']");
        spanEdit.addEventListener("click", editFolder);

        divContainer.appendChild(divFolder);
    }

    function persistDataToStorage() {
        console.log(folders);
        let fjson = JSON.stringify(folders);
        localStorage.setItem("data", fjson);
    }

    function loadDataFromStorage() {
        let fjson = localStorage.getItem("data");
        if (!!fjson) {
            folders = JSON.parse(fjson);
            let maxId = -1;
            folders.forEach(f => {
                addFolderHTMLToPage(f.name, f.id);
                if (f.id > maxId) {
                    maxId = f.id;
                }
            });

            fid = maxId;
        }
    }



    loadDataFromStorage();

})();