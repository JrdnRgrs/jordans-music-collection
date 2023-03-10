<script context="module">
  export const prerender = true;
</script>

<script>
  import { MetaTags } from 'svelte-meta-tags';
  import Header from 'src/components/Header.svelte';
  import AlbumList from 'src/modules/list/components/AlbumList.svelte';
  import { fetchAlbums } from 'src/modules/list/services/fetchAlbums';
  import { sortBy, sortDirection } from 'src/modules/list/store/store';
  import { onDestroy } from 'svelte';
  import { BASE_URL, USER_NAME, TWITTER_USER } from 'src/constants/hosting';

  let sortByValue;
  let sortDirectionValue;
  let query;

  const sortByUnsub = sortBy.subscribe((value) => {
    sortByValue = value;
  });

  const sortDirectionUnsub = sortDirection.subscribe((value) => {
    sortDirectionValue = value;
  });

  $: {
    query = fetchAlbums(1, sortByValue, sortDirectionValue);
  }

  onDestroy(() => {
    sortDirectionUnsub();
    sortByUnsub();
  });
</script>

<MetaTags
  title={`${USER_NAME}'s Music Collection`}
  description="{USER_NAME}'s Music Collection contains up-to-date list of {USER_NAME}'s LP collection with detailed information about each collection item."
  openGraph={{
    type: 'website',
    title: `{USER_NAME}'s Music Collection`,
    url: BASE_URL,
    images: [
      {
        url: `${BASE_URL}/default.jpg`,
      },
    ],
    description:
      "{USER_NAME}'s Music Collection contains up-to-date list of {USER_NAME}'s LP collection with detailed information about each collection item.",
    site_name: "{USER_NAME}'s Music Collection",
  }}
  twitter={{
    cardType: 'summary_large_image',
    handle: '@{TWITTER_USER}',
  }}
/>
<Header />
<main class="main">
  <AlbumList {query} />
</main>
