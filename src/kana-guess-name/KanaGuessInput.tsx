import React, { Component } from 'react';
import * as _ from "lodash";
import { Input } from 'antd';

import { Kana, findKana } from '../kanas';

type KanaGuessInputProps = {
    kanaToGuess: Kana

    kanaGuessedCorrectly : () => void
    kanaGuessedIncorrectly : () => void
}

type KanaGuessInputState = {
    romajiInput: string
}

class KanaGuessInput extends Component<KanaGuessInputProps, KanaGuessInputState> {

    constructor(props: KanaGuessInputProps) {
        super(props);
        this.state = {
            romajiInput: ""
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
    }

    onInputChange(entry: React.ChangeEvent<HTMLInputElement>) {
        const input: string = entry.target.value;
        const letter: string | undefined = _.last(input);
        if(letter !== " ") {
            this.setState({romajiInput: input});
        }
    }

    onKeyPress(entry: React.KeyboardEvent) {
        const validationKeys = ["Enter", " "];
        if(validationKeys.includes(entry.key)) {
            let kana: Kana | undefined = findKana(this.state.romajiInput);
            if(kana === this.props.kanaToGuess) {
                this.props.kanaGuessedCorrectly();
            } else {
                this.props.kanaGuessedIncorrectly();
            }
            this.setState({romajiInput: ""});
        }
    }

    render() {
        return <Input
                size="large"
                addonBefore="Rōmaji"
                onChange={this.onInputChange}
                onKeyPress={this.onKeyPress}
                value={this.state.romajiInput}
                />;
    }
}

export default KanaGuessInput;
