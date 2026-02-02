import { useState, useEffect } from 'react';
import type { Hanja } from '../data/hanjaList';
import './Card.css';

interface CardProps {
    hanja: Hanja;
    hideDetailsInitially: boolean;
    isFavorite: boolean;
    onToggleFavorite: () => void;
}

export default function Card({ hanja, hideDetailsInitially, isFavorite, onToggleFavorite }: CardProps) {
    const [revealed, setRevealed] = useState(!hideDetailsInitially);

    // Reset revealed state when hanja changes, if hideDetailsInitially is true
    useEffect(() => {
        setRevealed(!hideDetailsInitially);
    }, [hanja, hideDetailsInitially]);

    const handleCardClick = () => {
        if (!revealed) {
            setRevealed(true);
        }
    };

    return (
        <div className={`card ${revealed ? 'revealed' : ''}`} onClick={handleCardClick}>
            <div className="card-header">
                <span className="level-badge">{hanja.level}</span>
                <button
                    className={`favorite-btn ${isFavorite ? 'active' : ''}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite();
                    }}
                >
                    {isFavorite ? '⭐' : '☆'}
                </button>
            </div>

            <div className="hanja-display">
                {hanja.char}
            </div>

            <div className={`card-details ${revealed ? 'visible' : ''}`}>
                <div className="sound-meaning">
                    <span className="sound">{hanja.sound}</span>
                    <span className="meaning">{hanja.meaning}</span>
                </div>

                <div className="examples">
                    {hanja.examples.map((ex, idx) => (
                        <div key={idx} className="example-item">
                            <span className="word">{ex.word}</span>
                            <span className="hanja-sub">({ex.hanja})</span>
                        </div>
                    ))}
                </div>
            </div>

            {!revealed && <div className="tap-hint">터치하여 뜻 보기</div>}
        </div>
    );
}
