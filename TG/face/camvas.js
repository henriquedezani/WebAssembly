
// The function takes a canvas context and a `drawFunc` function.
// `drawFunc` receives two parameters, the video and the time since
// the last time it was called.
function camvas(ctx, callback, stats) {

  var stats = new Stats();
  stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom]
  stats.dom.style.marginLeft = '250px';
  stats.dom.style.marginTop  = '55px';
  document.body.appendChild( stats.dom );



  console.log('Inicio da renderização no Canvas.');

  var self = this
  this.ctx = ctx
  this.callback = callback


  // We can't `new Video()` yet, so we'll resort to the vintage
  // "hidden div" hack for dynamic loading.
  var streamContainer = document.createElement('div')
  this.video          = document.createElement('video')

  // If we don't do this, the stream will not be played.
  // By the way, the play and pause controls work as usual 
  // for streamed videos.
  this.video.setAttribute('autoplay', '1')
  this.video.setAttribute('playsinline', '1') // important for iPhones

  // The video should fill out all of the canvas
  this.video.setAttribute('width', 1)
  this.video.setAttribute('height', 1)

  streamContainer.appendChild(this.video)
  document.body.appendChild(streamContainer)

  // The callback happens when we are starting to stream the video.
  navigator.mediaDevices.getUserMedia({video: true, audio: false}).then(function(stream) {
    // Yay, now our webcam input is treated as a normal video and
    // we can start having fun
    self.video.srcObject = stream
    // Let's start drawing the canvas!
    self.update()
  }, 
  function(err) {
    console.log(err);
    throw err
  })

  // As soon as we can draw a new frame on the canvas, we call the `draw` function 
  // we passed as a parameter.
  this.update = function() {
	  var self = this
    var last = Date.now()
    var loop = function(time) {

      var dt = Date.now() - last

stats.begin();
      self.callback(self.video, dt, time)
stats.end();

      last = Date.now()
      requestAnimationFrame(loop) 
    }
    requestAnimationFrame(loop) 
  } 
}
