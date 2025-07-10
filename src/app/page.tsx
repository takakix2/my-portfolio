import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-12 bg-gray-50 text-gray-800">
      <section className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">👋 こんにちは、Takakiです！</h1>
        <p className="mb-6 text-lg">
          TypeScriptとReactを活用して、スケーラブルなWebアプリやゲームを開発しています。
          Next.jsでブログ機能付きポートフォリオを構築中。
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="https://github.com/your-username"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </Link>
          <Link
            href="https://twitter.com/your-handle"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            X (Twitter)
          </Link>
        </div>
      </section>

      <section className="mt-10 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">🧪 スキルセット</h2>
        <ul className="grid gap-2 text-left list-disc list-inside">
          <li>React / Next.js</li>
          <li>TypeScript / Zustand / useReducer</li>
          <li>Phaser.js / Spine連携でのゲーム開発</li>
          <li>Git / Vercel / CI連携</li>
        </ul>
      </section>
    </main>
  );
}
