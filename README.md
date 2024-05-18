# Project HAM

Project HAM(HTML based Artificial intelligence Model)은 HTML, CSS, JavaScript를 활용하여 베스킨라빈스 31 게임을 강화학습 인공지능 모델로 구현한 프로젝트입니다. Web API의 local storage를 활용하여 학습 데이터를 저장하며, 자기 학습을 통해 점점 더 나은 전략을 구사하는 인공지능을 개발하는 것을 목표로 합니다.

## 어떻게 학습되나요? (학습 알고리즘)

HTML 기반 인공지능 모델(HAM)은 JavaScript의 난수 생성을 이용하여 학습합니다. 두 개의 난수 생성자(난수 생성자 1과 난수 생성자 2)가 베스킨라빈스 31 게임(31게임)의 규칙에 따라 난수를 생성합니다. 게임이 끝날 때마다 난수 생성자 2의 행동을 local storage에 다음과 같은 방식으로 저장합니다:

- 형식: `TurnX_TotalNumY_R_Z`
  - X: 차례
  - Y: 행동하기 전 수
  - R: 결과 (예: WIN, LOSE 혹은 TOTAL)
  - Z: 자신이 제시한 수 (예: 1, 2, 3)

이를 통해 어떤 수를 어떤 차례에 내야 승리할 수 있는가에 대한 데이터를 쌓습니다.

---
