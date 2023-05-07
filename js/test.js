

function s(a){
    const tn = document.getElementById('bt')
    const val = tn.value = '1'
     a = document.getElementById('test').value += val
    
}
function i(){
   
    const tn = document.getElementById('btn')
    const val = tn.value = '2'
    document.getElementById('test').value += val

}
function three(){
   
    const tn = document.getElementById('three')
    const val = tn.value = '3'
    document.getElementById('test').value += val

}
function four(){
   
    const tn = document.getElementById('four')
    const val = tn.value = '4'
    document.getElementById('test').value += val

}
function five(){
   
    const tn = document.getElementById('five')
    const val = tn.value = '5'
    document.getElementById('test').value += val

}
function six(){
   
    const tn = document.getElementById('six')
    const val = tn.value = '6'
    document.getElementById('test').value += val

}
function seven(){
   
    const tn = document.getElementById('seven')
    const val = tn.value = '7'
    document.getElementById('test').value += val

}
function eight(){
   
    const tn = document.getElementById('eight')
    const val = tn.value = '8'
    document.getElementById('test').value += val

}
function nine(){
   
    const tn = document.getElementById('nine')
    const val = tn.value = '9'
    document.getElementById('test').value += val

}
function zero(){
   
    const tn = document.getElementById('zero')
    const val = tn.value = '0'
    document.getElementById('test').value += val

}
function p(){
   
    const tn = document.getElementById('sum')
    const val = tn.value = '+'
    document.getElementById('test').value += val
    document.querySelector('#sum').disabled = true

}
function sub(){
   
    const tn = document.getElementById('sub')
    const val = tn.value = '-'
    document.getElementById('test').value += val
    document.querySelector('#sub').disabled = true

}
function div(){
   
    const tn = document.getElementById('div')
    const val = tn.value = '/'
    document.getElementById('test').value += val
    document.querySelector('#div').disabled = true

}
function mul(){
   
    const tn = document.getElementById('mul')
    const val = tn.value = '*'
    document.getElementById('test').value += val
    document.querySelector('#mul').disabled = true

}
function e(){
    const result = document.getElementById('test').value
    const i = eval(result)
    document.getElementById('test').value = i

}
function Clear(){
    const result = document.getElementById('test').value = ''
    document.querySelector('#sum').disabled = false
    document.querySelector('#mul').disabled = false
    document.querySelector('#div').disabled = false
    document.querySelector('#sub').disabled = false
}