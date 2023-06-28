export interface ITransition {
  section: string;

  model: {
    position: [number, number, number];
    rotation: [number, number, number];
  };
  camera: {
    zoom: number;
  };
}
export const transitions: ITransition[] = [
  {
    section: "sub-section-1",
    model: {
      position: [0.75, -0.8, 5],
      rotation: [0.003, 0.651, -3.13],
    },
    camera: {
      zoom: 600,
    },
  },
  {
    section: "sub-section-2",
    model: {
      position: [-0.75, -0.3, -1],
      rotation: [Math.PI / 12, Math.PI / 6, -2.75],
    },
    camera: {
      zoom: 600,
    },
  },
  {
    section: "sub-section-3",
    model: {
      position: [-0.9, -0.5, -0.5],
      rotation: [Math.PI / 4, Math.PI / 4, -3.5],
    },
    camera: {
      zoom: 600,
    },
  },
  {
    section: "sub-section-4",
    model: {
      position: [-0.9, 0.05, -0.5],
      rotation: [Math.PI / 5, Math.PI / 4, -6],
    },
    camera: {
      zoom: 600,
    },
  },
  {
    section: "sub-section-5",
    model: {
      position: [-0.25, -0.1, -5],
      rotation: [Math.PI / 5, Math.PI / 6, -4],
    },
    camera: {
      zoom: 600,
    },
  },
];
