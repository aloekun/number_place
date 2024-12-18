// ナンバープレースの盤面全体
export class NumberBoard {
    private board: number[];

    constructor(board: number[]) {
        // 入力データチェック
        if (board.length < 9) {
            throw EvalError("board is not correct data num.");
        }
        this.board = board;
    }

    // 盤面から指定した行の数列を取得
    // TODO: 盤面から指定した行・列・ボックス(3*3)の数列を取得するように更新
    public getNumberSet(targetSetNum: number): number[] | undefined {
        const resultSet = [];
        // 行の取得
        // 連続する数字を取得
        let checkNumber;
        let pushNumber: number = 0;
        for (
            let lineIndex: number = 1;
            lineIndex <= targetSetNum;
            lineIndex++
        ) {
            if (lineIndex < targetSetNum) {
                continue;
            }
            for (let rowIndex: number = 0; rowIndex < 9; rowIndex++) {
                // 指定行の配列の要素を順番に取り出す
                checkNumber = this.board.at((lineIndex - 1) * 9 + rowIndex);
                // 範囲外の場合は、0の配列を返す
                if (checkNumber === undefined) {
                    return undefined;
                }
                pushNumber = checkNumber;
                resultSet.push(pushNumber);
            }
        }
        return resultSet;
    }
}
