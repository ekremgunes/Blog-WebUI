const ThemeSwitch = document.querySelector('#switch-input')
const MobileSwitch = document.querySelector("#mobileDarkSwitch")
const body = document.body;
const posts = document.querySelectorAll(".post")

const user_info = document.querySelector(".user-info")
const footer_div = document.querySelector("#footer")
const social_links = document.querySelectorAll("#footer #footer-social-links ul li a")

const left_sidebar = document.querySelector(".left-div")
const left_sidebar_links = document.querySelectorAll(".left-div ul li")

const comments = document.querySelectorAll(".comment")




//                     REPLY ACTİVE İNDEXTE NULL GELDĞİ İÇİN UYGULAMA ÇÖKÜYOR ÇALIŞMIYOR


//localStorage.clear();


//listen the click and call theme changer function
ThemeSwitch.addEventListener('click', () => {

    if (body.classList.contains('light')) {
        changeTheme('dark');//light to dark      
    }
    else if (body.classList.contains('dark')) {

        changeTheme('light'); //dark to light     

    }
})
//listen the click and call theme changer function on mobile
MobileSwitch.addEventListener('click', () => {

    if (body.classList.contains('light')) {
        changeTheme('dark');//light to dark      
    }
    else if (body.classList.contains('dark')) {

        changeTheme('light'); //dark to light     

    }
})

const changeTheme = (theme) => {

    if (theme == 'dark') {
        //swicht color of all area

        body.classList.replace('light', 'dark')

        social_links.forEach(e => {
            e.classList.add("hover-dark")

        })
        user_info.classList.add('item-dark')
        footer_div.classList.add('item-dark')
        posts.forEach(e => {
            e.classList.add('item-dark')
            e.querySelector(".post-info .post-date").classList.add("item-dark-text")
            e.querySelector(".post-info .userName").classList.add("item-dark-text")
            e.querySelector(".post-head").classList.add("item-dark-text")
            e.querySelector(".post-inner").classList.add("item-dark-text")
            e.querySelectorAll(".tag")
                .forEach(t => { t.classList.add("item-dark-text") })
            e.querySelectorAll("span").forEach(span => {
                span.classList.add("item-dark-text")
            })
        })

        if (left_sidebar != null) {
            left_sidebar_links.forEach(element => {
                element.classList.add("item-dark-text")
            })
            left_sidebar.classList.add('item-dark')

        }
        comments.forEach(element => {
            element.classList.add("item-dark")
            element.querySelectorAll("span").forEach(e => {
                e.classList.add("item-dark-text")
            })
            element.querySelectorAll("a.userName").forEach(e => {
                e.classList.add("item-dark-text")
            })

        })
        if (document.querySelectorAll(".replies .reply-active").length == 1) {
            const reply_active = document.querySelector(".replies .reply-active")
            const reply_input = reply_active.querySelector(".reply-input")
            reply_active.classList.add("reply-background")
            reply_active.querySelectorAll("button").forEach(element => {
                element.classList.add("item-dark-text")
                console.log(element)
            });
            console.log(reply_active)
            reply_input.classList.add("item-dark-text")
            reply_input.classList.add("item-dark")
        }



        //local storage
        if (localStorage.getItem('selectedTheme') != 'dark') {
            localStorage.setItem('selectedTheme', 'dark')
            document.querySelector(".slider").classList.remove("slider-old-style")

        }

    }
    else if (theme == 'light') {
        //swicht color of all area
        body.classList.replace('dark', 'light')
        social_links.forEach(e => {
            e.classList.remove("hover-dark")

        })
        user_info.classList.remove('item-dark')
        footer_div.classList.remove('item-dark')
        posts.forEach(e => {
            e.classList.remove('item-dark')
            e.querySelector(".post-info .post-date").classList.remove("item-dark-text")
            e.querySelector(".post-info .userName").classList.remove("item-dark-text")
            e.querySelector(".post-head").classList.remove("item-dark-text")
            e.querySelector(".post-inner").classList.remove("item-dark-text")
            e.querySelectorAll(".tag")
                .forEach(t => {
                    t.classList.remove("item-dark-text")
                })
            e.querySelectorAll("span").forEach(span => {
                span.classList.remove("item-dark-text")
            })
        })

        if (left_sidebar != null) {
            left_sidebar.classList.remove('item-dark')
            left_sidebar_links.forEach(element => {
                element.classList.remove("item-dark-text")
            })
        }
        comments.forEach(element => {
            element.classList.remove("item-dark")
            element.querySelector("a").classList.remove("item-dark-text")
            element.querySelectorAll("span").forEach(e => {
                e.classList.remove("item-dark-text")
            })
        })
        if (document.querySelectorAll(".replies .reply-active").length == 1) {
            const reply_active = document.querySelector(".replies .reply-active")
            const reply_input = reply_active.querySelector(".reply-input")
            reply_active.classList.remove("reply-background")
            reply_active.querySelectorAll("button").forEach(element => {
                element.classList.remove("item-dark-text")
            });
            reply_input.classList.remove("item-dark-text")
            reply_input.classList.remove("item-dark")
        }

        //local storage
        if (localStorage.getItem('selectedTheme') == 'dark') {
            localStorage.removeItem('selectedTheme')
            document.querySelector(".slider").classList.add("slider-old-style")
        }

    }
}
function localDarkCheck() {
    if (localStorage.getItem('selectedTheme') == 'dark') {
        ThemeSwitch.setAttribute('checked', true)
        changeTheme('dark')
    } else {
        ThemeSwitch.removeAttribute('checked')
        changeTheme('light')
    }
}
localDarkCheck()
