import { JudgeClear } from "../logics/JudgeClear";

test("1～9が1つずつある", () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const sut = new JudgeClear();

    const result = sut.JudgeClearStraight(data);

    expect(result).toBe(true);
});

test("1～9が1つずつある(順序がバラバラ)", () => {
    const data = [1, 3, 5, 7, 9, 8, 6, 4, 2];
    const sut = new JudgeClear();

    const result = sut.JudgeClearStraight(data);

    expect(result).toBe(true);
});

test("1～9の中に重複がある", () => {
    const data = [1, 1, 3, 4, 5, 6, 7, 8, 9];
    const sut = new JudgeClear();

    const result = sut.JudgeClearStraight(data);

    expect(result).toBe(false);
});

test("配列の中に範囲外の値がある(大きい)", () => {
    const data = [1, 2, 10, 4, 5, 6, 7, 120, 9];
    const sut = new JudgeClear();

    const result = sut.JudgeClearStraight(data);

    expect(result).toBe(false);
});

test("配列の中に範囲外の値がある(小さい)", () => {
    const data = [1, 2, 3, 0, 5, -1, 7, 8, 9];
    const sut = new JudgeClear();

    const result = sut.JudgeClearStraight(data);

    expect(result).toBe(false);
});

test("配列のデータが少ない", () => {
    const data = [1, 2, 3];
    const sut = new JudgeClear();

    const result = sut.JudgeClearStraight(data);

    expect(result).toBe(false);
});

test("配列のデータが多い", () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const sut = new JudgeClear();

    const result = sut.JudgeClearStraight(data);

    expect(result).toBe(false);
});
