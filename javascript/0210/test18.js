// test17.js(정규식)
'use strict';

function regexCheck() {
  const regEx1 = /^[a-zA-Z0-9_]{3,15}$/;  // 아이디는 '영문 대/소문자와 숫자, '_'만 포함하여 3~15자 이하로만 작성하시오'
  const regEx2 = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&]).{3,15}$/; //; // 비밀번호는 영문 대소문자가 1개이상, 숫자가 1개이상, 특수문자 1개 3~15자 이상
  const regEx2 = /^(?=.*[a-zA-Z])(?=.*_)[a-zA-Z_]{3,15}$/; //; // 비밀번호는 영문 대소문자가 1개이상, 숫자가 1개이상, 특수문자 1개 3~15자 이상
  const regEx2 = /^(?=.*[a-zA-Z_]).{3,15}$/g; //; // 비밀번호는 영문 대소문자가 1개이상, 숫자가 1개이상, 특수문자 1개 3~15자 이상
  const regEx3 = /^[a-zA-Z0-9가-힣_-]{2,12}$/; // 닉네임은 '영문 대/소문자, 한글, 숫자, _, -가 올수 있다.'
  const regEx4 = /^[a-zA-Z가-힣_]{2,10}$/ // 성명은 한글이나, 영문과 '_' 만 사용
  const regEx5 =/^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,}$/; // 이메일(소문자) 형식체크 (atom@naver.com, atom@naver.co.kr)
  const regEx5 =/^[a-z0-9]+([._-]?[a-z0-9]+)*@[a-z0-9]+([-_]?[a-z0-9]+)*(\.[a-z]{2,})+$/i; // 이메일(소문자) 형식체크 (atom@naver.com, atom@naver.co.kr)
  const regEx6 = /^(https?:\/\/)([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(?::\d{1,5})?(?:\/[^\s]*)?$/; // url 형식에 맞도록 체크
   const regEx7 = /^\d{6}-[1-4]$/; //주민번호 앞쪽 6자리숫자, 7번째는 성별(1~4) 체크
  const regEx8 = /^(?:02-\d{3}-\d{4}|0[3-9]\d?-\d{3,4}-\d{4}|010-\d{4}-\d{4})$/ //전화번호는 : 02 -123-1234, 010-1234-1234
  const regEx8 = /^\d{2,3}-\d{3,4}-\d{4}$/; //전화번호는 : 02 -123-1234, 010-1234-1234

  const regEx9 = /^[a-zA-Z][a-zA-Z0-9_]{2,14}$/;   // 아이디는 총 3~15글자로 첫글자는 영문자만허용하고, 2번째부터는 '영문자/숫자/밑줄'만을 사용할수 있다.



  let content = document.getElementById("content").value.trim();

  if(content === "") {  
    alert("닉네임은 '영문 대/소문자, 한글, 숫자, _,");
    document.getElementById("content").focus();
    return false; 
  }

  
  // if(!regEx3.test(content)) alert("닉네임 형식에 맞도록 체크");
  if(!regEx9.test(content)) alert("아이디는 총 3~15글자로 첫글자는 영문자만허용하고, 2번째부터는 '영문자/숫자/밑줄'만을 사용");
  else {
    alert("자료가 정상처리되었습니다.");
  }


  document.getElementById("content").select();
  document.getElementById("content").focus();

  


}
