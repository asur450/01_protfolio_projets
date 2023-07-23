let tab_links = document.getElementsByClassName("tab-links")
let tab_contents = document.getElementsByClassName("tab-content")
function opentab(tabname) {
    for (tablink of tab_links) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tab_contents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

// -------------------menu-------------
let sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}

// -------------------script form-------------------------

const scriptURL = 'https://script.google.com/macros/s/AKfycbwqllu2N-5s1fdy8lABPcyyYWmVVdOZJ0UpmS91AHTctV5cAyan44vB0n3Tf5Cdv3Yc/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg")

        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    msg.innerHTML = "Message sent successfully"
                    setTimeout(function () {
                        msg.innerHTML = " "
                    }, 5000)
                    form.reset()
                })
                .catch(error => console.error('Error!', error.message))
        })

