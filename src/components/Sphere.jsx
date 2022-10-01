export default function Sphere({ position, scale = 1, model, text, rotation }) {
  return (
    <>
      <group position={position}>
        <group rotation={rotation} scale={scale}>
          <primitive object={model} />
        </group>
      </group>
    </>
  );
}
