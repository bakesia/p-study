import { useLocation,useNavigate} from "react-router-dom"; 
import ImgBox from "./ImgBox";
import ResultSub from "./ResultSub";
import ButtonList from "./Button_list"

export default function ResultPage() { 
  const { state } = useLocation(); 
  const { nickname, finalType, gender, finalResult } = state || {};
  const navigate = useNavigate();

   const resultData = {
    에겐남: {
      img: "",
      title: "에겐남",
      desc: "에겐남 설명",
    },
    에겐녀: {
      img: "",
      title: "에겐녀",
      desc: "에겐녀 설명",
    },
    테토남: {
      img: "",
      title: "테토남",
      desc: "테토남 설명",
    },
    테토녀: {
      img: "",
      title: "테토녀",
      desc: "테토녀 설명",
    },
  };

  const current = finalResult ? resultData[finalResult] : null;
  const GoHome = () =>{
    navigate("/")
  }
  return (
    <div>
      
    <main className="result-main">
      
      <section className="result-card">
        <aside className="result-media">
           <ImgBox src={current.img} alt={current.title} />
        </aside>
        <h1 className="result-h1">
        {nickname ? nickname + " 님의 결과는 " + finalResult + " 입니다 " : " 결과 페이지 "}
      </h1>

        <section className="result-content">
           <ResultSub variant="title" text={current.title} />
          <ResultSub variant="desc" text={current.desc} />
        </section>
      <ButtonList className="result_Button" onClick={GoHome}/>
      </section> 
    </main>
    </div>
  );
}
