import _ from 'lodash'
import { HEADS } from '~/assets/constants'

export const randomHead = (num = 4) => {
  const list = _.sampleSize(HEADS, num)
  return list
}
