import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Indexpage() {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");

  const handleNick = (e) => {
    setNickname(e.target.value);
  };

  const handleq = () => {
    console.log(nickname);
    navigate("/question");
  };

  return (
    <div className="flex flex-col justify-center items-center my-10">
      <h1 className="font-bold text-2xl">에겐남, 테토녀 테스트</h1>
      <h1 className="text-base">
        당신은 에겐일까요, 테토일까요? 테스트를 통해 알아보아요.
      </h1>
      <img src="/gender.png" alt="남녀 사진" className="w-[50%] my-8" />
      <input
        type="text"
        placeholder="닉네임을 입력하세요."
        onChange={handleNick}
        className="flex border border-gray-500 rounded-xl p-2 justify-center items-center"
      />
      <button
        className="my-5 bg-blue-500 rounded-xl p-2 text-white hover:bg-blue-600"
        onClick={handleq}
      >
        테스트 하러 가기
      </button>
    </div>
  );
}
