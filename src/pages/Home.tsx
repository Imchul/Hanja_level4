import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <h1 className="title">한자 4급 마스터</h1>
            <div className="menu">
                <button className="menu-btn learn" onClick={() => navigate('/learn')}>
                    📖 학습 모드
                </button>
                <button className="menu-btn quiz" onClick={() => navigate('/quiz')}>
                    🎮 퀴즈 모드
                </button>
            </div>
        </div>
    );
}
