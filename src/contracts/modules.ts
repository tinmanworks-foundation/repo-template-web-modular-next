export type Capability = {
  key: string;
  description: string;
};

export type ModuleRoute = {
  key: string;
  path: string;
  title: string;
};

export type ModuleManifest = {
  id: string;
  title: string;
  capabilities: Capability[];
  routes: ModuleRoute[];
};
