<script>
  import Switcher from 'src/modules/theme/components/Switcher.svelte';
  import { USER_NAME, STREAM_URL } from 'src/constants/hosting';
  export let href = '/';
  let isPlaying = false;
  
  function togglePlayback() {
    isPlaying = !isPlaying;
    const audioEl = document.querySelector('#icecast-audio');
    if (isPlaying) {
      audioEl.play();
    } else {
      audioEl.pause();
    }
  }
</script>

<header class="header">
  <a class="header__link" {href}>
    <h1 class="header__logo">{USER_NAME}'s Music Collection</h1>
  </a>

  <div class="header__icecast">
    <p class="header__icecast-text">Click the button to listen in live</p>
    <button class="header__icecast-button" on:click={togglePlayback}>
      {isPlaying ? 'Stop' : 'Play'}
    </button>
    <audio id="icecast-audio" src={STREAM_URL} preload="none"></audio>
  </div>

  <div class="header__switcher">
    <Switcher />
  </div>

  
</header>

<style>
  .header {
    background-color: var(--color-gray-1);
    color: var(--color-gray-8);
    display: flex;
    justify-content: space-between;

    padding: var(--spacing-n2) var(--spacing-1);

    @media (--mq-tablet-min) {
      padding: var(--spacing-1) var(--spacing-2);
    }
  }

  .header__link {
    color: var(--color-gray-7);
    text-decoration: none;
    display: inline-block;
  }
  
  .header__icecast {
    display: flex;
    align-items: center;
    margin-left: var(--spacing-2);
  }
  
  .header__icecast-text {
    margin-right: var(--spacing-2);
  }
  
  .header__icecast-button {
    padding: var(--spacing-n3) var(--spacing-1);
    font-size: var(--font-size-small);
    color: var(--color-gray-8);
    background-color: var(--color-cta);
    border: none;
    border-radius: var(--spacing-n4);
    cursor: pointer;
    transition: background-color 0.2s ease;
  }
  
  .header__icecast-button:hover {
    background-color: var(--color-cta-lighter);
  }
  
  .header__icecast-button:active {
    background-color: var(--color-cta-darker);
  }
</style>
