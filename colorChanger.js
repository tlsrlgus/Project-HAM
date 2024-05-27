function applyRedTheme() {
    document.getElementById('dynamic-style').innerHTML = `
      body {
        font-family: 'Arial', sans-serif;
        margin: 0;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #ffe6e6; /* 연한 빨간색 배경 */
        color: #660000; /* 진한 빨간색 텍스트 */
      }
  
      .title {
        text-align: center;
        font-size: 2.5em;
        margin: 0;
        color: #800000; /* 마룬 색상 */
        text-shadow: 1px 1px 2px #ffffff; /* 흰색 그림자 */
      }
  
      .subtitle {
        text-align: center;
        font-size: 1em;
        margin: 0;
        color: #800000; /* 마룬 색상 */
        text-shadow: 1px 1px 2px #ffffff; /* 흰색 그림자 */
      }
  
      #turnAlert {
        text-align: center;
        font-size: 1.5em;
        margin-top: 10px;
      }
  
      #currentNumberDisplay {
        text-align: center;
        font-size: 1.2em;
        margin-top: 20px;
      }
  
      .buttons {
        display: flex;
        justify-content: center;
        margin-top: 40px;
      }
  
      #button-1, #button-2, #button-3 {
        width: 80px;
        height: 40px;
        border: 1px solid #660000; /* 진한 빨간색 테두리 */
        border-radius: 5px;
        margin: 10px;
        font-size: 16px;
        cursor: pointer;
        background-color: #ffe6e6; /* 연한 빨간색 배경 */
        color: #660000; /* 진한 빨간색 텍스트 */
        transition: background-color 0.3s, color 0.3s;
      }
  
      #button-1:hover, #button-2:hover, #button-3:hover {
        background-color: #660000; /* 진한 빨간색 배경 */
        color: #ffffff; /* 흰색 텍스트 */
      }
  
      #adminButton {
        margin-top: 20px;
        background-color: #660000; /* 진한 빨간색 배경 */
        color: #ffffff; /* 흰색 텍스트 */
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        font-size: 14px;
        cursor: pointer;
        transition: background-color 0.3s, color 0.3s;
      }
  
      #adminButton:hover {
        background-color: #440000; /* 더 진한 빨간색 배경 */
        color: #ffe6e6; /* 연한 빨간색 텍스트 */
      }
  
      #aiEmotion {
        position: absolute;
        bottom: 20px;
        left: 20px;
        width: auto; /* 적절한 크기로 조정 */
        height: auto;
      }
  
      #winRate, #winRatesForPhaseTwo {
        color: #660000; /* 진한 빨간색 */
        font-size: 1.2em;
        margin: 10px 0;
      }
    `;
  }
  
  function applyBlueTheme() {
    document.getElementById('dynamic-style').innerHTML = `
      body {
        font-family: 'Arial', sans-serif;
        margin: 0;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #f0f8ff; /* 연한 파란색 배경 */
        color: #003366; /* 진한 파란색 텍스트 */
      }
  
      .title {
        text-align: center;
        font-size: 2.5em;
        margin: 0;
        color: #000080; /* 네이비 색상 */
        text-shadow: 1px 1px 2px #ffffff; /* 흰색 그림자 */
      }
  
      .subtitle {
        text-align: center;
        font-size: 1em;
        margin: 0;
        color: #000080; /* 네이비 색상 */
        text-shadow: 1px 1px 2px #ffffff; /* 흰색 그림자 */
      }
  
      #turnAlert {
        text-align: center;
        font-size: 1.5em;
        margin-top: 10px;
      }
  
      #currentNumberDisplay {
        text-align: center;
        font-size: 1.2em;
        margin-top: 20px;
      }
  
      .buttons {
        display: flex;
        justify-content: center;
        margin-top: 40px;
      }
  
      #button-1, #button-2, #button-3 {
        width: 80px;
        height: 40px;
        border: 1px solid #003366; /* 진한 파란색 테두리 */
        border-radius: 5px;
        margin: 10px;
        font-size: 16px;
        cursor: pointer;
        background-color: #e6f7ff; /* 연한 파란색 배경 */
        color: #003366; /* 진한 파란색 텍스트 */
        transition: background-color 0.3s, color 0.3s;
      }
  
      #button-1:hover, #button-2:hover, #button-3:hover {
        background-color: #003366; /* 진한 파란색 배경 */
        color: #ffffff; /* 흰색 텍스트 */
      }
  
      #adminButton {
        margin-top: 20px;
        background-color: #003366; /* 진한 파란색 배경 */
        color: #ffffff; /* 흰색 텍스트 */
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        font-size: 14px;
        cursor: pointer;
        transition: background-color 0.3s, color 0.3s;
      }
  
      #adminButton:hover {
        background-color: #002244; /* 더 진한 파란색 배경 */
        color: #e6f7ff; /* 연한 파란색 텍스트 */
      }
  
      #aiEmotion {
        position: absolute;
        bottom: 20px;
        left: 20px;
        width: auto; /* 적절한 크기로 조정 */
        height: auto;
      }
  
      #winRate, #winRatesForPhaseTwo {
        color: #003366; /* 진한 파란색 */
        font-size: 1.2em;
        margin: 10px 0;
      }
    `;
  }
  