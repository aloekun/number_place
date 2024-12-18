import { NumberBoard } from "../logics/NumberBoard";

test("横9つの1列目を一括取得", () => {
    const sut = new NumberBoard([1, 1, 1, 1, 1, 1, 1, 1, 1]);

    const resultSet = sut.getNumberSet(1);

    const numberSet = resultSet !== undefined ? resultSet : [];
    const numberSetStr: string = numberSet.toString();
    const targetStr: string = [1, 1, 1, 1, 1, 1, 1, 1, 1].toString();
    expect(numberSetStr).toBe(targetStr);
});

test("横9つの1列目を一括取得(バラけた数字)", () => {
    const sut = new NumberBoard([1, 2, 3, 1, 1, 1, 1, 1, 1]);

    const resultSet = sut.getNumberSet(1);

    const numberSet = resultSet !== undefined ? resultSet : [];
    const numberSetStr: string = numberSet.toString();
    const targetStr: string = [1, 2, 3, 1, 1, 1, 1, 1, 1].toString();
    expect(numberSetStr).toBe(targetStr);
});

test("横9つの2列目を一括取得", () => {
    const sut = new NumberBoard([
        1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    ]);

    const resultSet = sut.getNumberSet(2);

    const numberSet = resultSet !== undefined ? resultSet : [];
    const numberSetStr: string = numberSet.toString();
    const targetStr: string = [2, 2, 2, 2, 2, 2, 2, 2, 2].toString();
    expect(numberSetStr).toBe(targetStr);
});

test("横9つの範囲外を一括取得(0の配列を返す)", () => {
    const sut = new NumberBoard([1, 1, 1, 1, 1, 1, 1, 1, 1]);

    const resultSet = sut.getNumberSet(10);

    const numberSetStr: string = resultSet === undefined ? "undefined" : "";
    const targetStr: string = "undefined";
    expect(numberSetStr).toBe(targetStr);
});
