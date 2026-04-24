export default function App() {
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
          background: "#ffffff",
          borderRadius: "18px",
          padding: "32px",
          boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            marginBottom: "10px",
            color: "#0f172a",
          }}
        >
          Gold Calc
        </h1>

        <p
          style={{
            color: "#64748b",
            marginBottom: "28px",
            fontSize: "16px",
          }}
        >
          배포 성공 확인용 기본 화면입니다.
        </p>

        <div
          style={{
            display: "grid",
            gap: "16px",
          }}
        >
          <div
            style={{
              border: "1px solid #e2e8f0",
              borderRadius: "14px",
              padding: "20px",
            }}
          >
            <h2 style={{ marginBottom: "8px", color: "#1e293b" }}>
              계산기 페이지
            </h2>
            <p style={{ color: "#64748b" }}>
              다음 단계에서 금 시세 계산 기능 연결 예정
            </p>
          </div>

          <div
            style={{
              border: "1px solid #e2e8f0",
              borderRadius: "14px",
              padding: "20px",
            }}
          >
            <h2 style={{ marginBottom: "8px", color: "#1e293b" }}>
              재고관리 페이지
            </h2>
            <p style={{ color: "#64748b" }}>
              다음 단계에서 제품 등록 / 검색 / 수정 기능 연결 예정
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
