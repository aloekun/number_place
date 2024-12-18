import { NumberBoard } from "../logics/NumberBoard";

test("横9つの1行目を一括取得", () => {
    const sut = new NumberBoard([1, 1, 1, 1, 1, 1, 1, 1, 1]);

    const resultSet = sut.getNumberSet(1);

    const numberSet = resultSet !== undefined ? resultSet : [];
    const numberSetStr: string = numberSet.toString();
    const targetStr: string = [1, 1, 1, 1, 1, 1, 1, 1, 1].toString();
    expect(numberSetStr).toBe(targetStr);
});

test("横9つの1行目を一括取得(バラけた数字)", () => {
    const sut = new NumberBoard([1, 2, 3, 1, 1, 1, 1, 1, 1]);

    const resultSet = sut.getNumberSet(1);

    const numberSet = resultSet !== undefined ? resultSet : [];
    const numberSetStr: string = numberSet.toString();
    const targetStr: string = [1, 2, 3, 1, 1, 1, 1, 1, 1].toString();
    expect(numberSetStr).toBe(targetStr);
});

test("横9つの2行目を一括取得", () => {
    const sut = new NumberBoard([
        1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    ]);

    const resultSet = sut.getNumberSet(2);

    const numberSet = resultSet !== undefined ? resultSet : [];
    const numberSetStr: string = numberSet.toString();
    const targetStr: string = [2, 2, 2, 2, 2, 2, 2, 2, 2].toString();
    expect(numberSetStr).toBe(targetStr);
});

test("横9つの9行目を一括取得", () => {
    const sut = new NumberBoard([
        1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3,
        3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6,
        6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8,
        9, 9, 9, 9, 9, 9, 9, 9, 9,
    ]);

    const resultSet = sut.getNumberSet(9);

    const numberSet = resultSet !== undefined ? resultSet : [];
    const numberSetStr: string = numberSet.toString();
    const targetStr: string = [9, 9, 9, 9, 9, 9, 9, 9, 9].toString();
    expect(numberSetStr).toBe(targetStr);
});

test("横9つの範囲外を一括取得(undefinedを返す)", () => {
    const sut = new NumberBoard([1, 1, 1, 1, 1, 1, 1, 1, 1]);

    const resultSet = sut.getNumberSet(10);

    const numberSetStr: string = resultSet === undefined ? "undefined" : "";
    const targetStr: string = "undefined";
    expect(numberSetStr).toBe(targetStr);
});
