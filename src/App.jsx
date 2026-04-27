import React, { useEffect, useMemo, useState } from "react";
import "./App.css";

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

const PURITY_FACTOR = {
  "24K": 1,
  "18K": 0.825,
  "14K": 0.644,
};

const DEFAULT_MARGIN_BY_PURITY = {
  "24K": 1,
  "18K": 1.4,
  "14K": 1.4,
};

const MENU_ITEMS = ["계산하기", "재고관리", "시세관리", "설정"];

function money(value) {
  return Number(value || 0).toLocaleString("ko-KR");
}

function floorThousand(value) {
  return Math.floor(Number(value || 0) / 1000) * 1000;
}

function productImageAlt(product) {
  return `${product.type} ${product.name}`;
}

export default function App() {
  const [keyword, setKeyword] = useState("");
  const [inventory, setInventory] = useState(() => {
    const saved = localStorage.getItem("gold-calc-inventory-v1");
    if (!saved) {
      return INVENTORY.map((item) => ({
        ...item,
        status: Number(item.qty || 0) <= 0 ? "품절" : "재고중",
      }));
    }

    try {
      const parsed = JSON.parse(saved);
      if (!Array.isArray(parsed)) throw new Error("invalid");
      return parsed.map((item) => ({
        ...item,
        status: Number(item.qty || 0) <= 0 ? "품절" : "재고중",
      }));
    } catch {
      return INVENTORY.map((item) => ({
        ...item,
        status: Number(item.qty || 0) <= 0 ? "품절" : "재고중",
      }));
    }
  });
  const [salesLog, setSalesLog] = useState(() => {
    const saved = localStorage.getItem("gold-calc-sales-log-v1");
    if (!saved) return [];
    try {
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });
  const [selectedCode, setSelectedCode] = useState(INVENTORY[0]?.code || "");
  const [marketPrice, setMarketPrice] = useState(() => {
    const saved = localStorage.getItem("gold-calc-market-price-v1");
    return saved ? Number(saved) || 987000 : 987000;
  });
  const [laborOverride, setLaborOverride] = useState(0);
  const [purityOverride, setPurityOverride] = useState(INVENTORY[0]?.purity || "24K");
  const [activeMenu, setActiveMenu] = useState(MENU_ITEMS[0]);
  const [marginByPurity, setMarginByPurity] = useState(() => {
    const saved = localStorage.getItem("gold-calc-margin-by-purity-v1");
    if (!saved) return DEFAULT_MARGIN_BY_PURITY;
    try {
      const parsed = JSON.parse(saved);
      return { ...DEFAULT_MARGIN_BY_PURITY, ...parsed };
    } catch {
      return DEFAULT_MARGIN_BY_PURITY;
    }
  });
  const [marketSnapshots, setMarketSnapshots] = useState(() => {
    const saved = localStorage.getItem("gold-calc-market-snapshots-v1");
    if (!saved) return [];
    try {
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  const selected = useMemo(() => {
    return inventory.find((item) => item.code === selectedCode) || inventory[0] || INVENTORY[0];
  }, [inventory, selectedCode]);

  useEffect(() => {
    localStorage.setItem("gold-calc-inventory-v1", JSON.stringify(inventory));
  }, [inventory]);

  useEffect(() => {
    localStorage.setItem("gold-calc-sales-log-v1", JSON.stringify(salesLog));
  }, [salesLog]);

  useEffect(() => {
    localStorage.setItem("gold-calc-market-price-v1", String(Number(marketPrice || 0)));
  }, [marketPrice]);

  useEffect(() => {
    localStorage.setItem("gold-calc-margin-by-purity-v1", JSON.stringify(marginByPurity));
  }, [marginByPurity]);

  useEffect(() => {
    localStorage.setItem("gold-calc-market-snapshots-v1", JSON.stringify(marketSnapshots));
  }, [marketSnapshots]);

  useEffect(() => {
    if (!selected) return;
    setPurityOverride(selected.purity || "24K");
    setLaborOverride(selected.labor || 0);
  }, [selectedCode]);

  const filtered = useMemo(() => {
    const q = keyword.trim().toLowerCase();
    if (!q) return inventory;
    return inventory.filter((item) =>
      [item.code, item.purity, item.type, item.name, item.company, item.model, item.status]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [keyword, inventory]);

  const calc = useMemo(() => {
    const factor = PURITY_FACTOR[purityOverride] || PURITY_FACTOR[selected.purity] || PURITY_FACTOR["24K"];
    const margin = Number(marginByPurity[purityOverride] || 1);
    const labor = Number(laborOverride || selected.labor || 0);
    const base = (Number(selected.weight || 0) / 3.75) * factor * Number(marketPrice || 0) + labor;
    const finalPrice = base * margin;
    return { base, finalPrice, displayPrice: floorThousand(finalPrice), factor, margin, labor };
  }, [selected, marketPrice, laborOverride, purityOverride, marginByPurity]);

  const chooseProduct = (item) => {
    setSelectedCode(item.code);
    setPurityOverride(item.purity || "24K");
    setLaborOverride(item.labor || 0);
  };

  const adjustInventoryQty = (code, delta) => {
    setInventory((prev) =>
      prev.map((item) => {
        if (item.code !== code) return item;
        const nextQty = Math.max(0, Number(item.qty || 0) + delta);
        return {
          ...item,
          qty: nextQty,
          status: nextQty <= 0 ? "품절" : "재고중",
        };
      })
    );
  };

  const saveMarketSnapshot = () => {
    const now = new Date();
    const date = now.toISOString().slice(0, 10);
    const time = now.toTimeString().slice(0, 8);

    setMarketSnapshots((prev) => [
      {
        date,
        time,
        marketPrice: Number(marketPrice || 0),
      },
      ...prev.slice(0, 19),
    ]);
  };

  const updateMargin = (purity, value) => {
    const next = Number(value);
    setMarginByPurity((prev) => ({
      ...prev,
      [purity]: Number.isFinite(next) && next > 0 ? next : 1,
    }));
  };

  const completeSale = () => {
    if (!selected || Number(selected.qty || 0) <= 0) return;

    const now = new Date();
    const date = now.toISOString().slice(0, 10);
    const time = now.toTimeString().slice(0, 8);

    adjustInventoryQty(selected.code, -1);

    setSalesLog((prev) => [
      {
        date,
        time,
        name: selected.name,
        code: selected.code,
        amount: calc.displayPrice,
        purity: purityOverride,
      },
      ...prev,
    ]);
  };

  const today = new Date().toISOString().slice(0, 10);
  const todaySalesTotal = salesLog
    .filter((log) => log.date === today)
    .reduce((sum, log) => sum + Number(log.amount || 0), 0);

  const totalQty = inventory.reduce((sum, item) => sum + Number(item.qty || 0), 0);
  const lowStockCount = inventory.filter((item) => Number(item.qty || 0) <= 1).length;
  const recentSales = salesLog.slice(0, 10);
  const recentMarketSnapshots = marketSnapshots.slice(0, 10);

  return (
    <div className="dashboard-page">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="logo">GOLD CALC</div>
          <div className="subtitle">관리자용 판매가 계산 + 재고관리 대시보드</div>
        </div>
        <nav className="menu-tabs" aria-label="관리 메뉴">
          {MENU_ITEMS.map((menu) => (
            <button
              key={menu}
              type="button"
              className={`menu-tab ${activeMenu === menu ? "active" : ""}`}
              onClick={() => setActiveMenu(menu)}
            >
              {menu}
            </button>
          ))}
        </nav>
        <div className="header-stats">
          <div className="stat-card">
            <span>오늘 매출 합계</span>
            <b>{money(todaySalesTotal)}원</b>
          </div>
          <div className="stat-card">
            <span>등록 제품</span>
            <b>{inventory.length}개</b>
          </div>
          <div className="stat-card">
            <span>총 수량</span>
            <b>{totalQty}개</b>
          </div>
          <div className="stat-card warning">
            <span>저재고</span>
            <b>{lowStockCount}개</b>
          </div>
        </div>
      </header>

      <main className="dashboard-main">
        <aside className="search-panel">
          <div className="panel-head">
            <h2>제품 검색</h2>
            <span>{filtered.length}건</span>
          </div>
          <input
            className="field"
            placeholder="제품명 / 코드 / 회사 / 모델명 검색"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <div className="product-list">
            {filtered.map((item) => (
              <button
                key={item.code}
                type="button"
                onClick={() => chooseProduct(item)}
                className={`product-item ${selected.code === item.code ? "active" : ""}`}
              >
                <div className="item-top">
                  <b>{item.code}</b>
                  <span className="badge">{item.purity}</span>
                </div>
                <div className="item-name">{item.type} · {item.name}</div>
                <div className="item-sub">{item.company || "회사 미입력"} / {item.weight}g / 재고 {item.qty}개 ({item.status})</div>
              </button>
            ))}
          </div>
        </aside>

        <section className="product-panel">
          <div className="panel-head">
            <h2>선택 제품 정보</h2>
            <span>{activeMenu}</span>
          </div>

          <div className="product-overview">
            <div className="image-wrap" role="img" aria-label={productImageAlt(selected)}>
              <div className="image-chip">{selected.purity}</div>
              <div className="image-title">{selected.type}</div>
              <div className="image-name">{selected.name}</div>
              <div className="image-meta">{selected.weight}g · 코드 {selected.code}</div>
            </div>

            <div className="info-grid">
              <Info label="제품코드" value={selected.code} />
              <Info label="제품명" value={`${selected.type} · ${selected.name}`} />
              <Info label="회사" value={selected.company || "미입력"} />
              <Info label="모델명" value={selected.model || "-"} />
              <Info label="등록 함량" value={selected.purity} />
              <Info label="계산 함량" value={purityOverride} />
              <Info label="무게" value={`${selected.weight}g (${selected.don}돈)`} />
              <Info label="재고" value={`${selected.qty}개 / ${selected.status}`} />
            </div>
          </div>

          <div className="calc-grid">
            <div className="calc-card">
              <label>24K 시세(원/돈)</label>
              <div className="inline-field-wrap">
                <input
                  className="field"
                  type="number"
                  value={marketPrice}
                  onChange={(e) => setMarketPrice(e.target.value)}
                />
                <button type="button" className="sub-button" onClick={saveMarketSnapshot}>시세 저장</button>
              </div>
            </div>
            <div className="calc-card">
              <label>순도 변경</label>
              <select
                className="field"
                value={purityOverride}
                onChange={(e) => setPurityOverride(e.target.value)}
              >
                <option value="24K">24K</option>
                <option value="18K">18K</option>
                <option value="14K">14K</option>
              </select>
            </div>
            <div className="calc-card">
              <label>공임</label>
              <input
                className="field"
                type="number"
                value={laborOverride}
                onChange={(e) => setLaborOverride(e.target.value)}
              />
            </div>
          </div>

          <div className="margin-grid">
            {Object.keys(DEFAULT_MARGIN_BY_PURITY).map((purity) => (
              <div className="calc-card" key={`margin-${purity}`}>
                <label>{purity} 마진 배수</label>
                <input
                  className="field"
                  type="number"
                  step="0.01"
                  min="0.01"
                  value={marginByPurity[purity]}
                  onChange={(e) => updateMargin(purity, e.target.value)}
                />
              </div>
            ))}
          </div>

          <div className="price-box">
            <div className="price-label">판매가</div>
            <div className="price-value">{money(calc.displayPrice)}원</div>
            <div className="formula">
              ({selected.weight} ÷ 3.75 × {calc.factor} × {money(marketPrice)} + {money(calc.labor)}) × {calc.margin} = {money(Math.round(calc.finalPrice))}원
            </div>
            <button
              type="button"
              className="sale-button"
              onClick={completeSale}
              disabled={Number(selected.qty || 0) <= 0}
            >
              판매 완료
            </button>
          </div>
        </section>
      </main>

      <section className="inventory-panel">
        <div className="panel-head">
          <h2>재고관리 테이블</h2>
          <span>실재고 기준 정렬 없음 · 검색 결과 연동</span>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>코드</th>
                <th>구분</th>
                <th>제품명</th>
                <th>순도</th>
                <th>무게(g)</th>
                <th>수량</th>
                <th>조정</th>
                <th>회사</th>
                <th>상태</th>
                <th>입고일</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => (
                <tr key={`table-${item.code}`} className={selected.code === item.code ? "selected-row" : ""}>
                  <td>{item.code}</td>
                  <td>{item.type}</td>
                  <td>{item.name}</td>
                  <td>{item.purity}</td>
                  <td>{item.weight}</td>
                  <td>{item.qty}</td>
                  <td>
                    <div className="qty-adjust">
                      <button type="button" className="qty-btn" onClick={() => adjustInventoryQty(item.code, -1)}>-</button>
                      <button type="button" className="qty-btn" onClick={() => adjustInventoryQty(item.code, 1)}>+</button>
                    </div>
                  </td>
                  <td>{item.company}</td>
                  <td>{item.status}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="sales-log-wrap">
          <div className="panel-head sales-head">
            <h2>저장된 시세 내역</h2>
            <span>최근 10건</span>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>날짜</th>
                  <th>시간</th>
                  <th>24K 시세(원/돈)</th>
                </tr>
              </thead>
              <tbody>
                {recentMarketSnapshots.length > 0 ? (
                  recentMarketSnapshots.map((snap, idx) => (
                    <tr key={`${snap.date}-${snap.time}-${idx}`}>
                      <td>{snap.date}</td>
                      <td>{snap.time}</td>
                      <td>{money(snap.marketPrice)}원</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3}>저장된 시세가 없습니다.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="panel-head sales-head">
            <h2>최근 판매 내역</h2>
            <span>최근 10건</span>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>날짜</th>
                  <th>시간</th>
                  <th>제품명</th>
                  <th>코드</th>
                  <th>금액</th>
                  <th>순도</th>
                </tr>
              </thead>
              <tbody>
                {recentSales.length > 0 ? (
                  recentSales.map((log, idx) => (
                    <tr key={`${log.date}-${log.time}-${log.code}-${idx}`}>
                      <td>{log.date}</td>
                      <td>{log.time}</td>
                      <td>{log.name}</td>
                      <td>{log.code}</td>
                      <td>{money(log.amount)}원</td>
                      <td>{log.purity}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6}>판매 내역이 없습니다.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div className="info-row">
      <span>{label}</span>
      <b>{value}</b>
    </div>
  );
}
