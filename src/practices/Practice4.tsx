import "../styles.css";

export const Practice4 = () => {
  const CalcTotalFee = (num) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractive = () => CalcTotalFee(2000);
  return (
    <div>
      <p>練習問題4：設定ファイルを触ってみる</p>
      <button onClick={onClickPractive}>練習問題4を実行</button>
    </div>
  );
};
