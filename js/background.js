const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({canvas: document.querySelector('#bg'), alpha: true});

function resize () {
    renderer.height = window.innerHeight;
    renderer.width = window.innerWidth;
    renderer.setSize(renderer.width, renderer.height);
    camera.aspect = renderer.width / renderer.height;
    camera.updateProjectionMatrix();
}

function initThree(){
    renderer.setClearColor( 0x000000, 0 )
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.render( scene, camera );
}

const isocahedron = new THREE.IcosahedronGeometry(window.innerWidth/1000 + 2)
const material1 = new THREE.MeshBasicMaterial({color: 0xEEEEDD, wireframe: true})
const obj = new THREE.Mesh(isocahedron, material1)

scene.add(obj)

obj.position.z = -10

speed = 0.005



function init () {
    initThree()
    window.addEventListener('resize', resize, { passive: true
    })

    animate()

}

init()


function animate(){

  obj.rotation.z += speed
  obj.rotation.x += speed

    // On demande d'appeller animate depuis animate
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}
// On appelle animate
window.scrollTo({ top: 0, behavior: 'smooth' })

animate()
