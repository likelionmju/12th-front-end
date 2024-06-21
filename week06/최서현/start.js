const main = document.getElementById("main"); // main 화면
const qna = document.getElementById("qna"); // qna 화면
const result = document.getElementById("result"); // result 화면
const endPoint = 12;
let select = []; //사용자가 버튼 선택시 어떤 선택지 알아야해서 배열

// start-button을 누르면 qna 화면으로 전환
const start = () => {
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "flex";
    }, 450);

    let questionIndex = 0;
    goNext(questionIndex);
  }, 450);
};

// 질문에 대한 답변 버튼 생성
const goNext = (questionIndex) => {
  if (questionIndex === endPoint) {
    goResult();
    return;
  }
  let questionBox = document.getElementById("question-box");
  questionBox.innerHTML = qnaList[questionIndex].q;

  let statusNum = document.getElementById("status-number");
  statusNum.innerHTML = questionIndex + 1 + "/12";

  for (let i in qnaList[questionIndex].a) {
    //반복문으로 답변 버튼 만들기
    addAnswerButton(qnaList[questionIndex].a[i].answer, questionIndex, i); //qnlist에 questionindexdml a의i번째 질문 나오게 만듬
  }

  let status = document.getElementById("status-bar");
  status.style.width = (100 / endPoint) * (questionIndex + 1) + "%";
};

// 답변 버튼 추가
const addAnswerButton = (answerText, questionIndex, index) => {
  let answerBox = document.getElementById("answer-box");
  let answerButton = document.createElement("button"); //버튼이라는 html요소 만들어서 answer-box 담기

  answerButton.classList.add("answer-list"); //answerList 클래스값 넣어줌
  answerButton.classList.add("fadeIn");
  answerBox.appendChild(answerButton); //appendChild로 answerButtondl answerBox에 소속될 수 있도록 함
  answerButton.innerHTML = answerText; //innerHTML을 활용하여 answerButton안에 answerText 넣어줌

  answerButton.addEventListener("click", () => {
    //버튼 클릭으로 다음 질문 나타나게 하기
    select[questionIndex] = index; // 몇 번째 질문에서 몇 번째 답 선택했는지
    let buttonChildren = document.getElementsByClassName("answer-list");
    for (let i = 0; i < buttonChildren.length; i++) {
      buttonChildren[i].disabled = true; //버튼 비활성화
      buttonChildren[i].style.animation = "fadeOut 1s"; //1초뒤 fadeout
    }

    setTimeout(() => {
      for (let i = 0; i < buttonChildren.length; i++) {
        buttonChildren[i].style.display = "none"; //사용자가 버튼 누르면 다른 요소들 모두 무시, 사라짐
      }
      goNext(++questionIndex); //questionIndex받아서 반복문이 끝난후 다음질문 나오게 함
    }, 450);
  });
};

// 결과 페이지로 이동
const goResult = () => {
  //goresult 호출
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.animation = "fadeIn 1s"; // qna꺼지고 result불러오기
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "flex";
    }, 450);
  });
  calculateResult();
  setResult();
};

// 결과 계산
const calculateResult = () => {
  //결과 연산해주는 것
  let pointArray = [
    {
      name: "Java",
      value: 0,
      key: 0,
    },
    {
      name: "Javascript",
      value: 0,
      key: 1,
    },
    {
      name: "Python",
      value: 0,
      key: 2,
    },
    {
      name: "C++",
      value: 0,
      key: 3,
    },
    {
      name: "Swift",
      value: 0,
      key: 4,
    },
    {
      name: "Kotlin",
      value: 0,
      key: 5,
    },
    {
      name: "SQL",
      value: 0,
      key: 6,
    },
  ];

  for (let i = 0; i < endPoint; i++) {
    //i는 0부터 endpoint까지
    let target = qnaList[i].a[select[i]]; //select 배열에 있는 i번째 호출
    for (let j = 0; j < target.type.length; j++) {
      for (let k = 0; k < pointArray.length; k++) {
        //pointarray의 length까지
        if (target.type[j] === pointArray[k].name) {
          pointArray[k].value += 1;
        }
      }
    }
  }
  let resultArray = pointArray.sort(function (a, b) {
    //pointarray를 fresultarray의 이름으로 function을 통해 정렬
    if (a.value > b.value) {
      return -1; // a가 b보다 앞에 오도록
    }

    if (a.value < b.value) {
      return 1; // b가 a보다 앞에 오도록
    }
    return 0;
  });
  console.log(resultArray);
  let resultWord = resultArray[0].key; //key값으로 계산
  return resultWord;
};

// 결과 출력
const setResult = () => {
  let point = calculateResult();

  const resultName = document.getElementById("result-name");
  resultName.innerHTML = resultList[point].name;

  const resultTitle = document.getElementById("result-title");
  resultTitle.innerHTML = resultList[point].title;

  const resultDesc = document.getElementById("result-desc");
  resultDesc.innerHTML = resultList[point].desc;
};
