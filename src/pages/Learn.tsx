import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { hanjaList } from '../data/hanjaList';
import type { Hanja } from '../data/hanjaList';
import Card from '../components/Card';
import '../styles/Learn.css';

export default function Learn() {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isRandom, setIsRandom] = useState(false);
    const [hideDetails, setHideDetails] = useState(true);
    const [favorites, setFavorites] = useState<number[]>(() => {
        const saved = localStorage.getItem('favorites');
        return saved ? JSON.parse(saved) : [];
    });
    const [learningList, setLearningList] = useState<Hanja[]>(hanjaList);

    // Initialize list based on Random setting
    useEffect(() => {
        if (isRandom) {
            const shuffled = [...hanjaList].sort(() => Math.random() - 0.5);
            setLearningList(shuffled);
        } else {
            setLearningList(hanjaList);
        }
        setCurrentIndex(0);
    }, [isRandom]);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (id: number) => {
        if (favorites.includes(id)) {
            setFavorites(favorites.filter(fid => fid !== id));
        } else {
            setFavorites([...favorites, id]);
        }
    };

    const handleNext = () => {
        if (currentIndex < learningList.length - 1) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    const currentHanja = learningList[currentIndex];

    return (
        <div className="page-container learn-container">
            <header className="learn-header">
                <button className="back-btn" onClick={() => navigate('/')}>✕</button>
                <div className="controls">
                    <label className="toggle-label">
                        <input
                            type="checkbox"
                            checked={isRandom}
                            onChange={(e) => setIsRandom(e.target.checked)}
                        />
                        랜덤
                    </label>
                    <label className="toggle-label">
                        <input
                            type="checkbox"
                            checked={hideDetails}
                            onChange={(e) => setHideDetails(e.target.checked)}
                        />
                        가리기
                    </label>
                </div>
            </header>

            <main className="card-area">
                <Card
                    hanja={currentHanja}
                    hideDetailsInitially={hideDetails}
                    isFavorite={favorites.includes(currentHanja.id)}
                    onToggleFavorite={() => toggleFavorite(currentHanja.id)}
                />
            </main>

            <footer className="nav-controls">
                <button onClick={handlePrev} disabled={currentIndex === 0}>
                    ← 이전
                </button>
                <span className="progress">
                    {currentIndex + 1} / {learningList.length}
                </span>
                <button onClick={handleNext} disabled={currentIndex === learningList.length - 1}>
                    다음 →
                </button>
            </footer>
        </div>
    );
}
