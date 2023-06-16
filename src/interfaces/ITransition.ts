export interface ITransition {
  section: string;
  camera: {
    initial: {
      position: [number, number, number];
      rotation: [number, number, number];
    };
    target: {
      position: [number, number, number];
      rotation: [number, number, number];
    };
  };
  model: {
    initial: {
      position: [number, number, number];
      rotation: [number, number, number];
    };
    target: {
      position: [number, number, number];
      rotation: [number, number, number];
    };
  };
}
export const transitions: ITransition[] = [
  {
    section: "section-1",
    camera: {
      initial: {
        position: [0, 0, -1],
        rotation: [0, 0.65, -0.1],
      },
      target: {
        position: [0, 0, 0],
        rotation: [0, 0.65, -0.1],
      },
    },
    model: {
      initial: {
        position: [1, 1.5, -2],
        rotation: [1, 0, -0.0],
      },
      target: {
        position: [1, 1.5, -2],
        rotation: [1, 0, -0.0],
      },
    },
  },
  {
    section: "section-2",
    camera: {
      initial: { position: [-2, 1.5, -3], rotation: [0, 0.65, -0.1] },
      target: { position: [-2, 1.5, -3], rotation: [0, 0.65, -0.1] },
    },
    model: {
      initial: { position: [1, 1.5, -2], rotation: [1, 0, -0.0] },
      target: { position: [1, 1.5, -2], rotation: [1, 0, -0.0] },
    },
  },
];
