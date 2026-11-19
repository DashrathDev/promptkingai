import { guides as baseGuides } from "@/data/guides";
import { faceConsistencyGuide } from "@/data/face-consistency-guide";
import { cameraAnglesFramingGuide } from "@/data/camera-angles-framing-guide";
import { focalLengthLensGuide } from "@/data/focal-length-lens-guide";
import { aiPortraitGeneratorComparisonGuide } from "@/data/ai-portrait-generator-comparison-guide";
import { studioCinematicLightingGuide } from "@/data/studio-cinematic-lighting-guide";
import { fixAiDistortionGuide } from "@/data/fix-ai-distortion-bad-hands-plastic-skin-guide";
import { traditionalIndianFestiveGuide } from "@/data/traditional-indian-festive-guide";
import { professionalLinkedinHeadshotsGuide } from "@/data/professional-linkedin-headshots-guide";
import { cinematicCouplePortraitGuide } from "@/data/cinematic-couple-portrait-guide";
import { nightStreetCyberpunkGuide } from "@/data/night-street-cyberpunk-guide";

export const allGuides = [
  nightStreetCyberpunkGuide,
  cinematicCouplePortraitGuide,
  professionalLinkedinHeadshotsGuide,
  traditionalIndianFestiveGuide,
  fixAiDistortionGuide,
  studioCinematicLightingGuide,
  aiPortraitGeneratorComparisonGuide,
  focalLengthLensGuide,
  cameraAnglesFramingGuide,
  faceConsistencyGuide,
  ...baseGuides,
];
