import * as THREE from 'three'
import { extend } from '@react-three/fiber'

// Paul West @prisoner849 https://discourse.threejs.org/u/prisoner849
// https://discourse.threejs.org/t/simple-curved-plane/26647/10
class BentPlaneGeometry extends THREE.PlaneGeometry {
    constructor(radius: number, ...args: any[]) {
        super(...args)
        let p = this.parameters
        let hw = p.width * 0.5
        let a = new THREE.Vector2(-hw, 0)
        let b = new THREE.Vector2(0, radius)
        let c = new THREE.Vector2(hw, 0)
        let ab = new THREE.Vector2().subVectors(a, b)
        let bc = new THREE.Vector2().subVectors(b, c)
        let ac = new THREE.Vector2().subVectors(a, c)
        let r = (ab.length() * bc.length() * ac.length()) / (2 * Math.abs(ab.cross(ac)))
        let center = new THREE.Vector2(0, radius - r)
        let baseV = new THREE.Vector2().subVectors(a, center)
        let baseAngle = baseV.angle() - Math.PI * 0.5
        let arc = baseAngle * 2
        let uv = this.attributes.uv
        let pos = this.attributes.position
        let mainV = new THREE.Vector2()
        for (let i = 0; i < uv.count; i++) {
            let uvRatio = 1 - uv.getX(i)
            let y = pos.getY(i)
            mainV.copy(c).rotateAround(center, arc * uvRatio)
            pos.setXYZ(i, mainV.x, y, -mainV.y)
        }
        pos.needsUpdate = true
    }
}
interface MeshSineMaterialParameters extends THREE.MeshBasicMaterialParameters {
    time?: { value: number };
}

class MeshSineMaterial extends THREE.MeshBasicMaterial {
    time: { value: number };

    constructor(parameters: MeshSineMaterialParameters = {}) {
        super(parameters);
        this.setValues(parameters);
        this.time = { value: 0 };
    }

    setValues(parameters: MeshSineMaterialParameters): void {
        if (parameters.time !== undefined) {
            this.time = parameters.time;
        }
    }

    onBeforeCompile(shader: { uniforms: any; vertexShader: string }): void {
        shader.uniforms.time = this.time;
        shader.vertexShader = `
      uniform float time;
      ${shader.vertexShader}
    `;
        shader.vertexShader = shader.vertexShader.replace(
            '#include <begin_vertex>',
            `vec3 transformed = vec3(position.x, position.y + sin(time + uv.x * PI * 4.0) / 4.0, position.z);`
        );
    }
}

// Example usage
const material = new MeshSineMaterial({ color: 0xff0000 });
material.time.value = 1.0;

// Assuming you have a mesh to apply this material to
const geometry = new THREE.BoxGeometry(1, 1, 1);
const mesh = new THREE.Mesh(geometry, material);


extend({ MeshSineMaterial, BentPlaneGeometry })
