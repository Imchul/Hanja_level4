export interface Hanja {
    id: number;
    char: string;
    sound: string;
    meaning: string;
    examples: { word: string; hanja: string }[];
    level: string;
}

export const hanjaList: Hanja[] = [
    {
        id: 1,
        char: "問",
        sound: "문",
        meaning: "물을",
        examples: [
            { word: "질문", hanja: "質問" },
            { word: "문답", hanja: "問答" },
            { word: "문제", hanja: "問題" },
        ],
        level: "4급",
    },
    {
        id: 2,
        char: "答",
        sound: "답",
        meaning: "대답할",
        examples: [
            { word: "대답", hanja: "對答" },
            { word: "답변", hanja: "答辯" },
            { word: "정답", hanja: "正答" },
        ],
        level: "4급",
    },
    {
        id: 3,
        char: "題",
        sound: "제",
        meaning: "제목",
        examples: [
            { word: "주제", hanja: "主題" },
            { word: "문제", hanja: "問題" },
            { word: "숙제", hanja: "宿題" },
        ],
        level: "4급",
    },
    {
        id: 4,
        char: "質",
        sound: "질",
        meaning: "바탕",
        examples: [
            { word: "성질", hanja: "性質" },
            { word: "물질", hanja: "物質" },
            { word: "질문", hanja: "質問" },
        ],
        level: "4급",
    },
    {
        id: 5,
        char: "正",
        sound: "정",
        meaning: "바를",
        examples: [
            { word: "정문", hanja: "正門" },
            { word: "정직", hanja: "正直" },
            { word: "정확", hanja: "正確" },
        ],
        level: "4급",
    },
];
