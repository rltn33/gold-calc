import { useState } from "react";

export default function App() {
  const [price, setPrice] = useState(150000);
  const [weight, setWeight] = useState(3.75);
  const [karat, setKarat] = useState(24);
  const [making, setMaking] = useState(50000);
  const [roundType, setRoundType] = useState("round");

  const pureWeight = weight * (karat / 24);
  const rawTotal = pureWeight * price + Number(making);

  const finalPrice =
    roundType === "down"
      ? Math.floor(rawTotal / 1000) * 1000
      : roundType === "up"
      ? Math.ceil(rawTotal / 1000) * 1000
      : Math.round(rawTotal / 1000) * 1000;

  const copyPrice = () => {
    navigator.clipboard.writeText(finalPrice.toLocaleString() + "원");
    alert("판매가 복사 완료");
  };

  const quickWeights = [
    { label: "1돈", value: 3.75 },
    { label: "2돈", value: 7.5 },
    { label: "3돈", value: 11.25 },
    { label: "5돈", value: 18.75 },
    { label: "10돈", value: 37.5 },
  ];

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "0 auto",
        padding: "30px",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ fontSize: "56px", marginBottom: "10px" }}>Gold Calc</h1>
      <p style={{ color: "#555", marginBottom: "30px" }}>금 판매가 계산기</p>

      <label>오늘 금 시세 (1g)</label>
      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={inputStyle}
      />

      <div style={{ marginTop: "25px" }}>
        <label>빠른 중량 선택</label>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "10px" }}>
          {quickWeights.map((item) => (
            <button
              key={item.label}
              onClick={() => setWeight(item.value)}
              style={smallBtn}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "25px" }}>
        <label>중량 (g)</label>
        <input
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          style={inputStyle}
        />
      </div>

      <div style={{ marginTop: "25px" }}>
        <label>순도</label>
        <select
          value={karat}
          onChange={(e) => setKarat(Number(e.target.value))}
          style={inputStyle}
        >
          <option value={24}>24K</option>
          <option value={22}>22K</option>
          <option value={18}>18K</option>
          <option value={14}>14K</option>
          <option value={10}>10K</option>
        </select>
      </div>

      <div style={{ marginTop: "25px" }}>
        <label>공임</label>
        <input
          value={making}
          onChange={(e) => setMaking(e.target.value)}
          style={inputStyle}
        />
      </div>

      <div style={{ marginTop: "25px" }}>
        <label>천원 단위 처리</label>
        <select
          value={roundType}
          onChange={(e) => setRoundType(e.target.value)}
          style={inputStyle}
        >
          <option value="round">반올림</option>
          <option value="down">내림</option>
          <option value="up">올림</option>
        </select>
      </div>

      <div
        style={{
          background: "#081633",
          color: "white",
          padding: "30px",
          borderRadius: "20px",
          marginTop: "35px",
        }}
      >
        <div style={{ fontSize: "22px" }}>판매가</div>
        <div style={{ fontSize: "62px", fontWeight: "bold", marginTop: "10px" }}>
          {finalPrice.toLocaleString()}원
        </div>
      </div>

      <button
        onClick={copyPrice}
        style={{
          ...bigBtn,
          marginTop: "15px",
          background: "#111",
        }}
      >
        판매가 복사하기
      </button>

      <div
        style={{
          marginTop: "25px",
          background: "#f3f4f6",
          padding: "20px",
          borderRadius: "15px",
          fontSize: "22px",
        }}
      >
        검산식 <br />
        {weight}g × {price.toLocaleString()}원 × {karat}/24 +{" "}
        {Number(making).toLocaleString()}원
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "18px",
  fontSize: "28px",
  marginTop: "10px",
  borderRadius: "12px",
  border: "1px solid #ccc",
};

const bigBtn = {
  width: "100%",
  padding: "18px",
  color: "white",
  border: "none",
  borderRadius: "14px",
  fontSize: "26px",
  cursor: "pointer",
};

const smallBtn = {
  padding: "10px 18px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  background: "#fff",
  cursor: "pointer",
  fontSize: "20px",
};
