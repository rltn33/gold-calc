import React, { useMemo, useState } from "react";

const INVENTORY = [
  {
    "code": "24GB-001",
    "purity": "24K",
    "type": "골드바",
    "name": "쥐",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "본사",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24GB-002",
    "purity": "24K",
    "type": "골드바",
    "name": "소",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "본사",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24GB-003",
    "purity": "24K",
    "type": "골드바",
    "name": "호랑이",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "본사",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24GB-004",
    "purity": "24K",
    "type": "골드바",
    "name": "토끼",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "본사",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24GB-005",
    "purity": "24K",
    "type": "골드바",
    "name": "용",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "본사",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24GB-006",
    "purity": "24K",
    "type": "골드바",
    "name": "뱀",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "본사",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24GB-007",
    "purity": "24K",
    "type": "골드바",
    "name": "말",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "본사",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24GB-008",
    "purity": "24K",
    "type": "골드바",
    "name": "말",
    "weight": 7.5,
    "don": 1.0,
    "qty": 1,
    "company": "본사",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24GB-009",
    "purity": "24K",
    "type": "골드바",
    "name": "양",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "본사",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24GB-010",
    "purity": "24K",
    "type": "골드바",
    "name": "원숭이",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "본사",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24GB-011",
    "purity": "24K",
    "type": "골드바",
    "name": "닭",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "본사",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24GB-012",
    "purity": "24K",
    "type": "골드바",
    "name": "개",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "본사",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24GB-013",
    "purity": "24K",
    "type": "골드바",
    "name": "돼지",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "본사",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24GB-014",
    "purity": "24K",
    "type": "골드바",
    "name": "본사/호랑이",
    "weight": 1.0,
    "don": 0.267,
    "qty": 3,
    "company": "본사",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24GB-015",
    "purity": "24K",
    "type": "골드바",
    "name": "본사/호랑이",
    "weight": 1.875,
    "don": 0.5,
    "qty": 4,
    "company": "본사",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24GB-016",
    "purity": "24K",
    "type": "골드바",
    "name": "본사/호랑이",
    "weight": 3.75,
    "don": 1.0,
    "qty": 2,
    "company": "본사",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24GB-017",
    "purity": "24K",
    "type": "골드바",
    "name": "본사/신년말",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "병오년",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24GB-018",
    "purity": "24K",
    "type": "골드바",
    "name": "본사/사자",
    "weight": 5.0,
    "don": 1.333,
    "qty": 1,
    "company": "병오년",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24GB-019",
    "purity": "24K",
    "type": "골드바",
    "name": "본사/호랑이",
    "weight": 7.5,
    "don": 1.0,
    "qty": 1,
    "company": "병오년",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24GB-020",
    "purity": "24K",
    "type": "골드바",
    "name": "본사/사자",
    "weight": 10.0,
    "don": 2.667,
    "qty": 1,
    "company": "병오년",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24GB-021",
    "purity": "24K",
    "type": "골드바",
    "name": "본사/호랑이",
    "weight": 11.25,
    "don": 3.0,
    "qty": 2,
    "company": "병오년",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24GB-022",
    "purity": "24K",
    "type": "골드바",
    "name": "본사/호랑이",
    "weight": 18.75,
    "don": 5.0,
    "qty": 1,
    "company": "병오년",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24GB-023",
    "purity": "24K",
    "type": "골드바",
    "name": "본사/호랑이",
    "weight": 37.5,
    "don": 10.0,
    "qty": 1,
    "company": "병오년",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24GB-024",
    "purity": "24K",
    "type": "골드바",
    "name": "본사/신년말",
    "weight": 37.5,
    "don": 10.0,
    "qty": 1,
    "company": "병오년",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24GB-025",
    "purity": "24K",
    "type": "골드바",
    "name": "본사/호랑이",
    "weight": 50.0,
    "don": 13.333,
    "qty": 1,
    "company": "병오년",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24GB-026",
    "purity": "24K",
    "type": "골드바",
    "name": "본사/호랑이",
    "weight": 100.0,
    "don": 26.667,
    "qty": 2,
    "company": "병오년",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24GB-027",
    "purity": "24K",
    "type": "골드바",
    "name": "본사/생일 패키징",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "병오년",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24SP-001",
    "purity": "24K",
    "type": "금수저 카드",
    "name": "부귀공명 금수저",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "병오년",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24SP-002",
    "purity": "24K",
    "type": "금수저 카드",
    "name": "수저/포크",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "골드박스?",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24CN-001",
    "purity": "24K",
    "type": "순금 코인",
    "name": "행운의 클로버",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "본사",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24CN-002",
    "purity": "24K",
    "type": "순금 코인",
    "name": "꽃신",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "본사",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24CN-003",
    "purity": "24K",
    "type": "순금 코인",
    "name": "스태리 코인",
    "weight": 0.2,
    "don": 0.053,
    "qty": 11,
    "company": "본사",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24CN-004",
    "purity": "24K",
    "type": "순금 코인",
    "name": "스태리 코인",
    "weight": 0.3,
    "don": 0.08,
    "qty": 4,
    "company": "본사",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24CN-005",
    "purity": "24K",
    "type": "순금 코인",
    "name": "스태리 코인",
    "weight": 0.5,
    "don": 0.133,
    "qty": 5,
    "company": "본사",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24GB-028",
    "purity": "24K",
    "type": "타사 골드바",
    "name": "GBK",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "GBK",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24GB-029",
    "purity": "24K",
    "type": "타사 골드바",
    "name": "FINE GOLD",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "FINE GOLD",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24GB-030",
    "purity": "24K",
    "type": "타사 골드바",
    "name": "FINE GOLD",
    "weight": 0.1,
    "don": 0.027,
    "qty": 1,
    "company": "FINE GOLD",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24CN-006",
    "purity": "24K",
    "type": "타사 코인",
    "name": "엘리자베스",
    "weight": 0.1,
    "don": 0.027,
    "qty": 1,
    "company": "FINE GOLD",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24CN-007",
    "purity": "24K",
    "type": "타사 코인",
    "name": "클로버",
    "weight": 0.1,
    "don": 0.027,
    "qty": 1,
    "company": "FINE GOLD",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24PR-001",
    "purity": "24K",
    "type": "순금 제품",
    "name": "황금열쇠",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "골드박스?",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24PR-002",
    "purity": "24K",
    "type": "순금 제품",
    "name": "황금열쇠",
    "weight": 7.5,
    "don": 2.0,
    "qty": 2,
    "company": "골드박스?",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24PR-003",
    "purity": "24K",
    "type": "순금 제품",
    "name": "황금열쇠",
    "weight": 11.25,
    "don": 3.0,
    "qty": 2,
    "company": "골드박스?",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24PR-004",
    "purity": "24K",
    "type": "순금 제품",
    "name": "금수저",
    "weight": 1.875,
    "don": 0.5,
    "qty": 1,
    "company": "골드박스?",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24PR-005",
    "purity": "24K",
    "type": "순금 제품",
    "name": "금수저",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "골드박스?",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24PR-006",
    "purity": "24K",
    "type": "순금 제품",
    "name": "금수저",
    "weight": 7.5,
    "don": 2.0,
    "qty": 1,
    "company": "골드박스?",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24PR-007",
    "purity": "24K",
    "type": "순금 제품",
    "name": "금수저",
    "weight": 11.25,
    "don": 3.0,
    "qty": 1,
    "company": "골드박스?",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24PR-008",
    "purity": "24K",
    "type": "순금 제품",
    "name": "카네이션",
    "weight": 0.2,
    "don": 0.053,
    "qty": 2,
    "company": "본사",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24PR-009",
    "purity": "24K",
    "type": "순금 제품",
    "name": "카네이션",
    "weight": 1.875,
    "don": 0.5,
    "qty": 2,
    "company": "본사",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24PR-010",
    "purity": "24K",
    "type": "순금 제품",
    "name": "카네이션",
    "weight": 3.75,
    "don": 1.0,
    "qty": 2,
    "company": "본사",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24PR-011",
    "purity": "24K",
    "type": "순금 제품",
    "name": "콩알금/유리병",
    "weight": 2.53,
    "don": 0.675,
    "qty": 1,
    "company": "타사",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24BB-001",
    "purity": "24K",
    "type": "아기 돌 제품",
    "name": "돌반지/ 아기천사",
    "weight": 1.0,
    "don": 0.267,
    "qty": 2,
    "company": "만나골드",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24BB-002",
    "purity": "24K",
    "type": "아기 돌 제품",
    "name": "돌반지/왕관",
    "weight": 1.0,
    "don": 0.267,
    "qty": 1,
    "company": "만나골드",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24BB-003",
    "purity": "24K",
    "type": "아기 돌 제품",
    "name": "돌반지/ 아기천사",
    "weight": 1.875,
    "don": 0.5,
    "qty": 2,
    "company": "만나골드",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24BB-004",
    "purity": "24K",
    "type": "아기 돌 제품",
    "name": "돌반지/ 복",
    "weight": 1.875,
    "don": 0.5,
    "qty": 1,
    "company": "만나골드",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24BB-005",
    "purity": "24K",
    "type": "아기 돌 제품",
    "name": "돌반지/날개",
    "weight": 1.875,
    "don": 0.5,
    "qty": 1,
    "company": "만나골드",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24BB-006",
    "purity": "24K",
    "type": "아기 돌 제품",
    "name": "돌반지/첫돌",
    "weight": 1.875,
    "don": 0.5,
    "qty": 1,
    "company": "만나골드",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24BB-007",
    "purity": "24K",
    "type": "아기 돌 제품",
    "name": "돌반지/ 복",
    "weight": 3.75,
    "don": 1.0,
    "qty": 6,
    "company": "만나골드",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24BB-008",
    "purity": "24K",
    "type": "아기 돌 제품",
    "name": "돌반지/복주머니",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "만나골드",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24BB-009",
    "purity": "24K",
    "type": "아기 돌 제품",
    "name": "돌반지/ 아기천사",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "만나골드",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24BB-010",
    "purity": "24K",
    "type": "아기 돌 제품",
    "name": "돌반지/하트",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "만나골드",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24BB-011",
    "purity": "24K",
    "type": "아기 돌 제품",
    "name": "돌반지/ 케잌",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "만나골드",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24BB-012",
    "purity": "24K",
    "type": "아기 돌 제품",
    "name": "돌반지/하트용",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "만나골드",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24BB-013",
    "purity": "24K",
    "type": "아기 돌 제품",
    "name": "돌반지/ 왕관",
    "weight": 3.75,
    "don": 1.0,
    "qty": 2,
    "company": "만나골드",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24BB-014",
    "purity": "24K",
    "type": "아기 돌 제품",
    "name": "돌팔찌/어린왕자",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "만나골드",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24BB-015",
    "purity": "24K",
    "type": "아기 돌 제품",
    "name": "돌팔찌/왕관",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "만나골드",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24BB-016",
    "purity": "24K",
    "type": "아기 돌 제품",
    "name": "돌팔찌/아기천사",
    "weight": 7.5,
    "don": 2.0,
    "qty": 1,
    "company": "만나골드",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24BB-017",
    "purity": "24K",
    "type": "아기 돌 제품",
    "name": "돌팔찌/복",
    "weight": 7.5,
    "don": 2.0,
    "qty": 1,
    "company": "만나골드",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24BB-018",
    "purity": "24K",
    "type": "아기 돌 제품",
    "name": "돌팔찌/아기천사",
    "weight": 11.25,
    "don": 3.0,
    "qty": 1,
    "company": "만나골드",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24BB-019",
    "purity": "24K",
    "type": "아기 돌 제품",
    "name": "돌팔찌/복",
    "weight": 11.25,
    "don": 3.0,
    "qty": 1,
    "company": "만나골드",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24AN-001",
    "purity": "24K",
    "type": "동물",
    "name": "돼지",
    "weight": 3.75,
    "don": 1.0,
    "qty": 3,
    "company": "골드박스?",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24AN-002",
    "purity": "24K",
    "type": "동물",
    "name": "돼지",
    "weight": 11.25,
    "don": 3.0,
    "qty": 1,
    "company": "골드박스?",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24AN-003",
    "purity": "24K",
    "type": "동물",
    "name": "두꺼비",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "골드박스?",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24AN-004",
    "purity": "24K",
    "type": "동물",
    "name": "두꺼비",
    "weight": 11.25,
    "don": 3.0,
    "qty": 1,
    "company": "골드박스?",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24AN-005",
    "purity": "24K",
    "type": "동물",
    "name": "거북이",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "골드박스?",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24AN-006",
    "purity": "24K",
    "type": "동물",
    "name": "거북이",
    "weight": 11.25,
    "don": 3.0,
    "qty": 1,
    "company": "골드박스?",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24AN-007",
    "purity": "24K",
    "type": "동물",
    "name": "소",
    "weight": 37.5,
    "don": 10.0,
    "qty": 1,
    "company": "골드박스?",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24AN-008",
    "purity": "24K",
    "type": "동물",
    "name": "골프공",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "골드박스?",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24AN-009",
    "purity": "24K",
    "type": "동물",
    "name": "골프공",
    "weight": 11.25,
    "don": 3.0,
    "qty": 1,
    "company": "골드박스?",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24PD-001",
    "purity": "24K",
    "type": "순금 팬던트",
    "name": "미키마우스",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "골드박스?",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24PD-002",
    "purity": "24K",
    "type": "순금 팬던트",
    "name": "불교/만",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "골드박스?",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24PD-003",
    "purity": "24K",
    "type": "순금 팬던트",
    "name": "십자가",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "골드박스?",
    "model": "십이지",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24PD-004",
    "purity": "24K",
    "type": "순금 팬던트",
    "name": "납작하트",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "스태리",
    "model": "GM178-1",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24PD-005",
    "purity": "24K",
    "type": "순금 팬던트",
    "name": "볼록하트",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "스태리",
    "model": "M0342-1",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24PD-006",
    "purity": "24K",
    "type": "순금 팬던트",
    "name": "고래꼬리",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "스태리",
    "model": "M0342-1",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24PD-007",
    "purity": "24K",
    "type": "순금 팬던트",
    "name": "꽃",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "스태리",
    "model": "GM194-2",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24PD-008",
    "purity": "24K",
    "type": "순금 팬던트",
    "name": "고양이",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "스태리",
    "model": "M0131-1",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24PD-009",
    "purity": "24K",
    "type": "순금 팬던트",
    "name": "국화꽃 팬던트",
    "weight": 7.5,
    "don": 2.0,
    "qty": 1,
    "company": "스태리",
    "model": "M0131-1",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24PD-010",
    "purity": "24K",
    "type": "순금 팬던트",
    "name": "달부엉이",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "우신골드",
    "model": "M0131-1",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24PD-011",
    "purity": "24K",
    "type": "순금 팬던트",
    "name": "GMK017-1",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "스태리",
    "model": "GMK017-1",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24PD-012",
    "purity": "24K",
    "type": "순금 팬던트",
    "name": "엘리자베스 메달",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "골드박스",
    "model": "GMK017-1",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24PD-013",
    "purity": "24K",
    "type": "순금 팬던트",
    "name": "용팬던트",
    "weight": 11.25,
    "don": 3.0,
    "qty": 1,
    "company": "스태리",
    "model": "GMK017-1",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24NK-001",
    "purity": "24K",
    "type": "순금 목걸이",
    "name": "클로버(흑요석)",
    "weight": 1.875,
    "don": 0.5,
    "qty": 1,
    "company": "까로",
    "model": "N0",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24NK-002",
    "purity": "24K",
    "type": "순금 목걸이",
    "name": "클로버(자개)",
    "weight": 1.875,
    "don": 0.5,
    "qty": 1,
    "company": "까로",
    "model": "N0",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24NK-003",
    "purity": "24K",
    "type": "순금 목걸이",
    "name": "나비",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "RG",
    "model": "N0",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24NK-004",
    "purity": "24K",
    "type": "순금 목걸이",
    "name": "물고기",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "RG",
    "model": "N0",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24NK-005",
    "purity": "24K",
    "type": "순금 목걸이",
    "name": "천사 탬버린",
    "weight": 7.5,
    "don": 2.0,
    "qty": 1,
    "company": "RG",
    "model": "N0",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24NK-006",
    "purity": "24K",
    "type": "순금 목걸이",
    "name": "엘리자베스",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "스태리",
    "model": "N0254-1",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24NK-007",
    "purity": "24K",
    "type": "순금 목걸이",
    "name": "대나무",
    "weight": 18.75,
    "don": 5.0,
    "qty": 1,
    "company": "골드박스",
    "model": "LD2040",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24NK-008",
    "purity": "24K",
    "type": "순금 목걸이",
    "name": "올챙이",
    "weight": 18.75,
    "don": 5.0,
    "qty": 1,
    "company": "골드박스",
    "model": "LD2040",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24NK-009",
    "purity": "24K",
    "type": "순금 목걸이",
    "name": "대나무컷팅",
    "weight": 37.5,
    "don": 10.0,
    "qty": 1,
    "company": "골드박스",
    "model": "LD2040",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24NK-010",
    "purity": "24K",
    "type": "순금 목걸이",
    "name": "사선컷팅",
    "weight": 37.5,
    "don": 10.0,
    "qty": 1,
    "company": "수앤진",
    "model": "LD2040",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24NK-011",
    "purity": "24K",
    "type": "순금 목걸이",
    "name": "면체인",
    "weight": 37.5,
    "don": 10.0,
    "qty": 1,
    "company": "골드박스",
    "model": "LD2040",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24NK-012",
    "purity": "24K",
    "type": "순금 목걸이",
    "name": "반클리프",
    "weight": 11.25,
    "don": 3.0,
    "qty": 1,
    "company": "스태리",
    "model": "GN169-3",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24NK-013",
    "purity": "24K",
    "type": "순금 목걸이",
    "name": "H볼 클립",
    "weight": 7.5,
    "don": 2.0,
    "qty": 1,
    "company": "우신골드",
    "model": "GN169-3",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24NK-014",
    "purity": "24K",
    "type": "순금 목걸이",
    "name": "반물결공",
    "weight": 7.5,
    "don": 2.0,
    "qty": 1,
    "company": "우신골드",
    "model": "GN169-3",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24NK-015",
    "purity": "24K",
    "type": "순금 목걸이",
    "name": "폭스공모줄",
    "weight": 7.5,
    "don": 2.0,
    "qty": 1,
    "company": "우신골드",
    "model": "GN169-3",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24NK-016",
    "purity": "24K",
    "type": "순금 목걸이",
    "name": "신장미클립",
    "weight": 7.5,
    "don": 2.0,
    "qty": 1,
    "company": "우신골드",
    "model": "GN169-3",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24NK-017",
    "purity": "24K",
    "type": "순금 목걸이",
    "name": "볼컷팅투",
    "weight": 11.25,
    "don": 3.0,
    "qty": 1,
    "company": "우신골드",
    "model": "GN169-3",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24NK-018",
    "purity": "24K",
    "type": "순금 목걸이",
    "name": "할로우4번",
    "weight": 18.75,
    "don": 5.0,
    "qty": 1,
    "company": "보현사",
    "model": "GN169-3",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24NK-019",
    "purity": "24K",
    "type": "순금 목걸이",
    "name": "클로버( 5개 있는거)",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "골드박스",
    "model": "GN169-3",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24NK-020",
    "purity": "24K",
    "type": "순금 목걸이",
    "name": "클로버2",
    "weight": 18.75,
    "don": 5.0,
    "qty": 1,
    "company": "국제사",
    "model": "GN169-3",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24NK-021",
    "purity": "24K",
    "type": "순금 목걸이",
    "name": "럭키",
    "weight": 11.25,
    "don": 3.0,
    "qty": 1,
    "company": "스태리",
    "model": "GN169-3",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24NK-022",
    "purity": "24K",
    "type": "순금 목걸이",
    "name": "피클볼클로버",
    "weight": 11.25,
    "don": 3.0,
    "qty": 1,
    "company": "우신골드",
    "model": "GN169-3",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24NK-023",
    "purity": "24K",
    "type": "순금 목걸이",
    "name": "볼클립",
    "weight": 7.5,
    "don": 2.0,
    "qty": 1,
    "company": "우신골드",
    "model": "GN169-3",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24NK-024",
    "purity": "24K",
    "type": "순금 목걸이",
    "name": "폭스N-2",
    "weight": 7.5,
    "don": 2.0,
    "qty": 1,
    "company": "스태리",
    "model": "GN169-3",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24NK-025",
    "purity": "24K",
    "type": "순금 목걸이",
    "name": "MS3238",
    "weight": 18.75,
    "don": 5.0,
    "qty": 1,
    "company": "골드박스",
    "model": "GN169-3",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24NK-026",
    "purity": "24K",
    "type": "순금 목걸이",
    "name": "큐브",
    "weight": 11.25,
    "don": 3.0,
    "qty": 1,
    "company": "골드박스",
    "model": "GN169-3",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24NK-027",
    "purity": "24K",
    "type": "순금 목걸이",
    "name": "민줄",
    "weight": 7.5,
    "don": 2.0,
    "qty": 1,
    "company": "골드박스",
    "model": "GN169-3",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24NK-028",
    "purity": "24K",
    "type": "순금 목걸이",
    "name": "신)649",
    "weight": 7.5,
    "don": 2.0,
    "qty": 1,
    "company": "우신골드",
    "model": "GN169-3",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24NK-029",
    "purity": "24K",
    "type": "순금 목걸이",
    "name": "모줄N-1",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "스태리",
    "model": "GN169-3",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24NK-030",
    "purity": "24K",
    "type": "순금 목걸이",
    "name": "NO427-A3/기본모줄",
    "weight": 11.25,
    "don": 3.0,
    "qty": 1,
    "company": "스태리",
    "model": "GN169-3",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24NK-031",
    "purity": "24K",
    "type": "순금 목걸이",
    "name": "블랙스피넷",
    "weight": 3.75,
    "don": 1.0,
    "qty": 1,
    "company": "우신골드",
    "model": "GN169-3",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24NK-032",
    "purity": "24K",
    "type": "순금 목걸이",
    "name": "컷볼",
    "weight": 7.5,
    "don": 2.0,
    "qty": 1,
    "company": "국제사",
    "model": "GN169-3",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24NK-033",
    "purity": "24K",
    "type": "순금 목걸이",
    "name": "N0427-A3/폭스",
    "weight": 11.25,
    "don": 3.0,
    "qty": 1,
    "company": "스태리",
    "model": "GN169-3",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  },
  {
    "code": "24NK-034",
    "purity": "24K",
    "type": "순금 목걸이",
    "name": "클로버",
    "weight": 11.25,
    "don": 3.0,
    "qty": 1,
    "company": "골드박스",
    "model": "GN169-3",
    "labor": 0,
    "status": "재고중",
    "date": "2026-04-24"
  }
];

const PURITY = {
  "24K": { factor: 1, margin: 1 },
  "18K": { factor: 0.825, margin: 1.4 },
  "14K": { factor: 0.644, margin: 1.4 },
};

function money(value) {
  return Number(value || 0).toLocaleString("ko-KR");
}

function floorThousand(value) {
  return Math.floor(Number(value || 0) / 1000) * 1000;
}

export default function App() {
  const [keyword, setKeyword] = useState("");
  const [selected, setSelected] = useState(INVENTORY[0]);
  const [marketPrice, setMarketPrice] = useState(987000);
  const [laborOverride, setLaborOverride] = useState(0);
  const [purityOverride, setPurityOverride] = useState(INVENTORY[0]?.purity || "24K");

  const filtered = useMemo(() => {
    const q = keyword.trim().toLowerCase();
    if (!q) return INVENTORY;
    return INVENTORY.filter((item) =>
      [item.code, item.purity, item.type, item.name, item.company, item.model, item.status]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [keyword]);

  const calc = useMemo(() => {
    const purity = PURITY[purityOverride] || PURITY[selected.purity] || PURITY["24K"];
    const labor = Number(laborOverride || selected.labor || 0);
    const base = (Number(selected.weight || 0) / 3.75) * purity.factor * Number(marketPrice || 0) + labor;
    const finalPrice = base * purity.margin;
    return { base, finalPrice, displayPrice: floorThousand(finalPrice), factor: purity.factor, margin: purity.margin, labor };
  }, [selected, marketPrice, laborOverride, purityOverride]);

  const chooseProduct = (item) => {
    setSelected(item);
    setPurityOverride(item.purity || "24K");
    setLaborOverride(item.labor || 0);
  };
const updateQty = (amount) => {
  selected.qty = Math.max(0, Number(selected.qty || 0) + amount);

  if (selected.qty === 0) {
    selected.status = "품절";
  } else {
    selected.status = "재고중";
  }

  setSelected({ ...selected });
};

const soldOut = () => {
  selected.qty = 0;
  selected.status = "품절";
  setSelected({ ...selected });
};
  const totalQty = INVENTORY.reduce((sum, item) => sum + Number(item.qty || 0), 0);

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div>
          <div style={styles.logo}>GOLD CALC</div>
          <div style={styles.subtitle}>실재고 125개 기반 판매가 계산 시스템</div>
        </div>
        <div style={styles.stats}>
          <div>제품 {INVENTORY.length}개</div>
          <div>총 수량 {totalQty}개</div>
        </div>
      </header>

      <main style={styles.layout}>
        <section style={styles.panel}>
          <div style={styles.panelHeader}>
            <h2 style={styles.h2}>제품 검색</h2>
            <span style={styles.count}>검색 {filtered.length}건</span>
          </div>
          <input
            style={styles.search}
            placeholder="제품명 / 코드 / 회사 / 모델명 검색"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <div style={styles.list}>
            {filtered.map((item) => (
              <button
                key={item.code}
                onClick={() => chooseProduct(item)}
                style={{
                  ...styles.productItem,
                  borderColor: selected.code === item.code ? "#d8a62f" : "#e5e7eb",
                  background: selected.code === item.code ? "#fff8e6" : "#fff",
                }}
              >
                <div style={styles.itemTop}>
                  <b>{item.code}</b>
                  <span style={styles.badge}>{item.purity}</span>
                </div>
                <div style={styles.itemName}>{item.type} · {item.name}</div>
                <div style={styles.itemSub}>{item.company || "회사 미입력"} / {item.weight}g / {item.qty}개</div>
              </button>
            ))}
          </div>
        </section>

        <section style={styles.mainPanel}>
          <div style={styles.topGrid}>
            <div style={styles.card}>
              <label style={styles.label}>24K 시세(원/돈)</label>
              <input
                style={styles.input}
                type="number"
                value={marketPrice}
                onChange={(e) => setMarketPrice(e.target.value)}
              />
            </div>
            <div style={styles.card}>
              <label style={styles.label}>순도 변경</label>
              <select
                style={styles.input}
                value={purityOverride}
                onChange={(e) => setPurityOverride(e.target.value)}
              >
                <option value="24K">24K</option>
                <option value="18K">18K</option>
                <option value="14K">14K</option>
              </select>
            </div>
            <div style={styles.card}>
              <label style={styles.label}>공임</label>
              <input
                style={styles.input}
                type="number"
                value={laborOverride}
                onChange={(e) => setLaborOverride(e.target.value)}
              />
            </div>
          </div>

          <div style={styles.detailCard}>
            <h2 style={styles.h2}>선택 제품 정보</h2>
            <div style={styles.infoGrid}>
              <Info label="제품코드" value={selected.code} />
              <Info label="제품명" value={`${selected.type} · ${selected.name}`} />
              <Info label="회사" value={selected.company || "미입력"} />
              <Info label="모델명" value={selected.model || "-"} />
              <Info label="등록 함량" value={selected.purity} />
              <Info label="계산 함량" value={purityOverride} />
              <Info label="무게" value={`${selected.weight}g (${selected.don}돈)`} />
              <Info label="재고" value={`${selected.qty}개 / ${selected.status}`} />
            </div>

            <div style={styles.priceBox}>
              <div style={{ display:"flex", gap:"10px", margin:"18px 0" }}>
  <button style={styles.blueBtn} onClick={() => updateQty(1)}>
    +1 입고
  </button>

  <button style={styles.redBtn} onClick={() => updateQty(-1)}>
    -1 판매
  </button>

  <button style={styles.grayBtn} onClick={soldOut}>
    품절처리
  </button>
</div>
              <div style={styles.priceLabel}>판매가</div>
              <div style={styles.price}>{money(calc.displayPrice)}원</div>
            </div>

            <div style={styles.formula}>
              검산식: ({selected.weight} ÷ 3.75 × {calc.factor} × {money(marketPrice)} + {money(calc.labor)}) × {calc.margin} = {money(Math.round(calc.finalPrice))}원
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div style={styles.infoRow}>
      <span style={styles.infoLabel}>{label}</span>
      <b>{value}</b>
    </div>
  );
}

const styles = {
  blueBtn:{
  flex:1,
  padding:"12px",
  background:"#0b2559",
  color:"white",
  border:"none",
  borderRadius:"10px",
  fontWeight:800
},

redBtn:{
  flex:1,
  padding:"12px",
  background:"#d63031",
  color:"white",
  border:"none",
  borderRadius:"10px",
  fontWeight:800
},

grayBtn:{
  flex:1,
  padding:"12px",
  background:"#636e72",
  color:"white",
  border:"none",
  borderRadius:"10px",
  fontWeight:800
},
  page: { minHeight: "100vh", background: "#f4f6f8", fontFamily: "Arial, sans-serif" },
  header: { background: "#061a3b", color: "white", padding: "22px 32px", display: "flex", justifyContent: "space-between", alignItems: "center" },
  logo: { color: "#f3ca62", fontSize: 36, fontWeight: 900, letterSpacing: 1 },
  subtitle: { marginTop: 6, color: "#dbe4f0" },
  stats: { display: "flex", gap: 16, color: "#f3ca62", fontWeight: 800 },
  layout: { display: "grid", gridTemplateColumns: "430px 1fr", gap: 20, padding: 20 },
  panel: { background: "white", borderRadius: 18, padding: 18, boxShadow: "0 8px 20px rgba(0,0,0,0.05)" },
  mainPanel: { display: "flex", flexDirection: "column", gap: 18 },
  panelHeader: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  h2: { margin: 0, fontSize: 22, fontWeight: 900 },
  count: { color: "#64748b", fontWeight: 700 },
  search: { width: "100%", marginTop: 14, padding: 14, borderRadius: 12, border: "1px solid #d1d5db", fontSize: 16, boxSizing: "border-box" },
  list: { marginTop: 14, height: "calc(100vh - 220px)", overflowY: "auto", paddingRight: 4 },
  productItem: { width: "100%", textAlign: "left", border: "1px solid", borderRadius: 14, padding: 14, marginBottom: 10, cursor: "pointer" },
  itemTop: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  badge: { background: "#061a3b", color: "#f3ca62", padding: "4px 8px", borderRadius: 999, fontSize: 12, fontWeight: 900 },
  itemName: { marginTop: 8, fontWeight: 900, fontSize: 17 },
  itemSub: { marginTop: 5, color: "#64748b", fontSize: 14 },
  topGrid: { display: "grid", gridTemplateColumns: "1fr 180px 180px", gap: 14 },
  card: { background: "white", borderRadius: 16, padding: 16, boxShadow: "0 8px 20px rgba(0,0,0,0.05)" },
  label: { display: "block", marginBottom: 8, fontWeight: 900, color: "#334155" },
  input: { width: "100%", padding: 13, borderRadius: 11, border: "1px solid #d1d5db", fontSize: 18, boxSizing: "border-box" },
  detailCard: { background: "white", borderRadius: 18, padding: 22, boxShadow: "0 8px 20px rgba(0,0,0,0.05)" },
  infoGrid: { marginTop: 18, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 20px" },
  infoRow: { display: "grid", gridTemplateColumns: "95px 1fr", borderBottom: "1px solid #f1f5f9", padding: "10px 0" },
  infoLabel: { color: "#64748b" },
  priceBox: { marginTop: 24, background: "linear-gradient(135deg,#061a3b,#0b2a5b)", color: "white", borderRadius: 18, padding: 24 },
  priceLabel: { color: "#f3ca62", fontWeight: 900, fontSize: 20 },
  price: { color: "#f8d57a", fontWeight: 900, fontSize: 52, marginTop: 8 },
  formula: { marginTop: 16, background: "#fff8e6", border: "1px solid #f3ca62", borderRadius: 14, padding: 16, color: "#4a3410", fontWeight: 800, lineHeight: 1.5 },
};
