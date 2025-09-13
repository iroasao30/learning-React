function Greeting({ name = "ゲスト", mood = "ふつう" }) {
  return <p>こんにちは、{name}さん。今日の気分は {mood} ですね。</p>;
}

export default function PropsExample() {
  // ← ここが今回の主役（配列データ）
  const users = [
    { id: 1, name: "さおり", mood: "わくわく" },
    { id: 2, name: "ゆうき", mood: "ねむい" },
    { id: 3, name: "まこ",   mood: "元気"  },
  ];

  return (
    <div>
      <h2>Props: map で複数レンダー</h2>

      {/* ここで map */}
      {users.map((u) => (
        <Greeting key={u.id} name={u.name} mood={u.mood} />
      ))}
    </div>
  );
}
