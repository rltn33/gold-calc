import React, { useMemo, useState } from "react";

export default function App() {
  const [pricePerGram, setPricePerGram] = useState(150000);
  const [weight, setWeight] = useState(3.75);
  const [unit, setUnit] = useState("g");
  const [purity, setPurity] = useState(24);
  const [labor, setLabor] = useState(50000);

  const gramWeight = useMemo(() => {
    return unit === "don" ? Number(weight) * 3.75 : Number(weight);
  }, [weight, unit]);

  const pureRate = purity / 24;

  const rawPrice = useMemo(() => {
    return gramWeight * pricePerGram * pureRate + Number(labor);
  }, [gramWeight, pricePerGram, pureRate, labor]);

  const sellPrice = useMemo(() => {
    return Math.floor(rawPrice / 1000) * 1000;
  }, [rawPrice]);

  const money = (num) => Number(num || 0).toLocaleString("ko-KR");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "#fff",
          borderRadius: "18px",
          padding: "32px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        <h1 style={{ fontSize: "42px", marginBottom: "8px" }}>Gold Calc</h1>
        <p style={{ color: "#64748b", marginBottom: "28px" }}>
          금 판매가 계산기
        </p>

        <div style={{ display: "grid", gap: "16px" }}>
          <label>
            오늘 금 시세 (1g)
            <input
              type="number"
              value={pricePerGram}
              onChange={(e) => setPricePerGram(e.target.value)}
              style={input}
            />
          </label>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 140px", gap: "12px" }}>
            <label>
              중량
              <input
                type="number"
                value={weight}
                step="0.01"
                onChange={(e) => setWeight(e.target.value)}
                style={input}
              />
            </label>

            <label>
              단위
              <select
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                style={input}
              >
                <option value="g">그램(g)</option>
                <option value="don">돈</option>
              </select>
            </label>
          </div>

          <label>
            순도
            <select
              value={purity}
              onChange={(e) => setPurity(Number(e.target.value))}
              style={input}
            >
              <option value={24}>24K</option>
              <option value={18}>18K</option>
              <option value={14}>14K</option>
            </select>
          </label>

          <label>
            공임
            <input
              type="number"
              value={labor}
              onChange={(e) => setLabor(e.target.value)}
              style={input}
            />
          </label>
        </div>

        <div
          style={{
            marginTop: "28px",
            padding: "24px",
            borderRadius: "16px",
            background: "#0f172a",
            color: "white",
          }}
        >
          <div style={{ fontSize: "14px", opacity: 0.8 }}>판매가</div>
          <div style={{ fontSize: "42px", fontWeight: "700", marginTop: "8px" }}>
            {money(sellPrice)}원
          </div>
        </div>

        <div
          style={{
            marginTop: "18px",
            background: "#f1f5f9",
            padding: "18px",
            borderRadius: "14px",
            color: "#334155",
            lineHeight: 1.8,
          }}
        >
          검산식<br />
          {money(gramWeight)}g × {money(pricePerGram)}원 × {purity}/24 +{" "}
          {money(labor)}원 = {money(Math.round(rawPrice))}원
        </div>
      </div>
    </div>
  );
}

const input = {
  width: "100%",
  marginTop: "8px",
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #cbd5e1",
  fontSize: "16px",
  boxSizing: "border-box",
};
