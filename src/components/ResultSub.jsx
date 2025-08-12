export default function ResultSub({ variant = "desc", text }) {
  if (variant === "title") {
    return <h2 className="result-title">{text}</h2>;
  }
  return <p className="result-desc">{text}</p>;
}
