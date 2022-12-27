const body = document.querySelector("body");
// 최소 지속 시간 10초 상수화
const MIN_DURATION = 10;

function makeSnowflake() {
  // div 요소를 만들어주고
  const snowflake = document.createElement("div");
  // 애니메이션 지연시키기 위해서 delay 설정
  const delay = Math.random() * 10;
  // 불투명도 무작위
  const initialOpacity = Math.random();
  // 애니메이션 지속시간 0과 20사이의 상수 더하기
  const duration = Math.random() * 20 + MIN_DURATION;

  // snowflake 클래스를 줘서 쓸 수 있게
  snowflake.classList.add("snowflake");
  // Math.random() 함수 호출후, 화면 너비 곱하기
  // 눈송이를 왼쪽으로 이동시키기 위해 사용
  snowflake.style.left = `${Math.random() * window.screen.width}px`;
  // s를 붙여야 복수개? 적용
  snowflake.style.animationDelay = `${delay}s`;
  // 깊이감 적용 (0과 1사이의 값을 구해 눈송이에 주기)
  snowflake.style.opacity = initialOpacity;
  // 동적 지속 시간 값으로
  snowflake.style.animation = `fall ${duration}s linear`;
  // '.snowflake' 애니메이션을 설정해야함
  body.appendChild(snowflake);

  // 애니메이션 '기간'에 '지연'을 더한 값이 종료시간
  setTimeout(() => {
    body.removeChild(snowflake);
    // 눈송이를 무한히 만들기 위해서 제거하고
    makeSnowflake(); //함수 호출
  }, (duration + delay) * 1000);
}
makeSnowflake();

// 50번 실행해야하는 for loop 내부에서 호출
for (let index = 0; index < 50; index++) {
  // 눈송이를 동시에 만들지 않고 약간의 지연후에 생성 가능
  setTimeout(makeSnowflake, 500 * index);
  //   makeSnowflake();
}

// Aim1) 떨어진 눈송이들이 HTML 페이지를 더럽히지 않도록 제거해야함
// setTimeout 함수 사용: 일정 시간이 경과한 후에만 실행가능
