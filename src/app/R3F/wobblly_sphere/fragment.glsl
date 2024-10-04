

uniform vec3 uColorA;
uniform vec3 uColorB;

void main() {
  vec3 color = mix(uColorA, uColorB, 0.5);
  
  // Instead of setting gl_FragColor directly, we should modify csm_DiffuseColor
  csm_DiffuseColor = vec4(color, 1.0);
}