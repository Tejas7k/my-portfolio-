let index = 0;
let myButton = $("#my-btn");
let projectName = $("#project-name");
let projectWork = $("#project-work");
let projectQuote = $("#project-quote");
let projectImage = $("#project-image");

let projects = [
    {
        name: "Face Recognition Attendance System",
        work: "(HTML,CSS,PYTHON,FLASK)",
        image: "face ras.jfif",
        text: "The Face Recognition Attendance System creates a user profile by capturing multiple images of their face for identification. It matches the face in real-time when the user is present, displaying their name, ID, and recording attendance details"
    },
    {
        name: "Cloud Based Centralized System Management",
        work: "Java,WebSockets,AWS,Javascript,PostgreSQL.",
        image: "cloud.jfif",
        text: "Developed a cloud-integrated system using Java, enabling      remote control and automation of multiple project PCs. Implemented real-time communication with WebSocket, email notifications via JavaMail API, and a centralized dashboard for monitoring."
    }
];

let me = {
    name: "Tejas Khutwad",
    label: "logo",
    image: "profilephoto.jfif",
    location: {
        state: "Maharashatra",
        city: "Pune"
    },
    email: "khutwadtejas7@gmail.com",
    social: {
        instagram: {
            name: "Tejas Khutwad",
            url: ""
        },
        linkedin: {
            name: "LinkedIn",
            url: "linkedin.com/in/tejas-khutwad7"
        },
        github: {
            name: "GitHub",
            url: "https://github.com/tejas7k"
        },
        x: {
            name: "X",
            url: "https://x.com/Tejaskhutwad7?t=jhMLD1gVTaCMh_P3Rj1tmQ&s=09"
        }
    },
    skill: {
        java: {
            name: "Java",
            value: 70
        },
        js: {
            name: "JavaScript",
            value: 80
        },
        sql: {
            name: "Sql",
            value: 80
        },
        html: {
            name: "HTML",
            value: 90
        },
        css: {
            name: "CSS",
            value: 90
        }
    }
}


$(".mobile-button").click(
    function() {
        $('.generic-container').toggleClass("active");
    }
);

$("#my-image").css("background", `url(" ${me.image}") no-repeat 100%/cover`);
$(".my-name").html(me.name);
$(".my-email").html(me.email);
$(".my-insta").html(me.social.instagram.name);
$(".my-location").html(me.location.city + ', ' + me.location.state);

projectName.html(projects[index].name);
projectWork.html(projects[index].work);
projectQuote.html(`"${projects[index].text}"`);
projectImage.css("background", `url(" ${projects[index].image} ") no-repeat 100%/cover`);

let changeproject = (value) => {
    if(value === '+') {
        if(index+1 > projects.length-1) {
            index = 0;
        } else {
            index++;
        }
    } else if(value === '-') {
        if(index-1 < 0) {
            index = projects.length-1;
        } else {
            index--;
        }
    }
    projectName.html(projects[index].name);
    projectWork.html(projects[index].work);
    projectQuote.html('"' + projects[index].text + '."');
    projectImage.css("background", `url(" ${projects[index].image} ") no-repeat 100%/cover`);
}

let topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
let scrollFunction = () => {
    document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 ? myButton.css("display", "block") : myButton.css("display", "none");
}

let setSkill = function (id, skillValue) {
    let skill =  document.getElementById(id + '-value');
    skill.innerHTML = skillValue + '%';
    skill.style.left = (skillValue-5) + '%';

    document.getElementById(id + '-btn').style.left = (skillValue-2) + '%';
    document.getElementById(id + '-progress').style.width = skillValue + '%';
}

setSkill("css", me.skill.sql.value);
setSkill("js", me.skill.js.value);
setSkill("sql", me.skill.sql.value);
setSkill("html", me.skill.html.value);
setSkill("java", me.skill.java.value);
