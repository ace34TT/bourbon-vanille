export interface ITransition {
  section: string;
  camera: {
    position: [number, number, number];
    rotation: [number, number, number];
  };
  model: {
    position: [number, number, number];
    rotation: [number, number, number];
  };
}
export const transitions: ITransition[] = [
  {
    section: "section-1",
    camera: { position: [1, 1.5, -3], rotation: [0, 0.65, -0.1] },
    model: { position: [1, 1.5, -2], rotation: [1, 0, -0.0] },
  },
  {
    section: "section-2",
    camera: { position: [-2, 1.5, -3], rotation: [0, 0.65, -0.1] },
    model: { position: [1, 1.5, -2], rotation: [1, 0, -0.0] },
  },
];
