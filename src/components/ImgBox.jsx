export default function ImgBox({ src, alt = "result image" }) {
  return (
    <div className="imgbox">
      {src ? (
        <img src={src} alt={alt} className="imgbox-image" />
      ) : (
        <div className="imgbox-placeholder">IMG 박스</div>
      )}
    </div>
  );
}
