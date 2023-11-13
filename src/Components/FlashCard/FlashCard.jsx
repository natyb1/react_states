import { useState } from "react";
const quizData = [
  {
    id: 1,
    question: "What is the capital of Japan?",
    answers: "Tokyo",
  },
  {
    id: 2,
    question: "In which year did World War II end?",
    answers: "1945",
  },
  {
    id: 3,
    question: "Who developed the theory of relativity?",
    answers: "Albert Einstein",
  },
  {
    id: 4,
    question: "What is the largest ocean on Earth?",
    answers: "Pacific Ocean",
  },
  {
    id: 5,
    question: "Who painted the Mona Lisa?",
    answers: "Leonardo da Vinci",
  },
];
function FlashCard() {
  const [selectedId, setSelectedId] = useState(null);
  function handleSelect(id) {
    setSelectedId(id === selectedId ? null : id);
  }
  return (
    <div className="row">
      {quizData.map((quiz) => (
        <div
          onClick={() => handleSelect(quiz.id)}
          key={quiz.id}
          className={
            quiz.id === selectedId
              ? "col-sm-3  m-2 card card-body bg-secondary"
              : "col-sm-3 m-2 card card-body"
          }
        >
          <p>{quiz.id === selectedId ? quiz.answers : quiz.question}</p>
        </div>
      ))}
    </div>
  );
}
export default FlashCard;
