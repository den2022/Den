/* global AFRAME */

AFRAME.registerComponent('set-image', {
  schema: {
    on: {type: 'string'},
    target: {type: 'selector'},
    src: {type: 'string'},
    dur: {type: 'number', default: 300}
  },

  init: function () {
    var data = this.data;
    var el = this.el;

    el.addEventListener(data.on, function () {
      console.log("data", data);
      console.log("el", el);
      var elID = el.getAttribute('data-src');
      console.log("src", elID);
      var video = document.querySelector(elID);
      console.log("video", video);
      /*video.pause();
      video.play();*/
      setTimeout(function () {
        data.target.setAttribute('material', 'src', data.src);
      }, data.dur);
    });
  },
});