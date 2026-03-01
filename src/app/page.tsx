import { listModules } from '@/modules/registry';

export default function HomePage() {
  const modules = listModules();
  return (
    <main>
      <h1>Modular App Template</h1>
      <ul>
        {modules.map((mod) => (
          <li key={mod.id}>{mod.title}</li>
        ))}
      </ul>
    </main>
  );
}
