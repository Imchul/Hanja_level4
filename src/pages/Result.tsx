import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Result.css';

interface ResultState {
    score: number;
    total: number;
    correctCount: number;
    maxCombo: number;
    mode: string;
}

export default function Result() {
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state as ResultState;

    if (!state) {
        return <div onClick={() => navigate('/')}>No result data. Go Home.</div>;
    }

    const { score, total, correctCount, maxCombo, mode } = state;
    const percentage = Math.round((correctCount / total) * 100);

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
                <button className="restart-btn" onClick={() => navigate('/quiz')}>다시 하기</button>
                <button className="home-btn" onClick={() => navigate('/')}>홈으로</button>
            </div>
        </div>
    );
}
