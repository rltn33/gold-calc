좋아. 이번엔 정확히 네가 원하는 방향으로 간다.

**계산기 사이트 말고**
**금은방 매장용 관리자 프로그램 느낌.**

# 지금 할 것

GitHub → `src/App.jsx` **전체 삭제 후 아래 코드 붙여넣기**

```jsx id="v1g2u8"
export default function App() {
  const rows = [
    ["컷팅볼 1", "한국금거래소", "24K", "3.75", "2025-05-21"],
    ["컷팅볼 2", "삼성주얼리", "18K", "6.54", "2025-05-20"],
    ["컷팅볼 3", "LG골드", "14K", "5.20", "2025-05-18"],
    ["팔찌 3mm", "한국금거래소", "24K", "7.50", "2025-05-15"],
  ];

  return (
    <div style={styles.page}>
      {/* top bar */}
      <header style={styles.header}>
        <div>
          <div style={styles.logo}>💎 GOLD CALC</div>
          <div style={styles.sub}>주얼리 판매가 계산 시스템</div>
        </div>

        <nav style={styles.nav}>
          <span>계산하기</span>
          <span>재고관리</span>
          <span>시세관리</span>
          <span>설정</span>
        </nav>

        <button style={styles.logout}>로그아웃</button>
      </header>

      <main style={styles.main}>
        {/* left */}
        <section style={styles.left}>
          <div style={styles.card}>
            <div style={styles.title}>제품명 또는 제품코드 검색</div>
            <input style={styles.input} placeholder="제품명 검색" />
          </div>

          <div style={styles.card}>
            <div style={styles.title}>검색 결과</div>

            <table style={styles.table}>
              <thead>
                <tr>
                  <th>제품명</th>
                  <th>회사</th>
                  <th>함량</th>
                  <th>무게</th>
                  <th>등록일</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i}>
                    {r.map((x, idx) => (
                      <td key={idx}>{x}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* center */}
        <section style={styles.center}>
          <div style={styles.card}>
            <div style={styles.title}>24K 시세 (원/g)</div>

            <div style={styles.row}>
              <input style={styles.input} defaultValue="987000" />
              <button style={styles.save}>저장</button>
            </div>
          </div>

          <div style={styles.card}>
            <div style={styles.title}>선택한 제품 정보</div>

            <div style={styles.infoGrid}>
              <div>제품명</div><div>컷팅볼 2</div>
              <div>회사</div><div>삼성주얼리</div>
              <div>함량</div><div>18K</div>
              <div>무게</div><div>6.54g</div>
              <div>공임</div><div>75,000원</div>
            </div>

            <div style={styles.priceBox}>
              <div>판매가</div>
              <div style={styles.bigMoney}>2,093,134원</div>
            </div>
          </div>

          <div style={styles.card}>
            <div style={styles.title}>재고관리</div>

            <table style={styles.table}>
              <thead>
                <tr>
                  <th>코드</th>
                  <th>함량</th>
                  <th>이름</th>
                  <th>무게</th>
                  <th>개수</th>
                  <th>상태</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>A24-001</td>
                  <td>24K</td>
                  <td>컷팅볼1</td>
                  <td>3.75</td>
                  <td>3</td>
                  <td>재고중</td>
                </tr>
                <tr>
                  <td>B18-002</td>
                  <td>18K</td>
                  <td>컷팅볼2</td>
                  <td>6.54</td>
                  <td>2</td>
                  <td>재고중</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* right */}
        <aside style={styles.right}>
          <div style={styles.card}>
            <div style={styles.title}>디자인 방향</div>
            <p>남색(메인)</p>
            <p>골드(포인트)</p>
            <p>화이트/그레이(배경)</p>
            <hr />
            <p>깔끔하고 고급스러운 관리자 UI</p>
            <p>빠른 검색 / 계산 중심</p>
          </div>
        </aside>
      </main>
    </div>
  );
}

const styles = {
  page: {
    background: "#f5f6f8",
    minHeight: "100vh",
    fontFamily: "sans-serif",
  },
  header: {
    background: "#081f56",
    color: "white",
    padding: "20px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: { fontSize: 34, fontWeight: 900, color: "#ffd54a" },
  sub: { fontSize: 14, opacity: 0.9 },
  nav: {
    display: "flex",
    gap: 30,
    fontWeight: 700,
  },
  logout: {
    padding: "10px 16px",
    borderRadius: 10,
    border: "1px solid #ffd54a",
    background: "transparent",
    color: "#ffd54a",
  },
  main: {
    display: "grid",
    gridTemplateColumns: "1.1fr 1.4fr 0.6fr",
    gap: 20,
    padding: 20,
  },
  left: {},
  center: {},
  right: {},
  card: {
    background: "white",
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
  },
  title: {
    fontWeight: 900,
    fontSize: 20,
    marginBottom: 15,
  },
  input: {
    width: "100%",
    padding: 14,
    borderRadius: 10,
    border: "1px solid #ddd",
    fontSize: 22,
    boxSizing: "border-box",
  },
  row: {
    display: "grid",
    gridTemplateColumns: "1fr 120px",
    gap: 10,
  },
  save: {
    background: "#081f56",
    color: "white",
    border: "none",
    borderRadius: 10,
    fontWeight: 800,
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: 14,
  },
  infoGrid: {
    display: "grid",
    gridTemplateColumns: "120px 1fr",
    rowGap: 10,
    marginBottom: 20,
  },
  priceBox: {
    background: "#081f56",
    color: "white",
    padding: 20,
    borderRadius: 14,
  },
  bigMoney: {
    fontSize: 42,
    fontWeight: 900,
    color: "#ffd54a",
    marginTop: 8,
  },
};
```
