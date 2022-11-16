import React, { useRef } from "react";
import { Canvas, extend, useThree, useFrame } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./style.css";
import ScrollAnimation from "react-animate-on-scroll";

import { Reveal, Tween } from "react-gsap";
import Button from "../Button";

extend({ OrbitControls });
function Sobre() {
  const Controls = () => {
    const controls = useRef();
    const { camera, gl } = useThree();
    useFrame(() => {
      controls.current.update();
    });

    return (
      <orbitControls
        ref={controls}
        autoRotate
        args={[camera, gl.domElement]}
      ></orbitControls>
    );
  };

  return (
    <div className="sobre_wrapper" id="about">
      <div className="sobre_container">
        <div className="right">
          <div className="title_services_top">
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={300}>
              <div className="container_left">
                <Reveal>
                  <Tween from={{ opacity: 0 }} duration={2}>
                    <div className="box">
                      <Canvas>
                        <mesh>
                          <Controls />
                          <boxBufferGeometry
                            attach="geometry"
                            args={[3.7, 3.7, 3.7]}
                          ></boxBufferGeometry>
                          <meshBasicMaterial
                            wireframe
                            attach="material"
                            color="#999"
                          ></meshBasicMaterial>
                        </mesh>
                      </Canvas>
                    </div>
                  </Tween>
                </Reveal>
              </div>
            </ScrollAnimation>
            Bespoke web design
          </div>
          <div className="title_container">
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={100}>
              <div className="text">
                No templates.
                <br />
                Like, ever
              </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={200}>
              <div className="description">
                Algumas agências usam modelos. Eles grudam no seu logotipo,
                estilizam o modelo para parecer (mais ou menos) com a sua marca
                e cobram milhares de dólares por isso. Esse não é o nosso
                estilo.
                <br />
                <br />
                Cada um de nossos sites é projetado por web designers reais.
                Tomamos o tempo para conhecê-lo, discutir seus requisitos e
                trabalhar com você para criar um site que realmente pareça bom e
                tenha um bom desempenho.
              </div>
            </ScrollAnimation>

            <Button title="vamos começar?"></Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
