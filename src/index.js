const axios = require('axios');
const SwaggerUI = require('swagger-ui');
const SwaggerUIStandalonePreset = require('swagger-ui-dist/swagger-ui-standalone-preset');
require('swagger-ui/dist/swagger-ui.css');

axios.get('/swagger/swagger-urls.json')
  .then(function (response) {
    console.log(response);

    urls = response.data;
    console.log(urls);
    console.log(typeof(urls));

    SwaggerUI({
      urls: urls,
      dom_id: '#swagger',
      presets: [SwaggerUI.presets.apis, SwaggerUIStandalonePreset],
      layout: 'StandaloneLayout',
      plugins: [
        SwaggerUI.plugins.Topbar
      ]
    });
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
