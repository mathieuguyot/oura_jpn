import React from 'react';

import './kana-guess-game.css';
import { Kana } from '../kanas';

enum GuessStatus {
    TO_GUESS,
    GUESSED_OK,
    GUESSED_KO
}

type KanaCardProps = {
    kana: Kana
    romajiDisplay: GuessStatus
}

const KanaCard = ({ kana, romajiDisplay }: KanaCardProps) => {
    let romajiCardClassName: string = "CardRomaji";
    if(romajiDisplay === GuessStatus.GUESSED_OK) {
        romajiCardClassName += " CardRomajiRight";
    }
    else if(romajiDisplay === GuessStatus.GUESSED_KO) {
        romajiCardClassName += " CardRomajiWrong";
    }

    return <div className="Card">
        <div className="CardKana">
            <span>{kana.hiragana}</span>
            <div className={romajiCardClassName}>
                {romajiDisplay === GuessStatus.TO_GUESS ? "?" : kana.romajiTranscriptions[0]}
            </div>
        </div>
    </div>;
}

export {
    KanaCard,
    GuessStatus
};