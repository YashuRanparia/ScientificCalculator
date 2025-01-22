
// Refrencing
const disp = document.getElementById('disfield')
const equal = document.getElementById('equal')
const addbtn = document.getElementById('addbtn')
const minusbtn = document.getElementById('minusbtn')
const mulbtn = document.getElementById('mulbtn')
const divibtn = document.getElementById('divibtn')
const modbtn = document.getElementById('modbtn')
const funs = document.getElementById('functions')
const clear_all = document.getElementById('clear-all')
const clear_last = document.getElementById('clear-last')


const numbtns = []

let distext = ''
disp.value = ''


for(let i = 0;i<10;i++){
    const ele = document.getElementById(`l${i}`)
    ele.addEventListener('click',
        function(){ 
            console.log(`Button l${i} is clicked!`)
            distext = distext + `${i}`
        })
    numbtns.push(ele)
}
addbtn.addEventListener('click',()=>distext = distext + '+')
minusbtn.addEventListener('click',()=>distext = distext + '-')
mulbtn.addEventListener('click',()=>distext = distext + '*')
divibtn.addEventListener('click',()=>distext = distext + '/')
modbtn.addEventListener('click',()=>distext = distext + 'mod')

funs.addEventListener('click',
    function(){
        console.log(distext)
        disp.value = distext
    }
)


clear_all.addEventListener('click', clearAll)
clear_last.addEventListener('click', clearLast)




// Logic implementation

function updateDisplay(){
    console.log(distext)
    disp.value = distext
}


function clearLast(){
    if(distext.length > 0){
        distext = distext.slice(0,distext.length-1)
    }
}

function clearAll(){
    distext = ''
}


// class Calculator{
//     constructor(num_btns, addbtn, minusbtn, mulbtn, divibtn){
//         this.ditext = ''
//     }


// }