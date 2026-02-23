// job Application Tracker + available jobs btn togole
let interviewList = [];
let rejectedList = [];
let currentStatas = 'all';

let totalCount = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");

const totalCartBox = document.getElementById("total-cart-box");

const allTogolBtn = document.getElementById("all-togol-btn");
const cartOne = document.getElementById("cartOne")
// console.log(allTogolBtn);


// for togol btn collor cgange

const allBtn = document.getElementById("all-btn");
const interviewBtn = document.getElementById("interview-btn");
const rejectedBtn = document.getElementById("rejected-btn");

// filtered id ke dorlam
const filteredSection = document.getElementById("filtered-section");

//noJobsavailable id ke dorlam
const noJobsAvailable = document.getElementById("no-jobs-available");

//for total interview+rejected count


let totalchance = document.getElementById("interviewRejected");


// function for Count Job application Tracker

function calculateCount() {
  totalCount.innerText = totalCartBox.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}
calculateCount();

// for togolSystem  btn collor cgange


function togolstyle(id) {
  allBtn.classList.remove("bg-black", "text-white");
  interviewBtn.classList.remove("bg-black", "text-white");
  rejectedBtn.classList.remove("bg-black", "text-white");

  allBtn.classList.add("bg-white", "text-black");
  interviewBtn.classList.add("bg-white", "text-black");

  rejectedBtn.classList.add("bg-white", "text-black");


  const selected = document.getElementById(id);

  currentStatas = id;

  selected.classList.remove("bg-white", "text-black");
  selected.classList.add("bg-black", "text-white");


  if(id =='interview-btn') {

    totalCartBox.classList.add("hidden");
    filteredSection.classList.remove("hidden");
    if(interviewList.length ===0){
      noJobsAvailable.classList.remove("hidden")
    }else{
      noJobsAvailable.classList.add("hidden")
    }
    newCartBox();
    

  }else if(id =="all-btn"){

    totalCartBox.classList.remove("hidden");
    filteredSection.classList.add("hidden");
    noJobsAvailable.classList.add("hidden");

  }else if(id == "rejected-btn"){
    totalCartBox.classList.add("hidden");
    filteredSection.classList.remove("hidden");
    if(rejectedList.length ===0){
      noJobsAvailable.classList.remove("hidden")
    }else{
      noJobsAvailable.classList.add("hidden")
    }
    newCartBoxTwo();

  }

}

// for interviewRejented id er jonno ,count total er jonno

function updateTotalChance(){
  totalchance.innerText = interviewList.length + rejectedList.length;
}


// INTERVIEW BTN ER JONNO-----AITA available jobs section er modde

totalCartBox.addEventListener("click", function (event) {
    

  if (event.target.classList.contains("btn-interview")) {

    // totalchance.innerText = interviewList.length + rejectedList.length;
    
    const parentNode = event.target.parentNode.parentNode;

    const companyName = parentNode.querySelector(".companyName").innerText;
    const skill = parentNode.querySelector(".skill").innerText;
    const trashBtn = parentNode.querySelector(".trashBtn").innerText;
    const jobType = parentNode.querySelector(".jobType").innerText;
    const notAppliedBtn = parentNode.querySelector(".notAppliedBtn").innerText;
    const worksType = parentNode.querySelector(".worksType").innerText;

    parentNode.querySelector(".notAppliedBtn").innerText = "INTERVIEW"

    const cartInfo = {
      companyName,
      skill,
      trashBtn,
      jobType,
      notAppliedBtn:"INTERVIEW",
      worksType
    };
    //   console.log(cartInfo);
    const jobExist = interviewList.find(
      (item) => item.companyName == cartInfo.companyName,
    );

    if (!jobExist) {
      interviewList.push(cartInfo);
    }

    rejectedList =rejectedList.filter(item=> item.companyName !=cartInfo.companyName)

     updateTotalChance();

    calculateCount();

    if(currentStatas =="rejected-btn") {
      newCartBoxTwo();

    }

    if (currentStatas === "rejected-btn") {
      togolstyle("interview-btn");
    }
    //----------------------------------
    
  }
  else if (event.target.classList.contains("btn-rejected")) {
  
    // totalchance.innerText = interviewList.length + rejectedList.length;

    const parentNode = event.target.parentNode.parentNode;

    const companyName = parentNode.querySelector(".companyName").innerText;
    const skill = parentNode.querySelector(".skill").innerText;
    const trashBtn = parentNode.querySelector(".trashBtn").innerText;
    const jobType = parentNode.querySelector(".jobType").innerText;
    const notAppliedBtn = parentNode.querySelector(".notAppliedBtn").innerText;
    const worksType = parentNode.querySelector(".worksType").innerText;

    parentNode.querySelector(".notAppliedBtn").innerText = "REJECTED"

    const cartInfo = {
      companyName,
      skill,
      trashBtn,
      jobType,
      notAppliedBtn:"REJECTED",
      worksType
    };
    //   console.log(cartInfo);
    const rejectExist = rejectedList.find(
      (item) => item.companyName == cartInfo.companyName,
    );

    if (!rejectExist) {
      rejectedList.push(cartInfo);
    }

    interviewList =interviewList.filter(item=> item.companyName !=cartInfo.companyName)

     updateTotalChance();

    if(currentStatas == "interview-btn") {
      newCartBox();

    }

    calculateCount();

    // ----------------------

    if (currentStatas === "interview-btn") {
      togolstyle("rejected-btn");
    }


  }

///Trash icon btn for dellect 

  else if (event.target.classList.contains("trashBtn")) {

    const parentNode = event.target.parentNode.parentNode.parentNode;

    const companyName =
      parentNode.querySelector(".companyName").innerText;
    parentNode.remove();

    interviewList = interviewList.filter(
      item => item.companyName !== companyName
    );

    rejectedList = rejectedList.filter(
      item => item.companyName !== companyName
    );

    // count
    calculateCount();
    updateTotalChance();

    if (currentStatas === "interview-btn") {
      newCartBox();
    }

    if (currentStatas === "rejected-btn") {
      newCartBoxTwo();
    }
  }

  
});


// new cartBox function er jonno 2 ta section nice ase akta interview er  & rejected er jonne

//FOR 1 ---> interview success houyar jonno

function newCartBox() {

  if (interviewList.length === 0) {
    noJobsAvailable.classList.remove("hidden");
  } else {
    noJobsAvailable.classList.add("hidden");
  }

  //-------------------------
  
  filteredSection.innerHTML = "";

  for (let interview of interviewList) {
    console.log(interview);
    let div = document.createElement("div");
    div.className = "w-[95%] sm:w-[92%] md:w-[77%] mx-auto p-6 bg-[#ffffff] my-7 space-y-3 rounded-[5px] ";
    div.innerHTML = `
        <div class="flex justify-between items-center ">
          <div>
            <h1 class="companyName font-medium text-[#002C5C]"> ${interview.companyName} </h1>
            <p class="skill" >${interview.skill} </p>
          </div>

          <div
            class="p-2 border-2 border-zinc-200 rounded-[50%] flex justify-center items-center"
          >
            <i class="trashBtn fa-solid fa-trash-can"></i>
          </div>
        </div>

        <p class="jobType" > ${interview.jobType} </p>
        <button class="notAppliedBtn  px-3 py-2 bg-[#EEF4FF] text-green-500 rounded-[5px]">${interview.notAppliedBtn}
        
        </button>
        <p class="worksType" >
        ${interview.worksType}
          
        </p>

        <div>
          <button
            class=" btn-interview px-3 py-2 bg-[#3bc947] text-green-800 border  rounded-[5px]"
          >
            INTERVIEW
          </button>

          <button
            class="btn-rejected px-3 py-2 bg-[#FFFFFF] text-red-500 border-2 border-red-500 rounded-[5px]"
          >
            REJECTED
          </button>
        </div>`;
    filteredSection.appendChild(div)    

  }
}

//FOR 2 ---> Rejected succeess houyar jonno

function newCartBoxTwo() {

  if (rejectedList.length === 0) {
    noJobsAvailable.classList.remove("hidden");
  } else {
    noJobsAvailable.classList.add("hidden");
  }

  filteredSection.innerHTML = "";

  for (let rejected of rejectedList) {
    
    let div = document.createElement("div");
    div.className = "w-[95%] sm:w-[92%] md:w-[77%] mx-auto p-6 bg-[#ffffff] my-7 space-y-3 rounded-[5px]";
    div.innerHTML = `
        <div class="flex justify-between items-center">
          <div>
            <h1 class="companyName font-medium text-[#002C5C]"> ${rejected.companyName} </h1>
            <p class="skill" >${rejected.skill} </p>
          </div>

          <div
            class="p-2 border-2 bg-red-600 text-amber-500 rounded-[50%] flex justify-center items-center"
          >
            <i class="trashBtn fa-solid fa-trash-can"></i>
          </div>
        </div>

        <p class="jobType  " > ${rejected.jobType} </p>
        <button class="notAppliedBtn  px-3 py-2 bg-[#EEF4FF] text-red-500 rounded-[5px]">${rejected.notAppliedBtn}
        
        </button>
        <p class="worksType" >
        ${rejected.worksType}
          
        </p>

        <div>
          <button
            class="btn-interview px-3 py-2 bg-[#FFFFFF] text-green-500 border-2 border-green-500 rounded-[5px]"
          >
            INTERVIEW
          </button>

          <button
            class="btn-rejected px-3 py-2 text-[#f70909] bg-red-400 border-2 border-red-500 rounded-[5px]"
          >
            REJECTED
          </button>
        </div>`;

    filteredSection.appendChild(div)    

  }
}


//dellet for filtered section .......>>>>

filteredSection.addEventListener("click", function (event) {

  if (event.target.classList.contains("trashBtn")) {

    const parentNode = event.target.closest(".p-6");

    const companyName =
      parentNode.querySelector(".companyName").innerText;

    parentNode.remove();

    interviewList = interviewList.filter(
      item => item.companyName !== companyName
    );

    rejectedList = rejectedList.filter(
      item => item.companyName !== companyName
    );

    // count update

    calculateCount();
    updateTotalChance();

    if (currentStatas === "interview-btn") {
      newCartBox();
    }
    if (currentStatas === "rejected-btn") {
      newCartBoxTwo();
    }

  }

  /**
   * all tab thke INTERVIEW button a click korar por interview tab a cart ta jauyar por  REJECTED button a click korle ,tokon cart ta interview button thake remove hoye reject button a niye jauyar jonno--->
   */
  

if (event.target.classList.contains("btn-interview")) {

  const parentNode = event.target.closest(".p-6");

  const companyName =
    parentNode.querySelector(".companyName").innerText;

  rejectedList = rejectedList.filter(
    item => item.companyName !== companyName
  );

  const jobExist = interviewList.find(
    item => item.companyName === companyName
  );

  if (!jobExist) {
    interviewList.push({
      companyName: companyName,
      skill: parentNode.querySelector(".skill").innerText,
      jobType: parentNode.querySelector(".jobType").innerText,
      worksType: parentNode.querySelector(".worksType").innerText,
      notAppliedBtn: "INTERVIEW"
    });
  }

  calculateCount();
  updateTotalChance();

  if (currentStatas === "rejected-btn") {
    newCartBoxTwo();
  }

  if (currentStatas === "interview-btn") {
    newCartBox();
  }
}



else if (event.target.classList.contains("btn-rejected")) {

  const parentNode = event.target.closest(".p-6");

  const companyName =
    parentNode.querySelector(".companyName").innerText;


  // interview list thke remove korbo------>

  interviewList = interviewList.filter(
    item => item.companyName !== companyName
  );

  const jobExist = rejectedList.find(
    item => item.companyName === companyName
  );

  if (!jobExist) {
    rejectedList.push({
      companyName: companyName,
      skill: parentNode.querySelector(".skill").innerText,
      jobType: parentNode.querySelector(".jobType").innerText,
      worksType: parentNode.querySelector(".worksType").innerText,
      notAppliedBtn: "REJECTED"
    });
  }
  calculateCount();
  updateTotalChance();
  
  if (currentStatas === "interview-btn") {
    newCartBox();
  }

  if (currentStatas === "rejected-btn") {
    newCartBoxTwo();
  }
}

});
