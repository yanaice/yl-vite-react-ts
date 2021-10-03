const config: ImportMetaEnv = {
	VITE_APP_TITLE: import.meta.env.VITE_APP_TITLE,
	VITE_APP_REACT_GA: import.meta.env.VITE_APP_REACT_GA,
	BASE_URL: import.meta.env.BASE_URL,
	MODE: import.meta.env.MODE,
	DEV: import.meta.env.DEV,
	PROD: import.meta.env.PROD,
SSR: import.meta.env.SSR
}
export default config
