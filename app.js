// ==========================================
// 1. 기본 퀴즈 데이터셋 (기본 30개 탑재)
// ==========================================
const DEFAULT_QUIZ_BANK = [
  { word: "수박", hint: "ㅅㅂ", desc: "여름에 주로 먹는, 줄무늬가 있고 속이 빨간 과일" },
  { word: "지우개", hint: "ㅈㅇㄱ", desc: "연필로 쓴 글씨를 지울 때 쓰는 문구 도구" },
  { word: "비행기", hint: "ㅂㅎㄱ", desc: "사람이나 물건을 싣고 하늘을 나는 큰 교통수단" },
  { word: "스마트폰", hint: "ㅅㅁㅌㅍ", desc: "전화뿐만 아니라 인터넷, 게임을 할 수 있는 휴대용 기기" },
  { word: "호랑이", hint: "ㅎㄹㅇ", desc: "등에 검은 줄무늬가 있고 '어흥' 소리를 내는 맹수의 왕" },
  { word: "컴퓨터", hint: "ㅋㅍㅌ", desc: "인터넷 검색, 문서 작성, 게임 등을 할 수 있는 전자 기기" },
  { word: "자전거", hint: "ㅈㅈㄱ", desc: "페달을 발로 밟아 두 바퀴로 움직이는 친환경 교통수단" },
  { word: "피아노", hint: "ㅍㅇㄴ", desc: "흰색과 검은색 건반을 눌러 아름다운 소리를 내는 큰 악기" },
  { word: "소방차", hint: "ㅅㅂㅊ", desc: "불이 났을 때 빨간 사이렌을 울리며 달려가는 긴급 자동차" },
  { word: "축구공", hint: "ㅊㄱㄱ", desc: "발로 차서 상대방 골대에 골을 넣는 경기에서 쓰는 공" },
  { word: "아이스크림", hint: "ㅇㅇㅅㅋㄹ", desc: "더울 때 입안에서 녹여 먹는 차갑고 달콤한 얼음 과자" },
  { word: "선풍기", hint: "ㅅㅍㄱ", desc: "날개가 빙글빙글 돌아가며 시원한 바람을 일으키는 가전제품" },
  { word: "도서관", hint: "ㄷㅅㄱ", desc: "책이 아주 많고, 조용히 공부하거나 책을 빌릴 수 있는 공간" },
  { word: "신호등", hint: "ㅅㅎㄷ", desc: "길을 안전하게 건너도록 빨간색, 초록색 불을 켜주는 신호 장치" },
  { word: "우산", hint: "ㅇㅅ", desc: "비나 눈이 올 때 머리 위로 써서 몸이 젖지 않게 막아주는 도구" },
  { word: "사과", hint: "ㅅㄱ", desc: "껍질이 빨갛고 아삭아삭하며, 백설공주 동화에 나오는 과일" },
  { word: "경찰관", hint: "ㄱㅊㄱ", desc: "시민의 안전을 지키고 나쁜 사람을 잡는 직업을 가진 사람" },
  { word: "연필", hint: "ㅇㅍ", desc: "글씨를 쓰거나 그림을 그릴 때 쓰는, 검은 심이 든 필기도구" },
  { word: "텔레비전", hint: "ㅌㄹㅂㅈ", desc: "여러 방송 프로그램의 화면과 소리를 보여주는 대표적인 가전제품" },
  { word: "냉장고", hint: "ㄴㅈㄱ", desc: "음식을 상하지 않게 차갑게 보관해주는 부엌 필수 가전제품" },
  { word: "우체통", hint: "ㅇㅊㅌ", desc: "편지를 넣으면 우체부 아저씨가 모아서 배달해주는 빨간 통" },
  { word: "강아지", hint: "ㄱㅇㅈ", desc: "사람을 잘 따르고 '멍멍' 짖는 귀여운 반려동물" },
  { word: "지하철", hint: "ㅈㅎㅊ", desc: "땅속 터널에 깔린 철길을 따라 사람들을 실어 나르는 빠른 열차" },
  { word: "무지개", hint: "ㅁㅈㄱ", desc: "비가 온 뒤 하늘에 나타나는 일곱 색깔의 빛의 다리" },
  { word: "숟가락", hint: "ㅅㄱㄹ", desc: "밥이나 국을 떠먹을 때 사용하는 머리가 둥글고 자루가 달린 식기" },
  { word: "안경", hint: "ㅇㄱ", desc: "시력이 나쁜 사람이 글씨나 사물을 더 잘 보기 위해 눈앞에 쓰는 도구" },
  { word: "시계", hint: "ㅅㄱ", desc: "벽에 걸거나 손목에 차며, 시간을 알려주는 장치" },
  { word: "가위", hint: "ㄱㅇ", desc: "종이나 실, 옷감 등을 두 개의 날로 싹둑 자를 때 쓰는 도구" },
  { word: "고양이", hint: "ㄱㅇㅇ", desc: "야옹 소리를 내며 귀가 쫑긋하고 쥐를 잘 잡는 귀여운 반려동물" },
  { word: "비누", hint: "ㅂㄴ", desc: "물과 함께 비벼 거품을 내어 손이나 몸을 깨끗이 씻는 물건" }
];

// 로컬 스토리지 키
const STORAGE_KEY = "word_quiz_battle_questions";

// ==========================================
// 2. 오디오 신디사이저 (Web Audio API)
// ==========================================
class SoundSynth {
  constructor() {
    this.ctx = null;
    this.bgmNode = null;
    this.bgmGain = null;
    this.enabled = true;
    this.bgmEnabled = false;
  }

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playTone(freq, type, duration, startOffset = 0, endFreq = null, volume = 0.1) {
    if (!this.enabled) return;
    this.init();
    
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime + startOffset);
    
    if (endFreq !== null) {
      osc.frequency.exponentialRampToValueAtTime(endFreq, this.ctx.currentTime + startOffset + duration);
    }
    
    gain.gain.setValueAtTime(volume, this.ctx.currentTime + startOffset);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + startOffset + duration);
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.start(this.ctx.currentTime + startOffset);
    osc.stop(this.ctx.currentTime + startOffset + duration);
  }

  playCorrect() {
    // 딩동댕 (상승조 멜로디)
    this.playTone(523.25, 'sine', 0.15, 0); // C5
    this.playTone(659.25, 'sine', 0.15, 0.1); // E5
    this.playTone(783.99, 'sine', 0.3, 0.2); // G5
  }

  playWrong() {
    // 뿡~ (하강 톱니파)
    this.playTone(180, 'sawtooth', 0.4, 0, 90, 0.15);
  }

  playTick() {
    // 째깍 (고음 짧은 사인파)
    this.playTone(1000, 'sine', 0.03, 0, null, 0.05);
  }

  playTimeout() {
    // 시간 초과 (경보음)
    this.playTone(330, 'triangle', 0.2, 0, 220, 0.15);
    this.playTone(330, 'triangle', 0.2, 0.2, 220, 0.15);
  }

  playVictory() {
    // 승리 팡파르
    const tempo = 0.15;
    this.playTone(523.25, 'triangle', tempo, 0); // C5
    this.playTone(523.25, 'triangle', tempo, tempo); // C5
    this.playTone(523.25, 'triangle', tempo, tempo * 2); // C5
    this.playTone(659.25, 'triangle', tempo * 2, tempo * 3); // E5
    this.playTone(587.33, 'triangle', tempo, tempo * 5); // D5
    this.playTone(659.25, 'triangle', tempo, tempo * 6); // E5
    this.playTone(783.99, 'triangle', tempo * 4, tempo * 7); // G5
  }

  startBGM() {
    if (!this.bgmEnabled || !this.enabled) return;
    this.init();
    if (this.bgmNode) this.stopBGM();

    // 매우 간단한 아르페지에이터 배경음 생성
    const self = this;
    const notes = [261.63, 329.63, 392.00, 523.25, 392.00, 329.63]; // C코드 아르페지오
    let index = 0;
    
    this.bgmInterval = setInterval(() => {
      if (!self.bgmEnabled || !self.enabled) {
        self.stopBGM();
        return;
      }
      // 부드러운 삼각형 파형으로 낮은 소리 재생
      self.playTone(notes[index] / 2, 'triangle', 0.4, 0, null, 0.03);
      index = (index + 1) % notes.length;
    }, 400);
  }

  stopBGM() {
    if (this.bgmInterval) {
      clearInterval(this.bgmInterval);
      this.bgmInterval = null;
    }
  }
}

const synth = new SoundSynth();

// ==========================================
// 3. 게임 상태 및 데이터 로직
// ==========================================
let quizBank = [];
let quizList = []; // 15개 퀴즈
let currentQuestionIndex = 0;
let scores = { odd: 0, even: 0 };
let combos = { odd: 0, even: 0 };
const ROUNDS_COUNT = 15;
const QUESTION_DURATION = 20; // 20초

let gameTimer = null;
let timeLeft = QUESTION_DURATION;
let isAnswered = false;
let hintVisible = false;

// 각 팀의 패널티 남은 시간 (초)
let penaltyTimes = { odd: 0, even: 0 };
let penaltyInterval = null;

// ==========================================
// 4. 로컬 스토리지 기반 문제 관리
// ==========================================
function loadQuizBank() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    try {
      quizBank = JSON.parse(data);
    } catch (e) {
      console.error("데이터 파싱 에러, 기본 데이터로 재설정합니다.");
      quizBank = [...DEFAULT_QUIZ_BANK];
    }
  } else {
    quizBank = [...DEFAULT_QUIZ_BANK];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(quizBank));
  }
}

function saveQuizBank() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(quizBank));
}

// ==========================================
// 5. 핵심 게임 제어 함수
// ==========================================

// 게임 초기화 및 무작위 15문제 추출
function initGame() {
  loadQuizBank();
  
  // 만약 퀴즈 은행의 크기가 15개 미만이면, 기본 퀴즈 데이터를 추가로 병합
  if (quizBank.length < ROUNDS_COUNT) {
    const defaultNeeded = ROUNDS_COUNT - quizBank.length;
    const unusedDefaults = DEFAULT_QUIZ_BANK.filter(d => !quizBank.some(q => q.word === d.word));
    quizBank = [...quizBank, ...unusedDefaults.slice(0, defaultNeeded)];
  }

  // 퀴즈 은행 무작위 셔플 후 15개 선택
  const shuffled = [...quizBank].sort(() => Math.random() - 0.5);
  quizList = shuffled.slice(0, ROUNDS_COUNT);

  currentQuestionIndex = 0;
  scores = { odd: 0, even: 0 };
  combos = { odd: 0, even: 0 };
  
  updateScoreUI();
}

// 다음 라운드(문제) 세팅
function setupQuestion() {
  if (currentQuestionIndex >= ROUNDS_COUNT) {
    endGame();
    return;
  }

  isAnswered = false;
  hintVisible = false;
  timeLeft = QUESTION_DURATION;
  penaltyTimes = { odd: 0, even: 0 };

  // 패널티 화면 제거
  document.getElementById("odd-lock").classList.remove("active");
  document.getElementById("even-lock").classList.remove("active");

  const currentQuiz = quizList[currentQuestionIndex];
  
  // UI 갱신: 문제 설명
  const oddDescEl = document.getElementById("odd-question-desc");
  const evenDescEl = document.getElementById("even-question-desc");
  const oddHintEl = document.getElementById("odd-question-hint");
  const evenHintEl = document.getElementById("even-question-hint");

  oddDescEl.textContent = currentQuiz.desc;
  evenDescEl.textContent = currentQuiz.desc;
  
  // 힌트 초기화 (가림)
  oddHintEl.textContent = "힌트: 🔒 (시간 지체 또는 오답 시 오픈)";
  evenHintEl.textContent = "힌트: 🔒 (시간 지체 또는 오답 시 오픈)";
  oddHintEl.classList.remove("revealed");
  evenHintEl.classList.remove("revealed");

  // 문제 번호 표시
  document.getElementById("timer-round-num").textContent = `${currentQuestionIndex + 1} / ${ROUNDS_COUNT}`;

  // 4지선다 보기 구성 (정답 1개 + 오답 3개)
  const choices = generateChoices(currentQuiz.word);

  // 양팀의 보기 버튼을 서로 다르게 셔플하여 커닝 및 단순 좌표 동시 터치 방지
  const oddChoices = [...choices].sort(() => Math.random() - 0.5);
  const evenChoices = [...choices].sort(() => Math.random() - 0.5);

  renderChoices("odd", oddChoices, currentQuiz.word);
  renderChoices("even", evenChoices, currentQuiz.word);

  // 타이머 프로그레스 바 초기화 및 시작
  updateTimerUI();
  
  if (gameTimer) clearInterval(gameTimer);
  gameTimer = setInterval(() => {
    timeLeft -= 0.1;
    if (timeLeft <= 0) {
      timeLeft = 0;
      clearInterval(gameTimer);
      handleTimeout();
    } else {
      // 10초 이하가 되었을 때 초성 힌트 자동 활성화
      if (timeLeft <= QUESTION_DURATION / 2 && !hintVisible) {
        revealHint();
      }
      
      // 마지막 5초째 1초 간격 째깍 소리
      const sec = Math.ceil(timeLeft);
      if (timeLeft > 0 && timeLeft <= 5 && Math.abs(timeLeft - sec) < 0.05) {
        synth.playTick();
        document.getElementById("timer-bar-container").classList.add("warning-pulse");
      } else if (timeLeft > 5) {
        document.getElementById("timer-bar-container").classList.remove("warning-pulse");
      }
      
      updateTimerUI();
    }
  }, 100);

  // 패널티 타이머 구동
  if (penaltyInterval) clearInterval(penaltyInterval);
  penaltyInterval = setInterval(() => {
    if (penaltyTimes.odd > 0) {
      penaltyTimes.odd -= 0.1;
      if (penaltyTimes.odd <= 0) {
        penaltyTimes.odd = 0;
        document.getElementById("odd-lock").classList.remove("active");
      } else {
        document.getElementById("odd-lock-time").textContent = `${Math.ceil(penaltyTimes.odd)}초`;
      }
    }
    if (penaltyTimes.even > 0) {
      penaltyTimes.even -= 0.1;
      if (penaltyTimes.even <= 0) {
        penaltyTimes.even = 0;
        document.getElementById("even-lock").classList.remove("active");
      } else {
        document.getElementById("even-lock-time").textContent = `${Math.ceil(penaltyTimes.even)}초`;
      }
    }
  }, 100);
}

// 4지선다 보기 배열 생성
function generateChoices(correctWord) {
  const choices = [correctWord];
  const otherWords = quizBank
    .map(q => q.word)
    .filter(word => word !== correctWord);

  // 중복 없는 무작위 3개 단어 추출
  const shuffledOthers = otherWords.sort(() => Math.random() - 0.5);
  for (let i = 0; i < 3; i++) {
    if (shuffledOthers[i]) {
      choices.push(shuffledOthers[i]);
    } else {
      // 혹시 단어가 부족할 경우 가짜 오답 생성
      choices.push("단어" + (i + 1));
    }
  }
  return choices;
}

// 초성 힌트 노출
function revealHint() {
  if (hintVisible) return;
  hintVisible = true;
  const currentQuiz = quizList[currentQuestionIndex];
  
  const oddHintEl = document.getElementById("odd-question-hint");
  const evenHintEl = document.getElementById("even-question-hint");

  oddHintEl.textContent = `초성 힌트: ${currentQuiz.hint}`;
  evenHintEl.textContent = `초성 힌트: ${currentQuiz.hint}`;
  
  oddHintEl.classList.add("revealed");
  evenHintEl.classList.add("revealed");
}

// 각 팀 보기 렌더링 및 클릭 핸들러 바인딩
function renderChoices(team, choicesList, correctWord) {
  const container = document.getElementById(`${team}-choices-container`);
  container.innerHTML = "";

  choicesList.forEach(choice => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = choice;
    
    // 모바일/전자칠판 멀티터치 감도 개선을 위해 pointerdown/touchstart 등 고려
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      submitAnswer(team, choice, correctWord, btn);
    });

    container.appendChild(btn);
  });
}

// 답안 제출 핸들러 (중복 처리 및 오답 패널티 제어)
function submitAnswer(team, selectedWord, correctWord, buttonElement) {
  if (isAnswered) return; // 이미 누군가 맞혀서 대기 중인 상태면 무시
  
  // 패널티 타임 상태인 경우 클릭 무시
  if (penaltyTimes[team] > 0) return;

  if (selectedWord === correctWord) {
    // 정답 처리!
    isAnswered = true;
    clearInterval(gameTimer);
    if (penaltyInterval) clearInterval(penaltyInterval);

    // 콤보 보너스 계산 및 적용
    combos[team]++;
    const oppositeTeam = team === "odd" ? "even" : "odd";
    combos[oppositeTeam] = 0; // 상대 팀 콤보 리셋

    // 남은 시간에 비례하여 기본 100점 + 알파 보너스 점수 지급
    const speedBonus = Math.round(timeLeft * 5);
    const comboBonus = (combos[team] > 1) ? (combos[team] - 1) * 20 : 0;
    const pointsEarned = 100 + speedBonus + comboBonus;
    scores[team] += pointsEarned;

    // 점수 업데이트
    updateScoreUI();
    synth.playCorrect();

    // 정답 버튼 디자인 강조
    buttonElement.classList.add("correct-flash");

    // 다른 쪽 팀에는 상대가 맞혔음을 안내
    const oppTeamName = team === "odd" ? "홀수팀" : "짝수팀";
    const oppMsgId = team === "odd" ? "even-lock" : "odd-lock";
    const oppLockEl = document.getElementById(oppMsgId);
    oppLockEl.querySelector(".lock-msg").textContent = `⚡ 상대팀이 먼저 맞혔습니다!`;
    oppLockEl.querySelector(".lock-sub").textContent = "다음 문제를 기다리세요.";
    oppLockEl.querySelector("#odd-lock-time, #even-lock-time").textContent = "";
    oppLockEl.classList.add("active");

    // 1.5초 후 다음 라운드로
    setTimeout(() => {
      currentQuestionIndex++;
      setupQuestion();
    }, 1500);

  } else {
    // 오답 처리!
    synth.playWrong();
    buttonElement.classList.add("wrong-flash");
    buttonElement.disabled = true; // 틀린 오답 버튼 비활성화

    // 콤보 리셋
    combos[team] = 0;

    // 패널티 부여 (2초 잠금)
    penaltyTimes[team] = 2.0;
    const lockEl = document.getElementById(`${team}-lock`);
    lockEl.querySelector(".lock-msg").textContent = "🔒 오답 패널티 발생!";
    lockEl.querySelector(".lock-sub").textContent = "잠시 터치를 할 수 없습니다.";
    lockEl.classList.add("active");

    // 틀렸으므로 초성 힌트 즉시 오픈!
    revealHint();
  }
}

// 시간 초과 처리
function handleTimeout() {
  if (penaltyInterval) clearInterval(penaltyInterval);
  synth.playTimeout();
  
  // 양쪽에 시간 초과 오버레이 띄우기
  const locks = ["odd-lock", "even-lock"];
  locks.forEach(id => {
    const el = document.getElementById(id);
    el.querySelector(".lock-msg").textContent = "⏰ 시간 초과!";
    el.querySelector(".lock-sub").textContent = "아무도 맞히지 못했습니다.";
    el.querySelector("#odd-lock-time, #even-lock-time").textContent = "";
    el.classList.add("active");
  });

  // 콤보 양쪽 모두 깨짐
  combos.odd = 0;
  combos.even = 0;

  setTimeout(() => {
    currentQuestionIndex++;
    setupQuestion();
  }, 2000);
}

// UI 업데이트: 점수 및 콤보
function updateScoreUI() {
  document.getElementById("odd-score").textContent = scores.odd;
  document.getElementById("even-score").textContent = scores.even;

  // 콤보 배지 제어
  const oddComboEl = document.getElementById("odd-combo");
  const evenComboEl = document.getElementById("even-combo");

  if (combos.odd >= 2) {
    oddComboEl.textContent = `${combos.odd} 콤보! 🔥`;
    oddComboEl.classList.add("active");
  } else {
    oddComboEl.classList.remove("active");
  }

  if (combos.even >= 2) {
    evenComboEl.textContent = `${combos.even} 콤보! 🔥`;
    evenComboEl.classList.add("active");
  } else {
    evenComboEl.classList.remove("active");
  }
}

// UI 업데이트: 타이머 서클 및 수치
function updateTimerUI() {
  const percent = (timeLeft / QUESTION_DURATION) * 100;
  const timeBar = document.getElementById("timer-progress-fill");
  const timeText = document.getElementById("timer-seconds");

  if (timeBar) {
    timeBar.style.width = `${percent}%`;
    
    // 남은 시간에 따른 바 색상 변경 (녹색 -> 노랑 -> 빨강)
    if (percent > 50) {
      timeBar.style.backgroundColor = "#00ff88"; // Neon green
    } else if (percent > 25) {
      timeBar.style.backgroundColor = "#ffaa00"; // Orange
    } else {
      timeBar.style.backgroundColor = "#ff0055"; // Red
    }
  }

  if (timeText) {
    timeText.textContent = Math.ceil(timeLeft);
  }
}

// ==========================================
// 6. 게임 종료 및 결과 처리
// ==========================================
function endGame() {
  if (gameTimer) clearInterval(gameTimer);
  if (penaltyInterval) clearInterval(penaltyInterval);

  synth.stopBGM();
  synth.playVictory();

  // 대결 결과 판정
  let resultTitle = "";
  let resultMsg = "";
  let winnerClass = "";

  if (scores.odd > scores.even) {
    resultTitle = "🏆 홀수팀 승리!";
    resultMsg = `홀수팀이 ${scores.odd}점으로 짝수팀(${scores.even}점)을 꺾고 승리했습니다!`;
    winnerClass = "odd-win";
  } else if (scores.even > scores.odd) {
    resultTitle = "🏆 짝수팀 승리!";
    resultMsg = `짝수팀이 ${scores.even}점으로 홀수팀(${scores.odd}점)을 꺾고 승리했습니다!`;
    winnerClass = "even-win";
  } else {
    resultTitle = "🤝 무승부!";
    resultMsg = `양 팀 모두 ${scores.odd}점으로 멋진 대결을 펼쳤습니다!`;
    winnerClass = "draw-win";
  }

  document.getElementById("result-title").textContent = resultTitle;
  document.getElementById("result-description").textContent = resultMsg;
  
  const modal = document.getElementById("result-modal");
  modal.className = `modal-overlay active ${winnerClass}`;

  // 폭죽 캔버스 가동
  startConfetti();
}

// 폭죽(컨페티) 캔버스 애니메이션
let confettiActive = false;
function startConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  const ctx = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ["#00f0ff", "#ff007f", "#00ff88", "#ffff00", "#ff00ff", "#00ffff"];
  const particles = [];
  confettiActive = true;

  for (let i = 0; i < 150; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * canvas.height,
      color: colors[Math.floor(Math.random() * colors.length)],
      tilt: Math.random() * 10 - 5,
      tiltAngleIncremental: Math.random() * 0.07 + 0.02,
      tiltAngle: 0
    });
  }

  function draw() {
    if (!confettiActive) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, idx) => {
      p.tiltAngle += p.tiltAngleIncremental;
      p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
      p.x += Math.sin(p.tiltAngle);
      p.tilt = Math.sin(p.tiltAngle - idx / 3) * 15;

      ctx.beginPath();
      ctx.lineWidth = p.r;
      ctx.strokeStyle = p.color;
      ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
      ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
      ctx.stroke();

      // 바닥에 닿으면 재생성
      if (p.y > canvas.height) {
        particles[idx] = {
          x: Math.random() * canvas.width,
          y: -20,
          r: p.r,
          d: p.d,
          color: p.color,
          tilt: p.tilt,
          tiltAngleIncremental: p.tiltAngleIncremental,
          tiltAngle: p.tiltAngle
        };
      }
    });

    requestAnimationFrame(draw);
  }

  draw();
}

function stopConfetti() {
  confettiActive = false;
  const canvas = document.getElementById("confetti-canvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

// ==========================================
// 7. 퀴즈 편집기 UI 바인딩 및 렌더링
// ==========================================
function renderEditorList() {
  const container = document.getElementById("editor-list-container");
  container.innerHTML = "";

  quizBank.forEach((q, index) => {
    const row = document.createElement("div");
    row.className = "editor-row";
    row.innerHTML = `
      <div class="editor-cell word-cell">${q.word}</div>
      <div class="editor-cell hint-cell">${q.hint}</div>
      <div class="editor-cell desc-cell">${q.desc}</div>
      <div class="editor-cell action-cell">
        <button class="btn btn-danger btn-sm" onclick="deleteQuizItem(${index})">삭제</button>
      </div>
    `;
    container.appendChild(row);
  });
}

function deleteQuizItem(index) {
  if (quizBank.length <= ROUNDS_COUNT) {
    alert(`최소 ${ROUNDS_COUNT}개의 문제가 등록되어 있어야 게임을 시작할 수 있습니다.`);
    return;
  }
  quizBank.splice(index, 1);
  saveQuizBank();
  renderEditorList();
}

// 글로벌 범위 함수 노출 (삭제 처리를 인라인 버튼에서 쉽게 호출하기 위함)
window.deleteQuizItem = deleteQuizItem;

function addNewQuizItem() {
  const word = document.getElementById("new-word").value.trim();
  const hint = document.getElementById("new-hint").value.trim();
  const desc = document.getElementById("new-desc").value.trim();

  if (!word || !hint || !desc) {
    alert("모든 빈칸을 채워주세요.");
    return;
  }

  // 중복 검사
  if (quizBank.some(q => q.word === word)) {
    alert("이미 존재하는 단어입니다.");
    return;
  }

  quizBank.push({ word, hint, desc });
  saveQuizBank();
  renderEditorList();

  // 입력창 초기화
  document.getElementById("new-word").value = "";
  document.getElementById("new-hint").value = "";
  document.getElementById("new-desc").value = "";
}

// ==========================================
// 8. 초기 이벤트 바인딩 및 부트스트랩
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  loadQuizBank();

  // 음향 토글
  const soundToggle = document.getElementById("sound-toggle");
  if (soundToggle) {
    soundToggle.addEventListener("change", (e) => {
      synth.enabled = e.target.checked;
    });
  }

  // BGM 토글
  const bgmToggle = document.getElementById("bgm-toggle");
  if (bgmToggle) {
    bgmToggle.addEventListener("change", (e) => {
      synth.bgmEnabled = e.target.checked;
      if (synth.bgmEnabled) {
        synth.startBGM();
      } else {
        synth.stopBGM();
      }
    });
  }

  // 게임 시작 버튼
  document.getElementById("start-game-btn").addEventListener("click", () => {
    synth.init();
    
    // 팀명 커스텀 로드
    const oddName = document.getElementById("odd-name-input").value.trim() || "홀수팀";
    const evenName = document.getElementById("even-name-input").value.trim() || "짝수팀";
    
    document.getElementById("odd-team-name-label").textContent = oddName;
    document.getElementById("even-team-name-label").textContent = evenName;

    // 로비 화면 닫고 게임화면 노출
    document.getElementById("lobby-modal").classList.remove("active");
    
    initGame();
    setupQuestion();
    
    if (synth.bgmEnabled) {
      synth.startBGM();
    }
  });

  // 다시 하기 버튼
  document.getElementById("restart-game-btn").addEventListener("click", () => {
    stopConfetti();
    document.getElementById("result-modal").classList.remove("active");
    
    initGame();
    setupQuestion();
    
    if (synth.bgmEnabled) {
      synth.startBGM();
    }
  });

  // 로비로 돌아가기 버튼
  document.getElementById("go-lobby-btn").addEventListener("click", () => {
    stopConfetti();
    document.getElementById("result-modal").classList.remove("active");
    document.getElementById("lobby-modal").classList.add("active");
  });

  // 퀴즈 편집기 열기
  document.getElementById("open-editor-btn").addEventListener("click", () => {
    renderEditorList();
    document.getElementById("editor-modal").classList.add("active");
  });

  // 퀴즈 편집기 닫기
  document.getElementById("close-editor-btn").addEventListener("click", () => {
    document.getElementById("editor-modal").classList.remove("active");
  });

  // 퀴즈 편집기 추가 버튼
  document.getElementById("add-quiz-btn").addEventListener("click", addNewQuizItem);

  // 초기 로비 화면 활성화
  document.getElementById("lobby-modal").classList.add("active");
});
