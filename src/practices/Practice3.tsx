import "../styles.css";

export const Practice3 = () => {
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };
  const onClickPractive = () => {
    let total: number = 0;
    total = getTotalFee(1000);
    console.log(total);
  };
  return (
    <div>
      <p>練習問題3：引数の型指定</p>
      <button onClick={onClickPractive}>練習問題3を実行</button>
    </div>
  );
};
