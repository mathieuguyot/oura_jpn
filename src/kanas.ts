import * as _ from "lodash";

class Kana {
    readonly hiragana: string;
    readonly katakana: string;
    readonly romajiTranscriptions: Array<string>;

    constructor(hiragana: string, katakana: string, romajiTranscriptions: Array<string>) {
        this.hiragana = hiragana;
        this.katakana = katakana;
        this.romajiTranscriptions = romajiTranscriptions;
    }
}

const mainKanas : Array<Kana> = [
    new Kana("あ", "ア", ["a"]),
    new Kana("い", "イ", ["i"]),
    new Kana("う", "ウ", ["u"]),
    new Kana("え", "エ", ["e"]),
    new Kana("お", "オ", ["o"]),
    
    new Kana("か", "カ", ["ka"]),
    new Kana("き", "キ", ["ki"]),
    new Kana("く", "ク", ["ku"]),
    new Kana("け", "ケ", ["ke"]),
    new Kana("こ", "コ", ["ko"]),

    new Kana("さ", "サ", ["sa"]),
    new Kana("し", "シ", ["shi", "si"]),
    new Kana("す", "ウ", ["su"]),
    new Kana("せ", "セ", ["se"]),
    new Kana("そ", "ソ", ["so"]),

    new Kana("た", "タ", ["ta"]),
    new Kana("ち", "チ", ["chi", "ti"]),
    new Kana("つ", "ツ", ["tsu", "tu"]),
    new Kana("て", "テ", ["te"]),
    new Kana("と", "ト", ["to"]),

    new Kana("な", "ナ", ["na"]),
    new Kana("に", "ニ", ["ni"]),
    new Kana("ぬ", "ヌ", ["nu"]),
    new Kana("ね", "ネ", ["ne"]),
    new Kana("の", "ノ", ["no"]),

    new Kana("は", "ハ", ["ha"]),
    new Kana("ひ", "ヒ", ["hi"]),
    new Kana("ふ", "フ", ["fu"]),
    new Kana("へ", "ヘ", ["he"]),
    new Kana("ほ", "ホ", ["ho"]),

    new Kana("ま", "マ", ["ma"]),
    new Kana("み", "ミ", ["mi"]),
    new Kana("む", "ム", ["mu"]),
    new Kana("め", "メ", ["me"]),
    new Kana("も", "モ", ["mo"]),

    new Kana("や", "ヤ", ["ya"]),
    new Kana("ゆ", "ユ", ["yu"]),
    new Kana("よ", "ヨ", ["yo"]),

    new Kana("ら", "ラ", ["ra"]),
    new Kana("り", "リ", ["ri"]),
    new Kana("る", "ル", ["ru"]),
    new Kana("れ", "レ", ["re"]),
    new Kana("ろ", "ロ", ["ro"]),

    new Kana("わ", "ワ", ["wa"]),
    new Kana("を", "ヲ", ["wo"]),

    new Kana("ん", "ン", ["n"]),
];

const allKanas = mainKanas;

function suffleSliceKanaList(outputListSize: number, 
                             referenceKanaList: Array<Kana>) 
                            : Array<Kana>
{
    let hiraganas_suffle : Array<Kana> = _.shuffle(referenceKanaList);
    return hiraganas_suffle.slice(0, outputListSize);
}

function findKana(romajiInput: string) : Kana | undefined
{
    return allKanas.find(kana => kana.romajiTranscriptions.includes(romajiInput));
}

export {
    Kana,
    
    mainKanas,
    allKanas,
    
    suffleSliceKanaList,
    findKana,
};
