import Primo from "./src/App.svelte";
import ComponentPreview from './src/Preview.svelte'
import MultiPreview from './src/MultiPreview.svelte'
import SinglePreview from './src/SinglePreview.svelte'

import {modal} from './src/@stores/app'
import {pageData, site} from './src/@stores/data'
import {pageId} from './src/@stores/data/page'
import { DEFAULTS } from './src/const'

import * as utils from './src/utils'
import * as components from './src/@components'

export {
  ComponentPreview,
  MultiPreview,
  SinglePreview,
  modal,
  pageId,
  utils,
  components,
  pageData,
  site,
  DEFAULTS
}
export default Primo