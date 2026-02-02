import { hanjaList } from '../data/hanjaList';
import type { Hanja } from '../data/hanjaList';

export interface QuizOption {
    sound: string;
    meaning: string;
    isCorrect: boolean;
}

export interface QuizQuestion {
    id: number;
    hanja: Hanja;
    // Unified options for Basic/Combo
    options: QuizOption[];

    // Keep separate for Hint mode if we want to keep that mechanic (Word -> Sound/Meaning separately?)
    // User asked for "Unified Selection", assuming for Basic mode.
    // But Hint mode was "Context -> Infer Sound/Meaning". 
    // If we unify, it just becomes "Context -> Select Sound+Meaning". This is cleaner.
    // Let's unify EVERYTHING for simplicity and "less clicks".

    type: 'basic' | 'hint';
}

const SHUFFLE = <T>(array: T[]): T[] => {
    return [...array].sort(() => Math.random() - 0.5);
};

export const generateQuiz = (mode: string, count: number, specificIds?: number[]): QuizQuestion[] => {
    // If specificIds provided (Retry), use those. Else random slice.
    let targetHanjas: Hanja[] = [];

    if (specificIds && specificIds.length > 0) {
        targetHanjas = hanjaList.filter(h => specificIds.includes(h.id));
        // Shuffle them so retry order is different? Or keep order? Shuffle is better.
        targetHanjas = SHUFFLE(targetHanjas);
    } else {
        // Normal generation
        targetHanjas = SHUFFLE(hanjaList).slice(0, count);
    }

    // Pool for distractors
    const allHanjas = hanjaList;

    return targetHanjas.map((target) => {
        // Generate Distractors (Wrong answers)
        // We need 3 other Hanja that are NOT the target
        const distractors = SHUFFLE(allHanjas.filter(h => h.id !== target.id)).slice(0, 3);

        // Create Option objects
        const correctOption: QuizOption = {
            sound: target.sound,
            meaning: target.meaning,
            isCorrect: true
        };

        const wrongOptions: QuizOption[] = distractors.map(d => ({
            sound: d.sound,
            meaning: d.meaning,
            isCorrect: false
        }));

        // Combine and Shuffle
        const options = SHUFFLE([correctOption, ...wrongOptions]);

        return {
            id: target.id,
            hanja: target,
            options,
            type: mode === 'hint' ? 'hint' : 'basic',
        };
    });
};
