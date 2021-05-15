// CONSTS
const VideoPlayer = document.getElementById("video-player")
const CaptureBtn = document.getElementById("capture-btn")
const Canvas = document.getElementById("canvas")
const Wrapper = document.querySelector(".wrapper")
// const Painting = document.querySelector(".painting")
const CameraUI = document.getElementById("camera-ui")
const FallbackUI = document.getElementById("fallback-ui")

// VARS
var picture
var platform = detect.parse(navigator.userAgent)

// Painting.style.display = 'none'

console.log('name: ', platform.os.family.toLowerCase())
console.log('STATUS:', 'Testing Firefox, checking labels')

// for polyfilling
if(!('getUserMedia' in navigator.mediaDevices)) {
    navigator.mediaDevices.getUserMedia = function(constraints) {
    var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia

        if(!getUserMedia) {
            return Promise.reject(new Error('getUserMedia is not implemented!'))
        }

        return new Promise(function(resolve, reject) {
            getUserMedia.call(navigator, constraints, resolve, reject)
        })
    }
}

function capture() {
    if(!('mediaDevices' in navigator)) {
        navigator.mediaDevices = {}
    }

    // getting available input video sources and then showing stream
    navigator.mediaDevices.enumerateDevices()
        .then(function(res) {
            const videoSourcesArr = res.filter(function(item) {
                console.log(item)
                if(item.kind === 'videoinput') {
                    return { label: item.label, deviceId: item.deviceId }
                }
            })
            console.log('camera options', videoSourcesArr)
            const videoSource = videoSourcesArr.filter(item => {
                // selecting camera preferences on the basis of device and browser
                if(platform.browser.family.toLowerCase().includes('chrome') || platform.browser.family.toLowerCase().includes('firefox') || platform.browser.family.toLowerCase().includes('mozilla')) {
                    console.log('confirmation for firefox only')
                    if(item.label.toLowerCase().includes('camera') && item.label.toLowerCase().includes('facing back') && item.label.includes('0')) {
                        // console.log('from inner loop', item)
                        console.log('camera should be selected')
                        console.log('Chrome or Firefox!')
                        return item
                    }
                }
            })
            return videoSource[0]
        })
        .then(function(result) {
            // console.log('deviceId', result.deviceId)
            // alert(result.deviceId)
            navigator.mediaDevices.getUserMedia({ video: { deviceId: { exact: result.deviceId }}})
                .then(function(stream) {
                    const track = stream.getVideoTracks()[0];
                        console.log('track', track)
                        track.applyConstraints({ advanced: [{ exposureCompensation: -0.5 }] })
                        .then(function() {
                            console.log(track.getSettings())
                        })
                        .catch(function(err) {
                            console.log('from catch block')
                            console.log(err)
                        })
                    VideoPlayer.srcObject = stream
                })
                .catch(function(error) {
                    console.log('unable to stream camera!')
                })
        })
        .catch(function(err) {
            alert('unable to detect back camera!')
            // fallback for laptop for testing purposes only
        })
}

// is fired when streaming starts
VideoPlayer.addEventListener('canplay', function(event) {
    console.log('video streaming now')
    Canvas.setAttribute('width', 200)
    Canvas.setAttribute('height', VideoPlayer.videoHeight/(VideoPlayer.videoWidth/Canvas.width))
})

// for capturing photo
CaptureBtn.addEventListener('click', function(e) {
    // Wrapper.style.display = 'none'
    // Painting.style.display = 'block'
    const drawingBoard = Canvas.getContext('2d')
    drawingBoard.drawImage(VideoPlayer, 0, 0, Canvas.width, VideoPlayer.videoHeight/(VideoPlayer.videoWidth/Canvas.width))
    
    // stopping all video active streams
    // VideoPlayer.srcObject.getVideoTracks().forEach(function(track){
    //     track.stop()
    // })

    // converting image, to send to server
    // picture = dataURItoBlob(Canvas.toDataURL())
    picture = Canvas.toDataURL()
    
    const postData = new FormData()
    postData.append('image', picture)
    
    // console.log("image values: ", picture)
    
    const url = 'https://fa3f78ca826c.ngrok.io/runInfluence'
    console.log('Sending req to: ', url)
        
    const request = new Request(url, {
        method: "POST",
        body: postData,
        headers: new Headers({
            // 'Content-Type': 'multipart/form-data',
            // 'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': 'https://daxter-army.github.io'
        })
    })
    
    fetch(request)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        alert('SUCCESS!')
    })
    .catch((error) => {
        console.log(error)
        alert('ERROR!')
    })
})

// not being used
function dataURItoBlob(dataURI) {
    var byteString = atob(dataURI.split(',')[1]);
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    var blob = new Blob([ab], {type: mimeString});
    return blob;
}

// Detecting Laptops/PCs
function checkPlatform(){
    if(platform.os.family.toLowerCase() === 'linux' || platform.os.family.toLowerCase() === 'windows' || platform.os.family.toLowerCase() === 'ubuntu') {
        // Prompting to go to Mobile devices
        CameraUI.style.display = 'none'
        FallbackUI.style.display = 'block'
        return
    }
    // starting the camera
    capture()
}
checkPlatform()