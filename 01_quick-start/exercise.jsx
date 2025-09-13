export default function Exercise() {
  const name = "さおり";
  const today = new Date().toLocaleDateString();
  return (
    <div>
      <h2>My First JSX👏</h2>
      <p>こんにちは、{name}さん！今日は {today} です。</p>
    </div>
  );
}