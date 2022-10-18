/* Initial Handshake */
console.log('Script app.js loaded: Ok');


LOCAL_API = './localAPI/albums.php/';
QUERY_SEARCH = '?search=';



/* Vue App */ 
const app = new Vue({
  el: '#app',
  data() {
    return {
      albumsData: [],
      searchText: ''
    }
  },

  computed: {
    isSearchActive() {
      return this.textToSearch.length > 0; 
    },

    textToSearch() {
      return this.searchText.trim().toLowerCase();
    }
  },

  methods: {
    searchContent() {
      console.log("DEBUG - Searching: ", this.textToSearch);
      query = this.isSearchActive ? QUERY_SEARCH + this.textToSearch : '';
      console.log("DEBUG - Query: ", query);

      axios
        .get(LOCAL_API + query)
        .then(({ data }) => {
          console.log(data);
          this.albumsData = data;
        })
        .catch(error => console.warn(error)
      ); 
    }
  },

  mounted() {
    console.log('Vue is ready');
    this.searchContent();
  }
});