export default function App(){
  return (
    <div style={{fontFamily:'Arial, sans-serif',padding:'40px',background:'#f8fafc',minHeight:'100vh'}}>
      <div style={{maxWidth:'900px',margin:'0 auto',background:'white',borderRadius:'16px',padding:'32px',boxShadow:'0 10px 30px rgba(0,0,0,0.08)'}}>
        <h1 style={{fontSize:'42px',marginBottom:'8px'}}>Gold Calc</h1>
        <p style={{color:'#475569',marginBottom:'28px'}}>배포 연결 테스트용 기본 화면</p>
        <div style={{display:'grid',gap:'16px'}}>
          <div style={{padding:'18px',border:'1px solid #e2e8f0',borderRadius:'12px'}}>
            <h2>계산기</h2>
            <p>현재 배포 성공 여부 확인용 화면입니다.</p>
          </div>
          <div style={{padding:'18px',border:'1px solid #e2e8f0',borderRadius:'12px'}}>
            <h2>재고관리</h2>
            <p>다음 단계에서 기존 기능 전체 이식 예정.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
