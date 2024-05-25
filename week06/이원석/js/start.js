const main = document. getElementById('main')
const qna = document.getElementById('qna');


const start = () => {
    main.style.animation = 'fadeOut 1s';
    setTimeout(() => {
      qna.style.animation = 'fadeIn 1s';
      setTimeout(() => {
        main.style.display = 'none';
        qna.style.display = 'flex';
      }, 450);
  
      let questionIndex = 0;
      goNext(questionIndex);
    }, 450);
  };
  // 변수 명은?
const goNext=(questionIndex)=>{
    let questionBox = document.getElementById('question-box');
    questionBox.innerHTML = qnaList[questionIndex].q;

    for(let i in qnaList[questionIndex].a){
        addAnswerButton(qnaList[questionIndex].a[i].answer,questionIndex);
    }
};

const addAnswerButton = (answerText, questionIndex) => {
    let answerBox = document.getElementById('answer-box');
    let answerButton = document.createElement('button');
    answer.classlist.add('answerList');
    answerBox.appendChild(answerButton);
    answerButton.innerHTML =answerText;
    answerButton.addEventListener("click",function(){
      var child = document.querySelectorAll('answerList')
      for(leti =0; i< child.length; i++){
        child[i].disabled = true;
        child[i].style.display = 'none';
      }
      goNext(++questionIndex);
    },false);

}
