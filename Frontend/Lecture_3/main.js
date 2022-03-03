(function() {

    let btnAddFolder = document.querySelector("#btnAddFolder");
    let divContainer = document.querySelector("#divContainer");
    let pageTemplates = document.querySelector("#pageTemplates");
    let folders = [];
    let fid = -1;

    btnAddFolder.addEventListener("click", addFolder);


    function addFolder() {
        let fname = prompt("Enter folder's name");
        if (!!fname) {
            let exists = folders.some(f => f.name == fname);
            if (exists == false) {
                fid++;

                // Add in 1.RAM -> 2.HTML -> 3.Storage
                // 1.RAM
                folders.push({
                    id: fid,
                    name: fname
                });

                // 2.HTML
                addFolderHTML(fname, fid);

                // 3.Storage
                saveToStorage();
            } else {
                alert(fname + " already exists");
            }
        } else {
            alert("Please enter something");
        }
    }


    function editFolder() {
        let divFolder = this.parentNode;
        let divName = divFolder.querySelector("[purpose='name']");
        let ofname = divName.innerHTML; //old file name


        let nfname = prompt("Enter new name for " + ofname); //new file name
        if (!!nfname) {
            if (nfname != ofname) {
                let exists = folders.some(f => f.name == nfname);
                if (exists == false) {

                    // Add in 1.RAM -> 2.HTML -> 3.Storage
                    // 1.RAM
                    let folder = folders.find(f => f.name == ofname);
                    folder.name = nfname;

                    // 2.HTML
                    divName.innerHTML = nfname;

                    // 3.Storage
                    saveToStorage();
                } else {
                    alert(nfname + " already exists");
                }
            } else {
                alert("This is the old name only. Please enter something new.")
            }
        } else {
            alert("Please enter a name")
        }
    }

    function deleteFolder() {
        let divFolder = this.parentNode;
        let divName = divFolder.querySelector("[purpose='name']");

        let flag = confirm(" Are you sure you want to delete " + divName.innerHTML + " ?");
        if (flag == true) { // if yes
            // Delete from 1.RAM -> 2.HTML -> 3.Storage
            // 1.RAM
            let fidx = folders.findIndex(f => f.name == divName.innerHTML);
            folders.splice(fidx, 1);

            // 2.HTML
            divContainer.removeChild(divFolder);

            // 3.Storage
            saveToStorage();

        }
    }

    function addFolderHTML(fname, fid) {
        let divFolderTemplate = pageTemplates.content.querySelector(".folder");
        let divFolder = document.importNode(divFolderTemplate, true);

        let spanEdit = divFolder.querySelector("span[action='edit']");
        let spanDelete = divFolder.querySelector("span[action='delete']");;
        let divName = divFolder.querySelector("[purpose='name']");

        divFolder.setAttribute("fid", fid);
        divName.innerHTML = fname;

        spanEdit.addEventListener("click", editFolder);
        spanDelete.addEventListener("click", deleteFolder);

        divContainer.appendChild(divFolder);
    }

    function saveToStorage() {
        let fjson = JSON.stringify(folders);
        localStorage.setItem("data", fjson);
    }

    function loadFromStorage() {
        let fjson = localStorage.getItem("data");
        if (!!fjson) {
            folders = JSON.parse(fjson);
            folders.forEach(f => {
                if (f.id > fid) {
                    fid = f.id;
                }
                addFolderHTML(f.name, f.id);
            });
        }
    }



    loadFromStorage();

})();