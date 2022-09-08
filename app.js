const frm = document.getElementById("frmwork")

const triggerFrameworks = () => {
    let frmTohide = document.getElementById("tohide")
    if (frmTohide.style.display === "none") {
        frmTohide.style.display = "flex";
    } else {
        frmTohide.style.display = "none";
    }

}

frm.addEventListener("click", triggerFrameworks)

