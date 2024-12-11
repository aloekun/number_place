export class JudgeClear {
    // 配列が1～9の連続した数値であることを確認する
    public JudgeClearStraight(numArray: number[]): boolean {
        // 要素数が 9 以外は認めない
        if (numArray.length !== 9) {
            return false;
        }

        // 要素に範囲外のデータがあれば、認めない
        const resultRange = numArray.every(
            (element) => 1 <= element && element <= 9
        );
        if (!resultRange) {
            return false;
        }

        // 配列に重複があれば取り除く
        const originArray: number[] = [];
        numArray.forEach((element) => {
            if (!originArray.includes(element)) {
                originArray.push(element);
            }
        });

        // 引数の配列と重複除外後の配列が
        //  完全一致したら、true
        //  一つでも食い違ったら、false
        for (let index = 0; index < numArray.length; index++) {
            if (numArray[index] !== originArray[index]) {
                return false;
            }
        }
        return true;
    }
}
