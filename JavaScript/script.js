let magicBtns = document.querySelectorAll(".magicBtn");
magicBtns.forEach(magicBtn => {
    magicBtn.addEventListener("click", function(event){
        event.preventDefault(event);
        // 1st alert
        alert("Board update Successfully👌");
        // button disable
        if (magicBtn.enabled = true ){
            magicBtn.disabled = true; 
        }
        // task count
        let navCount = document.getElementById("nav-task-compleat").innerText;
        let navCountIncrease = parseInt(navCount);
        let taskAssigned = document.getElementById("taskAssigned").innerText;
        let taskAssignedDecrease = taskAssigned;

        let result1 = navCountIncrease + 1 ;
        let result2 = taskAssignedDecrease - 1 ;
        document.getElementById("nav-task-compleat").innerText = result1 ;
        document.getElementById("taskAssigned").innerText = result2 ;

        // notification box message

        // dual alert 
        if (result2 == 0 ){ 
            alert("🫡🫡Congratulations Boss!!!!! You have Completed all the Task.🫡🫡")
        }

        // for notifications
       const notifications = document.getElementById("notifications") ;
       const div = document.createElement("div");
       let currentTime = new Date().toLocaleTimeString();
       div.innerHTML = `
       <div class="bg-[#F4F7FF] rounder-xl rounded-xl p-4 mb-6">
            <p class="font-poppins font-normal text-base text-lightText">
                  You have Complete The Task at ${currentTime}
            </p>
        </div>  
       `
       notifications.appendChild(div);
    })
    
});


// Goto the anotherWorld page
const anotherWorlds = document.getElementById("anotherWorld");
anotherWorlds.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "./anotherWorld.html";
});