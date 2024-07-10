import { z } from 'zod'
import { DefaultFileTypes } from '../helper'

export const ImageValidator = (
  limit: number = 0,
  required: boolean = true,
  message?: string
) =>
  z.any().refine((file: FileList | string) => {
    let isValidFileTypes = false
    let isValidFileLimit = false
    if (typeof file === 'string') {
      return false
    }
    if (!required && (file.length || 0) === 0) {
      return true
    }
    if (!file) {
      return false
    }
    if (required && (file.length || 0) === 0) {
      return false
    }
    Object.values(file).forEach((value) => {
      if (!DefaultFileTypes?.includes(value.type)) {
        isValidFileTypes = true
      }
      if (value.size > limit * 1024 * 1024) {
        isValidFileLimit = true
      }
    })
    if (isValidFileLimit || isValidFileTypes) return false
    return file.length === 1
  }, `Max limit of one file or image should be ${limit}mb and only jpeg, jpg, png, webp, jpeg`)
