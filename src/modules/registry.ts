import type { ModuleManifest } from '@/contracts/modules';

const moduleRegistry = new Map<string, ModuleManifest>();

export function registerModule(manifest: ModuleManifest): void {
  moduleRegistry.set(manifest.id, manifest);
}

export function listModules(): ModuleManifest[] {
  return [...moduleRegistry.values()];
}

export function resolveRoute(routeKey: string): string | null {
  for (const moduleItem of moduleRegistry.values()) {
    const route = moduleItem.routes.find((entry) => entry.key === routeKey);
    if (route) {
      return route.path;
    }
  }
  return null;
}

registerModule({
  id: 'core',
  title: 'Core Module',
  capabilities: [{ key: 'base.navigation', description: 'Provides base navigation' }],
  routes: [{ key: 'home', path: '/', title: 'Home' }],
});
