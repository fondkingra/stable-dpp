import { TestGLB } from "../app/components/TestGLB";

export function meta() {
  return [{ title: "3D Test | StableDPP" }];
}

export default function Component() {
  return (
    <div style={{ padding: "50px" }}>
      <TestGLB />
    </div>
  );
}
