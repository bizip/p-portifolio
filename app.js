
const frm = document.getElementById("frmwork")

const triggerFrameworks = () => {
    let frmTohide = document.getElementById("tohide")
    if (frmTohide.style.display === "none") {
        frmTohide.style.display = "flex";
    } else {
        frmTohide.style.display = "none";
    }

}

const hider = document.getElementById("tohide")
let data = fetch('./data/framework_data.json')
    .then(data => {
        return data.json();
    }).then(res => {
        let results = res;
        hider.innerHTML = results.map(item =>
            `
            <li class="single_frame" id="disp">
            <div class="image-text">
              <b>${item.name}</b>
            </div>
            <div class="image-list"><img
                src=${item.image}
                alt="CSS" />
            </div>
            </li>
            `
        ).join('');
    })
frm.addEventListener("click", triggerFrameworks)

