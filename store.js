// store.js
import { writable } from 'svelte/store';

// These are the stores for your input text, translated text, language selection, loading state, and error message
export const inputText = writable('');
export const translatedText = writable('');
export const selectedLanguage = writable('zh-Hant'); // Default to Traditional Chinese
export const isLoading = writable(false);
export const errorMessage = writable('');
