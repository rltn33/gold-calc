import React, { useMemo, useState } from "react";

export default function App() {
  const [price, setPrice] = useState(150000);
  const [weight, setWeight] = useState(3.75);
  const [karat, setKarat] = useState(24);
  const [making, setMaking] = useState(50000);

  const result = useMemo(() => {
    const pureWeight = Number(weight) * (Number(karat) / 24);
    const total = pureWeight * Number(price) + Number(making);
    return Math.floor(total / 1000) * 1000;
  }, [price, weight, karat, making]);

  const copyPrice = async () => {
    await navigator.clipboard.writeText(
      result.toLocaleString("ko-KR") + "원"
    );
    alert("판매가 복사 완료");
  };

  const quick = [
    ["1돈", 3.75],
    ["2돈", 7.5],
    ["3돈", 11.25],
    ["5돈", 18.75],
    ["10돈", 37.5],
  ];

  return (
    <div style={page}>
      <div style={hero}>
        <div style={logo}>GOLD CALC</div>
        <div style={desc}>금 시세 기반 빠른 판매가 계산 서비스</div>
      </div>

      <div style={wrap}>
        <div style={card}>
          <label style={label}>오늘 금 시세 (1g)</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={input}
          />
        </div>

        <div style={card}>
          <label style={label}>빠른 중량 선택</label>
          <div style={grid}>
            {quick.map((q) => (
              <button
                key={q[0]}
                style={btn}
                onClick={() => setWeight(q[1])}
              >
                {q[0]}
              </button>
            ))}
          </div>

          <label style={{ ...label, marginTop: 18 }}>직접 입력 (g)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            style={input}
          />
        </div>

        <div style={two}>
          <div style={card}>
            <label style={label}>순도</label>
            <select
              value={karat}
              onChange={(e) => setKarat(e.target.value)}
              style={input}
            >
              <option value="24">24K</option>
              <option value="22">22K</option>
              <option value="18">18K</option>
              <option value="14">14K</option>
            </select>
          </div>

          <div style={card}>
            <label style={label}>공임</label>
            <input
              type="number"
              value={making}
              onChange={(e) => setMaking(e.target.value)}
              style={input}
            />
          </div>
        </div>

        <div style={resultBox}>
          <div style={resultLabel}>예상 판매가</div>
          <div style={resultPrice}>
            {result.toLocaleString("ko-KR")}원
          </div>

          <button style={copyBtn} onClick={copyPrice}>
            판매가 복사
          </button>
        </div>

        <div style={trust}>
          <div>✓ 빠른 계산</div>
          <div>✓ 모바일 최적화</div>
          <div>✓ 실전 매장 사용 가능</div>
          <div>✓ 즉시 견적 가능</div>
        </div>
      </div>
    </div>
  );
}

const page = {
  minHeight: "100vh",
  background: "#f8fafc",
  fontFamily: "Pretendard, sans-serif",
};

const hero = {
  background: "linear-gradient(135deg,#081633,#0f2d63)",
  color: "white",
  padding: "60px 20px",
  textAlign: "center",
};

const logo = {
  fontSize: "54px",
  fontWeight: "900",
  color: "#f7c948",
};

const desc = {
  marginTop: "12px",
  fontSize: "20px",
  opacity: 0.9,
};

const wrap = {
  maxWidth: "760px",
  margin: "0 auto",
  padding: "24px",
};

const card = {
  background: "white",
  borderRadius: "20px",
  padding: "22px",
  marginBottom: "18px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
};

const two = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "18px",
};

const label = {
  display: "block",
  fontWeight: "800",
  marginBottom: "10px",
  fontSize: "17px",
};

const input = {
  width: "100%",
  padding: "18px",
  fontSize: "28px",
  borderRadius: "14px",
  border: "1px solid #d1d5db",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(5,1fr)",
  gap: "10px",
};

const btn = {
  padding: "16px 8px",
  borderRadius: "14px",
  border: "1px solid #ddd",
  background: "#fff",
  fontSize: "22px",
  fontWeight: "800",
  cursor: "pointer",
};

const resultBox = {
  marginTop: "10px",
  background: "linear-gradient(135deg,#081633,#0b2554)",
  color: "white",
  borderRadius: "24px",
  padding: "28px",
  textAlign: "center",
};

const resultLabel = {
  fontSize: "20px",
  color: "#f7c948",
};

const resultPrice = {
  fontSize: "64px",
  fontWeight: "900",
  marginTop: "10px",
};

const copyBtn = {
  marginTop: "20px",
  width: "100%",
  padding: "16px",
  borderRadius: "14px",
  border: "none",
  background: "#f7c948",
  color: "#111",
  fontSize: "22px",
  fontWeight: "900",
  cursor: "pointer",
};

const trust = {
  marginTop: "18px",
  background: "white",
  borderRadius: "18px",
  padding: "22px",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "12px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
  fontWeight: "700",
};
