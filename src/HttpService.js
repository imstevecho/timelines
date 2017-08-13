import 'whatwg-fetch'

export default class HttpService  {

  static get(urlString, params) {
    let baseUrl = window.location.protocol + "//" + window.location.host;
    var url = new URL(baseUrl + urlString);

    if (params) {
      var searchParams = new URLSearchParams();
      Object.keys(params).forEach((key) => {
        searchParams.append(key, params[key]);
      })
      url.search = searchParams.toString();
    }

    // return Fetch.json(url.toString())
    return fetch(url.toString(), {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'get'
      }).then(function(response) {
        if (response.status === 401) {
         console.log(">> returned 401 error");
        } else {
          return response.json();
        }
      }).catch(function(error) {
        console.log("Error fetching........ " + error);
      }
    );

  }
}