const inbox = document.querySelector("#heading");
const subheading = document.querySelector("#subheading");
const openButton = document.querySelector("#open-button");
const unreadButton = document.querySelector("#mark-button");

const markasRead = (e) =>{
    e.target.classList.add("is-read");
    inbox.classList.remove("hidden");

};
openButton.addEventListener("click", markasRead);

const changeFontColor = (e) =>{
    e.target.classList.add("blue-text");
};

inbox.addEventListener("click", changeFontColor)

subheading.addEventListener("click", changeFontColor)

//Reply button shows text box (remove hidden)
const replyButton = document.querySelector("#reply-button");
const replyMessage = document.querySelector("#reply-message");

const openReplyMessage =  () =>{
    replyMessage.classList.remove("hidden");
};

replyButton.addEventListener("click", openReplyMessage);

//Send and cancel button hide text box (add hidden)
const sendButton = document.querySelector("#send-button");
const cancelButton = document.querySelector("#cancel-button");

const closeReplyMessage =  () =>{
    replyMessage.classList.add("hidden");
};

sendButton.addEventListener("click", closeReplyMessage);
cancelButton.addEventListener("click",closeReplyMessage);

