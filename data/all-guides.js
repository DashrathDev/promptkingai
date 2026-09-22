import { guides as baseGuides } from "@/data/guides";
import { faceConsistencyGuide } from "@/data/face-consistency-guide";
import { cameraAnglesFramingGuide } from "@/data/camera-angles-framing-guide";

export const allGuides = [
  ...baseGuides,
  faceConsistencyGuide,
  cameraAnglesFramingGuide,
];
