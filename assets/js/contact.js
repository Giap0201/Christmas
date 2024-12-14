const checkEmail = /^[0-9a-zA-Z]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
const checkText = /^[0-9a-zA-Z]{4,}$/;
const checkNoiDung = /[\w]{4,}/;
var formContacts = document.querySelector(".section-2 .box1 form");
function checkNull(text){
  return text.value.trim().length === 0;
}
function validForm(forname){
  if(checkNull(forname.hovaten)){
    alert("Tên không được bỏ trống");
    forname.hovaten.focus();
    return false;
  }
  else if(!checkText.test(forname.hovaten.value)){
    alert("Tên chỉ chứa chữ và số và có 4 kí tự trở lên");
    forname.hovaten.focus();
    return false;
  }
  if(checkNull(forname.email)){
    alert("Email không được bỏ trống");
    forname.email.focus();
    return false;
  }
  else if(!checkEmail.test(forname.email.value)){
    alert("Email không đúng định dạng");
    forname.email.focus();
    return false;
  }
  if(checkNull(forname.noidung)){
    alert("Nội dung không được bỏ trống!!");
    forname.noidung.focus();
    return false;
  }else if(!checkNoiDung.test(forname.noidung.value)){
    alert("Nội dung phải chứa 4 kí tự trở lên!!");
    forname.noidung.focus();
    return false;
  }
  return true;
}
formContacts.addEventListener('submit',function(event){
  if(validForm(this)){
    alert("Đã gửi biểu mẫu");
    this.submit();
  }else {
    event.preventDefault();
  }
});