// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
//https://developers.cloudflare.com/pages/framework-guides/deploy-a-svelte-site/
declare global {
	namespace App {
		interface Error { }
		interface Locals { }
		interface PageData { }
		interface Platform {
			env: {
				COUNTER: DurableObjectNamespace;
			};
			context: {
				waitUntil(promise: Promise<any>): void;
			};
			caches: CacheStorage & { default: Cache; };
		}
		interface Session { }
		interface Stuff { }
	}
}

export { };
