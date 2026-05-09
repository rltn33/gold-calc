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
const EMPTY_PRODUCT_FORM = {
  code: "",
  purity: "24K",
  type: "",
  name: "",
  weight: "",
  don: "",
  qty: 1,
  company: "",
  model: "",
  labor: 0,
  status: "재고중",
};

function money(value) {
  return Number(value || 0).toLocaleString("ko-KR");
}

function floorThousand(value) {
  return Math.floor(Number(value || 0) / 1000) * 1000;
}

function productImageAlt(product) {
  return `${product.type} ${product.name}`;
}

function stockState(qty) {
  const amount = Number(qty || 0);
  if (amount <= 0) return "품절";
  if (amount <= 1) return "재고부족";
  return "재고중";
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("create");
  const [productForm, setProductForm] = useState(EMPTY_PRODUCT_FORM);
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

  const openCreateModal = () => {
    setModalMode("create");
    setProductForm(EMPTY_PRODUCT_FORM);
    setIsModalOpen(true);
  };

  const openEditModal = () => {
    if (!selected) return;
    setModalMode("edit");
    setProductForm({
      code: selected.code || "",
      purity: selected.purity || "24K",
      type: selected.type || "",
      name: selected.name || "",
      weight: selected.weight || "",
      don: selected.don || "",
      qty: selected.qty || 0,
      company: selected.company || "",
      model: selected.model || "",
      labor: selected.labor || 0,
      status: selected.status || stockState(selected.qty),
    });
    setIsModalOpen(true);
  };

  const updateProductForm = (key, value) => setProductForm((prev) => ({ ...prev, [key]: value }));

  const saveProduct = () => {
    if (!productForm.code.trim() || !productForm.name.trim() || !productForm.type.trim()) return;
    const weight = Number(productForm.weight || 0);
    const don = Number(productForm.don || 0);
    const qty = Math.max(0, Number(productForm.qty || 0));
    const labor = Number(productForm.labor || 0);
    const normalized = {
      code: productForm.code.trim(),
      purity: productForm.purity || "24K",
      type: productForm.type.trim(),
      name: productForm.name.trim(),
      weight,
      don,
      qty,
      company: productForm.company.trim(),
      model: productForm.model.trim(),
      labor,
      status: qty <= 0 ? "품절" : "재고중",
      date: modalMode === "create" ? new Date().toISOString().slice(0, 10) : selected.date,
    };

    if (modalMode === "create") {
      setInventory((prev) => [normalized, ...prev]);
      setSelectedCode(normalized.code);
    } else {
      setInventory((prev) => prev.map((item) => (item.code === selected.code ? normalized : item)));
      setSelectedCode(normalized.code);
    }
    setIsModalOpen(false);
  };

  const deleteSelectedProduct = () => {
    if (!selected) return;
    const nextInventory = inventory.filter((item) => item.code !== selected.code);
    setInventory(nextInventory);
    if (nextInventory.length > 0) setSelectedCode(nextInventory[0].code);
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

  const inStockCount = inventory.filter((item) => Number(item.qty || 0) > 1).length;
  const lowStockCount = inventory.filter((item) => Number(item.qty || 0) === 1).length;
  const soldOutCount = inventory.filter((item) => Number(item.qty || 0) <= 0).length;
  const recentSales = salesLog.slice(0, 10);
  const recentMarketSnapshots = marketSnapshots.slice(0, 10);

  return (
    <>
      <div className="dashboard-page">
        <header className="topbar">
          <div className="logo">GOLD CALC</div>
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
          <button type="button" className="status-button">운영중</button>
        </header>

        <section className="top-row">
          <article className="panel compact">
            <div className="panel-head"><h2>제품 검색</h2><span>{filtered.length}건</span></div>
            <div className="search-actions">
              <input className="field" placeholder="제품명 / 코드 / 회사 / 모델명" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
              <button type="button" className="sub-button" onClick={openCreateModal}>신규 등록</button>
            </div>
          </article>
          <article className="panel compact">
            <div className="panel-head"><h2>24K 시세 입력</h2><span>원/돈</span></div>
            <div className="search-actions">
              <input className="field" type="number" value={marketPrice} onChange={(e) => setMarketPrice(e.target.value)} />
              <button type="button" className="sub-button" onClick={saveMarketSnapshot}>저장</button>
            </div>
          </article>
          <article className="panel compact summary">
            <div className="panel-head"><h2>운영 요약</h2><span>{today}</span></div>
            <div className="kpi-row"><b>{money(todaySalesTotal)}원</b><span>오늘 매출</span></div>
            <div className="mini-kpi">재고중 {inStockCount} / 부족 {lowStockCount} / 품절 {soldOutCount}</div>
          </article>
        </section>

        <section className="middle-row">
          <article className="panel results-panel">
            <div className="panel-head"><h2>검색 결과</h2><span>테이블</span></div>
            <div className="table-wrap compact-table">
              <table>
                <thead><tr><th>코드</th><th>제품명</th><th>순도</th><th>회사</th><th>재고</th></tr></thead>
                <tbody>
                  {filtered.map((item) => (
                    <tr key={`result-${item.code}`} className={selected.code === item.code ? "selected-row" : ""} onClick={() => chooseProduct(item)}>
                      <td>{item.code}</td><td>{item.type} · {item.name}</td><td>{item.purity}</td><td>{item.company}</td><td>{item.qty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <article className="panel product-panel">
            <div className="panel-head">
              <h2>선택 제품 정보</h2>
              <div className="head-actions">
                <button type="button" className="sub-button" onClick={openEditModal}>수정</button>
                <button type="button" className="sub-button danger-button" onClick={deleteSelectedProduct}>삭제</button>
              </div>
            </div>
            <div className="product-overview">
              <div className="image-wrap" role="img" aria-label={productImageAlt(selected)}>
                <div className="image-chip">IMAGE</div>
                <div className="image-title">{selected.type}</div>
                <div className="image-name">{selected.name}</div>
              </div>
              <div className="info-grid">
                <Info label="제품명" value={`${selected.type} · ${selected.name}`} />
                <Info label="회사" value={selected.company || "미입력"} />
                <Info label="순도" value={`${selected.purity} → ${purityOverride}`} />
                <Info label="무게" value={`${selected.weight}g (${selected.don}돈)`} />
                <Info label="공임" value={`${money(laborOverride)}원`} />
              </div>
            </div>
            <div className="calc-grid">
              <select className="field" value={purityOverride} onChange={(e) => setPurityOverride(e.target.value)}><option value="24K">24K</option><option value="18K">18K</option><option value="14K">14K</option></select>
              <input className="field" type="number" value={laborOverride} onChange={(e) => setLaborOverride(e.target.value)} />
              <button type="button" className="sub-button">검산식</button>
            </div>
            <div className="price-box">
              <div className="price-label">판매가</div><div className="price-value">{money(calc.displayPrice)}원</div>
              <div className="formula">({selected.weight} ÷ 3.75 × {calc.factor} × {money(marketPrice)} + {money(calc.labor)}) × {calc.margin}</div>
              <button type="button" className="sale-button" onClick={completeSale} disabled={Number(selected.qty || 0) <= 0}>판매 완료</button>
            </div>
          </article>

          <article className="panel compact summary">
            <div className="panel-head"><h2>최근 저장 시세</h2><span>최신 5건</span></div>
            <div className="mini-list">
              {recentMarketSnapshots.slice(0, 5).map((snap, idx) => (
                <div key={`${snap.date}-${idx}`} className="mini-item">{snap.date} {snap.time} <b>{money(snap.marketPrice)}</b></div>
              ))}
              {recentMarketSnapshots.length === 0 && <div className="recent-sales-empty">저장된 시세 없음</div>}
            </div>
          </article>
        </section>

        <section className="panel inventory-panel">
          <div className="panel-head"><h2>재고관리 테이블</h2><div className="head-actions"><input className="field filter" placeholder="필터/검색" /><button className="sub-button">엑셀</button></div></div>
          <div className="table-wrap inventory-scroll">
            <table><thead><tr><th>코드</th><th>구분</th><th>제품명</th><th>순도</th><th>무게</th><th>수량</th><th>조정</th><th>회사</th><th>상태</th><th>입고일</th></tr></thead>
            <tbody>{filtered.map((item) => (<tr key={`table-${item.code}`} className={selected.code === item.code ? "selected-row" : ""}><td>{item.code}</td><td>{item.type}</td><td>{item.name}</td><td>{item.purity}</td><td>{item.weight}</td><td>{item.qty}</td><td><div className="qty-adjust"><button type="button" className="qty-btn" onClick={() => adjustInventoryQty(item.code, -1)}>-</button><button type="button" className="qty-btn" onClick={() => adjustInventoryQty(item.code, 1)}>+</button></div></td><td>{item.company}</td><td><span className={`stock-badge ${stockState(item.qty) === "품절" ? "soldout" : stockState(item.qty) === "재고부족" ? "low" : "instock"}`}>{stockState(item.qty)}</span></td><td>{item.date}</td></tr>))}</tbody></table>
          </div>
        </section>
      </div>
      {isModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsModalOpen(false)}><div className="modal-card" onClick={(e) => e.stopPropagation()}><div className="panel-head"><h2>{modalMode === "create" ? "신규 제품 등록" : "선택 상품 수정"}</h2><button type="button" className="sub-button" onClick={() => setIsModalOpen(false)}>닫기</button></div><div className="modal-form-grid"><input className="field" placeholder="제품코드" value={productForm.code} onChange={(e) => updateProductForm("code", e.target.value)} /><select className="field" value={productForm.purity} onChange={(e) => updateProductForm("purity", e.target.value)}><option value="24K">24K</option><option value="18K">18K</option><option value="14K">14K</option></select><input className="field" placeholder="종류" value={productForm.type} onChange={(e) => updateProductForm("type", e.target.value)} /><input className="field" placeholder="제품명" value={productForm.name} onChange={(e) => updateProductForm("name", e.target.value)} /><input className="field" type="number" placeholder="무게(g)" value={productForm.weight} onChange={(e) => updateProductForm("weight", e.target.value)} /><input className="field" type="number" step="0.001" placeholder="중량(돈)" value={productForm.don} onChange={(e) => updateProductForm("don", e.target.value)} /><input className="field" type="number" placeholder="수량" value={productForm.qty} onChange={(e) => updateProductForm("qty", e.target.value)} /><input className="field" placeholder="회사" value={productForm.company} onChange={(e) => updateProductForm("company", e.target.value)} /><input className="field" placeholder="모델명" value={productForm.model} onChange={(e) => updateProductForm("model", e.target.value)} /><input className="field" type="number" placeholder="공임" value={productForm.labor} onChange={(e) => updateProductForm("labor", e.target.value)} /><select className="field" value={productForm.status} onChange={(e) => updateProductForm("status", e.target.value)}><option value="재고중">재고중</option><option value="재고부족">재고부족</option><option value="품절">품절</option></select></div><button type="button" className="sale-button" onClick={saveProduct}>{modalMode === "create" ? "등록 완료" : "수정 완료"}</button></div></div>
      )}
    </>
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
