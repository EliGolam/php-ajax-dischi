/* Initial Handshake */
console.log('Script app.js loaded: Ok');


LOCAL_API = './localAPI/albums.php/';
QUERY_SEARCH = '?search=';


const app = new Vue({
  el: '#app',
  data() {
    return {
      albumsData: []
    }
  },

  mounted() {
    console.log('Vue is ready');

    axios
      .get(LOCAL_API)
      .then(({ data }) => {
        console.log(data);
        this.albumsData = data;
      })
      .catch(error => console.warn(error)
    ); 
  }
});