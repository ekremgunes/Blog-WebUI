const ThemeSwitch = document.querySelector('#switch-input')
const MobileSwitch = document.querySelector("#mobileDarkSwitch")
const body = document.body


//theme classes
const dark = "item-dark";
const darkText = "item-dark-text";




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
    const comments = document.querySelectorAll(".comment")
    const posts = document.querySelectorAll(".post")
    const footerDiv = document.querySelector("#footer")
    const socialLinks = document.querySelectorAll("#footer #footer-social-links ul li a")
    const footerLinks = document.querySelectorAll(".footer-links a")
    const leftSidebar = document.querySelector(".left-div")
    const leftSidebarLinks = document.querySelectorAll(".left-div ul li")
    const hamburgerDivSpans = document.querySelectorAll("#hamburgerDiv span")
    const editorArea = document.querySelector(".editorArea")
    const userInfo = document.querySelector(".user-info")
    const settingsArea = document.querySelector(".settings-area")
    const filterDiv = document.querySelector(".filters")
    
    if (theme == 'dark') {
        //swicht color of all area

        body.classList.replace('light', 'dark')

        //local storage
        if (localStorage.getItem('selectedTheme') != 'dark') {
            localStorage.setItem('selectedTheme', 'dark')
            document.querySelector(".slider").classList.remove("slider-old-style")

        }
        //other elements
        socialLinks.forEach(e => {
            e.classList.add("hover-dark")

        })
        footerLinks.forEach(e => {
            e.classList.add(darkText)

        })
        if (userInfo != null) {
            userInfo.classList.add(dark)
        }
        if (footerDiv != null) {
            footerDiv.classList.add(dark)

        }
        if (settingsArea != null) {
            settingsArea.classList.add(dark)
        }
        if (posts.length > 0) {
            posts.forEach(e => {
                e.classList.add(dark)
                e.querySelector(".post-info .post-date").classList.add(darkText)
                e.querySelector(".post-info .userName").classList.add(darkText)
                e.querySelector(".post-head").classList.add(darkText)
                e.querySelector(".post-inner").classList.add(darkText)
                e.querySelectorAll(".tag")
                    .forEach(t => { t.classList.add(darkText) })
                e.querySelectorAll("span").forEach(span => {
                    span.classList.add(darkText)
                })
            })
        }
        if (editorArea != null) {
            editorArea.classList.add(dark)
        }
        if (hamburgerDivSpans.length > 0) {
            hamburgerDivSpans.forEach(e=>{
                e.style.backgroundColor = "white"
            })
        }
        if (leftSidebar != null) {
            leftSidebarLinks.forEach(element => {
                element.classList.add(darkText)
            })
            leftSidebar.classList.add(dark)

        }
        if (filterDiv != null) {
            filterDiv.classList.add(dark)
            filterDiv.querySelectorAll("div:nth-child(1) button").forEach(e => {
                e.classList.add(dark)
            })
        }

        if (comments.length > 0) {
            comments.forEach(element => {
                element.classList.add(dark)
                element.querySelectorAll("span").forEach(e => {
                    e.classList.add(darkText)
                })
                element.querySelectorAll("a.userName").forEach(e => {
                    e.classList.add(darkText)
                })

            })
        }

        if (document.querySelector(".comment-textarea")) {
            document.querySelector(".comment-textarea").classList.add(darkText)

        }
        if (document.querySelector(".toggle-comments")) {
            document.querySelector(".toggle-comments").classList.add(dark)
        }

        if (document.querySelectorAll(".replies .reply-active").length == 1) {
            const reply_active = document.querySelector(".replies .reply-active")
            const reply_input = reply_active.querySelector(".reply-input")
            reply_active.classList.add("reply-background")
            reply_active.querySelectorAll("button").forEach(element => {
                element.classList.add(darkText)
            });
            reply_input.classList.add(darkText)
            reply_input.classList.add(dark)
        }

    }
    else if (theme == 'light') {
        //swicht color of all area
        body.classList.replace('dark', 'light')

        //local storage
        if (localStorage.getItem('selectedTheme') == 'dark') {
            localStorage.removeItem('selectedTheme')
            document.querySelector(".slider").classList.add("slider-old-style")
        }
        //other  elements

        socialLinks.forEach(e => {
            e.classList.remove("hover-dark")

        })
        footerLinks.forEach(e => {
            e.classList.remove(darkText)

        })
        if (userInfo != null) {
            userInfo.classList.remove(dark)

        }
        if (footerDiv != null) {
            footerDiv.classList.remove(dark)

        }
        if (settingsArea != null) {
            settingsArea.classList.remove(dark)
        }

        if (leftSidebar != null) {
            leftSidebar.classList.remove(dark)
            leftSidebarLinks.forEach(element => {
                element.classList.remove(darkText)
            })
        }
        if (posts.length > 0) {
            posts.forEach(e => {
                e.classList.remove(dark)
                e.querySelector(".post-info .post-date").classList.remove(darkText)
                e.querySelector(".post-info .userName").classList.remove(darkText)
                e.querySelector(".post-head")?.classList.remove(darkText)
                e.querySelector(".post-inner")?.classList.remove(darkText)
                e.querySelectorAll(".tag")
                    .forEach(t => {
                        t.classList.remove(darkText)
                    })
                e.querySelectorAll("span").forEach(span => {
                    span.classList.remove(darkText)
                })
            })
        }
        if (editorArea != null) {
            editorArea.classList.remove(dark)
        }
        if (filterDiv != null) {
            filterDiv.classList.remove(dark)
            filterDiv.querySelectorAll("div:nth-child(1) button").forEach(e => {
                e.classList.remove(dark)
            })

        }
        if (hamburgerDivSpans.length > 0) {
            hamburgerDivSpans.forEach(e=>{
                e.style.backgroundColor = "black"
            })
        }
        if (comments.length > 0) {
            comments.forEach(element => {
                element.classList.remove(dark)

                element.querySelectorAll("span").forEach(e => {
                    e.classList.remove(darkText)
                })
                element.querySelectorAll("a.userName").forEach(e => {
                    e.classList.remove(darkText)
                })
            })
        }

        if (document.querySelector(".comment-textarea")) {
            document.querySelector(".comment-textarea").classList.remove(darkText)

        }
        if (document.querySelector(".toggle-comments")) {
            document.querySelector(".toggle-comments").classList.remove(dark)
        }
        if (document.querySelectorAll(".replies .reply-active").length == 1) {
            const reply_active = document.querySelector(".replies .reply-active")
            const reply_input = reply_active.querySelector(".reply-input")
            reply_active.classList.remove("reply-background")
            reply_active.querySelectorAll("button").forEach(element => {
                element.classList.remove(darkText)
            });
            reply_input.classList.remove(darkText)
            reply_input.classList.remove(dark)
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
