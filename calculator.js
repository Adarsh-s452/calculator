function display(content) {
    result.value +=content
}
function allclear() {
    result.value=""
}
function output() {
    try{
    result.value = eval(result.value)   
    } 
    catch {
        result.value="wake up to reality..!!"
    }
}
function del() {
    result.value=result.value.slice(0,-1)
}