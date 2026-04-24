import React, { useMemo, useState } from "react";

export default function App() {
  const [price, setPrice] = useState(150000);
  const [weight, setWeight] = useState(3.75);
  const [karat, setKarat] = useState(24);
  const [making, setMaking] = useState(50000);
  const [roundType, setRoundType] = useState("down");

  const quickWeights = [
    { label: "1돈", value: 3.75 },
    { label: "2돈", value: 7.5 },
    { label: "3돈", value: 11.25 },
    { label: "5돈", value: 18.75 },
    { label: "10돈", value: 37.5 },
  ];

  const rawTotal = useMemo(() => {
    const pureWeight = Number(weight || 0) * (Number(karat) / 24);
    return pureWeight * Number(price || 0) + Number(making || 0);
  }, [weight, karat, price, making]);

  const finalPrice = useMemo(() => {
    if (roundType === "up") return Math.ceil(rawTotal / 1000) * 1000;
    if (roundType === "round") return Math.round(rawTotal / 1000) * 1000;
    return Math.floor(rawTotal / 1000) * 1000;
  }, [rawTotal, roundType]);

  const money = (num) => Number(num || 0).toLocaleString("ko-KR");

  const copyPrice = async () => {
    await navigator.clipboard.writeText(`${money(finalPrice)}원`);
    alert("판매가를 복사했습니다.");
  };

  return (
    <div style={page}>
      <div style={container}>
        <header style={header}>
          <div>
            <div style={logo}>GOLD CALC</div>
            <div style={subtitle}>실전 매장용 금 판매가 계산기</div>
          </div>
          <div style={badge}>24K 기준</div>
        </header>

        <section style={card}>
          <label style={label}>오늘 24K 시세</label>
          <div style={inputWrap}>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              style={bigInput}
            />
            <span style={unit}>원 / g</span>
          </div>
        </section>

        <section style={card}>
          <label style={label}>빠른 중량 선택</label>
          <div style={quickGrid}>
            {quickWeights.map((item) => (
              <button
                key={item.label}
                onClick={() => setWeight(item.value)}
                style={{
                  ...quickBtn,
                  background: Number(weight) === item.value ? "#061a3b" : "#fff",
                  color: Number(weight) === item.value ? "#f5c451" : "#111827",
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          <label style={{ ...label, marginTop: 22 }}>직접 중량 입력</label>
          <div style={inputWrap}>
            <input
              type="number"
              step="0.01"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              style={bigInput}
            />
            <span style={unit}>g</span>
          </div>
        </section>

        <section style={twoCol}>
          <div style={card}>
            <label style={label}>순도</label>
            <select
              value={karat}
              onChange={(e) => setKarat(Number(e.target.value))}
              style={select}
            >
              <option value={24}>24K</option>
              <option value={22}>22K</option>
              <option value={18}>18K</option>
              <option value={14}>14K</option>
              <option value={10}>10K</option>
            </select>
          </div>

          <div style={card}>
            <label style={label}>천원 단위 처리</label>
            <select
              value={roundType}
              onChange={(e) => setRoundType(e.target.value)}
              style={select}
            >
              <option value="down">내림</option>
              <option value="round">반올림</option>
              <option value="up">올림</option>
            </select>
          </div>
        </section>

        <section style={card}>
          <label style={label}>공임</label>
          <div style={inputWrap}>
            <input
              type="number"
              value={making}
              onChange={(e) => setMaking(e.target.value)}
              style={bigInput}
            />
            <span style={unit}>원</span>
          </div>
        </section>

        <section style={priceBox}>
          <div style={priceLabel}>판매가</div>
          <div style={priceText}>{money(finalPrice)}원</div>
          <button onClick={copyPrice} style={copyBtn}>
            판매가 복사
          </button>
        </section>

        <section style={formulaBox}>
          <div style={formulaTitle}>검산식</div>
          <div>
            {weight}g × {money(price)}원 × {karat}/24 + {money(making)}원
          </div>
          <div style={formulaResult}>
            실제 계산값: {money(Math.round(rawTotal))}원
          </div>
        </section>
      </div>
    </div>
  );
}

const page = {
  minHeight: "100vh",
  background: "linear-gradient(180deg, #f8fafc 0%, #eef2f7 100%)",
  padding: "28px",
  fontFamily:
    "Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
};

const container = {
  maxWidth: "760px",
  margin: "0 auto",
};

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "22px",
};

const logo = {
  fontSize: "42px",
  fontWeight: 900,
  color: "#061a3b",
  letterSpacing: "-1px",
};

const subtitle = {
  marginTop: "6px",
  color: "#64748b",
  fontSize: "16px",
};

const badge = {
  background: "#061a3b",
  color: "#f5c451",
  padding: "10px 16px",
  borderRadius: "999px",
  fontWeight: 800,
};

const card = {
  background: "#fff",
  border: "1px solid #e5e7eb",
  borderRadius: "18px",
  padding: "20px",
  marginBottom: "16px",
  boxShadow: "0 8px 20px rgba(15, 23, 42, 0.04)",
};

const label = {
  display: "block",
  fontSize: "16px",
  fontWeight: 800,
  marginBottom: "10px",
  color: "#111827",
};

const inputWrap = {
  display: "flex",
  alignItems: "center",
  border: "1px solid #cbd5e1",
  borderRadius: "14px",
  overflow: "hidden",
};

const bigInput = {
  width: "100%",
  border: "none",
  outline: "none",
  padding: "18px",
  fontSize: "28px",
  fontWeight: 700,
};

const unit = {
  padding: "0 16px",
  color: "#64748b",
  fontWeight: 700,
  whiteSpace: "nowrap",
};

const quickGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: "10px",
};

const quickBtn = {
  border: "1px solid #d1d5db",
  borderRadius: "14px",
  padding: "18px 8px",
  fontSize: "22px",
  fontWeight: 900,
  cursor: "pointer",
};

const twoCol = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "16px",
};

const select = {
  width: "100%",
  padding: "18px",
  borderRadius: "14px",
  border: "1px solid #cbd5e1",
  fontSize: "24px",
  fontWeight: 800,
  background: "#fff",
};

const priceBox = {
  background: "linear-gradient(135deg, #061a3b, #0b2a5b)",
  color: "#fff",
  borderRadius: "24px",
  padding: "30px",
  marginTop: "8px",
  boxShadow: "0 18px 40px rgba(6, 26, 59, 0.25)",
};

const priceLabel = {
  color: "#f5c451",
  fontSize: "22px",
  fontWeight: 900,
};

const priceText = {
  fontSize: "64px",
  fontWeight: 1000,
  marginTop: "10px",
  letterSpacing: "-2px",
};

const copyBtn = {
  marginTop: "22px",
  width: "100%",
  padding: "18px",
  border: "1px solid rgba(245,196,81,0.6)",
  borderRadius: "14px",
  background: "rgba(255,255,255,0.08)",
  color: "#f5c451",
  fontSize: "20px",
  fontWeight: 900,
  cursor: "pointer",
};

const formulaBox = {
  background: "#fff8e6",
  border: "1px solid #f5d58a",
  borderRadius: "18px",
  padding: "20px",
  marginTop: "18px",
  fontSize: "18px",
  lineHeight: 1.7,
  color: "#3f2f08",
};

const formulaTitle = {
  fontWeight: 900,
  marginBottom: "8px",
};

const formulaResult = {
  marginTop: "8px",
  fontWeight: 800,
};
