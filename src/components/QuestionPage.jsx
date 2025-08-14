import { useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../data/questions.json";

export default function QuestionPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gender, setGender] = useState(null);
  const [score, setScore] = useState({ 에겐: 0, 테토: 0 });
  const navigate = useNavigate();

  const handleAnswer = (value) => {
    if (currentIndex === 0) {
      // 첫 질문은 성별 저장
      setGender(value);
      setCurrentIndex((i) => i + 1);
      return;
    } else {
      setScore((prev) => ({
        ...prev,
        [value]: prev[value] + 1,
      }));
    }

    // 다음 질문으로 이동
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      calculateResult();
      navigate("/result");
    }
  };

  const calculateResult = () => {
    const finalType = score.에겐 > score.테토 ? "에겐" : "테토";
    const finalResult = finalType + gender;
    console.log(finalResult);
  };

  const currentQuestion = questions[currentIndex];

  return (
    <div className="flex flex-col justify-center items-center py-10">
      <p>{currentIndex + 1}번째 질문</p>
      <h1 className="text-xl mb-4">{currentQuestion.question}</h1>
      <div className="flex flex-col gap-2">
        {currentQuestion.answers.map((ans, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(ans.value)}
            className="border p-2 rounded w-full bg-blue-500 hover:bg-blue-600 text-white"
          >
            {ans.text}
          </button>
        ))}
      </div>
    </div>
  );
}
