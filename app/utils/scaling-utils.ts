import { Dimensions, PixelRatio } from "react-native"
const { width, height } = Dimensions.get("window")
const [shortDimension, longDimension] = width < height ? [width, height] : [height, width]

//Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350
const guidelineBaseHeight = 680

export const scale = (size: number) => (shortDimension / guidelineBaseWidth) * size
export const verticalScale = (size: number) => (longDimension / guidelineBaseHeight) * size
export const moderateScale = (size: number, factor = 0.3) =>
  size + (scale(size) - size - PixelRatio.get()) * factor
export const moderateVerticalScale = (size: number, factor = 0.3) =>
  size + (verticalScale(size) - size - PixelRatio.get()) * factor

export const moderateScaleFontSize = (fontSize: number) => {
  const heightPercent = moderateVerticalScale(fontSize)
  return Math.round(heightPercent)
}

export const s = scale
export const vs = verticalScale
export const ms = moderateScale
export const mvs = moderateVerticalScale
export const msf = moderateScaleFontSize
