function checkEmail() {
    console.log("checkEmail");
    let email=$("#input_email").value;
    let right_text=$("#text_email");
    if(email===""){
        right_text.innerHTML="Email不能为空";
        return false;
    }
    if(email.indexOf("@")===-1){
        right_text.innerHTML="Email格式不正确.必须包含@";
        return false;
    }
    if(email.indexOf(".")===-1){
        right_text.innerHTML="Email格式不正确.必须包含.";
        return false;
    }
    return true;
}
function checkNickName() {
    let nickName=$("#input_nickName").value;
    let right_text=$("#text_nickName");
}
function checkPassword() {

}
function checkPasswordAgain() {

}