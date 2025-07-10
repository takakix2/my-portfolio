/* eslint-disable react/no-unescaped-entities */

export default function Home() {
  return (
    <main className="p-8 font-sans">
      <h1 className="text-3xl font-bold mb-4">Takaki's Portfolio</h1>
      <p className="text-lg mb-6">
        I'm a web developer focusing on React, TypeScript, and game frameworks
        like Phaser.js and Spine. I enjoy crafting scalable and thoughtful
        interfaces that feel both playful and practical.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Projects</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>
          🎮 <strong>Tetris Game</strong>: Built with React & TypeScript
        </li>
        <li>
          📊 <strong>JSON Dashboard Editor</strong>: Dynamic UI for data
          manipulation
        </li>
        <li>
          🔐 <strong>Member Site</strong>: Auth & user management with Next.js
        </li>
      </ul>

      <p className="mt-6 text-sm text-gray-500">
        Pushed to GitHub, auto-deployed via Vercel. Built from Windows—don't
        blame it!
      </p>
    </main>
  );
}
