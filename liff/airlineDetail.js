'use strict';


module.exports = ( req, res ) => {
  var html = `<html>
    <body>
      <head>
        <title>航空会社の詳細</title>
        <script>
          window.onload = function onLoad() {
            // URLパラメータ取得
            var parm = location.search.substring(1).split("&");
            var val = parm[0].split("=")[1];
            var target = document.getElementById("name");
            target.innerHTML = decodeURIComponent(val);
          }
        </script>
        <style>
          .title {
    	    background: linear-gradient(transparent 70%, #a7d6ff 70%);
    	    font-size:3em;
    	  }
        </style>
      </head>
      <!-- 飛行機の出発到着時間や機内食等について -->
      <div class="title" id="name"></div>
    </body>
  </html>`;
  res.send(html);
};