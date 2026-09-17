import type { Provider } from '../types/provider';

/**
 * Canonical, always-up-to-date registry of remote plugin providers, published
 * as a static JSON file from the `oscd-plugins-registry` repo via GitHub Pages.
 * @see https://github.com/OMICRONEnergyOSS/oscd-plugins-registry
 */
export const PROVIDERS_REGISTRY_URL =
  'https://omicronenergyoss.github.io/oscd-plugins-registry/providers.json';

/** Result of loading the providers registry. */
export interface ProvidersRegistryLoadResult {
  providers: Provider[];
  error?: string;
}

/**
 * Fetches and validates the providers registry — a JSON array of remote
 * `Provider` entries. Always loads from `PROVIDERS_REGISTRY_URL` unless a
 * different URL is explicitly passed (e.g. for tests).
 *
 * @param url - Registry URL to fetch. Defaults to `PROVIDERS_REGISTRY_URL`.
 * @returns Validated providers and any error encountered while loading.
 */
export async function loadProvidersRegistry(
  url: string = PROVIDERS_REGISTRY_URL,
): Promise<ProvidersRegistryLoadResult> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      return {
        providers: [],
        error: `HTTP ${response.status}: ${response.statusText}`,
      };
    }

    const data: unknown = await response.json();

    if (!Array.isArray(data)) {
      return {
        providers: [],
        error: 'Providers registry must be a JSON array.',
      };
    }

    const providers = data.filter(isValidProviderEntry);
    const skipped = data.length - providers.length;

    if (skipped > 0) {
      console.warn(
        `[ProvidersRegistryLoader] Skipped ${skipped} invalid provider entries from registry.`,
      );
    }

    return { providers };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return { providers: [], error: message };
  }
}

/** Type-guard that validates a raw JSON value is a remote `Provider` entry. */
function isValidProviderEntry(value: unknown): value is Provider {
  if (!value || typeof value !== 'object') return false;
  const p = value as Record<string, unknown>;

  return (
    typeof p.name === 'string' &&
    typeof p.icon === 'string' &&
    typeof p.description === 'string' &&
    typeof p.pluginsUrl === 'string' &&
    (p.prefix === undefined || typeof p.prefix === 'string') &&
    (p.source === undefined || p.source === 'remote')
  );
}
