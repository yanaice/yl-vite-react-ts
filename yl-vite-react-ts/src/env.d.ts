interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_REACT_GA: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
