test("CIの動作確認", () => {
    const num1: number = 1;
    const num2: number = 2;

    const num3 = num1 + num2;

    expect(num3).toBe(3);
});
