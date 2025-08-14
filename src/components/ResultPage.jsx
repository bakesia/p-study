import ImgBox from "../components/ImgBox";
import ResultSub from "../components/ResultSub";

export default function ResultPage({ imageSrc, title, description }) {
  return (
    <main className="result-main">
      <section className="result-card">
        <aside className="result-media">
          <ImgBox src={imageSrc} alt={title} />
        </aside>

        <section className="result-content">
          <ResultSub variant="title" text={title} />
          <ResultSub variant="desc" text={description} />
        </section>
      </section>
    </main>
  );
}
