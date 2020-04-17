import React, { Component } from 'react';

import { Kana, allKanas, suffleSliceKanaList } from '../kanas';

import { KanaCard, GuessStatus } from './KanaGuessCard';
import KanaGuessInput from './KanaGuessInput';
import KanaLevelSelector from './kanaLevelSelector';

type KanaGuessGameProps = {
}

type KanaGuessGameState = {
    kanaToGuess: Array<Kana>;
    userGuess: Array<GuessStatus>;
    currentKanaTries: number;
    currentKanaIndex: number;
    gameEnded: boolean
    maxKanaIndex: number;
}

const numberOfKanaToGuess: number = 5;
const maxTriesPerKana: number = 3;
const defaultMaxKanaIndex: number = 5;

class KanaGuessGame extends Component<KanaGuessGameProps, KanaGuessGameState> {

    constructor(props: KanaGuessGameProps) {
        super(props);
        this.state = this.create_new_game_state(defaultMaxKanaIndex);

        this.init_game = this.init_game.bind(this);
        this.on_kana_guessed = this.on_kana_guessed.bind(this);
    }

    create_new_game_state(maxKanaIndex: number) : KanaGuessGameState {
        let kanaToGuess = suffleSliceKanaList(numberOfKanaToGuess, allKanas.slice(0, maxKanaIndex));
        return {
            kanaToGuess: kanaToGuess,
            userGuess: Array<GuessStatus>(kanaToGuess.length).fill(GuessStatus.TO_GUESS),
            currentKanaTries: 0,
            currentKanaIndex: 0,
            gameEnded: false,
            maxKanaIndex: maxKanaIndex
        };
    }

    init_game(maxKanaIndex: number) {
        this.setState(this.create_new_game_state(maxKanaIndex));
    }
    
    on_kana_guessed(guessed_ok: boolean) {
        if(this.state.gameEnded) {
            this.init_game(this.state.maxKanaIndex);
            return;
        }
        if(guessed_ok || this.state.currentKanaTries + 1 === maxTriesPerKana) {
            let newIndex = this.state.currentKanaIndex + 1;
            let userGuess: Array<GuessStatus> = this.state.userGuess;
            userGuess[this.state.currentKanaIndex] = guessed_ok ? GuessStatus.GUESSED_OK : GuessStatus.GUESSED_KO;
            this.setState({
                userGuess: userGuess,
                currentKanaTries: 0,
                currentKanaIndex: newIndex,
                gameEnded: newIndex === this.state.kanaToGuess.length
            });
        }
        else {
            this.setState({
                currentKanaTries: this.state.currentKanaTries + 1
            });
        }
    }

    render() {
        return <div className="KanaGuessGame">

            <div className="KanaGuessCardList">
                {this.state.kanaToGuess.map((kana, index) => {
                    return <KanaCard 
                                kana={kana} 
                                romajiDisplay={this.state.userGuess[index]} 
                                key={index} 
                            />;
                })}
            </div>
            
            <div className="KanaGuessInputWrapper">
                <KanaGuessInput
                    kanaToGuess={this.state.kanaToGuess[this.state.currentKanaIndex]}
                    kanaGuessedCorrectly={() => this.on_kana_guessed(true)}
                    kanaGuessedIncorrectly={() => this.on_kana_guessed(false)}
                />
            </div>
            
            <div className="KanaLevelSelectorWrapper">
                <KanaLevelSelector 
                    maxKanaIndex={this.state.maxKanaIndex}
                    onMaxKanaIndexChange={this.init_game}
                    />
            </div>
            

        </div>;
    }
}

export default KanaGuessGame;