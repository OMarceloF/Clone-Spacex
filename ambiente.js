function playVideo() {
  var iframe = document.createElement("iframe");
  iframe.setAttribute("width", "100%");
  iframe.setAttribute("height", "100%");
  iframe.setAttribute("src", "https://www.youtube.com/embed/Z4TXCZG_NEY?autoplay=1&fs=1&rel=0");
  iframe.setAttribute("allowfullscreen", "");
  iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");

  var fullscreen = document.createElement("div");
  fullscreen.setAttribute("style", "position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 999999; background-color: #000;");
  fullscreen.appendChild(iframe);

  document.body.appendChild(fullscreen);
}
