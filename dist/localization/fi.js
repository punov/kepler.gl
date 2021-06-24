"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _locales = require("./locales");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _default = {
  property: {
    weight: 'painotus',
    label: 'nimiö',
    fillColor: 'täyttöväri',
    color: 'väri',
    strokeColor: 'viivan väri',
    radius: 'säde',
    outline: 'ääriviiva',
    stroke: 'viiva',
    density: 'tiheys',
    coverage: 'kattavuus',
    sum: 'summa',
    pointCount: 'pisteiden lukumäärä'
  },
  placeholder: {
    search: 'Etsi',
    selectField: 'Valitse kenttä',
    yAxis: 'Y-akseli',
    selectType: 'Valitse tyyppi',
    selectValue: 'Valitse arvo',
    enterValue: 'Anna arvo',
    empty: 'tyhjä'
  },
  misc: {
    by: '',
    valuesIn: 'Arvot joukossa:',
    valueEquals: 'Arvo on yhtäsuuri kuin',
    dataSource: 'Aineistolähde',
    brushRadius: 'Harjan säde (km)',
    empty: ' '
  },
  mapLayers: {
    title: 'Kartan tasot',
    label: 'Nimiöt',
    road: 'Tiet',
    border: 'Rajat',
    building: 'Rakennukset',
    water: 'Vesi',
    land: 'Maa',
    '3dBuilding': '3d-rakennukset'
  },
  panel: {
    text: {
      label: 'Nimiö',
      labelWithId: 'Nimiö {labelId}',
      fontSize: 'Fontin koko',
      fontColor: 'Fontin väri',
      textAnchor: 'Tekstin ankkuri',
      alignment: 'Sijoittelu',
      addMoreLabel: 'Lisää uusia nimiöitä'
    }
  },
  sidebar: {
    panels: {
      layer: 'Tasot',
      filter: 'Suodattimet',
      interaction: 'Interaktiot',
      basemap: 'Taustakartta'
    }
  },
  layer: {
    required: 'Pakollinen*',
    radius: 'Säde',
    weight: 'Painotus',
    propertyBasedOn: '{property} perustuen arvoon',
    color: 'Väri',
    fillColor: 'Täytön väri',
    outline: 'ääriviiva',
    coverage: 'Kattavuus',
    stroke: 'Viiva',
    strokeWidth: 'Viivan paksuus',
    strokeColor: 'Viivan väri',
    basic: 'Perus',
    trailLength: 'Jäljen pituus',
    trailLengthDescription: 'Jäljen kesto sekunteina, ennenkuin se himmenee näkyvistä',
    newLayer: 'uusi taso',
    elevationByDescription: 'Kun asetus on pois päältä, korkeus perustuu pisteiden määrään',
    colorByDescription: 'Kun asetus on pois päältä, väri perustuu pisteiden määrään',
    aggregateBy: 'Aggregoi kenttä {field} by',
    '3DModel': '3D-malli',
    '3DModelOptions': '3D-mallin asetukset',
    type: {
      point: 'piste',
      arc: 'kaari',
      line: 'viiva',
      grid: 'ruudukko',
      hexbin: 'hexbin',
      polygon: 'polygoni',
      geojson: 'geojson',
      cluster: 'klusteri',
      icon: 'kuva',
      heatmap: 'lämpökartta',
      hexagon: 'kuusikulmio',
      hexagonid: 'H3',
      trip: 'matka',
      s2: 'S2',
      '3d': '3D'
    }
  },
  layerVisConfigs: {
    strokeWidth: 'Viivan paksuus',
    strokeWidthRange: 'Viivan paksuuden rajat',
    radius: 'Säde',
    fixedRadius: 'Vakiosäde metreinä',
    fixedRadiusDescription: 'Kartan säde absoluuttiseksi säteeksi metreinä, esim. 5 -> 5 metriin',
    radiusRange: 'Säteen rajat',
    clusterRadius: 'Klusterien säde pikseleinä',
    radiusRangePixels: 'Säteen rajat pikseleinä',
    opacity: 'Läpinäkyvyys',
    coverage: 'Kattavuus',
    outline: 'Ääriviiva',
    colorRange: 'Värien rajat',
    stroke: 'Viiva',
    strokeColor: 'Viivan väri',
    strokeColorRange: 'Viivan värin rajat',
    targetColor: 'Kohteen väri',
    colorAggregation: 'Värien aggregointi',
    heightAggregation: 'Korkeuden aggregointi',
    resolutionRange: 'Resoluution rajat',
    sizeScale: 'Koon skaala',
    worldUnitSize: 'Yksikkö',
    elevationScale: 'Korottamisen skaala',
    enableElevationZoomFactor: 'Käytä korkeuden zoomauskerrointa',
    enableElevationZoomFactorDescription: 'Säädä korkeus nykyisen zoomauskertoimen perusteella',
    heightScale: 'Korkeuden skaala',
    coverageRange: 'Peittävyyden rajat',
    highPrecisionRendering: 'Tarkka renderöinti',
    highPrecisionRenderingDescription: 'Tarkka renderöinti johtaa hitaampaan suorittamiseen',
    height: 'Korkeus',
    heightDescription: 'Klikkaa oikeasta ylänurkasta nappia vaihtaaksesi 3D-näkymään',
    fill: 'Täyttö',
    enablePolygonHeight: 'Salli polygonien korkeus',
    showWireframe: 'Näytä rautalankamalli',
    weightIntensity: 'Painotuksen intensiteetti',
    zoomScale: 'Zoomausskaala',
    heightRange: 'Korkeuden rajat'
  },
  layerManager: {
    addData: 'Lisää aineisto',
    addLayer: 'Lisää taso',
    layerBlending: 'Tasojen sekoittuvuus'
  },
  mapManager: {
    mapStyle: 'Kartan tyyli',
    addMapStyle: 'Lisää tyyli kartalle',
    '3dBuildingColor': '3D-rakennusten väri'
  },
  layerConfiguration: {
    defaultDescription: 'Laske suureen {property} arvo valitun kentän perusteella',
    howTo: 'Miten toimii'
  },
  filterManager: {
    addFilter: 'Lisää suodatin'
  },
  datasetTitle: {
    showDataTable: 'Näytä attribuuttitaulu',
    removeDataset: 'Poista aineisto'
  },
  datasetInfo: {
    rowCount: '{rowCount} riviä'
  },
  tooltip: {
    hideLayer: 'Piilota taso',
    showLayer: 'Näytä taso',
    hideFeature: 'Piilota kohde',
    showFeature: 'Näytä kohde',
    hide: 'piilota',
    show: 'näytä',
    removeLayer: 'Poista taso',
    layerSettings: 'Tason asetukset',
    closePanel: 'Sulje paneeli',
    switchToDualView: 'Vaihda kaksoiskarrtanäkymään',
    showLegend: 'Näytä selite',
    disable3DMap: 'Poistu 3D-näkymästä',
    DrawOnMap: 'Piirrä kartalle',
    selectLocale: 'Valitse kielisyys',
    hideLayerPanel: 'Piilota tasopaneeli',
    showLayerPanel: 'Näytä tasopaneeli',
    moveToTop: 'Siirrä tasojen päällimmäiseksi',
    selectBaseMapStyle: 'Valitse taustakarttatyyli',
    "delete": 'Poista',
    timePlayback: 'Ajan animointi',
    cloudStorage: 'Pilvitallennus',
    '3DMap': '3D-näkymä'
  },
  toolbar: _objectSpread({
    exportImage: 'Vie kuva',
    exportData: 'Vie aineistot',
    exportMap: 'Vie kartta',
    shareMapURL: 'Jaa kartan URL',
    saveMap: 'Tallenna kartta',
    select: 'valitse',
    polygon: 'polygoni',
    rectangle: 'nelikulmio',
    hide: 'piilota',
    show: 'näytä'
  }, _locales.LOCALES),
  modal: {
    title: {
      deleteDataset: 'Poista aineisto',
      addDataToMap: 'Lisää aineistoja kartalle',
      exportImage: 'Vie kuva',
      exportData: 'Vie aineistot',
      exportMap: 'Vie kartta',
      addCustomMapboxStyle: 'Lisää oma Mapbox-tyyli',
      saveMap: 'Tallenna kartta',
      shareURL: 'Jaa URL'
    },
    button: {
      "delete": 'Poista',
      download: 'Lataa',
      "export": 'Vie',
      addStyle: 'Lisää tyyli',
      save: 'Tallenna',
      defaultCancel: 'Peru',
      defaultConfirm: 'Vahvista'
    },
    exportImage: {
      ratioTitle: 'Kuvasuhde',
      ratioDescription: 'Valitse sopiva kuvasuhde käyttötapaustasi varten.',
      ratioOriginalScreen: 'Alkuperäinen näyttö',
      ratioCustom: 'Kustomoitu',
      ratio4_3: '4:3',
      ratio16_9: '16:9',
      resolutionTitle: 'Resoluutio',
      resolutionDescription: 'Korkea resoluutio on parempi tulostamista varten.',
      mapLegendTitle: 'Kartan selite',
      mapLegendAdd: 'Lisää selite karttaan'
    },
    exportData: {
      datasetTitle: 'Aineistot',
      datasetSubtitle: 'Valitse aineisto, jonka aiot viedä',
      allDatasets: 'Kaikki',
      dataTypeTitle: 'Aineistojen formaatti',
      dataTypeSubtitle: 'Valitse aineistoformaatti valitsemillesi aineistoille',
      filterDataTitle: 'Suodata aineistoja',
      filterDataSubtitle: 'Voit viedä joko alkuperäiset aineistot tai suodatetut aineistot',
      filteredData: 'Suodatetut aineistot',
      unfilteredData: 'Suodattamattomat aineistot',
      fileCount: '{fileCount} tiedostoa',
      rowCount: '{rowCount} riviä'
    },
    deleteData: {
      warning: 'aiot poistaa tämän aineiston. Aineostoa käyttävien tasojen lukumäärä: {length}'
    },
    addStyle: {
      publishTitle: '1. Julkaise tyylisi Mapboxissa tai anna tunniste',
      publishSubtitle1: 'Voit luoda oman karttatyylisi sivulla',
      publishSubtitle2: 'ja',
      publishSubtitle3: 'julkaista',
      publishSubtitle4: 'sen.',
      publishSubtitle5: 'Käyttääksesi yksityistä tyyliä, liitä',
      publishSubtitle6: 'tunnisteesi',
      publishSubtitle7: 'tänne. *kepler.gl on client-side sovellus, data pysyy vain selaimessasi...',
      exampleToken: 'esim. pk.abcdefg.xxxxxx',
      pasteTitle: '2. Liitä tyyli-URL',
      pasteSubtitle1: 'Mikä on',
      pasteSubtitle2: 'tyyli-URL?',
      namingTitle: '3. Nimeä tyylisi'
    },
    shareMap: {
      shareUriTitle: 'Jaa kartan URL',
      shareUriSubtitle: 'Luo kartalle URL, jonka voit jakaa muiden kanssa',
      cloudTitle: 'Pilvitallennus',
      cloudSubtitle: 'Kirjaudu sisään ja lataa kartta ja aineistot henkilökohtaiseen pilvipalveluun',
      shareDisclaimer: 'kepler.gl tallentaa kartan datan henkilökohtaiseen pilvitallennustilaasi, vain ihmiset, joilla on URL, voivat päästä käsiksi karttaan ja aineistoihin. ' + 'Voit muokata tiedostoja tai poistaa ne pilvipalvelustasi milloin vain.',
      gotoPage: 'Mene Kepler.gl {currentProvider} sivullesi'
    },
    statusPanel: {
      mapUploading: 'Karttaa ladataan',
      error: 'Virhe'
    },
    saveMap: {
      title: 'Pilvitallennus',
      subtitle: 'Kirjaudu sisään pilvipalveluusi tallentaaksesi kartan'
    },
    exportMap: {
      formatTitle: 'Kartan formaatti',
      formatSubtitle: 'Valitse formaatti, jossa viet kartan',
      html: {
        selection: 'Vie kartta interaktiivisena html-tiedostona',
        tokenTitle: 'Mapbox-tunniste',
        tokenSubtitle: 'Käytä omaa Mapbox-tunnistettasi html-tiedostossa (valinnainen)',
        tokenPlaceholder: 'Liitä Mapbox-tunnisteesi',
        tokenMisuseWarning: '* Jos et käytä omaa tunnistettasi, kartta voi lakata toimimasta milloin vain kun vaihdamme omaa tunnistettamme väärinkäytön estämiseksi. ',
        tokenDisclaimer: 'Voit vaihtaa Mapbox-tunnisteesi näiden ohjeiden avulla: ',
        tokenUpdate: 'Kuinka vaihtaa olemassaoleva Mapbox-tunniste',
        modeTitle: 'Kartan tila',
        modeSubtitle1: 'Valitse kartan tila.',
        modeSubtitle2: 'Lisätietoja',
        modeDescription: 'Anna käyttäjien {mode} karttaa',
        read: 'lukea',
        edit: 'muokata'
      },
      json: {
        configTitle: 'Kartan asetukset',
        configDisclaimer: 'Kartan asetukset sisältyvät Json-tiedostoon. Jos käytät kirjastoa kepler.gl omassa sovelluksessasi. Voit kopioida asetukset ja antaa ne funktiolle: ',
        selection: 'Vie kyseisen kartan aineistot ja asetukset yhdessä json-tiedostossa. Voit myöhemmin avata saman kartan lataamalla tiedoston kepler.gl:n',
        disclaimer: '* Kartan asetukset ovat sidoksissa ladattuihin aineistoihin. Arvoa ‘dataId’ käytetään tasojen, suodattimien ja vihjeiden liittämiseksi tiettyyn aineistoon. ' + 'Varmista, että aineiston dataId:t vastaavat asetusten arvoja jos lataat asetukset käyttäen `addDataToMap`-funktiolle.'
      }
    },
    loadingDialog: {
      loading: 'Ladataan...'
    },
    loadData: {
      upload: 'Lataa tiedostot',
      storage: 'Lataa tallennustilasta'
    },
    tripInfo: {
      title: 'Kuinka käyttää matka-animaatiota',
      description1: 'Reitin animoimiseksi geoJSON-aineiston täytyy olla geometriatyypiltään `LineString`, LineString-koordinaattien täytyy sisältää 4 elementtiä formaatissa:',
      code: ' [pituusaste, leveysaste, korkeus, aikaleima] ',
      description2: 'siten, että viimeinen elementti on aikaleima. Aikaleima voi olla muodoltaan unix-sekunteja, kuten `1564184363` tai millisekunteja, kuten `1564184363000`.',
      example: 'Esimerkki:'
    },
    iconInfo: {
      title: 'Miten piirtää kuvia',
      description1: 'csv-tiedostossasi, luo sarake nimeltä icon. Voit jättää sen tyhjäksi jos et halua piirtää kuvaa joillain pisteillä. Kun sarakkeen nimi on ',
      code: 'icon',
      description2: ' kepler.gl luo automaattisesti kuvatason sinua varten.',
      example: 'Esimerkki:',
      icons: 'Kuvat'
    },
    storageMapViewer: {
      lastModified: 'Viimeksi muokattu {lastUpdated} sitten',
      back: 'Takaisin'
    },
    overwriteMap: {
      title: 'Tallennetaan karttaa...',
      alreadyExists: 'on jo {mapSaved}:ssa. Haluatko ylikirjoittaa sen?'
    },
    loadStorageMap: {
      back: 'Takaisin',
      goToPage: 'Mene Kepler.gl {displayName} sivullesi',
      storageMaps: 'Tallennus / Kartat',
      noSavedMaps: 'Ei tallennettuja karttoja vielä'
    }
  },
  header: {
    visibleLayers: 'Näkyvissä olevat tasot',
    layerLegend: 'Tason selite'
  },
  interactions: {
    tooltip: 'Vihje',
    brush: 'Harja',
    coordinate: 'Koordinaatit'
  },
  layerBlending: {
    title: 'Tasojen sekoittuvuus',
    additive: 'lisäävä',
    normal: 'normaali',
    subtractive: 'vähentävä'
  },
  columns: {
    title: 'Sarakkeet',
    lat: 'lat',
    lng: 'lng',
    altitude: 'korkeus',
    icon: 'kuva',
    geojson: 'geojson',
    arc: {
      lat0: 'lähdön lat',
      lng0: 'lähdön lng',
      lat1: 'kohteen lat',
      lng1: 'kohteen lng'
    },
    line: {
      alt0: 'lähteen korkeus',
      alt1: 'kohde korkeus'
    },
    grid: {
      worldUnitSize: 'Ruutujen koko (km)'
    },
    hexagon: {
      worldUnitSize: 'Hexagonien säde (km)'
    }
  },
  color: {
    customPalette: 'Mukautettu paletti',
    steps: 'askeleet',
    type: 'tyyppi',
    reversed: 'käänteinen'
  },
  scale: {
    colorScale: 'Värin skaala',
    sizeScale: 'Koon skaala',
    strokeScale: 'Viivan paksuuden skaala',
    scale: 'Skaala'
  },
  fileUploader: {
    message: 'Raahaa ja pudota tiedostosi tänne',
    chromeMessage: '*Chromen käyttäjä: Rajoita tiedostokokosi 250Mb:hen. Jos haluat suurempia tiedostoja, kokeile Safaria',
    disclaimer: '*kepler.gl on client-side sovellus, data pysyy vain selaimessasi...' + 'Tietoja ei lähetetä palvelimelle.',
    configUploadMessage: 'Lisää {fileFormatNames} tai tallennettu kartta **Json**. Lue lisää [**tuetuista formaateista**]',
    browseFiles: 'selaa tiedostojasi',
    uploading: 'ladataan',
    fileNotSupported: 'Tiedosto {errorFiles} ei ole tuettu.',
    or: 'tai'
  },
  density: 'tiheys',
  'Bug Report': 'Bugiraportointi',
  'User Guide': 'Opas',
  Save: 'Tallenna',
  Share: 'Jaa'
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2NhbGl6YXRpb24vZmkuanMiXSwibmFtZXMiOlsicHJvcGVydHkiLCJ3ZWlnaHQiLCJsYWJlbCIsImZpbGxDb2xvciIsImNvbG9yIiwic3Ryb2tlQ29sb3IiLCJyYWRpdXMiLCJvdXRsaW5lIiwic3Ryb2tlIiwiZGVuc2l0eSIsImNvdmVyYWdlIiwic3VtIiwicG9pbnRDb3VudCIsInBsYWNlaG9sZGVyIiwic2VhcmNoIiwic2VsZWN0RmllbGQiLCJ5QXhpcyIsInNlbGVjdFR5cGUiLCJzZWxlY3RWYWx1ZSIsImVudGVyVmFsdWUiLCJlbXB0eSIsIm1pc2MiLCJieSIsInZhbHVlc0luIiwidmFsdWVFcXVhbHMiLCJkYXRhU291cmNlIiwiYnJ1c2hSYWRpdXMiLCJtYXBMYXllcnMiLCJ0aXRsZSIsInJvYWQiLCJib3JkZXIiLCJidWlsZGluZyIsIndhdGVyIiwibGFuZCIsInBhbmVsIiwidGV4dCIsImxhYmVsV2l0aElkIiwiZm9udFNpemUiLCJmb250Q29sb3IiLCJ0ZXh0QW5jaG9yIiwiYWxpZ25tZW50IiwiYWRkTW9yZUxhYmVsIiwic2lkZWJhciIsInBhbmVscyIsImxheWVyIiwiZmlsdGVyIiwiaW50ZXJhY3Rpb24iLCJiYXNlbWFwIiwicmVxdWlyZWQiLCJwcm9wZXJ0eUJhc2VkT24iLCJzdHJva2VXaWR0aCIsImJhc2ljIiwidHJhaWxMZW5ndGgiLCJ0cmFpbExlbmd0aERlc2NyaXB0aW9uIiwibmV3TGF5ZXIiLCJlbGV2YXRpb25CeURlc2NyaXB0aW9uIiwiY29sb3JCeURlc2NyaXB0aW9uIiwiYWdncmVnYXRlQnkiLCJ0eXBlIiwicG9pbnQiLCJhcmMiLCJsaW5lIiwiZ3JpZCIsImhleGJpbiIsInBvbHlnb24iLCJnZW9qc29uIiwiY2x1c3RlciIsImljb24iLCJoZWF0bWFwIiwiaGV4YWdvbiIsImhleGFnb25pZCIsInRyaXAiLCJzMiIsImxheWVyVmlzQ29uZmlncyIsInN0cm9rZVdpZHRoUmFuZ2UiLCJmaXhlZFJhZGl1cyIsImZpeGVkUmFkaXVzRGVzY3JpcHRpb24iLCJyYWRpdXNSYW5nZSIsImNsdXN0ZXJSYWRpdXMiLCJyYWRpdXNSYW5nZVBpeGVscyIsIm9wYWNpdHkiLCJjb2xvclJhbmdlIiwic3Ryb2tlQ29sb3JSYW5nZSIsInRhcmdldENvbG9yIiwiY29sb3JBZ2dyZWdhdGlvbiIsImhlaWdodEFnZ3JlZ2F0aW9uIiwicmVzb2x1dGlvblJhbmdlIiwic2l6ZVNjYWxlIiwid29ybGRVbml0U2l6ZSIsImVsZXZhdGlvblNjYWxlIiwiZW5hYmxlRWxldmF0aW9uWm9vbUZhY3RvciIsImVuYWJsZUVsZXZhdGlvblpvb21GYWN0b3JEZXNjcmlwdGlvbiIsImhlaWdodFNjYWxlIiwiY292ZXJhZ2VSYW5nZSIsImhpZ2hQcmVjaXNpb25SZW5kZXJpbmciLCJoaWdoUHJlY2lzaW9uUmVuZGVyaW5nRGVzY3JpcHRpb24iLCJoZWlnaHQiLCJoZWlnaHREZXNjcmlwdGlvbiIsImZpbGwiLCJlbmFibGVQb2x5Z29uSGVpZ2h0Iiwic2hvd1dpcmVmcmFtZSIsIndlaWdodEludGVuc2l0eSIsInpvb21TY2FsZSIsImhlaWdodFJhbmdlIiwibGF5ZXJNYW5hZ2VyIiwiYWRkRGF0YSIsImFkZExheWVyIiwibGF5ZXJCbGVuZGluZyIsIm1hcE1hbmFnZXIiLCJtYXBTdHlsZSIsImFkZE1hcFN0eWxlIiwibGF5ZXJDb25maWd1cmF0aW9uIiwiZGVmYXVsdERlc2NyaXB0aW9uIiwiaG93VG8iLCJmaWx0ZXJNYW5hZ2VyIiwiYWRkRmlsdGVyIiwiZGF0YXNldFRpdGxlIiwic2hvd0RhdGFUYWJsZSIsInJlbW92ZURhdGFzZXQiLCJkYXRhc2V0SW5mbyIsInJvd0NvdW50IiwidG9vbHRpcCIsImhpZGVMYXllciIsInNob3dMYXllciIsImhpZGVGZWF0dXJlIiwic2hvd0ZlYXR1cmUiLCJoaWRlIiwic2hvdyIsInJlbW92ZUxheWVyIiwibGF5ZXJTZXR0aW5ncyIsImNsb3NlUGFuZWwiLCJzd2l0Y2hUb0R1YWxWaWV3Iiwic2hvd0xlZ2VuZCIsImRpc2FibGUzRE1hcCIsIkRyYXdPbk1hcCIsInNlbGVjdExvY2FsZSIsImhpZGVMYXllclBhbmVsIiwic2hvd0xheWVyUGFuZWwiLCJtb3ZlVG9Ub3AiLCJzZWxlY3RCYXNlTWFwU3R5bGUiLCJ0aW1lUGxheWJhY2siLCJjbG91ZFN0b3JhZ2UiLCJ0b29sYmFyIiwiZXhwb3J0SW1hZ2UiLCJleHBvcnREYXRhIiwiZXhwb3J0TWFwIiwic2hhcmVNYXBVUkwiLCJzYXZlTWFwIiwic2VsZWN0IiwicmVjdGFuZ2xlIiwiTE9DQUxFUyIsIm1vZGFsIiwiZGVsZXRlRGF0YXNldCIsImFkZERhdGFUb01hcCIsImFkZEN1c3RvbU1hcGJveFN0eWxlIiwic2hhcmVVUkwiLCJidXR0b24iLCJkb3dubG9hZCIsImFkZFN0eWxlIiwic2F2ZSIsImRlZmF1bHRDYW5jZWwiLCJkZWZhdWx0Q29uZmlybSIsInJhdGlvVGl0bGUiLCJyYXRpb0Rlc2NyaXB0aW9uIiwicmF0aW9PcmlnaW5hbFNjcmVlbiIsInJhdGlvQ3VzdG9tIiwicmF0aW80XzMiLCJyYXRpbzE2XzkiLCJyZXNvbHV0aW9uVGl0bGUiLCJyZXNvbHV0aW9uRGVzY3JpcHRpb24iLCJtYXBMZWdlbmRUaXRsZSIsIm1hcExlZ2VuZEFkZCIsImRhdGFzZXRTdWJ0aXRsZSIsImFsbERhdGFzZXRzIiwiZGF0YVR5cGVUaXRsZSIsImRhdGFUeXBlU3VidGl0bGUiLCJmaWx0ZXJEYXRhVGl0bGUiLCJmaWx0ZXJEYXRhU3VidGl0bGUiLCJmaWx0ZXJlZERhdGEiLCJ1bmZpbHRlcmVkRGF0YSIsImZpbGVDb3VudCIsImRlbGV0ZURhdGEiLCJ3YXJuaW5nIiwicHVibGlzaFRpdGxlIiwicHVibGlzaFN1YnRpdGxlMSIsInB1Ymxpc2hTdWJ0aXRsZTIiLCJwdWJsaXNoU3VidGl0bGUzIiwicHVibGlzaFN1YnRpdGxlNCIsInB1Ymxpc2hTdWJ0aXRsZTUiLCJwdWJsaXNoU3VidGl0bGU2IiwicHVibGlzaFN1YnRpdGxlNyIsImV4YW1wbGVUb2tlbiIsInBhc3RlVGl0bGUiLCJwYXN0ZVN1YnRpdGxlMSIsInBhc3RlU3VidGl0bGUyIiwibmFtaW5nVGl0bGUiLCJzaGFyZU1hcCIsInNoYXJlVXJpVGl0bGUiLCJzaGFyZVVyaVN1YnRpdGxlIiwiY2xvdWRUaXRsZSIsImNsb3VkU3VidGl0bGUiLCJzaGFyZURpc2NsYWltZXIiLCJnb3RvUGFnZSIsInN0YXR1c1BhbmVsIiwibWFwVXBsb2FkaW5nIiwiZXJyb3IiLCJzdWJ0aXRsZSIsImZvcm1hdFRpdGxlIiwiZm9ybWF0U3VidGl0bGUiLCJodG1sIiwic2VsZWN0aW9uIiwidG9rZW5UaXRsZSIsInRva2VuU3VidGl0bGUiLCJ0b2tlblBsYWNlaG9sZGVyIiwidG9rZW5NaXN1c2VXYXJuaW5nIiwidG9rZW5EaXNjbGFpbWVyIiwidG9rZW5VcGRhdGUiLCJtb2RlVGl0bGUiLCJtb2RlU3VidGl0bGUxIiwibW9kZVN1YnRpdGxlMiIsIm1vZGVEZXNjcmlwdGlvbiIsInJlYWQiLCJlZGl0IiwianNvbiIsImNvbmZpZ1RpdGxlIiwiY29uZmlnRGlzY2xhaW1lciIsImRpc2NsYWltZXIiLCJsb2FkaW5nRGlhbG9nIiwibG9hZGluZyIsImxvYWREYXRhIiwidXBsb2FkIiwic3RvcmFnZSIsInRyaXBJbmZvIiwiZGVzY3JpcHRpb24xIiwiY29kZSIsImRlc2NyaXB0aW9uMiIsImV4YW1wbGUiLCJpY29uSW5mbyIsImljb25zIiwic3RvcmFnZU1hcFZpZXdlciIsImxhc3RNb2RpZmllZCIsImJhY2siLCJvdmVyd3JpdGVNYXAiLCJhbHJlYWR5RXhpc3RzIiwibG9hZFN0b3JhZ2VNYXAiLCJnb1RvUGFnZSIsInN0b3JhZ2VNYXBzIiwibm9TYXZlZE1hcHMiLCJoZWFkZXIiLCJ2aXNpYmxlTGF5ZXJzIiwibGF5ZXJMZWdlbmQiLCJpbnRlcmFjdGlvbnMiLCJicnVzaCIsImNvb3JkaW5hdGUiLCJhZGRpdGl2ZSIsIm5vcm1hbCIsInN1YnRyYWN0aXZlIiwiY29sdW1ucyIsImxhdCIsImxuZyIsImFsdGl0dWRlIiwibGF0MCIsImxuZzAiLCJsYXQxIiwibG5nMSIsImFsdDAiLCJhbHQxIiwiY3VzdG9tUGFsZXR0ZSIsInN0ZXBzIiwicmV2ZXJzZWQiLCJzY2FsZSIsImNvbG9yU2NhbGUiLCJzdHJva2VTY2FsZSIsImZpbGVVcGxvYWRlciIsIm1lc3NhZ2UiLCJjaHJvbWVNZXNzYWdlIiwiY29uZmlnVXBsb2FkTWVzc2FnZSIsImJyb3dzZUZpbGVzIiwidXBsb2FkaW5nIiwiZmlsZU5vdFN1cHBvcnRlZCIsIm9yIiwiU2F2ZSIsIlNoYXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7Ozs7O2VBRWU7QUFDYkEsRUFBQUEsUUFBUSxFQUFFO0FBQ1JDLElBQUFBLE1BQU0sRUFBRSxVQURBO0FBRVJDLElBQUFBLEtBQUssRUFBRSxPQUZDO0FBR1JDLElBQUFBLFNBQVMsRUFBRSxZQUhIO0FBSVJDLElBQUFBLEtBQUssRUFBRSxNQUpDO0FBS1JDLElBQUFBLFdBQVcsRUFBRSxhQUxMO0FBTVJDLElBQUFBLE1BQU0sRUFBRSxNQU5BO0FBT1JDLElBQUFBLE9BQU8sRUFBRSxXQVBEO0FBUVJDLElBQUFBLE1BQU0sRUFBRSxPQVJBO0FBU1JDLElBQUFBLE9BQU8sRUFBRSxRQVREO0FBVVJDLElBQUFBLFFBQVEsRUFBRSxXQVZGO0FBV1JDLElBQUFBLEdBQUcsRUFBRSxPQVhHO0FBWVJDLElBQUFBLFVBQVUsRUFBRTtBQVpKLEdBREc7QUFlYkMsRUFBQUEsV0FBVyxFQUFFO0FBQ1hDLElBQUFBLE1BQU0sRUFBRSxNQURHO0FBRVhDLElBQUFBLFdBQVcsRUFBRSxnQkFGRjtBQUdYQyxJQUFBQSxLQUFLLEVBQUUsVUFISTtBQUlYQyxJQUFBQSxVQUFVLEVBQUUsZ0JBSkQ7QUFLWEMsSUFBQUEsV0FBVyxFQUFFLGNBTEY7QUFNWEMsSUFBQUEsVUFBVSxFQUFFLFdBTkQ7QUFPWEMsSUFBQUEsS0FBSyxFQUFFO0FBUEksR0FmQTtBQXdCYkMsRUFBQUEsSUFBSSxFQUFFO0FBQ0pDLElBQUFBLEVBQUUsRUFBRSxFQURBO0FBRUpDLElBQUFBLFFB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QkFBbUIsRUFDakIsaUdBUlU7QUFTWkMsSUFBQUEsV0FBVyxFQUFFLG9CQVREO0FBVVpDLElBQUFBLFNBQVMsRUFBRSxVQVZDO0FBV1pDLElBQUFBLGdCQUFnQixFQUFFLHNDQVhOO0FBWVpDLElBQUFBLEVBQUUsRUFBRTtBQVpRLEdBblpEO0FBaWFiL1EsRUFBQUEsT0FBTyxFQUFFLFFBamFJO0FBa2FiLGdCQUFjLGlCQWxhRDtBQW1hYixnQkFBYyxNQW5hRDtBQW9hYmdSLEVBQUFBLElBQUksRUFBRSxVQXBhTztBQXFhYkMsRUFBQUEsS0FBSyxFQUFFO0FBcmFNLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge0xPQ0FMRVN9IGZyb20gJy4vbG9jYWxlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcGVydHk6IHtcbiAgICB3ZWlnaHQ6ICdwYWlub3R1cycsXG4gICAgbGFiZWw6ICduaW1pw7YnLFxuICAgIGZpbGxDb2xvcjogJ3TDpHl0dMO2dsOkcmknLFxuICAgIGNvbG9yOiAndsOkcmknLFxuICAgIHN0cm9rZUNvbG9yOiAndmlpdmFuIHbDpHJpJyxcbiAgICByYWRpdXM6ICdzw6RkZScsXG4gICAgb3V0bGluZTogJ8Okw6RyaXZpaXZhJyxcbiAgICBzdHJva2U6ICd2aWl2YScsXG4gICAgZGVuc2l0eTogJ3RpaGV5cycsXG4gICAgY292ZXJhZ2U6ICdrYXR0YXZ1dXMnLFxuICAgIHN1bTogJ3N1bW1hJyxcbiAgICBwb2ludENvdW50OiAncGlzdGVpZGVuIGx1a3Vtw6TDpHLDpCdcbiAgfSxcbiAgcGxhY2Vob2xkZXI6IHtcbiAgICBzZWFyY2g6ICdFdHNpJyxcbiAgICBzZWxlY3RGaWVsZDogJ1ZhbGl0c2Uga2VudHTDpCcsXG4gICAgeUF4aXM6ICdZLWFrc2VsaScsXG4gICAgc2VsZWN0VHlwZTogJ1ZhbGl0c2UgdHl5cHBpJyxcbiAgICBzZWxlY3RWYWx1ZTogJ1ZhbGl0c2UgYXJ2bycsXG4gICAgZW50ZXJWYWx1ZTogJ0FubmEgYXJ2bycsXG4gICAgZW1wdHk6ICd0eWhqw6QnXG4gIH0sXG4gIG1pc2M6IHtcbiAgICBieTogJycsXG4gICAgdmFsdWVzSW46ICdBcnZvdCBqb3Vrb3NzYTonLFxuICAgIHZhbHVlRXF1YWxzOiAnQXJ2byBvbiB5aHTDpHN1dXJpIGt1aW4nLFxuICAgIGRhdGFTb3VyY2U6ICdBaW5laXN0b2zDpGhkZScsXG4gICAgYnJ1c2hSYWRpdXM6ICdIYXJqYW4gc8OkZGUgKGttKScsXG4gICAgZW1wdHk6ICcgJ1xuICB9LFxuICBtYXBMYXllcnM6IHtcbiAgICB0aXRsZTogJ0thcnRhbiB0YXNvdCcsXG4gICAgbGFiZWw6ICdOaW1pw7Z0JyxcbiAgICByb2FkOiAnVGlldCcsXG4gICAgYm9yZGVyOiAnUmFqYXQnLFxuICAgIGJ1aWxkaW5nOiAnUmFrZW5udWtzZXQnLFxuICAgIHdhdGVyOiAnVmVzaScsXG4gICAgbGFuZDogJ01hYScsXG4gICAgJzNkQnVpbGRpbmcnOiAnM2QtcmFrZW5udWtzZXQnXG4gIH0sXG4gIHBhbmVsOiB7XG4gICAgdGV4dDoge1xuICAgICAgbGFiZWw6ICdOaW1pw7YnLFxuICAgICAgbGFiZWxXaXRoSWQ6ICdOaW1pw7Yge2xhYmVsSWR9JyxcbiAgICAgIGZvbnRTaXplOiAnRm9udGluIGtva28nLFxuICAgICAgZm9udENvbG9yOiAnRm9udGluIHbDpHJpJyxcbiAgICAgIHRleHRBbmNob3I6ICdUZWtzdGluIGFua2t1cmknLFxuICAgICAgYWxpZ25tZW50OiAnU2lqb2l0dGVsdScsXG4gICAgICBhZGRNb3JlTGFiZWw6ICdMaXPDpMOkIHV1c2lhIG5pbWnDtml0w6QnXG4gICAgfVxuICB9LFxuICBzaWRlYmFyOiB7XG4gICAgcGFuZWxzOiB7XG4gICAgICBsYXllcjogJ1Rhc290JyxcbiAgICAgIGZpbHRlcjogJ1N1b2RhdHRpbWV0JyxcbiAgICAgIGludGVyYWN0aW9uOiAnSW50ZXJha3Rpb3QnLFxuICAgICAgYmFzZW1hcDogJ1RhdXN0YWthcnR0YSdcbiAgICB9XG4gIH0sXG4gIGxheWVyOiB7XG4gICAgcmVxdWlyZWQ6ICdQYWtvbGxpbmVuKicsXG4gICAgcmFkaXVzOiAnU8OkZGUnLFxuICAgIHdlaWdodDogJ1BhaW5vdHVzJyxcbiAgICBwcm9wZXJ0eUJhc2VkT246ICd7cHJvcGVydHl9IHBlcnVzdHVlbiBhcnZvb24nLFxuICAgIGNvbG9yOiAnVsOkcmknLFxuICAgIGZpbGxDb2xvcjogJ1TDpHl0w7ZuIHbDpHJpJyxcbiAgICBvdXRsaW5lOiAnw6TDpHJpdmlpdmEnLFxuICAgIGNvdmVyYWdlOiAnS2F0dGF2dXVzJyxcbiAgICBzdHJva2U6ICdWaWl2YScsXG4gICAgc3Ryb2tlV2lkdGg6ICdWaWl2YW4gcGFrc3V1cycsXG4gICAgc3Ryb2tlQ29sb3I6ICdWaWl2YW4gdsOkcmknLFxuICAgIGJhc2ljOiAnUGVydXMnLFxuICAgIHRyYWlsTGVuZ3RoOiAnSsOkbGplbiBwaXR1dXMnLFxuICAgIHRyYWlsTGVuZ3RoRGVzY3JpcHRpb246ICdKw6RsamVuIGtlc3RvIHNla3VudGVpbmEsIGVubmVua3VpbiBzZSBoaW1tZW5lZSBuw6RreXZpc3TDpCcsXG4gICAgbmV3TGF5ZXI6ICd1dXNpIHRhc28nLFxuICAgIGVsZXZhdGlvbkJ5RGVzY3JpcHRpb246ICdLdW4gYXNldHVzIG9uIHBvaXMgcMOkw6RsdMOkLCBrb3JrZXVzIHBlcnVzdHV1IHBpc3RlaWRlbiBtw6TDpHLDpMOkbicsXG4gICAgY29sb3JCeURlc2NyaXB0aW9uOiAnS3VuIGFzZXR1cyBvbiBwb2lzIHDDpMOkbHTDpCwgdsOkcmkgcGVydXN0dXUgcGlzdGVpZGVuIG3DpMOkcsOkw6RuJyxcbiAgICBhZ2dyZWdhdGVCeTogJ0FnZ3JlZ29pIGtlbnR0w6Qge2ZpZWxkfSBieScsXG4gICAgJzNETW9kZWwnOiAnM0QtbWFsbGknLFxuICAgICczRE1vZGVsT3B0aW9ucyc6ICczRC1tYWxsaW4gYXNldHVrc2V0JyxcbiAgICB0eXBlOiB7XG4gICAgICBwb2ludDogJ3Bpc3RlJyxcbiAgICAgIGFyYzogJ2thYXJpJyxcbiAgICAgIGxpbmU6ICd2aWl2YScsXG4gICAgICBncmlkOiAncnV1ZHVra28nLFxuICAgICAgaGV4YmluOiAnaGV4YmluJyxcbiAgICAgIHBvbHlnb246ICdwb2x5Z29uaScsXG4gICAgICBnZW9qc29uOiAnZ2VvanNvbicsXG4gICAgICBjbHVzdGVyOiAna2x1c3RlcmknLFxuICAgICAgaWNvbjogJ2t1dmEnLFxuICAgICAgaGVhdG1hcDogJ2zDpG1ww7ZrYXJ0dGEnLFxuICAgICAgaGV4YWdvbjogJ2t1dXNpa3VsbWlvJyxcbiAgICAgIGhleGFnb25pZDogJ0gzJyxcbiAgICAgIHRyaXA6ICdtYXRrYScsXG4gICAgICBzMjogJ1MyJyxcbiAgICAgICczZCc6ICczRCdcbiAgICB9XG4gIH0sXG4gIGxheWVyVmlzQ29uZmlnczoge1xuICAgIHN0cm9rZVdpZHRoOiAnVmlpdmFuIHBha3N1dXMnLFxuICAgIHN0cm9rZVdpZHRoUmFuZ2U6ICdWaWl2YW4gcGFrc3V1ZGVuIHJhamF0JyxcbiAgICByYWRpdXM6ICdTw6RkZScsXG4gICAgZml4ZWRSYWRpdXM6ICdWYWtpb3PDpGRlIG1ldHJlaW7DpCcsXG4gICAgZml4ZWRSYWRpdXNEZXNjcmlwdGlvbjogJ0thcnRhbiBzw6RkZSBhYnNvbHV1dHRpc2Vrc2kgc8OkdGVla3NpIG1ldHJlaW7DpCwgZXNpbS4gNSAtPiA1IG1ldHJpaW4nLFxuICAgIHJhZGl1c1JhbmdlOiAnU8OkdGVlbiByYWphdCcsXG4gICAgY2x1c3RlclJhZGl1czogJ0tsdXN0ZXJpZW4gc8OkZGUgcGlrc2VsZWluw6QnLFxuICAgIHJhZGl1c1JhbmdlUGl4ZWxzOiAnU8OkdGVlbiByYWphdCBwaWtzZWxlaW7DpCcsXG4gICAgb3BhY2l0eTogJ0zDpHBpbsOka3l2eXlzJyxcbiAgICBjb3ZlcmFnZTogJ0thdHRhdnV1cycsXG4gICAgb3V0bGluZTogJ8OEw6RyaXZpaXZhJyxcbiAgICBjb2xvclJhbmdlOiAnVsOkcmllbiByYWphdCcsXG4gICAgc3Ryb2tlOiAnVmlpdmEnLFxuICAgIHN0cm9rZUNvbG9yOiAnVmlpdmFuIHbDpHJpJyxcbiAgICBzdHJva2VDb2xvclJhbmdlOiAnVmlpdmFuIHbDpHJpbiByYWphdCcsXG4gICAgdGFyZ2V0Q29sb3I6ICdLb2h0ZWVuIHbDpHJpJyxcbiAgICBjb2xvckFnZ3JlZ2F0aW9uOiAnVsOkcmllbiBhZ2dyZWdvaW50aScsXG4gICAgaGVpZ2h0QWdncmVnYXRpb246ICdLb3JrZXVkZW4gYWdncmVnb2ludGknLFxuICAgIHJlc29sdXRpb25SYW5nZTogJ1Jlc29sdXV0aW9uIHJhamF0JyxcbiAgICBzaXplU2NhbGU6ICdLb29uIHNrYWFsYScsXG4gICAgd29ybGRVbml0U2l6ZTogJ1lrc2lra8O2JyxcbiAgICBlbGV2YXRpb25TY2FsZTogJ0tvcm90dGFtaXNlbiBza2FhbGEnLFxuICAgIGVuYWJsZUVsZXZhdGlvblpvb21GYWN0b3I6ICdLw6R5dMOkIGtvcmtldWRlbiB6b29tYXVza2Vycm9pbnRhJyxcbiAgICBlbmFibGVFbGV2YXRpb25ab29tRmFjdG9yRGVzY3JpcHRpb246ICdTw6TDpGTDpCBrb3JrZXVzIG55a3lpc2VuIHpvb21hdXNrZXJ0b2ltZW4gcGVydXN0ZWVsbGEnLFxuICAgIGhlaWdodFNjYWxlOiAnS29ya2V1ZGVuIHNrYWFsYScsXG4gICAgY292ZXJhZ2VSYW5nZTogJ1BlaXR0w6R2eXlkZW4gcmFqYXQnLFxuICAgIGhpZ2hQcmVjaXNpb25SZW5kZXJpbmc6ICdUYXJra2EgcmVuZGVyw7ZpbnRpJyxcbiAgICBoaWdoUHJlY2lzaW9uUmVuZGVyaW5nRGVzY3JpcHRpb246ICdUYXJra2EgcmVuZGVyw7ZpbnRpIGpvaHRhYSBoaXRhYW1wYWFuIHN1b3JpdHRhbWlzZWVuJyxcbiAgICBoZWlnaHQ6ICdLb3JrZXVzJyxcbiAgICBoZWlnaHREZXNjcmlwdGlvbjogJ0tsaWtrYWEgb2lrZWFzdGEgeWzDpG51cmthc3RhIG5hcHBpYSB2YWlodGFha3Nlc2kgM0QtbsOka3ltw6TDpG4nLFxuICAgIGZpbGw6ICdUw6R5dHTDticsXG4gICAgZW5hYmxlUG9seWdvbkhlaWdodDogJ1NhbGxpIHBvbHlnb25pZW4ga29ya2V1cycsXG4gICAgc2hvd1dpcmVmcmFtZTogJ07DpHl0w6QgcmF1dGFsYW5rYW1hbGxpJyxcbiAgICB3ZWlnaHRJbnRlbnNpdHk6ICdQYWlub3R1a3NlbiBpbnRlbnNpdGVldHRpJyxcbiAgICB6b29tU2NhbGU6ICdab29tYXVzc2thYWxhJyxcbiAgICBoZWlnaHRSYW5nZTogJ0tvcmtldWRlbiByYWphdCdcbiAgfSxcbiAgbGF5ZXJNYW5hZ2VyOiB7XG4gICAgYWRkRGF0YTogJ0xpc8Okw6QgYWluZWlzdG8nLFxuICAgIGFkZExheWVyOiAnTGlzw6TDpCB0YXNvJyxcbiAgICBsYXllckJsZW5kaW5nOiAnVGFzb2plbiBzZWtvaXR0dXZ1dXMnXG4gIH0sXG4gIG1hcE1hbmFnZXI6IHtcbiAgICBtYXBTdHlsZTogJ0thcnRhbiB0eXlsaScsXG4gICAgYWRkTWFwU3R5bGU6ICdMaXPDpMOkIHR5eWxpIGthcnRhbGxlJyxcbiAgICAnM2RCdWlsZGluZ0NvbG9yJzogJzNELXJha2VubnVzdGVuIHbDpHJpJ1xuICB9LFxuICBsYXllckNvbmZpZ3VyYXRpb246IHtcbiAgICBkZWZhdWx0RGVzY3JpcHRpb246ICdMYXNrZSBzdXVyZWVuIHtwcm9wZXJ0eX0gYXJ2byB2YWxpdHVuIGtlbnTDpG4gcGVydXN0ZWVsbGEnLFxuICAgIGhvd1RvOiAnTWl0ZW4gdG9pbWlpJ1xuICB9LFxuICBmaWx0ZXJNYW5hZ2VyOiB7XG4gICAgYWRkRmlsdGVyOiAnTGlzw6TDpCBzdW9kYXRpbidcbiAgfSxcbiAgZGF0YXNldFRpdGxlOiB7XG4gICAgc2hvd0RhdGFUYWJsZTogJ07DpHl0w6QgYXR0cmlidXV0dGl0YXVsdScsXG4gICAgcmVtb3ZlRGF0YXNldDogJ1BvaXN0YSBhaW5laXN0bydcbiAgfSxcbiAgZGF0YXNldEluZm86IHtcbiAgICByb3dDb3VudDogJ3tyb3dDb3VudH0gcml2acOkJ1xuICB9LFxuICB0b29sdGlwOiB7XG4gICAgaGlkZUxheWVyOiAnUGlpbG90YSB0YXNvJyxcbiAgICBzaG93TGF5ZXI6ICdOw6R5dMOkIHRhc28nLFxuICAgIGhpZGVGZWF0dXJlOiAnUGlpbG90YSBrb2hkZScsXG4gICAgc2hvd0ZlYXR1cmU6ICdOw6R5dMOkIGtvaGRlJyxcbiAgICBoaWRlOiAncGlpbG90YScsXG4gICAgc2hvdzogJ27DpHl0w6QnLFxuICAgIHJlbW92ZUxheWVyOiAnUG9pc3RhIHRhc28nLFxuICAgIGxheWVyU2V0dGluZ3M6ICdUYXNvbiBhc2V0dWtzZXQnLFxuICAgIGNsb3NlUGFuZWw6ICdTdWxqZSBwYW5lZWxpJyxcbiAgICBzd2l0Y2hUb0R1YWxWaWV3OiAnVmFpaGRhIGtha3NvaXNrYXJydGFuw6RreW3DpMOkbicsXG4gICAgc2hvd0xlZ2VuZDogJ07DpHl0w6Qgc2VsaXRlJyxcbiAgICBkaXNhYmxlM0RNYXA6ICdQb2lzdHUgM0QtbsOka3ltw6RzdMOkJyxcbiAgICBEcmF3T25NYXA6ICdQaWlycsOkIGthcnRhbGxlJyxcbiAgICBzZWxlY3RMb2NhbGU6ICdWYWxpdHNlIGtpZWxpc3l5cycsXG4gICAgaGlkZUxheWVyUGFuZWw6ICdQaWlsb3RhIHRhc29wYW5lZWxpJyxcbiAgICBzaG93TGF5ZXJQYW5lbDogJ07DpHl0w6QgdGFzb3BhbmVlbGknLFxuICAgIG1vdmVUb1RvcDogJ1NpaXJyw6QgdGFzb2plbiBww6TDpGxsaW1tw6Rpc2Vrc2knLFxuICAgIHNlbGVjdEJhc2VNYXBTdHlsZTogJ1ZhbGl0c2UgdGF1c3Rha2FydHRhdHl5bGknLFxuICAgIGRlbGV0ZTogJ1BvaXN0YScsXG4gICAgdGltZVBsYXliYWNrOiAnQWphbiBhbmltb2ludGknLFxuICAgIGNsb3VkU3RvcmFnZTogJ1BpbHZpdGFsbGVubnVzJyxcbiAgICAnM0RNYXAnOiAnM0QtbsOka3ltw6QnXG4gIH0sXG4gIHRvb2xiYXI6IHtcbiAgICBleHBvcnRJbWFnZTogJ1ZpZSBrdXZhJyxcbiAgICBleHBvcnREYXRhOiAnVmllIGFpbmVpc3RvdCcsXG4gICAgZXhwb3J0TWFwOiAnVmllIGthcnR0YScsXG4gICAgc2hhcmVNYXBVUkw6ICdKYWEga2FydGFuIFVSTCcsXG4gICAgc2F2ZU1hcDogJ1RhbGxlbm5hIGthcnR0YScsXG4gICAgc2VsZWN0OiAndmFsaXRzZScsXG4gICAgcG9seWdvbjogJ3BvbHlnb25pJyxcbiAgICByZWN0YW5nbGU6ICduZWxpa3VsbWlvJyxcbiAgICBoaWRlOiAncGlpbG90YScsXG4gICAgc2hvdzogJ27DpHl0w6QnLFxuICAgIC4uLkxPQ0FMRVNcbiAgfSxcbiAgbW9kYWw6IHtcbiAgICB0aXRsZToge1xuICAgICAgZGVsZXRlRGF0YXNldDogJ1BvaXN0YSBhaW5laXN0bycsXG4gICAgICBhZGREYXRhVG9NYXA6ICdMaXPDpMOkIGFpbmVpc3RvamEga2FydGFsbGUnLFxuICAgICAgZXhwb3J0SW1hZ2U6ICdWaWUga3V2YScsXG4gICAgICBleHBvcnREYXRhOiAnVmllIGFpbmVpc3RvdCcsXG4gICAgICBleHBvcnRNYXA6ICdWaWUga2FydHRhJyxcbiAgICAgIGFkZEN1c3RvbU1hcGJveFN0eWxlOiAnTGlzw6TDpCBvbWEgTWFwYm94LXR5eWxpJyxcbiAgICAgIHNhdmVNYXA6ICdUYWxsZW5uYSBrYXJ0dGEnLFxuICAgICAgc2hhcmVVUkw6ICdKYWEgVVJMJ1xuICAgIH0sXG4gICAgYnV0dG9uOiB7XG4gICAgICBkZWxldGU6ICdQb2lzdGEnLFxuICAgICAgZG93bmxvYWQ6ICdMYXRhYScsXG4gICAgICBleHBvcnQ6ICdWaWUnLFxuICAgICAgYWRkU3R5bGU6ICdMaXPDpMOkIHR5eWxpJyxcbiAgICAgIHNhdmU6ICdUYWxsZW5uYScsXG4gICAgICBkZWZhdWx0Q2FuY2VsOiAnUGVydScsXG4gICAgICBkZWZhdWx0Q29uZmlybTogJ1ZhaHZpc3RhJ1xuICAgIH0sXG4gICAgZXhwb3J0SW1hZ2U6IHtcbiAgICAgIHJhdGlvVGl0bGU6ICdLdXZhc3VoZGUnLFxuICAgICAgcmF0aW9EZXNjcmlwdGlvbjogJ1ZhbGl0c2Ugc29waXZhIGt1dmFzdWhkZSBrw6R5dHTDtnRhcGF1c3Rhc2kgdmFydGVuLicsXG4gICAgICByYXRpb09yaWdpbmFsU2NyZWVuOiAnQWxrdXBlcsOkaW5lbiBuw6R5dHTDticsXG4gICAgICByYXRpb0N1c3RvbTogJ0t1c3RvbW9pdHUnLFxuICAgICAgcmF0aW80XzM6ICc0OjMnLFxuICAgICAgcmF0aW8xNl85OiAnMTY6OScsXG4gICAgICByZXNvbHV0aW9uVGl0bGU6ICdSZXNvbHV1dGlvJyxcbiAgICAgIHJlc29sdXRpb25EZXNjcmlwdGlvbjogJ0tvcmtlYSByZXNvbHV1dGlvIG9uIHBhcmVtcGkgdHVsb3N0YW1pc3RhIHZhcnRlbi4nLFxuICAgICAgbWFwTGVnZW5kVGl0bGU6ICdLYXJ0YW4gc2VsaXRlJyxcbiAgICAgIG1hcExlZ2VuZEFkZDogJ0xpc8Okw6Qgc2VsaXRlIGthcnR0YWFuJ1xuICAgIH0sXG4gICAgZXhwb3J0RGF0YToge1xuICAgICAgZGF0YXNldFRpdGxlOiAnQWluZWlzdG90JyxcbiAgICAgIGRhdGFzZXRTdWJ0aXRsZTogJ1ZhbGl0c2UgYWluZWlzdG8sIGpvbmthIGFpb3QgdmllZMOkJyxcbiAgICAgIGFsbERhdGFzZXRzOiAnS2Fpa2tpJyxcbiAgICAgIGRhdGFUeXBlVGl0bGU6ICdBaW5laXN0b2plbiBmb3JtYWF0dGknLFxuICAgICAgZGF0YVR5cGVTdWJ0aXRsZTogJ1ZhbGl0c2UgYWluZWlzdG9mb3JtYWF0dGkgdmFsaXRzZW1pbGxlc2kgYWluZWlzdG9pbGxlJyxcbiAgICAgIGZpbHRlckRhdGFUaXRsZTogJ1N1b2RhdGEgYWluZWlzdG9qYScsXG4gICAgICBmaWx0ZXJEYXRhU3VidGl0bGU6ICdWb2l0IHZpZWTDpCBqb2tvIGFsa3VwZXLDpGlzZXQgYWluZWlzdG90IHRhaSBzdW9kYXRldHV0IGFpbmVpc3RvdCcsXG4gICAgICBmaWx0ZXJlZERhdGE6ICdTdW9kYXRldHV0IGFpbmVpc3RvdCcsXG4gICAgICB1bmZpbHRlcmVkRGF0YTogJ1N1b2RhdHRhbWF0dG9tYXQgYWluZWlzdG90JyxcbiAgICAgIGZpbGVDb3VudDogJ3tmaWxlQ291bnR9IHRpZWRvc3RvYScsXG4gICAgICByb3dDb3VudDogJ3tyb3dDb3VudH0gcml2acOkJ1xuICAgIH0sXG4gICAgZGVsZXRlRGF0YToge1xuICAgICAgd2FybmluZzogJ2Fpb3QgcG9pc3RhYSB0w6Rtw6RuIGFpbmVpc3Rvbi4gQWluZW9zdG9hIGvDpHl0dMOkdmllbiB0YXNvamVuIGx1a3Vtw6TDpHLDpDoge2xlbmd0aH0nXG4gICAgfSxcbiAgICBhZGRTdHlsZToge1xuICAgICAgcHVibGlzaFRpdGxlOiAnMS4gSnVsa2Fpc2UgdHl5bGlzaSBNYXBib3hpc3NhIHRhaSBhbm5hIHR1bm5pc3RlJyxcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTE6ICdWb2l0IGx1b2RhIG9tYW4ga2FydHRhdHl5bGlzaSBzaXZ1bGxhJyxcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTI6ICdqYScsXG4gICAgICBwdWJsaXNoU3VidGl0bGUzOiAnanVsa2Fpc3RhJyxcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTQ6ICdzZW4uJyxcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTU6ICdLw6R5dHTDpMOka3Nlc2kgeWtzaXR5aXN0w6QgdHl5bGnDpCwgbGlpdMOkJyxcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTY6ICd0dW5uaXN0ZWVzaScsXG4gICAgICBwdWJsaXNoU3VidGl0bGU3OlxuICAgICAgICAndMOkbm5lLiAqa2VwbGVyLmdsIG9uIGNsaWVudC1zaWRlIHNvdmVsbHVzLCBkYXRhIHB5c3l5IHZhaW4gc2VsYWltZXNzYXNpLi4uJyxcbiAgICAgIGV4YW1wbGVUb2tlbjogJ2VzaW0uIHBrLmFiY2RlZmcueHh4eHh4JyxcbiAgICAgIHBhc3RlVGl0bGU6ICcyLiBMaWl0w6QgdHl5bGktVVJMJyxcbiAgICAgIHBhc3RlU3VidGl0bGUxOiAnTWlrw6Qgb24nLFxuICAgICAgcGFzdGVTdWJ0aXRsZTI6ICd0eXlsaS1VUkw/JyxcbiAgICAgIG5hbWluZ1RpdGxlOiAnMy4gTmltZcOkIHR5eWxpc2knXG4gICAgfSxcbiAgICBzaGFyZU1hcDoge1xuICAgICAgc2hhcmVVcmlUaXRsZTogJ0phYSBrYXJ0YW4gVVJMJyxcbiAgICAgIHNoYXJlVXJpU3VidGl0bGU6ICdMdW8ga2FydGFsbGUgVVJMLCBqb25rYSB2b2l0IGpha2FhIG11aWRlbiBrYW5zc2EnLFxuICAgICAgY2xvdWRUaXRsZTogJ1BpbHZpdGFsbGVubnVzJyxcbiAgICAgIGNsb3VkU3VidGl0bGU6XG4gICAgICAgICdLaXJqYXVkdSBzaXPDpMOkbiBqYSBsYXRhYSBrYXJ0dGEgamEgYWluZWlzdG90IGhlbmtpbMO2a29odGFpc2VlbiBwaWx2aXBhbHZlbHV1bicsXG4gICAgICBzaGFyZURpc2NsYWltZXI6XG4gICAgICAgICdrZXBsZXIuZ2wgdGFsbGVudGFhIGthcnRhbiBkYXRhbiBoZW5raWzDtmtvaHRhaXNlZW4gcGlsdml0YWxsZW5udXN0aWxhYXNpLCB2YWluIGlobWlzZXQsIGpvaWxsYSBvbiBVUkwsIHZvaXZhdCBww6TDpHN0w6Qga8Okc2lrc2kga2FydHRhYW4gamEgYWluZWlzdG9paGluLiAnICtcbiAgICAgICAgJ1ZvaXQgbXVva2F0YSB0aWVkb3N0b2phIHRhaSBwb2lzdGFhIG5lIHBpbHZpcGFsdmVsdXN0YXNpIG1pbGxvaW4gdmFpbi4nLFxuICAgICAgZ290b1BhZ2U6ICdNZW5lIEtlcGxlci5nbCB7Y3VycmVudFByb3ZpZGVyfSBzaXZ1bGxlc2knXG4gICAgfSxcbiAgICBzdGF0dXNQYW5lbDoge1xuICAgICAgbWFwVXBsb2FkaW5nOiAnS2FydHRhYSBsYWRhdGFhbicsXG4gICAgICBlcnJvcjogJ1ZpcmhlJ1xuICAgIH0sXG4gICAgc2F2ZU1hcDoge1xuICAgICAgdGl0bGU6ICdQaWx2aXRhbGxlbm51cycsXG4gICAgICBzdWJ0aXRsZTogJ0tpcmphdWR1IHNpc8Okw6RuIHBpbHZpcGFsdmVsdXVzaSB0YWxsZW50YWFrc2VzaSBrYXJ0YW4nXG4gICAgfSxcbiAgICBleHBvcnRNYXA6IHtcbiAgICAgIGZvcm1hdFRpdGxlOiAnS2FydGFuIGZvcm1hYXR0aScsXG4gICAgICBmb3JtYXRTdWJ0aXRsZTogJ1ZhbGl0c2UgZm9ybWFhdHRpLCBqb3NzYSB2aWV0IGthcnRhbicsXG4gICAgICBodG1sOiB7XG4gICAgICAgIHNlbGVjdGlvbjogJ1ZpZSBrYXJ0dGEgaW50ZXJha3RpaXZpc2VuYSBodG1sLXRpZWRvc3RvbmEnLFxuICAgICAgICB0b2tlblRpdGxlOiAnTWFwYm94LXR1bm5pc3RlJyxcbiAgICAgICAgdG9rZW5TdWJ0aXRsZTogJ0vDpHl0w6Qgb21hYSBNYXBib3gtdHVubmlzdGV0dGFzaSBodG1sLXRpZWRvc3Rvc3NhICh2YWxpbm5haW5lbiknLFxuICAgICAgICB0b2tlblBsYWNlaG9sZGVyOiAnTGlpdMOkIE1hcGJveC10dW5uaXN0ZWVzaScsXG4gICAgICAgIHRva2VuTWlzdXNlV2FybmluZzpcbiAgICAgICAgICAnKiBKb3MgZXQga8OkeXTDpCBvbWFhIHR1bm5pc3RldHRhc2ksIGthcnR0YSB2b2kgbGFrYXRhIHRvaW1pbWFzdGEgbWlsbG9pbiB2YWluIGt1biB2YWloZGFtbWUgb21hYSB0dW5uaXN0ZXR0YW1tZSB2w6TDpHJpbmvDpHl0w7ZuIGVzdMOkbWlzZWtzaS4gJyxcbiAgICAgICAgdG9rZW5EaXNjbGFpbWVyOiAnVm9pdCB2YWlodGFhIE1hcGJveC10dW5uaXN0ZWVzaSBuw6RpZGVuIG9oamVpZGVuIGF2dWxsYTogJyxcbiAgICAgICAgdG9rZW5VcGRhdGU6ICdLdWlua2EgdmFpaHRhYSBvbGVtYXNzYW9sZXZhIE1hcGJveC10dW5uaXN0ZScsXG4gICAgICAgIG1vZGVUaXRsZTogJ0thcnRhbiB0aWxhJyxcbiAgICAgICAgbW9kZVN1YnRpdGxlMTogJ1ZhbGl0c2Uga2FydGFuIHRpbGEuJyxcbiAgICAgICAgbW9kZVN1YnRpdGxlMjogJ0xpc8OkdGlldG9qYScsXG4gICAgICAgIG1vZGVEZXNjcmlwdGlvbjogJ0FubmEga8OkeXR0w6RqaWVuIHttb2RlfSBrYXJ0dGFhJyxcbiAgICAgICAgcmVhZDogJ2x1a2VhJyxcbiAgICAgICAgZWRpdDogJ211b2thdGEnXG4gICAgICB9LFxuICAgICAganNvbjoge1xuICAgICAgICBjb25maWdUaXRsZTogJ0thcnRhbiBhc2V0dWtzZXQnLFxuICAgICAgICBjb25maWdEaXNjbGFpbWVyOlxuICAgICAgICAgICdLYXJ0YW4gYXNldHVrc2V0IHNpc8OkbHR5dsOkdCBKc29uLXRpZWRvc3Rvb24uIEpvcyBrw6R5dMOkdCBraXJqYXN0b2Ega2VwbGVyLmdsIG9tYXNzYSBzb3ZlbGx1a3Nlc3Nhc2kuIFZvaXQga29waW9pZGEgYXNldHVrc2V0IGphIGFudGFhIG5lIGZ1bmt0aW9sbGU6ICcsXG4gICAgICAgIHNlbGVjdGlvbjpcbiAgICAgICAgICAnVmllIGt5c2Vpc2VuIGthcnRhbiBhaW5laXN0b3QgamEgYXNldHVrc2V0IHloZGVzc8OkIGpzb24tdGllZG9zdG9zc2EuIFZvaXQgbXnDtmhlbW1pbiBhdmF0YSBzYW1hbiBrYXJ0YW4gbGF0YWFtYWxsYSB0aWVkb3N0b24ga2VwbGVyLmdsOm4nLFxuICAgICAgICBkaXNjbGFpbWVyOlxuICAgICAgICAgICcqIEthcnRhbiBhc2V0dWtzZXQgb3ZhdCBzaWRva3Npc3NhIGxhZGF0dHVpaGluIGFpbmVpc3RvaWhpbi4gQXJ2b2Eg4oCYZGF0YUlk4oCZIGvDpHl0ZXTDpMOkbiB0YXNvamVuLCBzdW9kYXR0aW1pZW4gamEgdmloamVpZGVuIGxpaXR0w6RtaXNla3NpIHRpZXR0eXluIGFpbmVpc3Rvb24uICcgK1xuICAgICAgICAgICdWYXJtaXN0YSwgZXR0w6QgYWluZWlzdG9uIGRhdGFJZDp0IHZhc3RhYXZhdCBhc2V0dXN0ZW4gYXJ2b2phIGpvcyBsYXRhYXQgYXNldHVrc2V0IGvDpHl0dMOkZW4gYGFkZERhdGFUb01hcGAtZnVua3Rpb2xsZS4nXG4gICAgICB9XG4gICAgfSxcbiAgICBsb2FkaW5nRGlhbG9nOiB7XG4gICAgICBsb2FkaW5nOiAnTGFkYXRhYW4uLi4nXG4gICAgfSxcbiAgICBsb2FkRGF0YToge1xuICAgICAgdXBsb2FkOiAnTGF0YWEgdGllZG9zdG90JyxcbiAgICAgIHN0b3JhZ2U6ICdMYXRhYSB0YWxsZW5udXN0aWxhc3RhJ1xuICAgIH0sXG4gICAgdHJpcEluZm86IHtcbiAgICAgIHRpdGxlOiAnS3VpbmthIGvDpHl0dMOkw6QgbWF0a2EtYW5pbWFhdGlvdGEnLFxuICAgICAgZGVzY3JpcHRpb24xOlxuICAgICAgICAnUmVpdGluIGFuaW1vaW1pc2Vrc2kgZ2VvSlNPTi1haW5laXN0b24gdMOkeXR5eSBvbGxhIGdlb21ldHJpYXR5eXBpbHTDpMOkbiBgTGluZVN0cmluZ2AsIExpbmVTdHJpbmcta29vcmRpbmFhdHRpZW4gdMOkeXR5eSBzaXPDpGx0w6TDpCA0IGVsZW1lbnR0acOkIGZvcm1hYXRpc3NhOicsXG4gICAgICBjb2RlOiAnIFtwaXR1dXNhc3RlLCBsZXZleXNhc3RlLCBrb3JrZXVzLCBhaWthbGVpbWFdICcsXG4gICAgICBkZXNjcmlwdGlvbjI6XG4gICAgICAgICdzaXRlbiwgZXR0w6QgdmlpbWVpbmVuIGVsZW1lbnR0aSBvbiBhaWthbGVpbWEuIEFpa2FsZWltYSB2b2kgb2xsYSBtdW9kb2x0YWFuIHVuaXgtc2VrdW50ZWphLCBrdXRlbiBgMTU2NDE4NDM2M2AgdGFpIG1pbGxpc2VrdW50ZWphLCBrdXRlbiBgMTU2NDE4NDM2MzAwMGAuJyxcbiAgICAgIGV4YW1wbGU6ICdFc2ltZXJra2k6J1xuICAgIH0sXG4gICAgaWNvbkluZm86IHtcbiAgICAgIHRpdGxlOiAnTWl0ZW4gcGlpcnTDpMOkIGt1dmlhJyxcbiAgICAgIGRlc2NyaXB0aW9uMTpcbiAgICAgICAgJ2Nzdi10aWVkb3N0b3NzYXNpLCBsdW8gc2FyYWtlIG5pbWVsdMOkIGljb24uIFZvaXQgasOkdHTDpMOkIHNlbiB0eWhqw6Rrc2kgam9zIGV0IGhhbHVhIHBpaXJ0w6TDpCBrdXZhYSBqb2lsbGFpbiBwaXN0ZWlsbMOkLiBLdW4gc2FyYWtrZWVuIG5pbWkgb24gJyxcbiAgICAgIGNvZGU6ICdpY29uJyxcbiAgICAgIGRlc2NyaXB0aW9uMjogJyBrZXBsZXIuZ2wgbHVvIGF1dG9tYWF0dGlzZXN0aSBrdXZhdGFzb24gc2ludWEgdmFydGVuLicsXG4gICAgICBleGFtcGxlOiAnRXNpbWVya2tpOicsXG4gICAgICBpY29uczogJ0t1dmF0J1xuICAgIH0sXG4gICAgc3RvcmFnZU1hcFZpZXdlcjoge1xuICAgICAgbGFzdE1vZGlmaWVkOiAnVmlpbWVrc2kgbXVva2F0dHUge2xhc3RVcGRhdGVkfSBzaXR0ZW4nLFxuICAgICAgYmFjazogJ1Rha2Fpc2luJ1xuICAgIH0sXG4gICAgb3ZlcndyaXRlTWFwOiB7XG4gICAgICB0aXRsZTogJ1RhbGxlbm5ldGFhbiBrYXJ0dGFhLi4uJyxcbiAgICAgIGFscmVhZHlFeGlzdHM6ICdvbiBqbyB7bWFwU2F2ZWR9OnNzYS4gSGFsdWF0a28geWxpa2lyam9pdHRhYSBzZW4/J1xuICAgIH0sXG4gICAgbG9hZFN0b3JhZ2VNYXA6IHtcbiAgICAgIGJhY2s6ICdUYWthaXNpbicsXG4gICAgICBnb1RvUGFnZTogJ01lbmUgS2VwbGVyLmdsIHtkaXNwbGF5TmFtZX0gc2l2dWxsZXNpJyxcbiAgICAgIHN0b3JhZ2VNYXBzOiAnVGFsbGVubnVzIC8gS2FydGF0JyxcbiAgICAgIG5vU2F2ZWRNYXBzOiAnRWkgdGFsbGVubmV0dHVqYSBrYXJ0dG9qYSB2aWVsw6QnXG4gICAgfVxuICB9LFxuICBoZWFkZXI6IHtcbiAgICB2aXNpYmxlTGF5ZXJzOiAnTsOka3l2aXNzw6Qgb2xldmF0IHRhc290JyxcbiAgICBsYXllckxlZ2VuZDogJ1Rhc29uIHNlbGl0ZSdcbiAgfSxcbiAgaW50ZXJhY3Rpb25zOiB7XG4gICAgdG9vbHRpcDogJ1ZpaGplJyxcbiAgICBicnVzaDogJ0hhcmphJyxcbiAgICBjb29yZGluYXRlOiAnS29vcmRpbmFhdGl0J1xuICB9LFxuICBsYXllckJsZW5kaW5nOiB7XG4gICAgdGl0bGU6ICdUYXNvamVuIHNla29pdHR1dnV1cycsXG4gICAgYWRkaXRpdmU6ICdsaXPDpMOkdsOkJyxcbiAgICBub3JtYWw6ICdub3JtYWFsaScsXG4gICAgc3VidHJhY3RpdmU6ICd2w6RoZW50w6R2w6QnXG4gIH0sXG4gIGNvbHVtbnM6IHtcbiAgICB0aXRsZTogJ1NhcmFra2VldCcsXG4gICAgbGF0OiAnbGF0JyxcbiAgICBsbmc6ICdsbmcnLFxuICAgIGFsdGl0dWRlOiAna29ya2V1cycsXG4gICAgaWNvbjogJ2t1dmEnLFxuICAgIGdlb2pzb246ICdnZW9qc29uJyxcbiAgICBhcmM6IHtcbiAgICAgIGxhdDA6ICdsw6RoZMO2biBsYXQnLFxuICAgICAgbG5nMDogJ2zDpGhkw7ZuIGxuZycsXG4gICAgICBsYXQxOiAna29odGVlbiBsYXQnLFxuICAgICAgbG5nMTogJ2tvaHRlZW4gbG5nJ1xuICAgIH0sXG4gICAgbGluZToge1xuICAgICAgYWx0MDogJ2zDpGh0ZWVuIGtvcmtldXMnLFxuICAgICAgYWx0MTogJ2tvaGRlIGtvcmtldXMnXG4gICAgfSxcbiAgICBncmlkOiB7XG4gICAgICB3b3JsZFVuaXRTaXplOiAnUnV1dHVqZW4ga29rbyAoa20pJ1xuICAgIH0sXG4gICAgaGV4YWdvbjoge1xuICAgICAgd29ybGRVbml0U2l6ZTogJ0hleGFnb25pZW4gc8OkZGUgKGttKSdcbiAgICB9XG4gIH0sXG4gIGNvbG9yOiB7XG4gICAgY3VzdG9tUGFsZXR0ZTogJ011a2F1dGV0dHUgcGFsZXR0aScsXG4gICAgc3RlcHM6ICdhc2tlbGVldCcsXG4gICAgdHlwZTogJ3R5eXBwaScsXG4gICAgcmV2ZXJzZWQ6ICdrw6TDpG50ZWluZW4nXG4gIH0sXG4gIHNjYWxlOiB7XG4gICAgY29sb3JTY2FsZTogJ1bDpHJpbiBza2FhbGEnLFxuICAgIHNpemVTY2FsZTogJ0tvb24gc2thYWxhJyxcbiAgICBzdHJva2VTY2FsZTogJ1ZpaXZhbiBwYWtzdXVkZW4gc2thYWxhJyxcbiAgICBzY2FsZTogJ1NrYWFsYSdcbiAgfSxcbiAgZmlsZVVwbG9hZGVyOiB7XG4gICAgbWVzc2FnZTogJ1JhYWhhYSBqYSBwdWRvdGEgdGllZG9zdG9zaSB0w6RubmUnLFxuICAgIGNocm9tZU1lc3NhZ2U6XG4gICAgICAnKkNocm9tZW4ga8OkeXR0w6Rqw6Q6IFJham9pdGEgdGllZG9zdG9rb2tvc2kgMjUwTWI6aGVuLiBKb3MgaGFsdWF0IHN1dXJlbXBpYSB0aWVkb3N0b2phLCBrb2tlaWxlIFNhZmFyaWEnLFxuICAgIGRpc2NsYWltZXI6XG4gICAgICAnKmtlcGxlci5nbCBvbiBjbGllbnQtc2lkZSBzb3ZlbGx1cywgZGF0YSBweXN5eSB2YWluIHNlbGFpbWVzc2FzaS4uLicgK1xuICAgICAgJ1RpZXRvamEgZWkgbMOkaGV0ZXTDpCBwYWx2ZWxpbWVsbGUuJyxcbiAgICBjb25maWdVcGxvYWRNZXNzYWdlOlxuICAgICAgJ0xpc8Okw6Qge2ZpbGVGb3JtYXROYW1lc30gdGFpIHRhbGxlbm5ldHR1IGthcnR0YSAqKkpzb24qKi4gTHVlIGxpc8Okw6QgWyoqdHVldHVpc3RhIGZvcm1hYXRlaXN0YSoqXScsXG4gICAgYnJvd3NlRmlsZXM6ICdzZWxhYSB0aWVkb3N0b2phc2knLFxuICAgIHVwbG9hZGluZzogJ2xhZGF0YWFuJyxcbiAgICBmaWxlTm90U3VwcG9ydGVkOiAnVGllZG9zdG8ge2Vycm9yRmlsZXN9IGVpIG9sZSB0dWV0dHUuJyxcbiAgICBvcjogJ3RhaSdcbiAgfSxcbiAgZGVuc2l0eTogJ3RpaGV5cycsXG4gICdCdWcgUmVwb3J0JzogJ0J1Z2lyYXBvcnRvaW50aScsXG4gICdVc2VyIEd1aWRlJzogJ09wYXMnLFxuICBTYXZlOiAnVGFsbGVubmEnLFxuICBTaGFyZTogJ0phYSdcbn07XG4iXX0=