import React, { useMemo, useState } from "react";

const inventory = [
  {
    code: "24GB-001",
    purity: "24K",
    type: "골드바",
    name: "쥐",
    weight: 3.75,
    qty: 2,
    company: "한국금거래소",
    status: "재고중",
  },
  {
    code: "24GB-002",
    purity: "24K",
    type: "골드바",
    name: "소",
    weight: 3.75,
    qty: 1,
    company: "한국금거래소",
    status: "재고중",
  },
  {
    code: "24GB-003",
    purity: "24K",
    type: "골드바",
    name: "호랑이",
    weight: 3.75,
    qty: 3,
    company: "한국금거래소",
    status: "재고중",
  },
  {
    code: "18RG-001",
    purity: "18K",
    type: "반지",
    name: "커플링",
    weight: 5.2,
    qty: 1,
    company: "삼성주얼리",
    status: "재고중",
  },
];

export default function App() {
  const [keyword, setKeyword] = useState("");
  const [selected, setSelected] = useState(inventory[0]);
  const [price, setPrice] = useState(150000);
  const [making, setMaking] = useState(50000);

  const filtered = useMemo(() => {
    return inventory.filter((item) =>
      `${item.code} ${item.name} ${item.company} ${item.type}`
        .toLowerCase()
        .includes(keyword.toLowerCase())
    );
  }, [keyword]);

  const karat = Number(selected.purity.replace("K", ""));
  const pureWeight = Number(selected.weight) * (karat / 24);
  const result =
    Math.floor((pureWeight * Number(price) + Number(making)) / 1000) * 1000;

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div>
          <div style={styles.logo}>GOLD CALC</div>
          <div style={styles.sub}>실데이터 재고관리 시스템</div>
        </div>
      </header>

      <div style={styles.layout}>
        {/* left */}
        <section style={styles.panel}>
          <div style={styles.title}>제품 검색</div>

          <input
            style={styles.input}
            placeholder="제품명 / 코드 / 회사 검색"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />

          <div style={styles.list}>
            {filtered.map((item) => (
              <div
                key={item.code}
                style={{
                  ...styles.item,
                  background:
                    selected.code === item.code ? "#eef2ff" : "white",
                }}
                onClick={() => setSelected(item)}
              >
                <div style={{ fontWeight: 800 }}>
                  {item.code} · {item.name}
                </div>
                <div style={{ color: "#666", marginTop: 4 }}>
                  {item.company} / {item.purity} / {item.weight}g
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* center */}
        <section style={styles.panel}>
          <div style={styles.title}>선택 제품 정보</div>

          <div style={styles.info}>
            <Row name="제품코드" value={selected.code} />
            <Row name="제품명" value={selected.name} />
            <Row name="회사" value={selected.company} />
            <Row name="함량" value={selected.purity} />
            <Row name="무게" value={`${selected.weight}g`} />
            <Row name="재고수량" value={`${selected.qty}개`} />
            <Row name="상태" value={selected.status} />
          </div>

          <div style={styles.title}>판매가 계산</div>

          <label style={styles.label}>오늘 시세 (1g)</label>
          <input
            style={styles.input}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <label style={styles.label}>공임</label>
          <input
            style={styles.input}
            value={making}
            onChange={(e) => setMaking(e.target.value)}
          />

          <div style={styles.resultBox}>
            <div style={{ fontSize: 18 }}>예상 판매가</div>
            <div style={styles.money}>
              {result.toLocaleString()}원
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function Row({ name, value }) {
  return (
    <div style={styles.row}>
      <div style={{ color: "#666" }}>{name}</div>
      <div style={{ fontWeight: 800 }}>{value}</div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f4f6f8",
    fontFamily: "sans-serif",
  },
  header: {
    background: "#081f56",
    color: "white",
    padding: "24px",
  },
  logo: {
    fontSize: 40,
    fontWeight: 900,
    color: "#ffd54a",
  },
  sub: {
    marginTop: 6,
    opacity: 0.9,
  },
  layout: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 20,
    padding: 20,
  },
  panel: {
    background: "white",
    borderRadius: 18,
    padding: 20,
    boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
  },
  title: {
    fontSize: 22,
    fontWeight: 900,
    marginBottom: 14,
  },
  input: {
    width: "100%",
    padding: 14,
    borderRadius: 12,
    border: "1px solid #ddd",
    fontSize: 18,
    boxSizing: "border-box",
    marginBottom: 14,
  },
  list: {
    maxHeight: 500,
    overflow: "auto",
  },
  item: {
    padding: 14,
    border: "1px solid #eee",
    borderRadius: 12,
    marginBottom: 10,
    cursor: "pointer",
  },
  info: {
    marginBottom: 20,
  },
  row: {
    display: "grid",
    gridTemplateColumns: "120px 1fr",
    padding: "8px 0",
    borderBottom: "1px solid #f1f1f1",
  },
  label: {
    fontWeight: 700,
    marginBottom: 6,
    display: "block",
  },
  resultBox: {
    marginTop: 10,
    background: "#081f56",
    color: "white",
    borderRadius: 18,
    padding: 24,
    textAlign: "center",
  },
  money: {
    marginTop: 10,
    fontSize: 42,
    fontWeight: 900,
    color: "#ffd54a",
  },
};
