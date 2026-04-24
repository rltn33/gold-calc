import { useState } from "react";
import "./App.css";

export default function App() {
  const [price, setPrice] = useState(150000);
  const [weight, setWeight] = useState(3.75);
  const [purity, setPurity] = useState(24);
  const [fee, setFee] = useState(50000);

  const result = Math.floor(weight * price * (purity / 24) + Number(fee));

  const quickWeights = [
    { name: "1돈", value: 3.75 },
    { name: "2돈", value: 7.5 },
    { name: "3돈", value: 11.25 },
    { name: "5돈", value: 18.75 },
    { name: "10돈", value: 37.5 },
  ];

  return (
    <div style={styles.wrap}>
      <section style={styles.hero}>
        <div style={styles.overlay}>
          <h1 style={styles.title}>GOLD CALC</h1>
          <p style={styles.sub}>금 판매가 계산 · 매장용 프리미엄 견적 시스템</p>
        </div>
      </section>

      <div style={styles.container}>
        <div style={styles.card}>
          <label style={styles.label}>오늘 금 시세 (1g)</label>
          <input
            style={styles.input}
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div style={styles.card}>
          <label style={styles.label}>빠른 중량 선택</label>
          <div style={styles.grid}>
            {quickWeights.map((item) => (
              <button
                key={item.name}
                style={styles.btn}
                onClick={() => setWeight(item.value)}
              >
                {item.name}
              </button>
            ))}
          </div>

          <label style={{ ...styles.label, marginTop: 20 }}>중량 (g)</label>
          <input
            style={styles.input}
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        <div style={styles.double}>
          <div style={styles.card}>
            <label style={styles.label}>순도</label>
            <select
              style={styles.input}
              value={purity}
              onChange={(e) => setPurity(e.target.value)}
            >
              <option value="24">24K</option>
              <option value="18">18K</option>
              <option value="14">14K</option>
            </select>
          </div>

          <div style={styles.card}>
            <label style={styles.label}>공임</label>
            <input
              style={styles.input}
              type="number"
              value={fee}
              onChange={(e) => setFee(e.target.value)}
            />
          </div>
        </div>

        <div style={styles.result}>
          <div style={styles.resultText}>예상 판매가</div>
          <div style={styles.money}>{result.toLocaleString()}원</div>
        </div>

        <div style={styles.footer}>
          전국 금은방 · 개인 판매 · 빠른 견적용 데모 버전
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrap: {
    background: "#f3f4f6",
    minHeight: "100vh",
    fontFamily: "sans-serif",
  },
  hero: {
    height: "260px",
    background:
      "linear-gradient(135deg, #071a4d 0%, #0c2b7a 60%, #123a9c 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    textAlign: "center",
    color: "white",
  },
  title: {
    fontSize: "64px",
    fontWeight: "900",
    margin: 0,
    letterSpacing: "2px",
    color: "#ffd54a",
  },
  sub: {
    marginTop: "14px",
    fontSize: "20px",
    opacity: 0.95,
  },
  container: {
    maxWidth: "900px",
    margin: "-50px auto 0",
    padding: "20px",
  },
  card: {
    background: "white",
    borderRadius: "20px",
    padding: "24px",
    marginBottom: "20px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
  },
  label: {
    display: "block",
    fontWeight: "700",
    marginBottom: "10px",
    fontSize: "18px",
  },
  input: {
    width: "100%",
    padding: "16px",
    borderRadius: "14px",
    border: "1px solid #ddd",
    fontSize: "28px",
    boxSizing: "border-box",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(5,1fr)",
    gap: "10px",
  },
  btn: {
    padding: "14px",
    borderRadius: "12px",
    border: "1px solid #d1d5db",
    background: "#fff",
    fontWeight: "800",
    fontSize: "22px",
    cursor: "pointer",
  },
  double: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },
  result: {
    background: "linear-gradient(135deg,#071a4d,#0b2b75)",
    color: "white",
    borderRadius: "24px",
    padding: "40px",
    textAlign: "center",
    marginTop: "10px",
    boxShadow: "0 12px 25px rgba(0,0,0,0.15)",
  },
  resultText: {
    fontSize: "24px",
    opacity: 0.9,
  },
  money: {
    fontSize: "72px",
    fontWeight: "900",
    marginTop: "10px",
    color: "#ffd54a",
  },
  footer: {
    textAlign: "center",
    padding: "30px",
    color: "#666",
    fontWeight: "600",
  },
};
