import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Indexpage() {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");

  const handleNick = (e) => {
    setNickname(e.target.value);
  };

  const handleq = () => {
    if (nickname.trim() === "") {
      alert("닉네임을 입력해주세요.");
      return;
    }
    navigate("/question", { state: { nickname } });
  };

  return (
    <div className="flex flex-col justify-center items-center bg-slate-100 py-10">
      <h1 className="font-bold text-3xl mb-3">
        나는 <span className="text-pink-700">에겐</span>일까,{" "}
        <span className="text-blue-800">테토</span>
        일까?
      </h1>
      <h1 className="text-base text-gray-600 py-1 italic border-gray-400 border-b-2 border-t-2">
        “에겐과 테토, 두 가지 기준으로 보는 나의 성향. 지금 확인해보세요.”
      </h1>
      <img
        src="/gender.png"
        alt="남녀 사진"
        className="w-[50%] my-8 bg-white rounded-lg p-5 shadow-xl"
      />
      <input
        type="text"
        placeholder="닉네임을 입력하세요."
        onChange={handleNick}
        className="flex border border-gray-300 p-2 text-center rounded-2xl"
      />
      <button
        className="my-5 bg-blue-500 rounded-xl p-2 px-3 text-white font-bold hover:shadow-lg hover:bg-blue-600"
        onClick={handleq}
      >
        테스트 하러 가기
      </button>
    </div>
  );
}
