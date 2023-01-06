import "../styles.css";

export const Practice2 = () => {
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };
  const onClickPractive = () => console.log(getTotalFee(2000));
  return (
    <div>
      <p>練習問題2：引数の型指定</p>
      <button onClick={onClickPractive}>練習問題2を実行</button>
    </div>
  );
};
