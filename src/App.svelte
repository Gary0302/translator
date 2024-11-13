<script>
  import { onMount } from 'svelte';
  import axios from 'axios';
  import { inputText, translatedText, selectedLanguage, isLoading, errorMessage } from '/store.js';

  // Define the languages object
  const languages = {
    'Traditional Chinese': 'zh-Hant',
    'Simplified Chinese': 'zh',
    'English': 'en',
    'Spanish': 'es',
    'French': 'fr',
    'German': 'de',
    'Japanese': 'ja',
    'Korean': 'ko'
  };

  // Function to call your Flask API for translation
  async function translateContent() {
    isLoading.set(true);  // Start loading state
    errorMessage.set('');  // Reset any previous errors

    try {
      // Build the request URL with input text and target language
      const url = `https://gemini-flask-api-kappa.vercel.app/translate/${$selectedLanguage}/${encodeURIComponent($inputText)}`;
      
      const response = await axios.get(url);
      translatedText.set(response.data);  // Set translated text

    } catch (error) {
      errorMessage.set('Error translating text. Please try again.');  // Handle errors
      console.error(error);
    } finally {
      isLoading.set(false);  // End loading state
    }
  }

  // Function to copy translated text
  function copyToClipboard() {
    navigator.clipboard.writeText($translatedText);
  }

  // Function to paste text from the clipboard
  async function pasteFromClipboard() {
    const text = await navigator.clipboard.readText();
    inputText.set(text);
  }
</script>

<style>
  textarea {
    width: 300px;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-sizing: border-box;
    font-size: 16px;
  }

  button {
    padding: 10px 20px;
    margin: 5px;
    border: none;
    border-radius: 5px;
    background-color: #4CAF50;
    color: white;
    cursor: pointer;
  }

  .element {
    padding: 20px;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-family: Arial, sans-serif;
  }
</style>

<main>
  <h2>Translator</h2>
  <h3>Build by Gary</h3>

  <!-- Input Text Area -->
  <textarea bind:value={$inputText} placeholder="Enter text to translate" rows="5"></textarea>

  <!-- Translated Text Area (Read-only) -->
  <textarea bind:value={$translatedText} readonly rows="5"></textarea>

  <div class="element"></div>

  <!-- Language Selection Dropdown -->
  <select bind:value={$selectedLanguage}>
    {#each Object.entries(languages) as [language, code]}
      <option value={code}>{language}</option>
    {/each}
  </select>

  <div class="element"></div>

  <!-- Translate Button -->
  <button on:click={translateContent} disabled={$isLoading}>
    {$isLoading ? 'Translating...' : 'Translate'}
  </button>

  <!-- Copy and Paste Buttons -->
  <div style="display: flex;">
    <button on:click={copyToClipboard}>Copy</button>
    <button on:click={pasteFromClipboard}>Paste</button>
  </div>

  {#if $errorMessage}
    <p style="color: red;">{$errorMessage}</p>
  {/if}
</main>
