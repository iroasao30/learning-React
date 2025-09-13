// 子コンポーネント：受け取った name を表示
function Greeting({ name = "ゲスト", mood }) {
  return (
    <p>
      こんにちは、{name}さん。今日の気分は {mood ?? "ふつう"} ですね。
    </p>
  );
}

// 親コンポーネント：子にデータ（props）を渡す
export default function PropsExample() {
  const userName = "さおり";
  const todayMood = "ドキドキ！";
  return (
    <div>
      <h2>Props Example</h2>
      <Greeting name={userName} mood={todayMood} />
      <Greeting mood="ねむい" /> {/* name を渡さないとデフォルト「ゲスト」 */}
    </div>
  );
}
