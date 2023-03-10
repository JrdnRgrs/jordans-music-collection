<script context="module">
  export const prerender = true;
</script>

<script>
  import { fetchAlbums } from 'src/modules/list/services/fetchAlbums';
  import { page } from '$app/stores';
  import { onDestroy } from 'svelte';
  import { sortBy, sortDirection } from 'src/modules/list/store/store';
  import AlbumList from 'src/modules/list/components/AlbumList.svelte';
  import Header from 'src/components/Header.svelte';
  import { MetaTags } from 'svelte-meta-tags';
  import { BASE_URL, PAGE_URL, USER_NAME, TWITTER_USER } from 'src/constants/hosting';

  let query;
  let sortByValue;
  let sortDirectionValue;
  let currentPage;

  const sortByUnsub = sortBy.subscribe((value) => {
    sortByValue = value;
  });

  const sortDirectionUnsub = sortDirection.subscribe((value) => {
    sortDirectionValue = value;
  });

  const pageUnsub = page.subscribe(({ params }) => {
    const pageNum = parseInt(params.page);

    if (isNaN(pageNum)) {
      currentPage = 1;
      return;
    }

    currentPage = pageNum;
  });

  $: {
    query = fetchAlbums(currentPage, sortByValue, sortDirectionValue);
  }

  onDestroy(() => {
    pageUnsub();
    sortByUnsub();
    sortDirectionUnsub();
  });
</script>

<MetaTags
  title={`{USER_NAME}'s Music Collection | Page ${currentPage}`}
  description="{USER_NAME}'s Music Collection contains up-to-date list of {USER_NAME}'s LP collection with detailed information about each collection item."
  openGraph={{
    url: `${PAGE_URL}/${currentPage}`,
    images: [
      {
        url: `${BASE_URL}/default.jpg`,
      },
    ],
    type: 'website',
    title: `{USER_NAME}'s Music Collection | Page ${currentPage}`,
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
