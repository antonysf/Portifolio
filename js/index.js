let myButton = document.getElementById("scrollBtn");

window.onscroll = function () {
    showBtn()
};


function showBtn() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

function topScroll() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//função menu responivo 

let open = false;
let moreBtn = document.getElementById("moreBtn")
let resHead = document.getElementById("resHead")

function showMoreLinks() {
    if (!open) {
        resHead.style.marginLeft = "5%";
        moreBtn.innerHTML = '<i class="fas fa-times"></i>'
        open = true;
    } else {
        resHead.style.marginLeft = "-120%";
        moreBtn.innerHTML = '<i class="fas fa-bars"></i>'
        open = false;
    }
}


//Email Js alertas e validações

function validate() {
    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    let msg = document.querySelector(".message");
    let sendBtn = document.querySelector(".send-btn");

    sendBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" || msg.value == "") {
            emptyerror();

        } else {
            sendmail(name.value, email.value, msg.value);
            success();
        }
    });
}

validate();

function sendmail(name, email, msg) {
    emailjs.send("service_yytcsgx", "template_mu02gg1", {
        to_name: email,
        from_name: name,
        message: msg,
    });
}

function emptyerror() {
    swal({
        title: "Error!",
        text: "Os campos são obrigatorios!",
        icon: "error",
    });
}

function success() {
    swal({
        title: "Email enviado com sucesso",
        text: "Tentaremos responder o mais rapido possivel!",
        icon: "success",
    });
}