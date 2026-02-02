import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Quiz.css';

type QuizMode = 'basic' | 'combo' | 'hint' | 'timeattack';

export default function Quiz() {
    const navigate = useNavigate();
    const [mode, setMode] = useState<QuizMode>('basic');
    const [count, setCount] = useState(25);
    const [customCount, setCustomCount] = useState('');
    const [timeLimit, setTimeLimit] = useState(60);

    const startQuiz = () => {
        let finalCount = count;
        if (customCount) {
            finalCount = parseInt(customCount, 10);
            if (isNaN(finalCount) || finalCount < 1) finalCount = 10;
        }

        // Pass params to Play page
        let url = `/play?mode=${mode}&count=${finalCount}`;
        if (mode === 'timeattack') {
            url += `&time=${timeLimit}`;
        }
        navigate(url);
    };

    return (
        <div className="page-container quiz-setup-container">
            <header>
                <button onClick={() => navigate('/')}>🔙 홈으로</button>
                <h1>퀴즈 설정</h1>
            </header>

            <section className="setup-section">
                <h2>모드 선택</h2>
                <div className="mode-grid">
                    <button
                        className={`mode-card ${mode === 'basic' ? 'selected' : ''}`}
                        onClick={() => setMode('basic')}
                    >
                        <h3>🎯 기본 핵심</h3>
                        <p>한자 보고 음/뜻 맞히기</p>
                    </button>

                    <button
                        className={`mode-card ${mode === 'combo' ? 'selected' : ''}`}
                        onClick={() => setMode('combo')}
                    >
                        <h3>🔥 콤보 러시</h3>
                        <p>연속 정답 보너스!</p>
                    </button>

                    <button
                        className={`mode-card ${mode === 'hint' ? 'selected' : ''}`}
                        onClick={() => setMode('hint')}
                    >
                        <h3>🧩 단어 힌트</h3>
                        <p>예시 단어로 추론하기</p>
                    </button>

                    <button
                        className={`mode-card ${mode === 'timeattack' ? 'selected' : ''}`}
                        onClick={() => setMode('timeattack')}
                    >
                        <h3>⚡ 타임어택</h3>
                        <p>제한시간 내 도전!</p>
                    </button>
                </div>
            </section>

            {mode !== 'timeattack' && (
                <section className="setup-section">
                    <h2>문제 수</h2>
                    <div className="count-options">
                        {[10, 25, 50, 100].map(val => (
                            <button
                                key={val}
                                className={count === val && !customCount ? 'selected' : ''}
                                onClick={() => { setCount(val); setCustomCount(''); }}
                            >
                                {val}문제
                            </button>
                        ))}
                        <input
                            type="number"
                            placeholder="직접입력"
                            value={customCount}
                            onChange={(e) => setCustomCount(e.target.value)}
                            className={customCount ? 'selected-input' : ''}
                        />
                    </div>
                </section>
            )}

            {mode === 'timeattack' && (
                <section className="setup-section">
                    <h2>제한 시간</h2>
                    <div className="count-options">
                        <button
                            className={timeLimit === 60 ? 'selected' : ''}
                            onClick={() => setTimeLimit(60)}
                        >
                            60초
                        </button>
                        <button
                            className={timeLimit === 90 ? 'selected' : ''}
                            onClick={() => setTimeLimit(90)}
                        >
                            90초
                        </button>
                    </div>
                </section>
            )}

            <button className="start-btn" onClick={startQuiz}>
                퀴즈 시작!
            </button>
        </div>
    );
}
