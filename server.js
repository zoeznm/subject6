//! 여기서부터 
//! ****************************************************************************************

const userData = {
  name: name,
  password: password,
  email: email,
  phone: phone
};

// 배열 입력
const memberNames = [
  "구하림", "김보미", "김수현", "김정수", "문혜림", "배성빈", "백지원", "송이현",
  "신지윤", "유으뜸", "유호영", "이연승", "이재영", "이종수", "임유진", "정호연",
  "조우식", "조자연", "최유진", "황재민"
];
// 입력 유효성을 검사
const validationCheck = [false, false, false, false, false];

// 이름 검사
function checkName(fromInputdata) {
  const namerule = /^[가-힣]{3}$/;
  const isValid = namerule.test(fromInputdata) && memberNames.includes(fromInputdata);
  changeColor('nameStatus', isValid);
  return isValid;
}

// 비밀번호 검사
function checkPassword(fromInputdata) {
  const passwordrule = /^(?=.*[A-Za-z]{6,9})(?=.*\d{4})/;
  const isValid = passwordrule.test(fromInputdata);
  changeColor('passwordStatus', isValid);
  return isValid;
}

// 비밀번호 확인 검사
function checkConfirmPassword(password, confirmPassword) {
  const isValid = password === confirmPassword;
  changeColor('confirmPasswordStatus', isValid);
  return isValid;
}

// 이메일 검사
function checkEmail(fromInputdata) {
  const emailrule = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  const isValid = emailrule.test(fromInputdata);
  changeColor('emailStatus', isValid);
  return isValid;
}

// 전화번호 검사
function checkPhone(fromInputdata) {
  const phonerule = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/;
  const isValid = phonerule.test(fromInputdata);
  changeColor('phoneStatus', isValid);
  return isValid;
}

//! 여기까지 강사님이 주신 코드 변형 (변형 할 수 있으면 변형 해보기 )
//! if 문을 사용하지 않고 function을 새롭게 지정해서 이벤트 만들었음 
//! ****************************************************************************************

// * 추가 항목
// ? 초록색에서 빨간색으로 바뀌게 하는 기능 - 완
// ? 가입하기 버튼 클릭하면 가입 성공 말 나오게 하기
// ? 유효합니다, 유효하지 않습니다. 말 나오게 하기 

//* 추가 함수
// 상태 업데이트 함수
function changeColor(elementId, isValid) {
  const statusElement = document.getElementById(elementId);
  if (isValid) {
    statusElement.classList.add('valid');
    statusElement.classList.remove('invalid');
  } else {
    statusElement.classList.add('invalid');
    statusElement.classList.remove('valid');
  }
}

//* 추가 함수 
// 상태 변화 이벤트 함수
function SignUpButton() {
  const allValid = validationCheck.every(value => value);
  document.getElementById('submitButton').disabled = !allValid;
}

//* 초기에 빨간색 점이 들어오게 하기
// 초기 상태 설정
document.getElementById('nameStatus').classList.add('invalid');
document.getElementById('passwordStatus').classList.add('invalid');
document.getElementById('confirmPasswordStatus').classList.add('invalid');
document.getElementById('emailStatus').classList.add('invalid');
document.getElementById('phoneStatus').classList.add('invalid');


const name = document.getElementById('name').value;
const password = document.getElementById('password').value;
const email = document.getElementById('email').value;
const phone = document.getElementById('phone').value;

// 입력값에 따른 유효성 검사
document.getElementById('name').addEventListener('input', function() {
  validationCheck[0] = checkName(this.value);
  SignUpButton();
});

document.getElementById('password').addEventListener('input', function() {
  validationCheck[1] = checkPassword(this.value);
  SignUpButton();
});

document.getElementById('confirmPassword').addEventListener('input', function() {
  const password = document.getElementById('password').value;
  validationCheck[2] = checkConfirmPassword(password, this.value);
  SignUpButton();
});

document.getElementById('email').addEventListener('input', function() {
  validationCheck[3] = checkEmail(this.value);
  SignUpButton();
});

document.getElementById('phone').addEventListener('input', function() {
  validationCheck[4] = checkPhone(this.value);
  SignUpButton();
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
  // 기본 클릭 동작 방지하기
  event.preventDefault();
  alert('가입 성공!');
});
