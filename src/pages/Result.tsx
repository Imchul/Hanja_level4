import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Result.css';

interface ResultState {
    score: number;
    total: number;
    correctCount: number;
    maxCombo: number;
    mode: string;
    wrongIds?: number[];
}

export default function Result() {
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state as ResultState;

    if (!state) {
        return <div onClick={() => navigate('/')}>No result data. Go Home.</div>;
    }

    const { score, total, correctCount, maxCombo, mode, wrongIds } = state;
    const percentage = Math.round((correctCount / total) * 100);
    const hasWrongAnswers = wrongIds && wrongIds.length > 0;

    const handleRetry = () => {
        // Navigate to Play with retryIds in state
        navigate(`/play?mode=${mode}&count=${wrongIds?.length || 10}`, {
            state: { retryIds: wrongIds }
        });
    };

    return (
        <div className="page-container result-container">
            <h1>퀴즈 종료!</h1>

            <div className="score-card">
                <h2>총점</h2>
                <div className="score-value">{score}점</div>
                <div className="score-details">
                    <p>정답률: {percentage}% ({correctCount}/{total})</p>
                    {mode === 'combo' && <p>최고 콤보: {maxCombo} 🔥</p>}
                </div>
            </div>

            <div className="action-buttons">
                {hasWrongAnswers && (
                    <button className="retry-wrong-btn" onClick={handleRetry}>
                        📝 틀린 문제 다시 풀기
                    </button>
                )}
            </div>

            <div className="action-buttons secondary-actions">
                <button className="restart-btn" onClick={() => navigate('/quiz')}>새 퀴즈</button>
                <button className="home-btn" onClick={() => navigate('/')}>홈으로</button>
            </div>
        </div>
    );
}
