// job Application Tracker + available jobs btn togole
let interviewList = [];
let rejectedList = [];

let totalCount = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");

const totalCartBox = document.getElementById("total-cart-box");

const allTogolBtn = document.getElementById("all-togol-btn");
console.log(allTogolBtn)

// for togol btn collor cgange
const allBtn =document.getElementById("all-btn");
const interviewBtn =document.getElementById("interview-btn");
const rejectedBtn =document.getElementById("rejected-btn");

// function for Count Job application Tracker
function calculateCount(){
    totalCount.innerText = totalCartBox.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;

}
calculateCount();

// for togol btn collor cgange
function togolstyle(id){
    allBtn.classList.remove('bg-black','text-white')
    interviewBtn.classList.remove('bg-black','text-white')
    rejectedBtn.classList.remove('bg-black','text-white')

    allBtn.classList.add('bg-white','text-black')
    interviewBtn.classList.add('bg-white','text-black')
    rejectedBtn.classList.add('bg-white','text-black')

    const selected =document.getElementById(id);
    selected.classList.remove("bg-white","text-black")
    selected.classList.add('bg-black','text-white')
}
