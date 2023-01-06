import "../styles.css";

export const Practice1 = () => {
  const CalcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractive = () => CalcTotalFee(2000);
  return (
    <div>
      <p>練習問題：引数の型指定</p>
      <button onClick={onClickPractive}>練習問題１を実行</button>
    </div>
  );
};
