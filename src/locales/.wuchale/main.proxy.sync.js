
            import * as _w_c_main_0_ from './main.main.en.compiled.js'
import * as _w_c_main_1_ from './main.main.it.compiled.js'
import * as _w_c_main_2_ from './main.main.fr.compiled.js'
import * as _w_c_main_3_ from './main.main.es.compiled.js'
import * as _w_c_main_4_ from './main.main.pt.compiled.js'
import * as _w_c_main_5_ from './main.main.ca.compiled.js'
            /** @type {{[loadID: string]: {[locale: string]: import('wuchale/runtime').CatalogModule}}} */
            const catalogs = {main: {en: _w_c_main_0_,it: _w_c_main_1_,fr: _w_c_main_2_,es: _w_c_main_3_,pt: _w_c_main_4_,ca: _w_c_main_5_}}
            export const loadCatalog = (/** @type {string} */ loadID, /** @type {string} */ locale) => catalogs[loadID][locale]
            export const loadIDs = ['main']
        