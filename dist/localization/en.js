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
    weight: 'weight',
    label: 'label',
    fillColor: 'fill color',
    color: 'color',
    coverage: 'coverage',
    strokeColor: 'stroke color',
    radius: 'radius',
    outline: 'outline',
    stroke: 'stroke',
    density: 'density',
    height: 'height',
    sum: 'sum',
    pointCount: 'Point Count'
  },
  placeholder: {
    search: 'Search',
    selectField: 'Select a field',
    yAxis: 'Y Axis',
    selectType: 'Select A Type',
    selectValue: 'Select A Value',
    enterValue: 'Enter a value',
    empty: 'empty'
  },
  misc: {
    by: '',
    valuesIn: 'Values in',
    valueEquals: 'Value equals',
    dataSource: 'Data Source',
    brushRadius: 'Brush Radius (km)',
    empty: ' '
  },
  mapLayers: {
    title: 'Map Layers',
    label: 'Label',
    road: 'Road',
    border: 'Border',
    building: 'Building',
    water: 'Water',
    land: 'Land',
    '3dBuilding': '3d Building'
  },
  panel: {
    text: {
      label: 'label',
      labelWithId: 'Label {labelId}',
      fontSize: 'Font size',
      fontColor: 'Font color',
      textAnchor: 'Text anchor',
      alignment: 'Alignment',
      addMoreLabel: 'Add More Label'
    }
  },
  sidebar: {
    panels: {
      layer: 'Layers',
      filter: 'Filters',
      interaction: 'Interactions',
      basemap: 'Base map'
    }
  },
  layer: {
    required: 'Required*',
    radius: 'Radius',
    color: 'Color',
    fillColor: 'Fill Color',
    outline: 'Outline',
    weight: 'Weight',
    propertyBasedOn: '{property} based on',
    coverage: 'Coverage',
    stroke: 'Stroke',
    strokeWidth: 'Stroke Width',
    strokeColor: 'Stroke Color',
    basic: 'Basic',
    trailLength: 'Trail Length',
    trailLengthDescription: 'Number of seconds for a path to completely fade out',
    newLayer: 'new layer',
    elevationByDescription: 'When off, height is based on count of points',
    colorByDescription: 'When off, color is based on count of points',
    aggregateBy: 'Aggregate {field} by',
    '3DModel': '3D Model',
    '3DModelOptions': '3D Model Options',
    type: {
      point: 'point',
      arc: 'arc',
      line: 'line',
      grid: 'grid',
      hexbin: 'hexbin',
      polygon: 'polygon',
      geojson: 'geojson',
      cluster: 'cluster',
      icon: 'icon',
      heatmap: 'heatmap',
      hexagon: 'hexagon',
      hexagonid: 'H3',
      trip: 'trip',
      s2: 'S2',
      '3d': '3D'
    }
  },
  layerVisConfigs: {
    angle: 'Angle',
    strokeWidth: 'Stroke Width (Pixels)',
    strokeWidthRange: 'Stroke Width Range',
    radius: 'Radius',
    fixedRadius: 'Fixed Radius to meter',
    fixedRadiusDescription: 'Map radius to absolute radius in meters, e.g. 5 to 5 meters',
    radiusRange: 'Radius Range',
    clusterRadius: 'Cluster Radius in Pixels',
    radiusRangePixels: 'Radius Range in pixels',
    opacity: 'Opacity',
    coverage: 'Coverage',
    outline: 'Outline',
    colorRange: 'Color range',
    stroke: 'Stroke',
    strokeColor: 'Stroke Color',
    strokeColorRange: 'Stroke Color range',
    targetColor: 'Target Color',
    colorAggregation: 'Color Aggregation',
    heightAggregation: 'Height Aggregation',
    resolutionRange: 'Resolution range',
    sizeScale: 'Size Scale',
    worldUnitSize: 'World Unit Size',
    elevationScale: 'Elevation Scale',
    enableElevationZoomFactor: 'Use elevation zoom factor',
    enableElevationZoomFactorDescription: 'Adjust elevation based on current zoom factor',
    heightScale: 'Height Scale',
    coverageRange: 'Coverage Range',
    highPrecisionRendering: 'High Precision Rendering',
    highPrecisionRenderingDescription: 'High precision will result in slower performance',
    height: 'Height',
    heightDescription: 'Click button at top right of the map to switch to 3d view',
    fill: 'Fill',
    enablePolygonHeight: 'Enable Polygon Height',
    showWireframe: 'Show Wireframe',
    weightIntensity: 'Weight Intensity',
    zoomScale: 'Zoom Scale',
    heightRange: 'Height Range'
  },
  layerManager: {
    addData: 'Add Data',
    addLayer: 'Add Layer',
    layerBlending: 'Layer Blending'
  },
  mapManager: {
    mapStyle: 'Map style',
    addMapStyle: 'Add Map Style',
    '3dBuildingColor': '3D Building Color'
  },
  layerConfiguration: {
    defaultDescription: 'Calculate {property} based on selected field',
    howTo: 'How to'
  },
  filterManager: {
    addFilter: 'Add Filter'
  },
  datasetTitle: {
    showDataTable: 'Show data table',
    removeDataset: 'Remove dataset'
  },
  datasetInfo: {
    rowCount: '{rowCount} rows'
  },
  tooltip: {
    hideLayer: 'hide layer',
    showLayer: 'show layer',
    hideFeature: 'Hide Feature',
    showFeature: 'Show feature',
    hide: 'hide',
    show: 'show',
    removeLayer: 'Remove layer',
    duplicateLayer: 'Duplicate layer',
    layerSettings: 'Layer settings',
    closePanel: 'Close current panel',
    switchToDualView: 'Switch to dual map view',
    showLegend: 'show legend',
    disable3DMap: 'Disable 3D Map',
    DrawOnMap: 'Draw on map',
    selectLocale: 'Select locale',
    hideLayerPanel: 'Hide layer panel',
    showLayerPanel: 'Show layer panel',
    moveToTop: 'Move to top of data layers',
    selectBaseMapStyle: 'Select Base Map Style',
    "delete": 'Delete',
    timePlayback: 'Time Playback',
    cloudStorage: 'Cloud Storage',
    '3DMap': '3D Map',
    animationByWindow: 'Moving Time Window',
    animationByIncremental: 'Incremental Time Window',
    speed: 'speed',
    play: 'play',
    pause: 'pause',
    reset: 'reset'
  },
  toolbar: _objectSpread({
    exportImage: 'Export Image',
    exportData: 'Export Data',
    exportMap: 'Export Map',
    shareMapURL: 'Share Map URL',
    saveMap: 'Save Map',
    select: 'Select',
    polygon: 'Polygon',
    rectangle: 'Rectangle',
    hide: 'Hide',
    show: 'Show'
  }, _locales.LOCALES),
  editor: {
    filterLayer: 'Filter Layers',
    copyGeometry: 'Copy Geometry'
  },
  modal: {
    title: {
      deleteDataset: 'Delete Dataset',
      addDataToMap: 'Add Data To Map',
      exportImage: 'Export Image',
      exportData: 'Export Data',
      exportMap: 'Export Map',
      addCustomMapboxStyle: 'Add Custom Map Style',
      saveMap: 'Save Map',
      shareURL: 'Share URL'
    },
    button: {
      "delete": 'Delete',
      download: 'Download',
      "export": 'Export',
      addStyle: 'Add Style',
      save: 'Save',
      defaultCancel: 'Cancel',
      defaultConfirm: 'Confirm'
    },
    exportImage: {
      ratioTitle: 'Ratio',
      ratioDescription: 'Choose the ratio for various usages.',
      ratioOriginalScreen: 'Original Screen',
      ratioCustom: 'Custom',
      ratio4_3: '4:3',
      ratio16_9: '16:9',
      resolutionTitle: 'Resolution',
      resolutionDescription: 'High resolution is better for prints.',
      mapLegendTitle: 'Map Legend',
      mapLegendAdd: 'Add legend on map'
    },
    exportData: {
      datasetTitle: 'Dataset',
      datasetSubtitle: 'Choose the datasets you want to export',
      allDatasets: 'All',
      dataTypeTitle: 'Data Type',
      dataTypeSubtitle: 'Choose the type of data you want to export',
      filterDataTitle: 'Filter Data',
      filterDataSubtitle: 'You can choose exporting original data or filtered data',
      filteredData: 'Filtered data',
      unfilteredData: 'Unfiltered Data',
      fileCount: '{fileCount} Files',
      rowCount: '{rowCount} Rows'
    },
    deleteData: {
      warning: 'you are going to delete this dataset. It will affect {length} layers'
    },
    addStyle: {
      publishTitle: '2. If entered mapbox stule url in step.1, publish your style at mapbox or provide access token. (Optional)',
      publishSubtitle1: 'You can create your own map style at',
      publishSubtitle2: 'and',
      publishSubtitle3: 'publish',
      publishSubtitle4: 'it.',
      publishSubtitle5: 'To use private style, paste your',
      publishSubtitle6: 'access token',
      publishSubtitle7: 'here. *kepler.gl is a client-side application, data stays in your browser..',
      exampleToken: 'e.g. pk.abcdefg.xxxxxx',
      pasteTitle: '1. Paste style url',
      pasteSubtitle0: 'Style url can be a mapbox',
      pasteSubtitle1: 'What is a',
      pasteSubtitle2: 'style URL',
      pasteSubtitle3: 'or a style.json using the',
      pasteSubtitle4: 'Mapbox GL Style Spec',
      namingTitle: '3. Name your style'
    },
    shareMap: {
      shareUriTitle: 'Share Map Url',
      shareUriSubtitle: 'Generate a map url to share with others',
      cloudTitle: 'Cloud storage',
      cloudSubtitle: 'Login and upload map data to your personal cloud storage',
      shareDisclaimer: 'kepler.gl will save your map data to your personal cloud storage, only people with the URL can access your map and data. ' + 'You can edit/delete the data file in your cloud account anytime.',
      gotoPage: 'Go to your Kepler.gl {currentProvider} page'
    },
    statusPanel: {
      mapUploading: 'Map Uploading',
      error: 'Error'
    },
    saveMap: {
      title: 'Cloud storage',
      subtitle: 'Login to save map to your personal cloud storage'
    },
    exportMap: {
      formatTitle: 'Map format',
      formatSubtitle: 'Choose the format to export your map to',
      html: {
        selection: 'Export your map into an interactive html file.',
        tokenTitle: 'Mapbox access token',
        tokenSubtitle: 'Use your own Mapbox access token in the html (optional)',
        tokenPlaceholder: 'Paste your Mapbox access token',
        tokenMisuseWarning: '* If you do not provide your own token, the map may fail to display at any time when we replace ours to avoid misuse. ',
        tokenDisclaimer: 'You can change the Mapbox token later using the following instructions: ',
        tokenUpdate: 'How to update an existing map token.',
        modeTitle: 'Map Mode',
        modeSubtitle1: 'Select the app mode. More ',
        modeSubtitle2: 'info',
        modeDescription: 'Allow users to {mode} the map',
        read: 'read',
        edit: 'edit'
      },
      json: {
        configTitle: 'Map Config',
        configDisclaimer: 'Map config will be included in the Json file. If you are using kepler.gl in your own app. You can copy this config and pass it to ',
        selection: 'Export current map data and config into a single Json file. You can later open the same map by uploading this file to kepler.gl.',
        disclaimer: '* Map config is coupled with loaded datasets. ‘dataId’ is used to bind layers, filters, and tooltips to a specific dataset. ' + 'When passing this config to addDataToMap, make sure the dataset id matches the dataId/s in this config.'
      }
    },
    loadingDialog: {
      loading: 'Loading...'
    },
    loadData: {
      upload: 'Load Files',
      storage: 'Load from Storage'
    },
    tripInfo: {
      title: 'How to enable trip animation',
      description1: 'In order to animate the path, the geoJSON data needs to contain `LineString` in its feature geometry, and the coordinates in the LineString need to have 4 elements in the formats of',
      code: ' [longitude, latitude, altitude, timestamp] ',
      description2: 'with the last element being a timestamp. Valid timestamp formats include unix in seconds such as `1564184363` or in milliseconds such as `1564184363000`.',
      example: 'Example:'
    },
    iconInfo: {
      title: 'How to draw icons',
      description1: 'In your csv, create a column, put the name of the icon you want to draw in it. You can leave the cell empty if you do not want the icon to show for some points. When the column is named',
      code: 'icon',
      description2: ' kepler.gl will automatically create a icon layer for you.',
      example: 'Example:',
      icons: 'Icons'
    },
    storageMapViewer: {
      lastModified: 'Last modified {lastUpdated} ago',
      back: 'Back'
    },
    overwriteMap: {
      title: 'Saving map...',
      alreadyExists: 'already exists in your {mapSaved}. Would you like to overwrite it?'
    },
    loadStorageMap: {
      back: 'Back',
      goToPage: 'Go to your Kepler.gl {displayName} page',
      storageMaps: 'Storage / Maps',
      noSavedMaps: 'No saved maps yet'
    }
  },
  header: {
    visibleLayers: 'Visible layers',
    layerLegend: 'Layer Legend'
  },
  interactions: {
    tooltip: 'Tooltip',
    brush: 'Brush',
    coordinate: 'Coordinates',
    geocoder: 'Geocoder'
  },
  layerBlending: {
    title: 'Layer Blending',
    additive: 'additive',
    normal: 'normal',
    subtractive: 'subtractive'
  },
  columns: {
    title: 'Columns',
    lat: 'lat',
    lng: 'lon',
    altitude: 'altitude',
    icon: 'icon',
    geojson: 'geojson',
    token: 'token',
    arc: {
      lat0: 'source lat',
      lng0: 'source lng',
      lat1: 'target lat',
      lng1: 'target lng'
    },
    line: {
      alt0: 'source altitude',
      alt1: 'target altitude'
    },
    grid: {
      worldUnitSize: 'Grid Size (km)'
    },
    hexagon: {
      worldUnitSize: 'Hexagon Radius (km)'
    },
    hex_id: 'hex id'
  },
  color: {
    customPalette: 'Custom Palette',
    steps: 'steps',
    type: 'type',
    reversed: 'reversed'
  },
  scale: {
    colorScale: 'Color Scale',
    sizeScale: 'Size Scale',
    strokeScale: 'Stroke Scale',
    scale: 'Scale'
  },
  fileUploader: {
    message: 'Drag & Drop Your File(s) Here',
    chromeMessage: '*Chrome user: Limit file size to 250mb, if need to upload larger file, try Safari',
    disclaimer: '*kepler.gl is a client-side application with no server backend. Data lives only on your machine/browser. ' + 'No information or map data is sent to any server.',
    configUploadMessage: 'Upload {fileFormatNames} or saved map **Json**. Read more about [**supported file formats**]',
    browseFiles: 'browse your files',
    uploading: 'Uploading',
    fileNotSupported: 'File {errorFiles} is not supported.',
    or: 'or'
  },
  geocoder: {
    title: 'Enter an address or coordinates, ex 37.79,-122.40'
  },
  fieldSelector: {
    clearAll: 'Clear All',
    formatting: 'Formatting'
  },
  compare: {
    modeLabel: 'Comparison Mode',
    typeLabel: 'Comparison Type',
    types: {
      absolute: 'Absolute',
      relative: 'Relative'
    }
  },
  mapPopover: {
    primary: 'Primary'
  },
  density: 'density',
  'Bug Report': 'Bug Report',
  'User Guide': 'User Guide',
  Save: 'Save',
  Share: 'Share'
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2NhbGl6YXRpb24vZW4uanMiXSwibmFtZXMiOlsicHJvcGVydHkiLCJ3ZWlnaHQiLCJsYWJlbCIsImZpbGxDb2xvciIsImNvbG9yIiwiY292ZXJhZ2UiLCJzdHJva2VDb2xvciIsInJhZGl1cyIsIm91dGxpbmUiLCJzdHJva2UiLCJkZW5zaXR5IiwiaGVpZ2h0Iiwic3VtIiwicG9pbnRDb3VudCIsInBsYWNlaG9sZGVyIiwic2VhcmNoIiwic2VsZWN0RmllbGQiLCJ5QXhpcyIsInNlbGVjdFR5cGUiLCJzZWxlY3RWYWx1ZSIsImVudGVyVmFsdWUiLCJlbXB0eSIsIm1pc2MiLCJieSIsInZhbHVlc0luIiwidmFsdWVFcXVhbHMiLCJkYXRhU291cmNlIiwiYnJ1c2hSYWRpdXMiLCJtYXBMYXllcnMiLCJ0aXRsZSIsInJvYWQiLCJib3JkZXIiLCJidWlsZGluZyIsIndhdGVyIiwibGFuZCIsInBhbmVsIiwidGV4dCIsImxhYmVsV2l0aElkIiwiZm9udFNpemUiLCJmb250Q29sb3IiLCJ0ZXh0QW5jaG9yIiwiYWxpZ25tZW50IiwiYWRkTW9yZUxhYmVsIiwic2lkZWJhciIsInBhbmVscyIsImxheWVyIiwiZmlsdGVyIiwiaW50ZXJhY3Rpb24iLCJiYXNlbWFwIiwicmVxdWlyZWQiLCJwcm9wZXJ0eUJhc2VkT24iLCJzdHJva2VXaWR0aCIsImJhc2ljIiwidHJhaWxMZW5ndGgiLCJ0cmFpbExlbmd0aERlc2NyaXB0aW9uIiwibmV3TGF5ZXIiLCJlbGV2YXRpb25CeURlc2NyaXB0aW9uIiwiY29sb3JCeURlc2NyaXB0aW9uIiwiYWdncmVnYXRlQnkiLCJ0eXBlIiwicG9pbnQiLCJhcmMiLCJsaW5lIiwiZ3JpZCIsImhleGJpbiIsInBvbHlnb24iLCJnZW9qc29uIiwiY2x1c3RlciIsImljb24iLCJoZWF0bWFwIiwiaGV4YWdvbiIsImhleGFnb25pZCIsInRyaXAiLCJzMiIsImxheWVyVmlzQ29uZmlncyIsImFuZ2xlIiwic3Ryb2tlV2lkdGhSYW5nZSIsImZpeGVkUmFkaXVzIiwiZml4ZWRSYWRpdXNEZXNjcmlwdGlvbiIsInJhZGl1c1JhbmdlIiwiY2x1c3RlclJhZGl1cyIsInJhZGl1c1JhbmdlUGl4ZWxzIiwib3BhY2l0eSIsImNvbG9yUmFuZ2UiLCJzdHJva2VDb2xvclJhbmdlIiwidGFyZ2V0Q29sb3IiLCJjb2xvckFnZ3JlZ2F0aW9uIiwiaGVpZ2h0QWdncmVnYXRpb24iLCJyZXNvbHV0aW9uUmFuZ2UiLCJzaXplU2NhbGUiLCJ3b3JsZFVuaXRTaXplIiwiZWxldmF0aW9uU2NhbGUiLCJlbmFibGVFbGV2YXRpb25ab29tRmFjdG9yIiwiZW5hYmxlRWxldmF0aW9uWm9vbUZhY3RvckRlc2NyaXB0aW9uIiwiaGVpZ2h0U2NhbGUiLCJjb3ZlcmFnZVJhbmdlIiwiaGlnaFByZWNpc2lvblJlbmRlcmluZyIsImhpZ2hQcmVjaXNpb25SZW5kZXJpbmdEZXNjcmlwdGlvbiIsImhlaWdodERlc2NyaXB0aW9uIiwiZmlsbCIsImVuYWJsZVBvbHlnb25IZWlnaHQiLCJzaG93V2lyZWZyYW1lIiwid2VpZ2h0SW50ZW5zaXR5Iiwiem9vbVNjYWxlIiwiaGVpZ2h0UmFuZ2UiLCJsYXllck1hbmFnZXIiLCJhZGREYXRhIiwiYWRkTGF5ZXIiLCJsYXllckJsZW5kaW5nIiwibWFwTWFuYWdlciIsIm1hcFN0eWxlIiwiYWRkTWFwU3R5bGUiLCJsYXllckNvbmZpZ3VyYXRpb24iLCJkZWZhdWx0RGVzY3JpcHRpb24iLCJob3dUbyIsImZpbHRlck1hbmFnZXIiLCJhZGRGaWx0ZXIiLCJkYXRhc2V0VGl0bGUiLCJzaG93RGF0YVRhYmxlIiwicmVtb3ZlRGF0YXNldCIsImRhdGFzZXRJbmZvIiwicm93Q291bnQiLCJ0b29sdGlwIiwiaGlkZUxheWVyIiwic2hvd0xheWVyIiwiaGlkZUZlYXR1cmUiLCJzaG93RmVhdHVyZSIsImhpZGUiLCJzaG93IiwicmVtb3ZlTGF5ZXIiLCJkdXBsaWNhdGVMYXllciIsImxheWVyU2V0dGluZ3MiLCJjbG9zZVBhbmVsIiwic3dpdGNoVG9EdWFsVmlldyIsInNob3dMZWdlbmQiLCJkaXNhYmxlM0RNYXAiLCJEcmF3T25NYXAiLCJzZWxlY3RMb2NhbGUiLCJoaWRlTGF5ZXJQYW5lbCIsInNob3dMYXllclBhbmVsIiwibW92ZVRvVG9wIiwic2VsZWN0QmFzZU1hcFN0eWxlIiwidGltZVBsYXliYWNrIiwiY2xvdWRTdG9yYWdlIiwiYW5pbWF0aW9uQnlXaW5kb3ciLCJhbmltYXRpb25CeUluY3JlbWVudGFsIiwic3BlZWQiLCJwbGF5IiwicGF1c2UiLCJyZXNldCIsInRvb2xiYXIiLCJleHBvcnRJbWFnZSIsImV4cG9ydERhdGEiLCJleHBvcnRNYXAiLCJzaGFyZU1hcFVSTCIsInNhdmVNYXAiLCJzZWxlY3QiLCJyZWN0YW5nbGUiLCJMT0NBTEVTIiwiZWRpdG9yIiwiZmlsdGVyTGF5ZXIiLCJjb3B5R2VvbWV0cnkiLCJtb2RhbCIsImRlbGV0ZURhdGFzZXQiLCJhZGREYXRhVG9NYXAiLCJhZGRDdXN0b21NYXBib3hTdHlsZSIsInNoYXJlVVJMIiwiYnV0dG9uIiwiZG93bmxvYWQiLCJhZGRTdHlsZSIsInNhdmUiLCJkZWZhdWx0Q2FuY2VsIiwiZGVmYXVsdENvbmZpcm0iLCJyYXRpb1RpdGxlIiwicmF0aW9EZXNjcmlwdGlvbiIsInJhdGlvT3JpZ2luYWxTY3JlZW4iLCJyYXRpb0N1c3RvbSIsInJhdGlvNF8zIiwicmF0aW8xNl85IiwicmVzb2x1dGlvblRpdGxlIiwicmVzb2x1dGlvbkRlc2NyaXB0aW9uIiwibWFwTGVnZW5kVGl0bGUiLCJtYXBMZWdlbmRBZGQiLCJkYXRhc2V0U3VidGl0bGUiLCJhbGxEYXRhc2V0cyIsImRhdGFUeXBlVGl0bGUiLCJkYXRhVHlwZVN1YnRpdGxlIiwiZmlsdGVyRGF0YVRpdGxlIiwiZmlsdGVyRGF0YVN1YnRpdGxlIiwiZmlsdGVyZWREYXRhIiwidW5maWx0ZXJlZERhdGEiLCJmaWxlQ291bnQiLCJkZWxldGVEYXRhIiwid2FybmluZyIsInB1Ymxpc2hUaXRsZSIsInB1Ymxpc2hTdWJ0aXRsZTEiLCJwdWJsaXNoU3VidGl0bGUyIiwicHVibGlzaFN1YnRpdGxlMyIsInB1Ymxpc2hTdWJ0aXRsZTQiLCJwdWJsaXNoU3VidGl0bGU1IiwicHVibGlzaFN1YnRpdGxlNiIsInB1Ymxpc2hTdWJ0aXRsZTciLCJleGFtcGxlVG9rZW4iLCJwYXN0ZVRpdGxlIiwicGFzdGVTdWJ0aXRsZTAiLCJwYXN0ZVN1YnRpdGxlMSIsInBhc3RlU3VidGl0bGUyIiwicGFzdGVTdWJ0aXRsZTMiLCJwYXN0ZVN1YnRpdGxlNCIsIm5hbWluZ1RpdGxlIiwic2hhcmVNYXAiLCJzaGFyZVVyaVRpdGxlIiwic2hhcmVVcmlTdWJ0aXRsZSIsImNsb3VkVGl0bGUiLCJjbG91ZFN1YnRpdGxlIiwic2hhcmVEaXNjbGFpbWVyIiwiZ290b1BhZ2UiLCJzdGF0dXNQYW5lbCIsIm1hcFVwbG9hZGluZyIsImVycm9yIiwic3VidGl0bGUiLCJmb3JtYXRUaXRsZSIsImZvcm1hdFN1YnRpdGxlIiwiaHRtbCIsInNlbGVjdGlvbiIsInRva2VuVGl0bGUiLCJ0b2tlblN1YnRpdGxlIiwidG9rZW5QbGFjZWhvbGRlciIsInRva2VuTWlzdXNlV2FybmluZyIsInRva2VuRGlzY2xhaW1lciIsInRva2VuVXBkYXRlIiwibW9kZVRpdGxlIiwibW9kZVN1YnRpdGxlMSIsIm1vZGVTdWJ0aXRsZTIiLCJtb2RlRGVzY3JpcHRpb24iLCJyZWFkIiwiZWRpdCIsImpzb24iLCJjb25maWdUaXRsZSIsImNvbmZpZ0Rpc2NsYWltZXIiLCJkaXNjbGFpbWVyIiwibG9hZGluZ0RpYWxvZyIsImxvYWRpbmciLCJsb2FkRGF0YSIsInVwbG9hZCIsInN0b3JhZ2UiLCJ0cmlwSW5mbyIsImRlc2NyaXB0aW9uMSIsImNvZGUiLCJkZXNjcmlwdGlvbjIiLCJleGFtcGxlIiwiaWNvbkluZm8iLCJpY29ucyIsInN0b3JhZ2VNYXBWaWV3ZXIiLCJsYXN0TW9kaWZpZWQiLCJiYWNrIiwib3ZlcndyaXRlTWFwIiwiYWxyZWFkeUV4aXN0cyIsImxvYWRTdG9yYWdlTWFwIiwiZ29Ub1BhZ2UiLCJzdG9yYWdlTWFwcyIsIm5vU2F2ZWRNYXBzIiwiaGVhZGVyIiwidmlzaWJsZUxheWVycyIsImxheWVyTGVnZW5kIiwiaW50ZXJhY3Rpb25zIiwiYnJ1c2giLCJjb29yZGluYXRlIiwiZ2VvY29kZXIiLCJhZGRpdGl2ZSIsIm5vcm1hbCIsInN1YnRyYWN0aXZlIiwiY29sdW1ucyIsImxhdCIsImxuZyIsImFsdGl0dWRlIiwidG9rZW4iLCJsYXQwIiwibG5nMCIsImxhdDEiLCJsbmcxIiwiYWx0MCIsImFsdDEiLCJoZXhfaWQiLCJjdXN0b21QYWxldHRlIiwic3RlcHMiLCJyZXZlcnNlZCIsInNjYWxlIiwiY29sb3JTY2FsZSIsInN0cm9rZVNjYWxlIiwiZmlsZVVwbG9hZGVyIiwibWVzc2FnZSIsImNocm9tZU1lc3NhZ2UiLCJjb25maWdVcGxvYWRNZXNzYWdlIiwiYnJvd3NlRmlsZXMiLCJ1cGxvYWRpbmciLCJmaWxlTm90U3VwcG9ydGVkIiwib3IiLCJmaWVsZFNlbGVjdG9yIiwiY2xlYXJBbGwiLCJmb3JtYXR0aW5nIiwiY29tcGFyZSIsIm1vZGVMYWJlbCIsInR5cGVMYWJlbCIsInR5cGVzIiwiYWJzb2x1dGUiLCJyZWxhdGl2ZSIsIm1hcFBvcG92ZXIiLCJwcmltYXJ5IiwiU2F2ZSIsIlNoYXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7Ozs7O2VBRWU7QUFDYkEsRUFBQUEsUUFBUSxFQUFFO0FBQ1JDLElBQUFBLE1BQU0sRUFBRSxRQURBO0FBRVJDLElBQUFBLEtBQUssRUFBRSxPQUZDO0FBR1JDLElBQUFBLFNBQVMsRUFBRSxZQUhIO0FBSVJDLElBQUFBLEtBQUssRUFBRSxPQUpDO0FBS1JDLElBQUFBLFFBQVEsRUFBRSxVQUxGO0FBTVJDLElBQUFBLFdBQVcsRUFBRSxjQU5MO0FBT1JDLElBQUFBLE1BQU0sRUFBRSxRQVBBO0FBUVJDLElBQUFBLE9BQU8sRUFBRSxTQVJEO0FBU1JDLElBQUFBLE1BQU0sRUFBRSxRQVRBO0FBVVJDLElBQUFBLE9BQU8sRUFBRSxT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WkMsSUFBQUEsU0FBUyxFQUFFLFdBVkM7QUFXWkMsSUFBQUEsZ0JBQWdCLEVBQUUscUNBWE47QUFZWkMsSUFBQUEsRUFBRSxFQUFFO0FBWlEsR0F2YUQ7QUFxYmI3QixFQUFBQSxRQUFRLEVBQUU7QUFDUi9PLElBQUFBLEtBQUssRUFBRTtBQURDLEdBcmJHO0FBd2JiNlEsRUFBQUEsYUFBYSxFQUFFO0FBQ2JDLElBQUFBLFFBQVEsRUFBRSxXQURHO0FBRWJDLElBQUFBLFVBQVUsRUFBRTtBQUZDLEdBeGJGO0FBNGJiQyxFQUFBQSxPQUFPLEVBQUU7QUFDUEMsSUFBQUEsU0FBUyxFQUFFLGlCQURKO0FBRVBDLElBQUFBLFNBQVMsRUFBRSxpQkFGSjtBQUdQQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEsUUFBUSxFQUFFLFVBREw7QUFFTEMsTUFBQUEsUUFBUSxFQUFFO0FBRkw7QUFIQSxHQTViSTtBQW9jYkMsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLE9BQU8sRUFBRTtBQURDLEdBcGNDO0FBdWNiMVMsRUFBQUEsT0FBTyxFQUFFLFNBdmNJO0FBd2NiLGdCQUFjLFlBeGNEO0FBeWNiLGdCQUFjLFlBemNEO0FBMGNiMlMsRUFBQUEsSUFBSSxFQUFFLE1BMWNPO0FBMmNiQyxFQUFBQSxLQUFLLEVBQUU7QUEzY00sQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7TE9DQUxFU30gZnJvbSAnLi9sb2NhbGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wZXJ0eToge1xuICAgIHdlaWdodDogJ3dlaWdodCcsXG4gICAgbGFiZWw6ICdsYWJlbCcsXG4gICAgZmlsbENvbG9yOiAnZmlsbCBjb2xvcicsXG4gICAgY29sb3I6ICdjb2xvcicsXG4gICAgY292ZXJhZ2U6ICdjb3ZlcmFnZScsXG4gICAgc3Ryb2tlQ29sb3I6ICdzdHJva2UgY29sb3InLFxuICAgIHJhZGl1czogJ3JhZGl1cycsXG4gICAgb3V0bGluZTogJ291dGxpbmUnLFxuICAgIHN0cm9rZTogJ3N0cm9rZScsXG4gICAgZGVuc2l0eTogJ2RlbnNpdHknLFxuICAgIGhlaWdodDogJ2hlaWdodCcsXG4gICAgc3VtOiAnc3VtJyxcbiAgICBwb2ludENvdW50OiAnUG9pbnQgQ291bnQnXG4gIH0sXG4gIHBsYWNlaG9sZGVyOiB7XG4gICAgc2VhcmNoOiAnU2VhcmNoJyxcbiAgICBzZWxlY3RGaWVsZDogJ1NlbGVjdCBhIGZpZWxkJyxcbiAgICB5QXhpczogJ1kgQXhpcycsXG4gICAgc2VsZWN0VHlwZTogJ1NlbGVjdCBBIFR5cGUnLFxuICAgIHNlbGVjdFZhbHVlOiAnU2VsZWN0IEEgVmFsdWUnLFxuICAgIGVudGVyVmFsdWU6ICdFbnRlciBhIHZhbHVlJyxcbiAgICBlbXB0eTogJ2VtcHR5J1xuICB9LFxuICBtaXNjOiB7XG4gICAgYnk6ICcnLFxuICAgIHZhbHVlc0luOiAnVmFsdWVzIGluJyxcbiAgICB2YWx1ZUVxdWFsczogJ1ZhbHVlIGVxdWFscycsXG4gICAgZGF0YVNvdXJjZTogJ0RhdGEgU291cmNlJyxcbiAgICBicnVzaFJhZGl1czogJ0JydXNoIFJhZGl1cyAoa20pJyxcbiAgICBlbXB0eTogJyAnXG4gIH0sXG4gIG1hcExheWVyczoge1xuICAgIHRpdGxlOiAnTWFwIExheWVycycsXG4gICAgbGFiZWw6ICdMYWJlbCcsXG4gICAgcm9hZDogJ1JvYWQnLFxuICAgIGJvcmRlcjogJ0JvcmRlcicsXG4gICAgYnVpbGRpbmc6ICdCdWlsZGluZycsXG4gICAgd2F0ZXI6ICdXYXRlcicsXG4gICAgbGFuZDogJ0xhbmQnLFxuICAgICczZEJ1aWxkaW5nJzogJzNkIEJ1aWxkaW5nJ1xuICB9LFxuICBwYW5lbDoge1xuICAgIHRleHQ6IHtcbiAgICAgIGxhYmVsOiAnbGFiZWwnLFxuICAgICAgbGFiZWxXaXRoSWQ6ICdMYWJlbCB7bGFiZWxJZH0nLFxuICAgICAgZm9udFNpemU6ICdGb250IHNpemUnLFxuICAgICAgZm9udENvbG9yOiAnRm9udCBjb2xvcicsXG4gICAgICB0ZXh0QW5jaG9yOiAnVGV4dCBhbmNob3InLFxuICAgICAgYWxpZ25tZW50OiAnQWxpZ25tZW50JyxcbiAgICAgIGFkZE1vcmVMYWJlbDogJ0FkZCBNb3JlIExhYmVsJ1xuICAgIH1cbiAgfSxcbiAgc2lkZWJhcjoge1xuICAgIHBhbmVsczoge1xuICAgICAgbGF5ZXI6ICdMYXllcnMnLFxuICAgICAgZmlsdGVyOiAnRmlsdGVycycsXG4gICAgICBpbnRlcmFjdGlvbjogJ0ludGVyYWN0aW9ucycsXG4gICAgICBiYXNlbWFwOiAnQmFzZSBtYXAnXG4gICAgfVxuICB9LFxuICBsYXllcjoge1xuICAgIHJlcXVpcmVkOiAnUmVxdWlyZWQqJyxcbiAgICByYWRpdXM6ICdSYWRpdXMnLFxuICAgIGNvbG9yOiAnQ29sb3InLFxuICAgIGZpbGxDb2xvcjogJ0ZpbGwgQ29sb3InLFxuICAgIG91dGxpbmU6ICdPdXRsaW5lJyxcbiAgICB3ZWlnaHQ6ICdXZWlnaHQnLFxuICAgIHByb3BlcnR5QmFzZWRPbjogJ3twcm9wZXJ0eX0gYmFzZWQgb24nLFxuICAgIGNvdmVyYWdlOiAnQ292ZXJhZ2UnLFxuICAgIHN0cm9rZTogJ1N0cm9rZScsXG4gICAgc3Ryb2tlV2lkdGg6ICdTdHJva2UgV2lkdGgnLFxuICAgIHN0cm9rZUNvbG9yOiAnU3Ryb2tlIENvbG9yJyxcbiAgICBiYXNpYzogJ0Jhc2ljJyxcbiAgICB0cmFpbExlbmd0aDogJ1RyYWlsIExlbmd0aCcsXG4gICAgdHJhaWxMZW5ndGhEZXNjcmlwdGlvbjogJ051bWJlciBvZiBzZWNvbmRzIGZvciBhIHBhdGggdG8gY29tcGxldGVseSBmYWRlIG91dCcsXG4gICAgbmV3TGF5ZXI6ICduZXcgbGF5ZXInLFxuICAgIGVsZXZhdGlvbkJ5RGVzY3JpcHRpb246ICdXaGVuIG9mZiwgaGVpZ2h0IGlzIGJhc2VkIG9uIGNvdW50IG9mIHBvaW50cycsXG4gICAgY29sb3JCeURlc2NyaXB0aW9uOiAnV2hlbiBvZmYsIGNvbG9yIGlzIGJhc2VkIG9uIGNvdW50IG9mIHBvaW50cycsXG4gICAgYWdncmVnYXRlQnk6ICdBZ2dyZWdhdGUge2ZpZWxkfSBieScsXG4gICAgJzNETW9kZWwnOiAnM0QgTW9kZWwnLFxuICAgICczRE1vZGVsT3B0aW9ucyc6ICczRCBNb2RlbCBPcHRpb25zJyxcbiAgICB0eXBlOiB7XG4gICAgICBwb2ludDogJ3BvaW50JyxcbiAgICAgIGFyYzogJ2FyYycsXG4gICAgICBsaW5lOiAnbGluZScsXG4gICAgICBncmlkOiAnZ3JpZCcsXG4gICAgICBoZXhiaW46ICdoZXhiaW4nLFxuICAgICAgcG9seWdvbjogJ3BvbHlnb24nLFxuICAgICAgZ2VvanNvbjogJ2dlb2pzb24nLFxuICAgICAgY2x1c3RlcjogJ2NsdXN0ZXInLFxuICAgICAgaWNvbjogJ2ljb24nLFxuICAgICAgaGVhdG1hcDogJ2hlYXRtYXAnLFxuICAgICAgaGV4YWdvbjogJ2hleGFnb24nLFxuICAgICAgaGV4YWdvbmlkOiAnSDMnLFxuICAgICAgdHJpcDogJ3RyaXAnLFxuICAgICAgczI6ICdTMicsXG4gICAgICAnM2QnOiAnM0QnXG4gICAgfVxuICB9LFxuICBsYXllclZpc0NvbmZpZ3M6IHtcbiAgICBhbmdsZTogJ0FuZ2xlJyxcbiAgICBzdHJva2VXaWR0aDogJ1N0cm9rZSBXaWR0aCAoUGl4ZWxzKScsXG4gICAgc3Ryb2tlV2lkdGhSYW5nZTogJ1N0cm9rZSBXaWR0aCBSYW5nZScsXG4gICAgcmFkaXVzOiAnUmFkaXVzJyxcbiAgICBmaXhlZFJhZGl1czogJ0ZpeGVkIFJhZGl1cyB0byBtZXRlcicsXG4gICAgZml4ZWRSYWRpdXNEZXNjcmlwdGlvbjogJ01hcCByYWRpdXMgdG8gYWJzb2x1dGUgcmFkaXVzIGluIG1ldGVycywgZS5nLiA1IHRvIDUgbWV0ZXJzJyxcbiAgICByYWRpdXNSYW5nZTogJ1JhZGl1cyBSYW5nZScsXG4gICAgY2x1c3RlclJhZGl1czogJ0NsdXN0ZXIgUmFkaXVzIGluIFBpeGVscycsXG4gICAgcmFkaXVzUmFuZ2VQaXhlbHM6ICdSYWRpdXMgUmFuZ2UgaW4gcGl4ZWxzJyxcbiAgICBvcGFjaXR5OiAnT3BhY2l0eScsXG4gICAgY292ZXJhZ2U6ICdDb3ZlcmFnZScsXG4gICAgb3V0bGluZTogJ091dGxpbmUnLFxuICAgIGNvbG9yUmFuZ2U6ICdDb2xvciByYW5nZScsXG4gICAgc3Ryb2tlOiAnU3Ryb2tlJyxcbiAgICBzdHJva2VDb2xvcjogJ1N0cm9rZSBDb2xvcicsXG4gICAgc3Ryb2tlQ29sb3JSYW5nZTogJ1N0cm9rZSBDb2xvciByYW5nZScsXG4gICAgdGFyZ2V0Q29sb3I6ICdUYXJnZXQgQ29sb3InLFxuICAgIGNvbG9yQWdncmVnYXRpb246ICdDb2xvciBBZ2dyZWdhdGlvbicsXG4gICAgaGVpZ2h0QWdncmVnYXRpb246ICdIZWlnaHQgQWdncmVnYXRpb24nLFxuICAgIHJlc29sdXRpb25SYW5nZTogJ1Jlc29sdXRpb24gcmFuZ2UnLFxuICAgIHNpemVTY2FsZTogJ1NpemUgU2NhbGUnLFxuICAgIHdvcmxkVW5pdFNpemU6ICdXb3JsZCBVbml0IFNpemUnLFxuICAgIGVsZXZhdGlvblNjYWxlOiAnRWxldmF0aW9uIFNjYWxlJyxcbiAgICBlbmFibGVFbGV2YXRpb25ab29tRmFjdG9yOiAnVXNlIGVsZXZhdGlvbiB6b29tIGZhY3RvcicsXG4gICAgZW5hYmxlRWxldmF0aW9uWm9vbUZhY3RvckRlc2NyaXB0aW9uOiAnQWRqdXN0IGVsZXZhdGlvbiBiYXNlZCBvbiBjdXJyZW50IHpvb20gZmFjdG9yJyxcbiAgICBoZWlnaHRTY2FsZTogJ0hlaWdodCBTY2FsZScsXG4gICAgY292ZXJhZ2VSYW5nZTogJ0NvdmVyYWdlIFJhbmdlJyxcbiAgICBoaWdoUHJlY2lzaW9uUmVuZGVyaW5nOiAnSGlnaCBQcmVjaXNpb24gUmVuZGVyaW5nJyxcbiAgICBoaWdoUHJlY2lzaW9uUmVuZGVyaW5nRGVzY3JpcHRpb246ICdIaWdoIHByZWNpc2lvbiB3aWxsIHJlc3VsdCBpbiBzbG93ZXIgcGVyZm9ybWFuY2UnLFxuICAgIGhlaWdodDogJ0hlaWdodCcsXG4gICAgaGVpZ2h0RGVzY3JpcHRpb246ICdDbGljayBidXR0b24gYXQgdG9wIHJpZ2h0IG9mIHRoZSBtYXAgdG8gc3dpdGNoIHRvIDNkIHZpZXcnLFxuICAgIGZpbGw6ICdGaWxsJyxcbiAgICBlbmFibGVQb2x5Z29uSGVpZ2h0OiAnRW5hYmxlIFBvbHlnb24gSGVpZ2h0JyxcbiAgICBzaG93V2lyZWZyYW1lOiAnU2hvdyBXaXJlZnJhbWUnLFxuICAgIHdlaWdodEludGVuc2l0eTogJ1dlaWdodCBJbnRlbnNpdHknLFxuICAgIHpvb21TY2FsZTogJ1pvb20gU2NhbGUnLFxuICAgIGhlaWdodFJhbmdlOiAnSGVpZ2h0IFJhbmdlJ1xuICB9LFxuICBsYXllck1hbmFnZXI6IHtcbiAgICBhZGREYXRhOiAnQWRkIERhdGEnLFxuICAgIGFkZExheWVyOiAnQWRkIExheWVyJyxcbiAgICBsYXllckJsZW5kaW5nOiAnTGF5ZXIgQmxlbmRpbmcnXG4gIH0sXG4gIG1hcE1hbmFnZXI6IHtcbiAgICBtYXBTdHlsZTogJ01hcCBzdHlsZScsXG4gICAgYWRkTWFwU3R5bGU6ICdBZGQgTWFwIFN0eWxlJyxcbiAgICAnM2RCdWlsZGluZ0NvbG9yJzogJzNEIEJ1aWxkaW5nIENvbG9yJ1xuICB9LFxuICBsYXllckNvbmZpZ3VyYXRpb246IHtcbiAgICBkZWZhdWx0RGVzY3JpcHRpb246ICdDYWxjdWxhdGUge3Byb3BlcnR5fSBiYXNlZCBvbiBzZWxlY3RlZCBmaWVsZCcsXG4gICAgaG93VG86ICdIb3cgdG8nXG4gIH0sXG4gIGZpbHRlck1hbmFnZXI6IHtcbiAgICBhZGRGaWx0ZXI6ICdBZGQgRmlsdGVyJ1xuICB9LFxuICBkYXRhc2V0VGl0bGU6IHtcbiAgICBzaG93RGF0YVRhYmxlOiAnU2hvdyBkYXRhIHRhYmxlJyxcbiAgICByZW1vdmVEYXRhc2V0OiAnUmVtb3ZlIGRhdGFzZXQnXG4gIH0sXG4gIGRhdGFzZXRJbmZvOiB7XG4gICAgcm93Q291bnQ6ICd7cm93Q291bnR9IHJvd3MnXG4gIH0sXG4gIHRvb2x0aXA6IHtcbiAgICBoaWRlTGF5ZXI6ICdoaWRlIGxheWVyJyxcbiAgICBzaG93TGF5ZXI6ICdzaG93IGxheWVyJyxcbiAgICBoaWRlRmVhdHVyZTogJ0hpZGUgRmVhdHVyZScsXG4gICAgc2hvd0ZlYXR1cmU6ICdTaG93IGZlYXR1cmUnLFxuICAgIGhpZGU6ICdoaWRlJyxcbiAgICBzaG93OiAnc2hvdycsXG4gICAgcmVtb3ZlTGF5ZXI6ICdSZW1vdmUgbGF5ZXInLFxuICAgIGR1cGxpY2F0ZUxheWVyOiAnRHVwbGljYXRlIGxheWVyJyxcbiAgICBsYXllclNldHRpbmdzOiAnTGF5ZXIgc2V0dGluZ3MnLFxuICAgIGNsb3NlUGFuZWw6ICdDbG9zZSBjdXJyZW50IHBhbmVsJyxcbiAgICBzd2l0Y2hUb0R1YWxWaWV3OiAnU3dpdGNoIHRvIGR1YWwgbWFwIHZpZXcnLFxuICAgIHNob3dMZWdlbmQ6ICdzaG93IGxlZ2VuZCcsXG4gICAgZGlzYWJsZTNETWFwOiAnRGlzYWJsZSAzRCBNYXAnLFxuICAgIERyYXdPbk1hcDogJ0RyYXcgb24gbWFwJyxcbiAgICBzZWxlY3RMb2NhbGU6ICdTZWxlY3QgbG9jYWxlJyxcbiAgICBoaWRlTGF5ZXJQYW5lbDogJ0hpZGUgbGF5ZXIgcGFuZWwnLFxuICAgIHNob3dMYXllclBhbmVsOiAnU2hvdyBsYXllciBwYW5lbCcsXG4gICAgbW92ZVRvVG9wOiAnTW92ZSB0byB0b3Agb2YgZGF0YSBsYXllcnMnLFxuICAgIHNlbGVjdEJhc2VNYXBTdHlsZTogJ1NlbGVjdCBCYXNlIE1hcCBTdHlsZScsXG4gICAgZGVsZXRlOiAnRGVsZXRlJyxcbiAgICB0aW1lUGxheWJhY2s6ICdUaW1lIFBsYXliYWNrJyxcbiAgICBjbG91ZFN0b3JhZ2U6ICdDbG91ZCBTdG9yYWdlJyxcbiAgICAnM0RNYXAnOiAnM0QgTWFwJyxcbiAgICBhbmltYXRpb25CeVdpbmRvdzogJ01vdmluZyBUaW1lIFdpbmRvdycsXG4gICAgYW5pbWF0aW9uQnlJbmNyZW1lbnRhbDogJ0luY3JlbWVudGFsIFRpbWUgV2luZG93JyxcbiAgICBzcGVlZDogJ3NwZWVkJyxcbiAgICBwbGF5OiAncGxheScsXG4gICAgcGF1c2U6ICdwYXVzZScsXG4gICAgcmVzZXQ6ICdyZXNldCdcbiAgfSxcbiAgdG9vbGJhcjoge1xuICAgIGV4cG9ydEltYWdlOiAnRXhwb3J0IEltYWdlJyxcbiAgICBleHBvcnREYXRhOiAnRXhwb3J0IERhdGEnLFxuICAgIGV4cG9ydE1hcDogJ0V4cG9ydCBNYXAnLFxuICAgIHNoYXJlTWFwVVJMOiAnU2hhcmUgTWFwIFVSTCcsXG4gICAgc2F2ZU1hcDogJ1NhdmUgTWFwJyxcbiAgICBzZWxlY3Q6ICdTZWxlY3QnLFxuICAgIHBvbHlnb246ICdQb2x5Z29uJyxcbiAgICByZWN0YW5nbGU6ICdSZWN0YW5nbGUnLFxuICAgIGhpZGU6ICdIaWRlJyxcbiAgICBzaG93OiAnU2hvdycsXG4gICAgLi4uTE9DQUxFU1xuICB9LFxuICBlZGl0b3I6IHtcbiAgICBmaWx0ZXJMYXllcjogJ0ZpbHRlciBMYXllcnMnLFxuICAgIGNvcHlHZW9tZXRyeTogJ0NvcHkgR2VvbWV0cnknXG4gIH0sXG5cbiAgbW9kYWw6IHtcbiAgICB0aXRsZToge1xuICAgICAgZGVsZXRlRGF0YXNldDogJ0RlbGV0ZSBEYXRhc2V0JyxcbiAgICAgIGFkZERhdGFUb01hcDogJ0FkZCBEYXRhIFRvIE1hcCcsXG4gICAgICBleHBvcnRJbWFnZTogJ0V4cG9ydCBJbWFnZScsXG4gICAgICBleHBvcnREYXRhOiAnRXhwb3J0IERhdGEnLFxuICAgICAgZXhwb3J0TWFwOiAnRXhwb3J0IE1hcCcsXG4gICAgICBhZGRDdXN0b21NYXBib3hTdHlsZTogJ0FkZCBDdXN0b20gTWFwIFN0eWxlJyxcbiAgICAgIHNhdmVNYXA6ICdTYXZlIE1hcCcsXG4gICAgICBzaGFyZVVSTDogJ1NoYXJlIFVSTCdcbiAgICB9LFxuICAgIGJ1dHRvbjoge1xuICAgICAgZGVsZXRlOiAnRGVsZXRlJyxcbiAgICAgIGRvd25sb2FkOiAnRG93bmxvYWQnLFxuICAgICAgZXhwb3J0OiAnRXhwb3J0JyxcbiAgICAgIGFkZFN0eWxlOiAnQWRkIFN0eWxlJyxcbiAgICAgIHNhdmU6ICdTYXZlJyxcbiAgICAgIGRlZmF1bHRDYW5jZWw6ICdDYW5jZWwnLFxuICAgICAgZGVmYXVsdENvbmZpcm06ICdDb25maXJtJ1xuICAgIH0sXG4gICAgZXhwb3J0SW1hZ2U6IHtcbiAgICAgIHJhdGlvVGl0bGU6ICdSYXRpbycsXG4gICAgICByYXRpb0Rlc2NyaXB0aW9uOiAnQ2hvb3NlIHRoZSByYXRpbyBmb3IgdmFyaW91cyB1c2FnZXMuJyxcbiAgICAgIHJhdGlvT3JpZ2luYWxTY3JlZW46ICdPcmlnaW5hbCBTY3JlZW4nLFxuICAgICAgcmF0aW9DdXN0b206ICdDdXN0b20nLFxuICAgICAgcmF0aW80XzM6ICc0OjMnLFxuICAgICAgcmF0aW8xNl85OiAnMTY6OScsXG4gICAgICByZXNvbHV0aW9uVGl0bGU6ICdSZXNvbHV0aW9uJyxcbiAgICAgIHJlc29sdXRpb25EZXNjcmlwdGlvbjogJ0hpZ2ggcmVzb2x1dGlvbiBpcyBiZXR0ZXIgZm9yIHByaW50cy4nLFxuICAgICAgbWFwTGVnZW5kVGl0bGU6ICdNYXAgTGVnZW5kJyxcbiAgICAgIG1hcExlZ2VuZEFkZDogJ0FkZCBsZWdlbmQgb24gbWFwJ1xuICAgIH0sXG4gICAgZXhwb3J0RGF0YToge1xuICAgICAgZGF0YXNldFRpdGxlOiAnRGF0YXNldCcsXG4gICAgICBkYXRhc2V0U3VidGl0bGU6ICdDaG9vc2UgdGhlIGRhdGFzZXRzIHlvdSB3YW50IHRvIGV4cG9ydCcsXG4gICAgICBhbGxEYXRhc2V0czogJ0FsbCcsXG4gICAgICBkYXRhVHlwZVRpdGxlOiAnRGF0YSBUeXBlJyxcbiAgICAgIGRhdGFUeXBlU3VidGl0bGU6ICdDaG9vc2UgdGhlIHR5cGUgb2YgZGF0YSB5b3Ugd2FudCB0byBleHBvcnQnLFxuICAgICAgZmlsdGVyRGF0YVRpdGxlOiAnRmlsdGVyIERhdGEnLFxuICAgICAgZmlsdGVyRGF0YVN1YnRpdGxlOiAnWW91IGNhbiBjaG9vc2UgZXhwb3J0aW5nIG9yaWdpbmFsIGRhdGEgb3IgZmlsdGVyZWQgZGF0YScsXG4gICAgICBmaWx0ZXJlZERhdGE6ICdGaWx0ZXJlZCBkYXRhJyxcbiAgICAgIHVuZmlsdGVyZWREYXRhOiAnVW5maWx0ZXJlZCBEYXRhJyxcbiAgICAgIGZpbGVDb3VudDogJ3tmaWxlQ291bnR9IEZpbGVzJyxcbiAgICAgIHJvd0NvdW50OiAne3Jvd0NvdW50fSBSb3dzJ1xuICAgIH0sXG4gICAgZGVsZXRlRGF0YToge1xuICAgICAgd2FybmluZzogJ3lvdSBhcmUgZ29pbmcgdG8gZGVsZXRlIHRoaXMgZGF0YXNldC4gSXQgd2lsbCBhZmZlY3Qge2xlbmd0aH0gbGF5ZXJzJ1xuICAgIH0sXG4gICAgYWRkU3R5bGU6IHtcbiAgICAgIHB1Ymxpc2hUaXRsZTpcbiAgICAgICAgJzIuIElmIGVudGVyZWQgbWFwYm94IHN0dWxlIHVybCBpbiBzdGVwLjEsIHB1Ymxpc2ggeW91ciBzdHlsZSBhdCBtYXBib3ggb3IgcHJvdmlkZSBhY2Nlc3MgdG9rZW4uIChPcHRpb25hbCknLFxuICAgICAgcHVibGlzaFN1YnRpdGxlMTogJ1lvdSBjYW4gY3JlYXRlIHlvdXIgb3duIG1hcCBzdHlsZSBhdCcsXG4gICAgICBwdWJsaXNoU3VidGl0bGUyOiAnYW5kJyxcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTM6ICdwdWJsaXNoJyxcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTQ6ICdpdC4nLFxuICAgICAgcHVibGlzaFN1YnRpdGxlNTogJ1RvIHVzZSBwcml2YXRlIHN0eWxlLCBwYXN0ZSB5b3VyJyxcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTY6ICdhY2Nlc3MgdG9rZW4nLFxuICAgICAgcHVibGlzaFN1YnRpdGxlNzpcbiAgICAgICAgJ2hlcmUuICprZXBsZXIuZ2wgaXMgYSBjbGllbnQtc2lkZSBhcHBsaWNhdGlvbiwgZGF0YSBzdGF5cyBpbiB5b3VyIGJyb3dzZXIuLicsXG4gICAgICBleGFtcGxlVG9rZW46ICdlLmcuIHBrLmFiY2RlZmcueHh4eHh4JyxcbiAgICAgIHBhc3RlVGl0bGU6ICcxLiBQYXN0ZSBzdHlsZSB1cmwnLFxuICAgICAgcGFzdGVTdWJ0aXRsZTA6ICdTdHlsZSB1cmwgY2FuIGJlIGEgbWFwYm94JyxcbiAgICAgIHBhc3RlU3VidGl0bGUxOiAnV2hhdCBpcyBhJyxcbiAgICAgIHBhc3RlU3VidGl0bGUyOiAnc3R5bGUgVVJMJyxcbiAgICAgIHBhc3RlU3VidGl0bGUzOiAnb3IgYSBzdHlsZS5qc29uIHVzaW5nIHRoZScsXG4gICAgICBwYXN0ZVN1YnRpdGxlNDogJ01hcGJveCBHTCBTdHlsZSBTcGVjJyxcbiAgICAgIG5hbWluZ1RpdGxlOiAnMy4gTmFtZSB5b3VyIHN0eWxlJ1xuICAgIH0sXG4gICAgc2hhcmVNYXA6IHtcbiAgICAgIHNoYXJlVXJpVGl0bGU6ICdTaGFyZSBNYXAgVXJsJyxcbiAgICAgIHNoYXJlVXJpU3VidGl0bGU6ICdHZW5lcmF0ZSBhIG1hcCB1cmwgdG8gc2hhcmUgd2l0aCBvdGhlcnMnLFxuICAgICAgY2xvdWRUaXRsZTogJ0Nsb3VkIHN0b3JhZ2UnLFxuICAgICAgY2xvdWRTdWJ0aXRsZTogJ0xvZ2luIGFuZCB1cGxvYWQgbWFwIGRhdGEgdG8geW91ciBwZXJzb25hbCBjbG91ZCBzdG9yYWdlJyxcbiAgICAgIHNoYXJlRGlzY2xhaW1lcjpcbiAgICAgICAgJ2tlcGxlci5nbCB3aWxsIHNhdmUgeW91ciBtYXAgZGF0YSB0byB5b3VyIHBlcnNvbmFsIGNsb3VkIHN0b3JhZ2UsIG9ubHkgcGVvcGxlIHdpdGggdGhlIFVSTCBjYW4gYWNjZXNzIHlvdXIgbWFwIGFuZCBkYXRhLiAnICtcbiAgICAgICAgJ1lvdSBjYW4gZWRpdC9kZWxldGUgdGhlIGRhdGEgZmlsZSBpbiB5b3VyIGNsb3VkIGFjY291bnQgYW55dGltZS4nLFxuICAgICAgZ290b1BhZ2U6ICdHbyB0byB5b3VyIEtlcGxlci5nbCB7Y3VycmVudFByb3ZpZGVyfSBwYWdlJ1xuICAgIH0sXG4gICAgc3RhdHVzUGFuZWw6IHtcbiAgICAgIG1hcFVwbG9hZGluZzogJ01hcCBVcGxvYWRpbmcnLFxuICAgICAgZXJyb3I6ICdFcnJvcidcbiAgICB9LFxuICAgIHNhdmVNYXA6IHtcbiAgICAgIHRpdGxlOiAnQ2xvdWQgc3RvcmFnZScsXG4gICAgICBzdWJ0aXRsZTogJ0xvZ2luIHRvIHNhdmUgbWFwIHRvIHlvdXIgcGVyc29uYWwgY2xvdWQgc3RvcmFnZSdcbiAgICB9LFxuICAgIGV4cG9ydE1hcDoge1xuICAgICAgZm9ybWF0VGl0bGU6ICdNYXAgZm9ybWF0JyxcbiAgICAgIGZvcm1hdFN1YnRpdGxlOiAnQ2hvb3NlIHRoZSBmb3JtYXQgdG8gZXhwb3J0IHlvdXIgbWFwIHRvJyxcbiAgICAgIGh0bWw6IHtcbiAgICAgICAgc2VsZWN0aW9uOiAnRXhwb3J0IHlvdXIgbWFwIGludG8gYW4gaW50ZXJhY3RpdmUgaHRtbCBmaWxlLicsXG4gICAgICAgIHRva2VuVGl0bGU6ICdNYXBib3ggYWNjZXNzIHRva2VuJyxcbiAgICAgICAgdG9rZW5TdWJ0aXRsZTogJ1VzZSB5b3VyIG93biBNYXBib3ggYWNjZXNzIHRva2VuIGluIHRoZSBodG1sIChvcHRpb25hbCknLFxuICAgICAgICB0b2tlblBsYWNlaG9sZGVyOiAnUGFzdGUgeW91ciBNYXBib3ggYWNjZXNzIHRva2VuJyxcbiAgICAgICAgdG9rZW5NaXN1c2VXYXJuaW5nOlxuICAgICAgICAgICcqIElmIHlvdSBkbyBub3QgcHJvdmlkZSB5b3VyIG93biB0b2tlbiwgdGhlIG1hcCBtYXkgZmFpbCB0byBkaXNwbGF5IGF0IGFueSB0aW1lIHdoZW4gd2UgcmVwbGFjZSBvdXJzIHRvIGF2b2lkIG1pc3VzZS4gJyxcbiAgICAgICAgdG9rZW5EaXNjbGFpbWVyOiAnWW91IGNhbiBjaGFuZ2UgdGhlIE1hcGJveCB0b2tlbiBsYXRlciB1c2luZyB0aGUgZm9sbG93aW5nIGluc3RydWN0aW9uczogJyxcbiAgICAgICAgdG9rZW5VcGRhdGU6ICdIb3cgdG8gdXBkYXRlIGFuIGV4aXN0aW5nIG1hcCB0b2tlbi4nLFxuICAgICAgICBtb2RlVGl0bGU6ICdNYXAgTW9kZScsXG4gICAgICAgIG1vZGVTdWJ0aXRsZTE6ICdTZWxlY3QgdGhlIGFwcCBtb2RlLiBNb3JlICcsXG4gICAgICAgIG1vZGVTdWJ0aXRsZTI6ICdpbmZvJyxcbiAgICAgICAgbW9kZURlc2NyaXB0aW9uOiAnQWxsb3cgdXNlcnMgdG8ge21vZGV9IHRoZSBtYXAnLFxuICAgICAgICByZWFkOiAncmVhZCcsXG4gICAgICAgIGVkaXQ6ICdlZGl0J1xuICAgICAgfSxcbiAgICAgIGpzb246IHtcbiAgICAgICAgY29uZmlnVGl0bGU6ICdNYXAgQ29uZmlnJyxcbiAgICAgICAgY29uZmlnRGlzY2xhaW1lcjpcbiAgICAgICAgICAnTWFwIGNvbmZpZyB3aWxsIGJlIGluY2x1ZGVkIGluIHRoZSBKc29uIGZpbGUuIElmIHlvdSBhcmUgdXNpbmcga2VwbGVyLmdsIGluIHlvdXIgb3duIGFwcC4gWW91IGNhbiBjb3B5IHRoaXMgY29uZmlnIGFuZCBwYXNzIGl0IHRvICcsXG4gICAgICAgIHNlbGVjdGlvbjpcbiAgICAgICAgICAnRXhwb3J0IGN1cnJlbnQgbWFwIGRhdGEgYW5kIGNvbmZpZyBpbnRvIGEgc2luZ2xlIEpzb24gZmlsZS4gWW91IGNhbiBsYXRlciBvcGVuIHRoZSBzYW1lIG1hcCBieSB1cGxvYWRpbmcgdGhpcyBmaWxlIHRvIGtlcGxlci5nbC4nLFxuICAgICAgICBkaXNjbGFpbWVyOlxuICAgICAgICAgICcqIE1hcCBjb25maWcgaXMgY291cGxlZCB3aXRoIGxvYWRlZCBkYXRhc2V0cy4g4oCYZGF0YUlk4oCZIGlzIHVzZWQgdG8gYmluZCBsYXllcnMsIGZpbHRlcnMsIGFuZCB0b29sdGlwcyB0byBhIHNwZWNpZmljIGRhdGFzZXQuICcgK1xuICAgICAgICAgICdXaGVuIHBhc3NpbmcgdGhpcyBjb25maWcgdG8gYWRkRGF0YVRvTWFwLCBtYWtlIHN1cmUgdGhlIGRhdGFzZXQgaWQgbWF0Y2hlcyB0aGUgZGF0YUlkL3MgaW4gdGhpcyBjb25maWcuJ1xuICAgICAgfVxuICAgIH0sXG4gICAgbG9hZGluZ0RpYWxvZzoge1xuICAgICAgbG9hZGluZzogJ0xvYWRpbmcuLi4nXG4gICAgfSxcbiAgICBsb2FkRGF0YToge1xuICAgICAgdXBsb2FkOiAnTG9hZCBGaWxlcycsXG4gICAgICBzdG9yYWdlOiAnTG9hZCBmcm9tIFN0b3JhZ2UnXG4gICAgfSxcbiAgICB0cmlwSW5mbzoge1xuICAgICAgdGl0bGU6ICdIb3cgdG8gZW5hYmxlIHRyaXAgYW5pbWF0aW9uJyxcbiAgICAgIGRlc2NyaXB0aW9uMTpcbiAgICAgICAgJ0luIG9yZGVyIHRvIGFuaW1hdGUgdGhlIHBhdGgsIHRoZSBnZW9KU09OIGRhdGEgbmVlZHMgdG8gY29udGFpbiBgTGluZVN0cmluZ2AgaW4gaXRzIGZlYXR1cmUgZ2VvbWV0cnksIGFuZCB0aGUgY29vcmRpbmF0ZXMgaW4gdGhlIExpbmVTdHJpbmcgbmVlZCB0byBoYXZlIDQgZWxlbWVudHMgaW4gdGhlIGZvcm1hdHMgb2YnLFxuICAgICAgY29kZTogJyBbbG9uZ2l0dWRlLCBsYXRpdHVkZSwgYWx0aXR1ZGUsIHRpbWVzdGFtcF0gJyxcbiAgICAgIGRlc2NyaXB0aW9uMjpcbiAgICAgICAgJ3dpdGggdGhlIGxhc3QgZWxlbWVudCBiZWluZyBhIHRpbWVzdGFtcC4gVmFsaWQgdGltZXN0YW1wIGZvcm1hdHMgaW5jbHVkZSB1bml4IGluIHNlY29uZHMgc3VjaCBhcyBgMTU2NDE4NDM2M2Agb3IgaW4gbWlsbGlzZWNvbmRzIHN1Y2ggYXMgYDE1NjQxODQzNjMwMDBgLicsXG4gICAgICBleGFtcGxlOiAnRXhhbXBsZTonXG4gICAgfSxcbiAgICBpY29uSW5mbzoge1xuICAgICAgdGl0bGU6ICdIb3cgdG8gZHJhdyBpY29ucycsXG4gICAgICBkZXNjcmlwdGlvbjE6XG4gICAgICAgICdJbiB5b3VyIGNzdiwgY3JlYXRlIGEgY29sdW1uLCBwdXQgdGhlIG5hbWUgb2YgdGhlIGljb24geW91IHdhbnQgdG8gZHJhdyBpbiBpdC4gWW91IGNhbiBsZWF2ZSB0aGUgY2VsbCBlbXB0eSBpZiB5b3UgZG8gbm90IHdhbnQgdGhlIGljb24gdG8gc2hvdyBmb3Igc29tZSBwb2ludHMuIFdoZW4gdGhlIGNvbHVtbiBpcyBuYW1lZCcsXG4gICAgICBjb2RlOiAnaWNvbicsXG4gICAgICBkZXNjcmlwdGlvbjI6ICcga2VwbGVyLmdsIHdpbGwgYXV0b21hdGljYWxseSBjcmVhdGUgYSBpY29uIGxheWVyIGZvciB5b3UuJyxcbiAgICAgIGV4YW1wbGU6ICdFeGFtcGxlOicsXG4gICAgICBpY29uczogJ0ljb25zJ1xuICAgIH0sXG4gICAgc3RvcmFnZU1hcFZpZXdlcjoge1xuICAgICAgbGFzdE1vZGlmaWVkOiAnTGFzdCBtb2RpZmllZCB7bGFzdFVwZGF0ZWR9IGFnbycsXG4gICAgICBiYWNrOiAnQmFjaydcbiAgICB9LFxuICAgIG92ZXJ3cml0ZU1hcDoge1xuICAgICAgdGl0bGU6ICdTYXZpbmcgbWFwLi4uJyxcbiAgICAgIGFscmVhZHlFeGlzdHM6ICdhbHJlYWR5IGV4aXN0cyBpbiB5b3VyIHttYXBTYXZlZH0uIFdvdWxkIHlvdSBsaWtlIHRvIG92ZXJ3cml0ZSBpdD8nXG4gICAgfSxcbiAgICBsb2FkU3RvcmFnZU1hcDoge1xuICAgICAgYmFjazogJ0JhY2snLFxuICAgICAgZ29Ub1BhZ2U6ICdHbyB0byB5b3VyIEtlcGxlci5nbCB7ZGlzcGxheU5hbWV9IHBhZ2UnLFxuICAgICAgc3RvcmFnZU1hcHM6ICdTdG9yYWdlIC8gTWFwcycsXG4gICAgICBub1NhdmVkTWFwczogJ05vIHNhdmVkIG1hcHMgeWV0J1xuICAgIH1cbiAgfSxcbiAgaGVhZGVyOiB7XG4gICAgdmlzaWJsZUxheWVyczogJ1Zpc2libGUgbGF5ZXJzJyxcbiAgICBsYXllckxlZ2VuZDogJ0xheWVyIExlZ2VuZCdcbiAgfSxcbiAgaW50ZXJhY3Rpb25zOiB7XG4gICAgdG9vbHRpcDogJ1Rvb2x0aXAnLFxuICAgIGJydXNoOiAnQnJ1c2gnLFxuICAgIGNvb3JkaW5hdGU6ICdDb29yZGluYXRlcycsXG4gICAgZ2VvY29kZXI6ICdHZW9jb2RlcidcbiAgfSxcbiAgbGF5ZXJCbGVuZGluZzoge1xuICAgIHRpdGxlOiAnTGF5ZXIgQmxlbmRpbmcnLFxuICAgIGFkZGl0aXZlOiAnYWRkaXRpdmUnLFxuICAgIG5vcm1hbDogJ25vcm1hbCcsXG4gICAgc3VidHJhY3RpdmU6ICdzdWJ0cmFjdGl2ZSdcbiAgfSxcbiAgY29sdW1uczoge1xuICAgIHRpdGxlOiAnQ29sdW1ucycsXG4gICAgbGF0OiAnbGF0JyxcbiAgICBsbmc6ICdsb24nLFxuICAgIGFsdGl0dWRlOiAnYWx0aXR1ZGUnLFxuICAgIGljb246ICdpY29uJyxcbiAgICBnZW9qc29uOiAnZ2VvanNvbicsXG4gICAgdG9rZW46ICd0b2tlbicsXG4gICAgYXJjOiB7XG4gICAgICBsYXQwOiAnc291cmNlIGxhdCcsXG4gICAgICBsbmcwOiAnc291cmNlIGxuZycsXG4gICAgICBsYXQxOiAndGFyZ2V0IGxhdCcsXG4gICAgICBsbmcxOiAndGFyZ2V0IGxuZydcbiAgICB9LFxuICAgIGxpbmU6IHtcbiAgICAgIGFsdDA6ICdzb3VyY2UgYWx0aXR1ZGUnLFxuICAgICAgYWx0MTogJ3RhcmdldCBhbHRpdHVkZSdcbiAgICB9LFxuICAgIGdyaWQ6IHtcbiAgICAgIHdvcmxkVW5pdFNpemU6ICdHcmlkIFNpemUgKGttKSdcbiAgICB9LFxuICAgIGhleGFnb246IHtcbiAgICAgIHdvcmxkVW5pdFNpemU6ICdIZXhhZ29uIFJhZGl1cyAoa20pJ1xuICAgIH0sXG4gICAgaGV4X2lkOiAnaGV4IGlkJ1xuICB9LFxuICBjb2xvcjoge1xuICAgIGN1c3RvbVBhbGV0dGU6ICdDdXN0b20gUGFsZXR0ZScsXG4gICAgc3RlcHM6ICdzdGVwcycsXG4gICAgdHlwZTogJ3R5cGUnLFxuICAgIHJldmVyc2VkOiAncmV2ZXJzZWQnXG4gIH0sXG4gIHNjYWxlOiB7XG4gICAgY29sb3JTY2FsZTogJ0NvbG9yIFNjYWxlJyxcbiAgICBzaXplU2NhbGU6ICdTaXplIFNjYWxlJyxcbiAgICBzdHJva2VTY2FsZTogJ1N0cm9rZSBTY2FsZScsXG4gICAgc2NhbGU6ICdTY2FsZSdcbiAgfSxcbiAgZmlsZVVwbG9hZGVyOiB7XG4gICAgbWVzc2FnZTogJ0RyYWcgJiBEcm9wIFlvdXIgRmlsZShzKSBIZXJlJyxcbiAgICBjaHJvbWVNZXNzYWdlOlxuICAgICAgJypDaHJvbWUgdXNlcjogTGltaXQgZmlsZSBzaXplIHRvIDI1MG1iLCBpZiBuZWVkIHRvIHVwbG9hZCBsYXJnZXIgZmlsZSwgdHJ5IFNhZmFyaScsXG4gICAgZGlzY2xhaW1lcjpcbiAgICAgICcqa2VwbGVyLmdsIGlzIGEgY2xpZW50LXNpZGUgYXBwbGljYXRpb24gd2l0aCBubyBzZXJ2ZXIgYmFja2VuZC4gRGF0YSBsaXZlcyBvbmx5IG9uIHlvdXIgbWFjaGluZS9icm93c2VyLiAnICtcbiAgICAgICdObyBpbmZvcm1hdGlvbiBvciBtYXAgZGF0YSBpcyBzZW50IHRvIGFueSBzZXJ2ZXIuJyxcbiAgICBjb25maWdVcGxvYWRNZXNzYWdlOlxuICAgICAgJ1VwbG9hZCB7ZmlsZUZvcm1hdE5hbWVzfSBvciBzYXZlZCBtYXAgKipKc29uKiouIFJlYWQgbW9yZSBhYm91dCBbKipzdXBwb3J0ZWQgZmlsZSBmb3JtYXRzKipdJyxcbiAgICBicm93c2VGaWxlczogJ2Jyb3dzZSB5b3VyIGZpbGVzJyxcbiAgICB1cGxvYWRpbmc6ICdVcGxvYWRpbmcnLFxuICAgIGZpbGVOb3RTdXBwb3J0ZWQ6ICdGaWxlIHtlcnJvckZpbGVzfSBpcyBub3Qgc3VwcG9ydGVkLicsXG4gICAgb3I6ICdvcidcbiAgfSxcbiAgZ2VvY29kZXI6IHtcbiAgICB0aXRsZTogJ0VudGVyIGFuIGFkZHJlc3Mgb3IgY29vcmRpbmF0ZXMsIGV4IDM3Ljc5LC0xMjIuNDAnXG4gIH0sXG4gIGZpZWxkU2VsZWN0b3I6IHtcbiAgICBjbGVhckFsbDogJ0NsZWFyIEFsbCcsXG4gICAgZm9ybWF0dGluZzogJ0Zvcm1hdHRpbmcnXG4gIH0sXG4gIGNvbXBhcmU6IHtcbiAgICBtb2RlTGFiZWw6ICdDb21wYXJpc29uIE1vZGUnLFxuICAgIHR5cGVMYWJlbDogJ0NvbXBhcmlzb24gVHlwZScsXG4gICAgdHlwZXM6IHtcbiAgICAgIGFic29sdXRlOiAnQWJzb2x1dGUnLFxuICAgICAgcmVsYXRpdmU6ICdSZWxhdGl2ZSdcbiAgICB9XG4gIH0sXG4gIG1hcFBvcG92ZXI6IHtcbiAgICBwcmltYXJ5OiAnUHJpbWFyeSdcbiAgfSxcbiAgZGVuc2l0eTogJ2RlbnNpdHknLFxuICAnQnVnIFJlcG9ydCc6ICdCdWcgUmVwb3J0JyxcbiAgJ1VzZXIgR3VpZGUnOiAnVXNlciBHdWlkZScsXG4gIFNhdmU6ICdTYXZlJyxcbiAgU2hhcmU6ICdTaGFyZSdcbn07XG4iXX0=