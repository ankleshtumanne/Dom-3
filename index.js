
let arr = [] // for obj ko store krne ke liye 


function getValue(e){ //(e) ka use defalt value ko nikalne ke liye , iski jgh ham kuch bhi pass kr skte h

    e.preventDefault() 

    let obj = {}
    let tbody = document.querySelector("tbody") // tbody bcz we want to append it on tbody secttion
    let task = document.getElementById("task").value  // value bcz we want iputs's value
    let priority = document.getElementById("priority").value
    
    obj.task = task
    obj.priority = priority

    arr.push(obj)
    console.log(arr)   
    tbody.innerHTML = ""  // null ka use bug ko thik krne ke liye , ab bud dekhne ke liye isko commonet out kare
    arr.map((e)=>{        // ye row vale form me h isliye map fun ka use kiye 
       
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        td1.innerText = e.task
        let td2 = document.createElement("td")
        td2.innerText = e.priority

        tr.append(td1,td2)
        tbody.append(tr)

    })

}