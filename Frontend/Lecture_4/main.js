(function() {

    let btnAddFolder = document.querySelector("#btnAddFolder");
    let divBreadCrumb = document.querySelector("#divBreadCrumb");
    let aRootPath = document.querySelector(".path");
    let divContainer = document.querySelector("#divContainer");
    let pageTemplates = document.querySelector("#pageTemplates");
    let folders = [];
    let cfid = -1; // current folder ID -> id of the folder in which we are
    let fid = -1;

    btnAddFolder.addEventListener("click", addFolder);
    aRootPath.addEventListener("click", navigateBreadCrumb);

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
                    name: fname,
                    pid: cfid
                });

                // 2.HTML
                addFolderHTML(fname, fid, cfid);

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
                let exists = folders.filter(f => f.pid == cfid).some(f => f.name == nfname);
                if (exists == false) {

                    // Add in 1.RAM -> 2.HTML -> 3.Storage
                    // 1.RAM
                    let folder = folders.filter(f => f.pid == cfid).find(f => f.name == ofname);
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
        let fidtbd = divFolder.getAttribute("fid");

        let flag = confirm(" Are you sure you want to delete " + divName.innerHTML + " ?");
        if (flag == true) { // if yes
            let exists = folders.some(f => f.pid == fidtbd);
            if (exists == false) {
                // Delete from 1.RAM -> 2.HTML -> 3.Storage
                // 1.RAM
                let fidx = folders.findIndex(f => f.id == fidtbd);
                folders.splice(fidx, 1);

                // 2.HTML
                divContainer.removeChild(divFolder);

                // 3.Storage
                saveToStorage();
            } else {
                alert("Can't delete. Has children.");
            }
        }
    }

    function navigateBreadCrumb() { // Bread Crumb navigation
        let fname = this.innerHTML;
        cfid = parseInt(this.getAttribute("fid"));
        // alert(fname + "->" + fid);
        divContainer.innerHTML = "";
        folders.filter(f => f.pid == cfid).forEach(f => {
            addFolderHTML(f.name, f.id, f.pid);
        });
        while (this.nextSibling) {
            this.parentNode.removeChild(this.nextSibling);
        }
    }

    function viewFolder() {
        let divFolder = this.parentNode;
        let divName = divFolder.querySelector("[purpose='name']");
        cfid = parseInt(divFolder.getAttribute("fid"));

        let aPathTemplate = pageTemplates.content.querySelector(".path");
        let aPath = document.importNode(aPathTemplate, true);

        aPath.innerHTML = divName.innerHTML;
        aPath.setAttribute("fid", cfid);
        aPath.addEventListener("click", navigateBreadCrumb);
        divBreadCrumb.appendChild(aPath);

        divContainer.innerHTML = "";
        folders.filter(f => f.pid == cfid).forEach(f => {
            addFolderHTML(f.name, f.id, f.pid);
        });
    }

    function addFolderHTML(fname, fid, pid) {
        let divFolderTemplate = pageTemplates.content.querySelector(".folder");
        let divFolder = document.importNode(divFolderTemplate, true);

        let divName = divFolder.querySelector("[purpose='name']");
        let spanEdit = divFolder.querySelector("span[action='edit']");
        let spanDelete = divFolder.querySelector("span[action='delete']");
        let spanView = divFolder.querySelector("span[action='view']")


        divFolder.setAttribute("fid", fid);
        divFolder.setAttribute("pid", pid);
        divName.innerHTML = fname;

        spanEdit.addEventListener("click", editFolder);
        spanDelete.addEventListener("click", deleteFolder);
        spanView.addEventListener("click", viewFolder);

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
                if (f.pid == cfid) {
                    addFolderHTML(f.name, f.id);
                }

            });
        }
    }



    loadFromStorage();

})();