import { useState, useEffect, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { generateQuiz } from '../utils/quizGenerator';
import type { QuizQuestion } from '../utils/quizGenerator';
import '../styles/Play.css';

export default function Play() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const mode = searchParams.get('mode') || 'basic';
    // If TimeAttack, count is fixed or irrelevant (looping?), but for now we follow generated list
    // Actually TimeAttack usually re-generates or has large pool. 
    // For MVP, we'll generate a large enough pool or just N questions.
    // User spec says "Fixed (e.g. 25) or User selected N". So we stick to count.
    const countStr = searchParams.get('count') || '10';
    const timeStr = searchParams.get('time') || '60';

    const count = parseInt(countStr, 10);
    const initialTime = parseInt(timeStr, 10);

    const [questions, setQuestions] = useState<QuizQuestion[]>([]);
    const [currentIdx, setCurrentIdx] = useState(0);
    const [gameState, setGameState] = useState<'loading' | 'playing' | 'feedback' | 'finished'>('loading');

    // Game State
    const [selectedSound, setSelectedSound] = useState<string | null>(null);
    const [selectedMeaning, setSelectedMeaning] = useState<string | null>(null);
    const [score, setScore] = useState(0);
    const [combo, setCombo] = useState(0);
    const [maxCombo, setMaxCombo] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const [isCorrect, setIsCorrect] = useState(false);

    const timerRef = useRef<number | null>(null);

    useEffect(() => {
        // Init Quiz
        const quiz = generateQuiz(mode, count);
        setQuestions(quiz);
        setGameState('playing');
    }, [mode, count]);

    useEffect(() => {
        if (mode === 'timeattack' && gameState === 'playing') {
            timerRef.current = window.setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev <= 1) {
                        endGame();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [mode, gameState]);

    const endGame = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        setGameState('finished');
        navigate('/result', {
            state: {
                score,
                total: questions.length, // or currentIdx for TimeAttack?
                // For TimeAttack, total questions answered is currentIdx + 1 (or currentIdx if timeout)
                // But let's just pass stats
                correctCount,
                maxCombo,
                mode,
                history: { totalQuestions: questions.length }
            }
        });
    };

    useEffect(() => {
        // Check answer if both selected
        if (selectedSound && selectedMeaning && gameState === 'playing') {
            checkAnswer();
        }
    }, [selectedSound, selectedMeaning]);

    const checkAnswer = () => {
        const currentQ = questions[currentIdx];
        const isRight =
            selectedSound === currentQ.correctSound &&
            selectedMeaning === currentQ.correctMeaning;

        setIsCorrect(isRight);
        setGameState('feedback');

        if (isRight) {
            const newCombo = combo + 1;
            setCombo(newCombo);
            if (newCombo > maxCombo) setMaxCombo(newCombo);

            // Calculate Score
            let points = 1;
            if (mode === 'combo') {
                if (newCombo >= 5) points += 2;
                else if (newCombo >= 3) points += 1;
            }
            setScore(prev => prev + points);
            setCorrectCount(prev => prev + 1);
        } else {
            setCombo(0);
        }

        // Auto next after delay? Or manual?
        // User option: "Auto next question toggle". 
        // For MVP, lets do auto next after 1.5s or manual click
        // "Finished result screen: answer public + example words immediately"
    };

    const nextQuestion = () => {
        if (currentIdx < questions.length - 1) {
            setCurrentIdx(prev => prev + 1);
            setSelectedSound(null);
            setSelectedMeaning(null);
            setGameState('playing');
        } else {
            endGame();
        }
    };

    if (gameState === 'loading') return <div className="page-container">Loading...</div>;

    const currentQ = questions[currentIdx];

    return (
        <div className="play-container">
            <header className="play-header">
                <div className="stat-box">
                    <span className="label">점수</span>
                    <span className="value">{score}</span>
                </div>
                {mode === 'combo' && (
                    <div className="stat-box combo-box">
                        <span className="label">콤보</span>
                        <span className="value">🔥 {combo}</span>
                    </div>
                )}
                {mode === 'timeattack' ? (
                    <div className={`stat-box time-box ${timeLeft < 10 ? 'urgent' : ''}`}>
                        <span className="value">⏰ {timeLeft}s</span>
                    </div>
                ) : (
                    <div className="stat-box">
                        <span className="value">{currentIdx + 1} / {questions.length}</span>
                    </div>
                )}
            </header>

            <main className="question-area">
                {/* Question Display */}
                <div className="question-card">
                    {mode === 'hint' ? (
                        <div className="hint-display">
                            <span className="hint-label">이 한자의 음과 뜻은?</span>
                            <div className="hint-examples">
                                {currentQ.hanja.examples.map((ex, i) => (
                                    <div key={i} className="hint-row">
                                        {ex.word} <span className="masked-hanja">(?)</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="hanja-big">{currentQ.hanja.char}</div>
                    )}
                </div>

                {/* Options */}
                <div className={`options-area ${gameState === 'feedback' ? 'disabled' : ''}`}>
                    <div className="option-group">
                        <label>음(소리)</label>
                        <div className="options-grid">
                            {currentQ.soundOptions.map(opt => (
                                <button
                                    key={opt}
                                    className={`opt-btn ${selectedSound === opt ? 'selected' : ''} 
                    ${gameState === 'feedback' && opt === currentQ.correctSound ? 'correct' : ''}
                    ${gameState === 'feedback' && selectedSound === opt && opt !== currentQ.correctSound ? 'wrong' : ''}
                  `}
                                    onClick={() => setSelectedSound(opt)}
                                    disabled={gameState === 'feedback'}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="option-group">
                        <label>뜻(의미)</label>
                        <div className="options-grid">
                            {currentQ.meaningOptions.map(opt => (
                                <button
                                    key={opt}
                                    className={`opt-btn ${selectedMeaning === opt ? 'selected' : ''} 
                    ${gameState === 'feedback' && opt === currentQ.correctMeaning ? 'correct' : ''}
                    ${gameState === 'feedback' && selectedMeaning === opt && opt !== currentQ.correctMeaning ? 'wrong' : ''}
                  `}
                                    onClick={() => setSelectedMeaning(opt)}
                                    disabled={gameState === 'feedback'}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Feedback Overlay */}
                {gameState === 'feedback' && (
                    <div className={`feedback-overlay ${isCorrect ? 'correct-bg' : 'wrong-bg'}`}>
                        <div className="feedback-content">
                            <div className="result-icon">{isCorrect ? '⭕ 정답!' : '❌ 땡!'}</div>
                            <div className="answer-reveal">
                                <span className="big-char">{currentQ.hanja.char}</span>
                                <span className="info">{currentQ.correctSound} [{currentQ.correctMeaning}]</span>
                            </div>
                            <div className="examples-reveal">
                                {currentQ.hanja.examples.map((ex, i) => (
                                    <div key={i}>{ex.word} ({ex.hanja})</div>
                                ))}
                            </div>
                            <button className="next-btn" onClick={nextQuestion}>
                                {currentIdx < questions.length - 1 ? '다음 문제' : '결과 보기'}
                            </button>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
