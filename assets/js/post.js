toastr.options.closeButton = true
const overlay = document.getElementById("overlay")
const modalDelete = document.getElementById("modal-delete")
//modal
const ModalDelete = (action, isShow = "false") => {
    if (isShow == "true") {
        modalDelete.style.display = "block"
        overlay.style.display = "block"
    } else {
        modalDelete.style.display = "none"
        overlay.style.display = "none"
    }
    if (action == "yes") {
        return 'yes'
    } else if (action == "no") {
        return "no"
    }
    return ""

}
//modal end
//                             YES NO DAN- PARENT PARENT DİYEREK İÇERİĞE ULAŞ VE SİL İÇERİĞİ THİS İLE GÖNDERSİN YANINDA TRUE GELİRSE SİL GELMEZSE DEFAULT FALSE SİLME AYNISI OVERLAY İÇİNDE DEFAULT FALSE SİLME
const deleteComment = (e) => {
    // var c = confirm("onay")
    // console.log(c)
    // ModalDelete("", "true") == "yes" ?
    //     e.parentElement.parentElement.parentElement.parentElement.parentElement.remove() : "";

}

//comment actions
const userComments = document.querySelector(".comments-area .user-comments")
const SendComment = (element) => {
    var commentText = element.parentElement.parentElement.querySelector("textarea").value

    if (commentText.trim().length < 1) {
        toastr.warning("Comment area can't be empty")
    } else {
        //ajax
        //success döndü ekle 
        element.parentElement.parentElement.querySelector("textarea").value = ""
        userComments.innerHTML += `<div class="comment">
                <div>
                    <div class="comment-info">
                        <a class="userName" href="#userprofile">
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
var reply_div = `
            <div class="comment reply-active">
                <div>
                    <div class="comment-info">
                        <a class="userName" href="#userprofile">
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

const replyComment = (element) => {

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
        //ajax işlemi yapıldı
        //success döndü
        var repliesDiv = element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
        replyCancel()

        var reply_div = `<div class="comment">
                        <div>
                            <div class="comment-info">
                                <a class="userName" href="#userprofile">
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
