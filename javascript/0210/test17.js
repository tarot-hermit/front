// test17.js(정규식)
'use strict';

function regexCheck() {
  const regEx1 = /atom/gm;  // 'atom'이라는 문자열이 포함
  const regEx2 = /mbc|kbs|sbs|cjb/g;//g; // 'mbc/kbs/sbs/cjb' 라는 문자열을 포함?
  const regEx3 = /홍길(동|순)/g;//g; // '홍길동,홍길순' 라는 문자열을 포함?
  const regEx4 = /[a-z]/g;//g; // 영문 소문자를 포함?
  const regEx5 = /[A-Z]/g;//g; // 영문 대문자를 포함?
  const regEx6 = /[가-힣]/g;//g; // 한글문자를 포함?
  const regEx7 = /[0-9]/g;//g; // 숫자를 포함?
  const regEx8 = /[a-zA-Z가-힣]/g;//g; // 영어 대소문자 및 한글 를 포함?
  const regEx9 = /[^0-9]/g;//g; // 숫자를 포함?

  let content = document.getElementById("content").value.trim();

  if(content === "") {
    alert("값을 입력하세요");
    document.getElementById("content").focus();
    return false;
  }

  // if(!content.match(regEx2)) {alert("본문에 'mbc|kbs|sbs|cjb' 문자열을 포함하고 있지않습니다.");}
  // if(!content.match(regEx3)) {alert("본문에 '홍길(동|순)' 문자열을 포함하고 있지않습니다.");}
  // if(!content.match(regEx4)) {alert("본문에 '영문 소문자를'  포함하고 있지않습니다.");}
  // if(!content.match(regEx8)) {alert("본문에 '영문자나 한글' 문자열을 포함하고 있지않습니다.");}
  // if(!regEx7.test(content)) {alert("본문에 '숫자' 를 포함하고 있지않습니다.");}
  if(regEx9.test(content)) {alert("본문에 '숫자만' 입력가능합니다. ");}
  else {
    alert("자료가 정상처리되었습니다.");
  }


  document.getElementById("content").select();
  document.getElementById("content").focus();

  


}
