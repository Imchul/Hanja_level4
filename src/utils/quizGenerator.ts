import { hanjaList } from '../data/hanjaList';
import type { Hanja } from '../data/hanjaList';

export interface QuizQuestion {
    id: number;
    hanja: Hanja;
    soundOptions: string[];
    meaningOptions: string[];
    correctSound: string;
    correctMeaning: string;
    type: 'basic' | 'hint'; // 'basic' covers Basic/Combo/Time, 'hint' is for Hint mode
}

const SHUFFLE = <T>(array: T[]): T[] => {
    return [...array].sort(() => Math.random() - 0.5);
};

export const generateQuiz = (mode: string, count: number): QuizQuestion[] => {
    const shuffledHanja = SHUFFLE(hanjaList).slice(0, count);
    // If we don't have enough hanja for count, we might reuse or just take all.
    // Current logic just takes what is available if count > valid list length.

    // Need pool for distractors
    const allSounds = Array.from(new Set(hanjaList.map(h => h.sound)));
    const allMeanings = Array.from(new Set(hanjaList.map(h => h.meaning)));

    return shuffledHanja.map((target) => {
        // Generate Sound Options
        const otherSounds = SHUFFLE(allSounds.filter(s => s !== target.sound)).slice(0, 3);
        const soundOptions = SHUFFLE([target.sound, ...otherSounds]);

        // Generate Meaning Options
        const otherMeanings = SHUFFLE(allMeanings.filter(m => m !== target.meaning)).slice(0, 3);
        const meaningOptions = SHUFFLE([target.meaning, ...otherMeanings]);

        return {
            id: target.id,
            hanja: target,
            soundOptions,
            meaningOptions,
            correctSound: target.sound,
            correctMeaning: target.meaning,
            type: mode === 'hint' ? 'hint' : 'basic',
        };
    });
};
