const BASE = import.meta.env.BASE_URL

export default function WatermarkBackground() {
  return (
    <div aria-hidden="true" className="demo-watermark-layer">
      <img
        src={`${BASE}images/demo-watermark.png`}
        alt=""
        className="demo-watermark-img"
        loading="eager"
      />
    </div>
  )
}

