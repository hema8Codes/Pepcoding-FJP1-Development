(function() {

    let btnAddFolder = document.querySelector("#addFolder");
    let btnAddTextFile = document.querySelector("#addTextFile");
    let divBreadCrumb = document.querySelector("#breadCrumb");
    let aRootPath = divBreadCrumb.querySelector("a[purpose='path']")
    let divContainer = document.querySelector("#container");
    let pageTemplates = document.querySelector("#templates");
    let resources = [];
    let cfid = -1; // initially we are at root (which has an id of -1)
    let rid = 0;


    btnAddFolder.addEventListener("click", addFolder);
    btnAddTextFile.addEventListener("click", addTextFile);
    aRootPath.addEventListener("click", viewFolderFromPath);


    //validation - unique, non-blank
    //persist - ram, storage
    function addFolder() {
        let rname = prompt("Enter folder's name");

        if (rname != null) {
            rname = rname.trim();
        }

        if (!rname) { //empty name validation
            alert("Empty name not fine");
            return;
        }

        // uniqueness validation
        let alreadyExists = resources.some(r => r.rname == rname && r.pid == cfid);
        if (alreadyExists == true) {
            alert(rname + " is already in use. Try some other name");
            return;
        }

        let pid = cfid;
        rid++;
        // Add in 1.RAM -> 2.HTML -> 3.Storage
        // 2.HTML
        addFolderHTML(rname, rid, pid);
        // 1.RAM
        resources.push({
            rid: rid,
            rname: rname,
            rtype: "folder",
            pid: cfid
        });
        // 3.Storage
        saveToStorage();
    }

    function addTextFile() {
        let rname = prompt("Enter text's file name");

        if (rname != null) {
            rname = rname.trim();
        }

        if (!rname) { //empty name validation
            alert("Empty name not fine");
            return;
        }

        // uniqueness validation
        let alreadyExists = resources.some(r => r.rname == rname && r.pid == cfid);
        if (alreadyExists == true) {
            alert(rname + " is already in use. Try some other name");
            return;
        }

        let pid = cfid;
        rid++;
        // Add in 1.RAM -> 2.HTML -> 3.Storage
        // 2.HTML
        addTextFileHTML(rname, rid, pid);
        // 1.RAM
        resources.push({
            rid: rid,
            rname: rname,
            rtype: "text-file",
            pid: cfid
        });
        // 3.Storage
        saveToStorage();
    }

    //empty, old, unique
    function renameFolder() {
        let nrname = prompt("Enter folder's new name");

        if (nrname != null) {
            nrname = nrname.trim();
        }

        if (!nrname) { //empty name validation
            alert("Empty name not fine");
            return;
        }

        // old name validation
        let spanRename = this;
        let divFolder = spanRename.parentNode;
        let divName = divFolder.querySelector("[purpose=name]");
        let orname = divName.innerHTML;
        let ridTBU = parseInt(divFolder.getAttribute("rid")); // resource ID to be updated
        if (nrname == orname) {
            alert("Please enter a new name.");
            return;
        }

        // uniqueness validation
        let alreadyExists = resources.some(r => r.rname == nrname && r.pid == cfid);
        if (alreadyExists == true) {
            alert(nrname + " already exists.");
            return;
        }

        // Change in 1.RAM -> 2.HTML -> 3.Storage

        // 1.RAM
        let resource = resources.find(r => r.rid == ridTBU);
        resource.rname = nrname;

        // 2.HTML
        divName.innerHTML = nrname;

        // 2.Storage
        saveToStorage();

    }

    function renameTextFile() {

    }

    function viewFolderFromPath() { // Bread Crumb navigation
        let aPath = this;
        let fid = parseInt(aPath.getAttribute("rid"));

        // set the BreadCrumb
        // while (aPath.nextSibling) {
        //     aPath.parentNode.removeChild(aPath.nextSibling);
        // }

        for (let i = divBreadCrumb.children.length - 1; i >= 0; i--) {
            if (divBreadCrumb.children[i] == aPath) {
                break;
            }
            divBreadCrumb.removeChild(divBreadCrumb.children[i]);
        }

        // set the container
        cfid = fid;
        divContainer.innerHTML = "";
        for (let i = 0; i < resources.length; i++) {
            if (resources[i].pid == cfid) {
                if (resources[i].rtype == "folder") {
                    addFolderHTML(resources[i].rname, resources[i].rid, resources[i].pid);
                } else if (resources[i].rtype == "text-file") {
                    addTextFileHTML(resources[i].rname, resources[i].rid, resources[i].pid);
                }
            }
        }
    }

    function deleteFolder() {
        // delete all folder inside also
        let spanDelete = this;
        let divFolder = spanDelete.parentNode;
        let divName = divFolder.querySelector("[purpose='name']");

        let fidTBD = parseInt(divFolder.getAttribute("rid")); // Folder ID to be deleted
        let fname = divName.innerHTML;

        let childrenExists = resources.some(r => r.pid == fidTBD);

        let sure = confirm(`Are you sure you want to delete ${fname}?` + (childrenExists ? " It also has content inside it (children)." : ""));
        if (!sure) {
            return;
        }

        // 1.HTML
        divContainer.removeChild(divFolder);

        // 2.RAM
        deleteHelper(fidTBD); // recursion

        // 3.Storage
        saveToStorage();
    }

    function deleteHelper(fidTBD) {
        let children = resources.filter(r => r.pid == fidTBD); // delete those children who consider this as parent
        for (let i = 0; i < children.length; i++) {
            deleteHelper(children[i].rid); // this is capable of deleting children and their children recursively
        }
        let ridx = resources.findIndex(r => r.rid == fidTBD); // fidTBD -> Folder ID to be deleted
        console.log(resources[ridx].rname);
        resources.splice(ridx, 1); // remove the one child at given Rindex
    }

    function deleteTextFile() {

    }

    function viewFolder() {
        let spanView = this;
        let divFolder = spanView.parentNode;
        let divName = divFolder.querySelector("[purpose='name']");

        let fname = divName.innerHTML;
        let fid = parseInt(divFolder.getAttribute("rid"));

        let aPathTemplate = templates.content.querySelector("a[purpose='path']");
        let aPath = document.importNode(aPathTemplate, true);

        aPath.innerHTML = fname;
        aPath.setAttribute("rid", fid);
        aPath.addEventListener("click", viewFolderFromPath);
        divBreadCrumb.appendChild(aPath);
        cfid = fid;

        divContainer.innerHTML = "";
        for (let i = 0; i < resources.length; i++) {
            if (resources[i].pid == cfid) {
                if (resources[i].rtype == "folder") {
                    addFolderHTML(resources[i].rname, resources[i].rid, resources[i].pid);
                } else if (resources[i].rtype == "text-file") {
                    addTextFileHTML(resources[i].rname, resources[i].rid, resources[i].pid);
                }
            }
        }
    }

    function viewTextFile() {

    }

    function addFolderHTML(rname, rid, pid) {
        let divFolderTemplate = templates.content.querySelector(".folder");
        let divFolder = document.importNode(divFolderTemplate, true); // makes a copy

        let spanRename = divFolder.querySelector("[action=rename]");
        let spanDelete = divFolder.querySelector("[action=delete]");
        let spanView = divFolder.querySelector("[action=view]");
        let divName = divFolder.querySelector("[purpose=name]");

        spanRename.addEventListener("click", renameFolder);
        spanDelete.addEventListener("click", deleteFolder);
        spanView.addEventListener("click", viewFolder);
        divName.innerHTML = rname;
        divFolder.setAttribute("rid", rid);
        divFolder.setAttribute("pid", pid);

        divContainer.appendChild(divFolder);
    }

    function addTextFileHTML(rname, rid, pid) {
        let divTextFileTemplate = templates.content.querySelector(".text-file");
        let divTextFile = document.importNode(divTextFileTemplate, true); // makes a copy

        let spanRename = divTextFile.querySelector("[action=rename]");
        let spanDelete = divTextFile.querySelector("[action=delete]");
        let spanView = divTextFile.querySelector("[action=view]");
        let divName = divTextFile.querySelector("[purpose=name]");

        spanRename.addEventListener("click", renameTextFile);
        spanDelete.addEventListener("click", deleteTextFile);
        spanView.addEventListener("click", viewTextFile);
        divName.innerHTML = rname;
        divTextFile.setAttribute("rid", rid);
        divTextFile.setAttribute("pid", pid);

        divContainer.appendChild(divTextFile);
    }

    function saveToStorage() {
        let rjson = JSON.stringify(resources); // used to convert jso to a json string which can be saved
        localStorage.setItem("data", rjson);
    }

    function loadFromStorage() {
        let rjson = localStorage.getItem("data");
        if (!!rjson) {
            resources = JSON.parse(rjson);
            for (let i = 0; i < resources.length; i++) {
                if (resources[i].pid == cfid) {
                    if (resources[i].rtype == "folder") {
                        addFolderHTML(resources[i].rname, resources[i].rid, resources[i].pid);
                    } else if (resources[i].rtype == "text-file") {
                        addTextFileHTML(resources[i].rname, resources[i].rid, resources[i].pid);
                    }
                }
                if (resources[i].rid > rid) {
                    rid = resources[i].rid;
                }
            }
        }
    }

    loadFromStorage();

})();