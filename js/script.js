const currlocation = (document.URL == 'https://netflix-clone-kaustubh.herokuapp.com/')?'en':'hi';
function toggleExpand(params){
    var svg = document.getElementById("svg"+params);
    var desc = document.getElementById("desc"+params);
    if(desc.classList.contains('open')){
        desc.classList.remove('open');
        svg.classList.remove('svg_open');
        desc.classList.add('closed');
        svg.classList.add('svg_closed');
        return;
    }
    for(let i=1;i<=6;i++){
        var svg_i = document.getElementById("svg"+i);
        var desc_i = document.getElementById("desc"+i);
        if(desc_i.classList.contains('open')){
            desc_i.classList.remove('open');
            svg_i.classList.remove('svg_open');
            desc_i.classList.add('closed');
            svg_i.classList.add('svg_closed');
        } 
    }
    desc.classList.remove('closed');
    svg.classList.remove('svg_closed');
    desc.classList.add('open');
    svg.classList.add('svg_open');
}
function inputfocused(){
    const label = document.getElementById("hero_label");
    label.style.display = "inline-block";
    label.style.animation = '';
    label.style.animation = 'pushup 0.2s ease-in forwards';
}
function isValidEmail(email) {
    return String(email)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function inputfocusout(){
    const inputEmail = document.getElementById("email_entry");
    const warningLabel = document.getElementById("warning_label");
    const label = document.getElementById("hero_label");
    if(inputEmail.value == null || inputEmail.value == ''){
        label.style.animation = '';
        label.style.animation = 'pushup 0.2s ease-in reverse';
        label.style.display = "none";
        inputEmail.style.borderBottom = "2px solid #EF8317";
        warningLabel.style.display = "block";
        if(currlocation == 'en')
        warningLabel.innerHTML = "Email is required!";
        else if(currlocation == 'hi')
        warningLabel.innerHTML = "ईमेल डालना ज़रूरी है!";
    } else {
        if(isValidEmail(inputEmail.value)){
            inputEmail.style.borderBottom = "none";
            warningLabel.style.display = "none";
        }
        else {
            inputEmail.style.borderBottom = "2px solid #EF8317";
            warningLabel.style.display = "block";
            if(currlocation == 'en')
            warningLabel.innerHTML = "Please enter a valid email address.";
            else if(currlocation == 'hi')
            warningLabel.innerHTML = 'कृपया सही ईमेल एड्रेस डालें';
        }
    }
    inputEmail.addEventListener('input',event => {
        const input_email = document.getElementById("email_entry");
        const warning_label = document.getElementById("warning_label");
        if(input_email.value == null || input_email.value == ''){
            inputEmail.style.borderBottom = "2px solid #EF8317";
            warning_label.style.display = "block";
            if(currlocation == 'en')
            warningLabel.innerHTML = "Email is required!";
            else if(currlocation == 'hi')
            warningLabel.innerHTML = "ईमेल डालना ज़रूरी है!";
        } else {
            if(isValidEmail(input_email.value)){
                input_email.style.borderBottom = "none";
                warning_label.style.display = "none";
            }
            else {
                input_email.style.borderBottom = "2px solid #EF8317";
                warning_label.style.display = "block";
                if(currlocation == 'en')
                warningLabel.innerHTML = "Please enter a valid email address.";
                else if(currlocation == 'hi')
                warningLabel.innerHTML = 'कृपया सही ईमेल एड्रेस डालें';
            }
        }
    });
}
function inputfocused2(){
    const label = document.getElementById("hero_label2");
    label.style.display = "inline-block";
    label.style.animation = '';
    label.style.animation = 'pushup 0.2s ease-in forwards';
}
function inputfocusout2(){
    const inputEmail = document.getElementById("email_entry2");
    const warningLabel = document.getElementById("warning_label2");
    const label = document.getElementById("hero_label2");
    if(inputEmail.value == null || inputEmail.value == ''){
        label.style.animation = '';
        label.style.animation = 'pushup 0.2s ease-in reverse';
        label.style.display = "none";
        inputEmail.style.borderBottom = "2px solid #EF8317";
        warningLabel.style.display = "block";
        if(currlocation == 'en')
        warningLabel.innerHTML = "Email is required!";
        else if(currlocation == 'hi')
        warningLabel.innerHTML = "ईमेल डालना ज़रूरी है!";
    } else {
        if(isValidEmail(inputEmail.value)){
            inputEmail.style.borderBottom = "none";
            warningLabel.style.display = "none";
        }
        else {
            inputEmail.style.borderBottom = "2px solid #EF8317";
            warningLabel.style.display = "block";
            if(currlocation == 'en')
            warningLabel.innerHTML = "Please enter a valid email address.";
            else if(currlocation == 'hi')
            warningLabel.innerHTML = 'कृपया सही ईमेल एड्रेस डालें';
        }
    }
    inputEmail.addEventListener('input',event => {
        const input_email = document.getElementById("email_entry2");
        const warning_label = document.getElementById("warning_label2");
        if(input_email.value == null || input_email.value == ''){
            inputEmail.style.borderBottom = "2px solid #EF8317";
            warning_label.style.display = "block";
            if(currlocation == 'en')
            warningLabel.innerHTML = "Email is required!";
            else if(currlocation == 'hi')
            warningLabel.innerHTML = "ईमेल डालना ज़रूरी है!";
        } else {
            if(isValidEmail(input_email.value)){
                input_email.style.borderBottom = "none";
                warning_label.style.display = "none";
            }
            else {
                input_email.style.borderBottom = "2px solid #EF8317";
                warning_label.style.display = "block";
                if(currlocation == 'en')
                warningLabel.innerHTML = "Please enter a valid email address.";
                else if(currlocation == 'hi')
                warningLabel.innerHTML = 'कृपया सही ईमेल एड्रेस डालें';
            }
        }
    });
}
document.addEventListener('DOMContentLoaded', function() {
    const lang1 = document.getElementById("lang1");
    const lang2 = document.getElementById("lang2");
    lang1.addEventListener('change',event => {
        if(lang1[lang1.selectedIndex].value == 'hi' && document.URL=='https://netflix-clone-kaustubh.herokuapp.com/'){
            window.location.href = '/in-hi/';
        } else if(lang1[lang1.selectedIndex].value == 'en' && document.URL=='https://netflix-clone-kaustubh.herokuapp.com/in-hi/'){
            window.location.href = '/';
        }
    });
    lang2.addEventListener('change',event => {
        if(lang2[lang2.selectedIndex].value == 'hi' && document.URL=='https://netflix-clone-kaustubh.herokuapp.com/'){
            window.location.href = '/in-hi/';
        } else if(lang2[lang2.selectedIndex].value == 'en' && document.URL=='https://netflix-clone-kaustubh.herokuapp.com/in-hi/'){
            window.location.href = '/';
        }
    });
});