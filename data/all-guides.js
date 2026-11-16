import { guides as baseGuides } from "@/data/guides";
import { faceConsistencyGuide } from "@/data/face-consistency-guide";
import { cameraAnglesFramingGuide } from "@/data/camera-angles-framing-guide";
import { focalLengthLensGuide } from "@/data/focal-length-lens-guide";
import { aiPortraitGeneratorComparisonGuide } from "@/data/ai-portrait-generator-comparison-guide";
import { studioCinematicLightingGuide } from "@/data/studio-cinematic-lighting-guide";

export const allGuides = [
  studioCinematicLightingGuide,
  aiPortraitGeneratorComparisonGuide,
  focalLengthLensGuide,
  cameraAnglesFramingGuide,
  faceConsistencyGuide,
  ...baseGuides,
];
