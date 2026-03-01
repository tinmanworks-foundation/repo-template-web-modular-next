import { listModules } from '@/modules/registry';

export default function ModulesPage() {
  return (
    <main>
      <h1>Registered Modules</h1>
      <pre>{JSON.stringify(listModules(), null, 2)}</pre>
    </main>
  );
}
