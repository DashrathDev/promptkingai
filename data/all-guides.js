import { guides as baseGuides } from "@/data/guides";
import { faceConsistencyGuide } from "@/data/face-consistency-guide";
import { cameraAnglesFramingGuide } from "@/data/camera-angles-framing-guide";
import { focalLengthLensGuide } from "@/data/focal-length-lens-guide";
import { aiPortraitGeneratorComparisonGuide } from "@/data/ai-portrait-generator-comparison-guide";
import { studioCinematicLightingGuide } from "@/data/studio-cinematic-lighting-guide";
import { fixAiDistortionGuide } from "@/data/fix-ai-distortion-bad-hands-plastic-skin-guide";
import { traditionalIndianFestiveGuide } from "@/data/traditional-indian-festive-guide";

export const allGuides = [
  traditionalIndianFestiveGuide,
  fixAiDistortionGuide,
  studioCinematicLightingGuide,
  aiPortraitGeneratorComparisonGuide,
  focalLengthLensGuide,
  cameraAnglesFramingGuide,
  faceConsistencyGuide,
  ...baseGuides,
];
