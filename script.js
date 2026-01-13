const inbox = document.querySelector("#heading");
const subheading = document.querySelector("#subheading");
const openButton = document.querySelector("#open-button");
const unreadButton = document.querySelector("#mark-button");
const markRead = document.querySelector("#mark-button");
const entireInbox = document.querySelector("#inbox");
const inboxMessage = document.querySelector("#inbox-message");
const close = document.querySelector("#close");


// marks unread messages (Spicy Activity) - PART 1
const markAsRead = (e) =>{
    inboxMessage.classList.add("hidden");
    entireInbox.classList.remove("is-read");
    markRead.classList.add("hidden");
}
markRead.addEventListener("click", markAsRead);

//open and closes message (Medium Activity) - PART 1

const openMessage = (e) =>{
    entireInbox.classList.add("is-read");
    inboxMessage.classList.remove("hidden");
    markRead.classList.remove("hidden");
};
openButton.addEventListener("click", openMessage);

const exit = (e) =>{
    inboxMessage.classList.add("hidden");
};
close.addEventListener("click", exit);

//change font color of heading when clicked

const changeFontColor = (e) =>{
    e.target.classList.toggle("blue-text");
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

