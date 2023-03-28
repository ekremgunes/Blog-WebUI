toastr.options.closeButton = true
const overlay = document.getElementById("overlay")


//modal
const ModalDelete = (action = "yes", element = null) => {
    modelDelete = document.querySelector("#modal-delete")
    
    if (action == "yes" && element != null) {
        //ajax success
        element.parentElement.parentElement.parentElement.remove()

    }
    if (overlay != null) {
        overlay.style.display = "none"
    }    
    if (modelDelete != null) {
        $("#modal-delete").remove()     
    }
}

const deleteComment = (e) => {
    var comment = e.parentElement.parentElement.parentElement.parentElement.parentElement
    comment.innerHTML += `<div id="modal-delete">
    <p>Do you confirm this?</p>
    <div class="modal-delete-footer">
        <button onclick="ModalDelete('no')" class="no-btn"><i class="fa-solid fa-xmark"></i></button>
        <button onclick="ModalDelete('yes',this)" class="yes-btn"><i
                class="fa-solid fa-check fa-bounce"></i></button>

        </div>
    </div> `
    overlay.style.display = "block"

}

//comment actions
const userComments = document.querySelector(".comments-area .user-comments")
const SendComment = (element) => {
    var commentText = element.parentElement.parentElement.querySelector("textarea").value
    var darkMode = localStorage.getItem('selectedTheme') == 'dark' ? 'item-dark' : ''
    if (commentText.trim().length < 1) {
        toastr.warning("Comment area can't be empty")
    } else {
        //ajax
        //success döndü ekle 
        element.parentElement.parentElement.querySelector("textarea").value = ""
        userComments.innerHTML += `<div class="comment ${darkMode} ">
                <div>
                    <div class="comment-info">
                        <a class="userName ${darkMode == "item-dark" ? "item-dark-text" : ""}" href="#userprofile">
                            <img src="assets/images/user_lego.jpg" class="comment-sender-img">

                            legoLover333 </a><small class="comment-date">1 second later</small>
                    </div>

                    <div class="comment-content">
                        <p class="comment-inner">
                            ${commentText}                                    
                        </p>
                        <div class="comment-footer">
                            <div>
                                <i class="fa-solid fa-heart icon-heart"></i><span>0</span>
                                <div onclick="replyComment(this)" class="reply-div">
                                    <i class="fa-solid fa-reply icon-reply"></i> <span>reply</span>
                                </div>
                                <div onclick="deleteComment(this)" class="reply-div trash-div">
                                    <i class="fa-solid fa-trash"></i>
                                </div>
                            </div>
                        </div>
                        <!-- comment replies -->
                        <div class="replies"></div>
                    </div>

                </div>
                

            </div>`
    }
}


//reply actions

//active reply html


const replyComment = (element) => {
    var darkMode = localStorage.getItem('selectedTheme') == 'dark' ? 'item-dark' : ''

    var reply_div = `
            <div class="comment ${darkMode == "item-dark" ? "dark" : ""} reply-active">
                <div>
                    <div class="comment-info">
                        <a class="userName ${darkMode == "item-dark" ? "item-dark-text" : ""}" href="#userprofile">
                                <img src="assets/images/user_lego.jpg" class="comment-sender-img">

                                legoLover333
                        </a>
                        </div>
                            <div class="comment-content reply-content">
                                <textarea name="replyInput" class="reply-input" cols="70"
                                    rows="2">
                                </textarea>
                                <div class="reply-footer">
                                <button onclick="replyCancel(this)" class="reply-cancel-btn">
                                    <i class="fa-solid fa-ban"></i>Cancel</button>
                                <button onclick="reply(this)" class="reply-btn"><i
                                class="fa-solid fa-reply icon-reply"></i>Send</button>
                            </div>
                        </div>
                    </div>
            </div>
        `;
    if (document.querySelectorAll(".replies .reply-active").length == 0) {
        var repliesDiv = element.parentNode.parentNode.parentNode;
        repliesDiv.childNodes[7].innerHTML += reply_div
        repliesDiv.querySelector(".reply-input").focus()
    }
    else if (document.querySelectorAll(".replies .reply-active").length == 1) {
        replyCancel()
        replyComment(element)
    }

}

const replyCancel = () => {
    document.querySelector(".reply-active").remove()
}

const deleteReply = (e) => {
    //modal
    //ajax remove success
    e.parentElement.parentElement.parentElement.remove()
}

const reply = (element) => {
    var replyMessage = ""
    replyMessage = document.querySelector(".replies .reply-active .reply-input").value
    if (replyMessage.trim().length < 1) {
        toastr.warning("Reply Message Can't be Empty")
    } else {
        //ajax 
        //success 
        var repliesDiv = element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
        replyCancel()
        var darkMode = localStorage.getItem('selectedTheme') == 'dark' ? 'item-dark' : ''

        var reply_div = `<div class="comment ${darkMode}">
                        <div>
                            <div class="comment-info">
                                <a class="userName ${darkMode == "item-dark" ? "item-dark-text" : ""}" href="#userprofile">
                                    <img src="assets/images/user_lego.jpg" class="comment-sender-img">
                                    legoLover333 
                                </a><small class="comment-date">1 second later</small>
                                <div onclick="deleteReply(this)" class="reply-div trash-div trash-reply">
                                <i class="fa-solid fa-trash"></i>
                                </div>    
                            </div>
                            <div class="comment-content">
                                <p class="comment-inner">
                                    ${replyMessage} 
                                <p>
                                    
                            </div>
                        </div>
                    </div>`;
        repliesDiv.childNodes[7].innerHTML += reply_div
    }
}

//like actions
const postLike = document.querySelector(".post-footer .icon-heart")
const commentLikes = document.querySelectorAll(".comments-area .icon-heart")

commentLikes.forEach(e => {
    e.addEventListener('click', () => {
        if (e.classList.contains("red-color")) {
            //ajax remove
            var commentCount = parseInt(e.parentElement.querySelector("span").textContent)
            e.parentElement.querySelector("span").textContent = `${--commentCount}`
            e.classList.remove("red-color")
        } else {
            //ajax add
            var commentCount = parseInt(e.parentElement.querySelector("span").textContent)
            e.parentElement.querySelector("span").textContent = `${++commentCount}`
            e.classList.add("red-color")

        }
    })
})

postLike.addEventListener('click', () => {
    var likeCount = parseInt(postLike.parentElement.lastElementChild.innerHTML)
    if (!postLike.classList.contains("red-color")) {
        //ajax add
        postLike.parentElement.lastElementChild.innerHTML = `${++likeCount}`
        if (postLike.classList.contains("animate-heart-remove")) {
            postLike.classList.remove("animate-heart-remove")
        }
        postLike.classList.add("red-color")
        postLike.classList.add("animate-heart")
    } else {
        //ajax remove
        likeCount--
        postLike.parentElement.lastElementChild.innerHTML = `${likeCount}`

        postLike.classList.remove("animate-heart")
        postLike.classList.remove("red-color")
        postLike.classList.add("animate-heart-remove")

    }


})
