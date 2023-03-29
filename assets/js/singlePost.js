toastr.options.closeButton = true
const overlay = document.getElementById("overlay")

//modal
const ModalDelete = (action = "yes", element = null) => {
    modelDelete = document.querySelector("#modal-delete")

    if (action == "yes" && element != null) {
        var commentElement = element.parentElement.parentElement.parentElement
        var commentId = commentElement.querySelector("#commentId").value
        if (commentId < 1) {
            toastr.warning("Comment id can't found")
            return
        }
        //ajax or fetch  success
        commentElement.remove()

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
        //ajax or fetch get user info
        fakeReturnedCommentId = 99
        fakeUserName = "Ekrem"
        fakeImgPath = "assets/images/user_lego.jpg"
        fakeUserSlug = "Ekrem_1"
        element.parentElement.parentElement.querySelector("textarea").value = "" //clear comment area
        userComments.innerHTML += `<div class="comment ${darkMode} ">
                <div>
                    <div class="comment-info">
                        <a class="userName ${darkMode == "item-dark" ? "item-dark-text" : ""}" href="/${fakeUserSlug}">
                            <img src="${fakeImgPath}" class="comment-sender-img">

                            ${fakeUserName} </a><small class="comment-date">1 second later</small>
                    </div>

                    <div class="comment-content">
                        <p class="comment-inner">
                            ${commentText}                                    
                        </p>
                        <div class="comment-footer">
                            <div>
                                <i class="fa-solid fa-heart icon-heart"></i><span>0</span>
                                <div onclick="createreplyDiv(this)" class="reply-div">
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
                    <input type="hidden" value="${fakeReturnedCommentId}" id="commentId">
                </div>
            </div>`
    }
}


//reply actions

//active reply html


const createreplyDiv = (element) => {
    var darkMode = localStorage.getItem('selectedTheme') == 'dark' ? 'item-dark' : ''
    var parentCommentId = element.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector("#commentId").value;
    //get user info
    fakeUserName = "Ekrem"
    fakeUserSlug = "Ekrem_1"
    fakeImgPath = "assets/images/user_lego.jpg"
    var reply_div = `
            <div class="comment ${darkMode == "item-dark" ? "dark" : ""} reply-active">
            <input type="hidden" value="${parentCommentId}" id="replied-comment-input">
                <div>
                    <div class="comment-info">
                        <a class="userName ${darkMode == "item-dark" ? "item-dark-text" : ""}" href="/${fakeUserSlug}">
                            <img src="${fakeImgPath}" class="comment-sender-img">
                            ${fakeUserName}
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
        createreplyDiv(element)
    }

}

const replyCancel = () => {
    document.querySelector(".reply-active").remove()
}

const deleteReply = (e, replyId) => {
    if (replyId < 1) {
        toastr.warning("Reply id can't found")
        return
    }
    //ajax or fetch remove with replyId 
    //success ->
    e.parentElement.parentElement.parentElement.remove()
}

const reply = (element) => {
    var replyMessage = ""
    replyMessage = document.querySelector(".replies .reply-active .reply-input").value
    var repliedCommentId = document.querySelector(".replies .reply-active #replied-comment-input").value
    if (replyMessage.trim().length < 1) {
        toastr.warning("Reply Message Can't be Empty")
    } else {
        if (repliedCommentId < 1) {
            toastr.warning("Replied comment id can't found")
            return
        }
        //ajax or fetch add with  replies.add commentId-<repliedCommentId
        fakeReturnedReplyId = 99
        fakeUserName = "Ekrem"
        fakeImgPath = "assets/images/user_lego.jpg"
        fakeUserSlug = "Ekrem_1"
        var repliesDiv = element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
        var darkMode = localStorage.getItem('selectedTheme') == 'dark' ? 'item-dark' : ''
        var reply_div = `<div class="comment ${darkMode}">
                        <div>
                            <div class="comment-info">
                                <a class="userName ${darkMode == "item-dark" ? "item-dark-text" : ""}" href="/${fakeUserSlug}">
                                    <img src="${fakeImgPath}" class="comment-sender-img">
                                    ${fakeUserName} 
                                </a><small class="comment-date">1 second later</small>
                                <div onclick="deleteReply(this,${fakeReturnedReplyId})" class="reply-div trash-div trash-reply">
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
        replyCancel()
        repliesDiv.childNodes[7].innerHTML += reply_div
    }
}

//like actions
const postLike = document.querySelector(".post-footer .icon-heart")
const commentLikes = document.querySelectorAll(".comments-area .icon-heart")

commentLikes.forEach(e => {
    e.addEventListener('click', () => {
        const commentId = e.parentElement.parentElement.parentElement.parentElement.querySelector("#commentId").value
        if (commentId < 1) {
            toastr.warning("Comment id can't found")
            return
        }
        if (e.classList.contains("red-color")) {
            //ajax fetch -- with commentId
            var commentCount = parseInt(e.parentElement.querySelector("span").textContent)
            e.parentElement.querySelector("span").textContent = `${--commentCount}`
            e.classList.remove("red-color")
        } else {
            //ajax fetch ++ with commentId
            var commentCount = parseInt(e.parentElement.querySelector("span").textContent)
            e.parentElement.querySelector("span").textContent = `${++commentCount}`
            e.classList.add("red-color")

        }
    })
})

// fake like count 
var fakeLikeCount = 9123
postLike.addEventListener('click', () => {
    const postId = postLike.parentElement.parentElement.parentElement.parentElement.querySelector("#postId").value
    //ajax-fetch  get likeCount with post id and use here    
    if (postId < 1) {
        toastr.warning("Post id can't found, refresh your page")
        return
    }
    if (!postLike.classList.contains("red-color")) { //it mean this post, not liked before 
        //ajax - fetch ++ with postId
        postLike.parentElement.lastElementChild.innerHTML = `${++fakeLikeCount}`
        if (postLike.classList.contains("animate-heart-remove")) {
            postLike.classList.remove("animate-heart-remove")
        }
        postLike.classList.add("red-color")
        postLike.classList.add("animate-heart")
    } else {
        //ajax - fetch -- with postId
        postLike.parentElement.lastElementChild.innerHTML = `${--fakeLikeCount}`
        postLike.classList.remove("animate-heart")
        postLike.classList.remove("red-color")
        postLike.classList.add("animate-heart-remove")

    }


})

//toggleComments
function toggleComments() {
    var comments = document.querySelector(".comments-area")
    if (comments.classList.contains("comments-open")) {
        comments.classList.remove("comments-open")
    } else {
        comments.classList.add("comments-open")
        window.scrollBy(0, 180);
    }
}


function follow(element,userId) {
    //actions
    
}