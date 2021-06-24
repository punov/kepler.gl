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
    weight: 'Espessura do texto',
    label: 'Rótulo',
    fillColor: 'Cor do preenchimento',
    color: 'Cor',
    strokeColor: 'Cor da borda',
    radius: 'Raio',
    outline: 'Contorno',
    stroke: 'Traçado',
    density: 'Densidade',
    height: 'Altura',
    sum: 'Soma',
    pointCount: 'Contagem de Pontos'
  },
  placeholder: {
    search: 'Pesquisar',
    selectField: 'Selecione um campo',
    yAxis: 'Eixo Y',
    selectType: 'Selecione um Tipo',
    selectValue: 'Selecione um valor',
    enterValue: 'Insira um valor',
    empty: 'Vazio'
  },
  misc: {
    by: '',
    valuesIn: 'Valores em',
    valueEquals: 'Valor igual a',
    dataSource: 'Origem dos dados',
    brushRadius: 'Raio do Traço (km)',
    empty: ' '
  },
  mapLayers: {
    title: 'Camadas do mapa',
    label: 'Rótulo',
    road: 'Estrada',
    border: 'Fronteira',
    building: 'Edifícios',
    water: 'Água',
    land: 'Terra',
    '3dBuilding': 'Edifícios em 3d'
  },
  panel: {
    text: {
      label: 'Rótulo',
      labelWithId: 'Rótulo {labelId}',
      fontSize: 'Tamanho da fonte',
      fontColor: 'Cor da fonte',
      textAnchor: 'Âncora do texto',
      alignment: 'Alinhamento',
      addMoreLabel: 'Adicionar mais Rótulos'
    }
  },
  sidebar: {
    panels: {
      layer: 'Camadas',
      filter: 'Filtros',
      interaction: 'Interações',
      basemap: 'Mapa base'
    }
  },
  layer: {
    required: 'Obrigatório*',
    radius: 'Raio',
    color: 'Cor',
    fillColor: 'Cor de preenchimento',
    outline: 'Contorno',
    weight: 'Espessura',
    propertyBasedOn: '{property} baseada em',
    coverage: 'Cobertura',
    stroke: 'Traço',
    strokeWidth: 'Largura do Traçado',
    strokeColor: 'Cor do Traçado',
    basic: 'Básico',
    trailLength: 'Comprimento da trilha',
    trailLengthDescription: 'Número de segundos para um caminho completamente desaparecer',
    newLayer: 'nova camada',
    elevationByDescription: 'Quando desligado, a altura é baseada na contagem de pontos',
    colorByDescription: 'Quando desligado, a cor é baseada na contagem de pontos',
    aggregateBy: '{field} agregado por',
    '3DModel': 'Modelo 3D',
    '3DModelOptions': 'Opções do Modelo 3D',
    type: {
      point: 'ponto',
      arc: 'arco',
      line: 'linha',
      grid: 'grade',
      hexbin: 'hexágono',
      polygon: 'polígono',
      geojson: 'geojson',
      cluster: 'grupo',
      icon: 'icon',
      heatmap: 'mapa de calor',
      hexagon: 'hexágono',
      hexagonid: 'H3',
      trip: 'viagem',
      s2: 'S2',
      '3d': '3D'
    }
  },
  layerVisConfigs: {
    strokeWidth: 'Largura do Traço',
    strokeWidthRange: 'Alcance da Largura do Traço',
    radius: 'Raio',
    fixedRadius: 'Raio ajustado para metro',
    fixedRadiusDescription: 'Raio do Mapa para Raio absoluto em metros, e.g. 5 para 5 metros',
    radiusRange: 'Alcance do Raio',
    clusterRadius: 'Raio do Agrupamento em pixels',
    radiusRangePixels: 'Alcance do Raio em pixels',
    opacity: 'Opacidade',
    coverage: 'Cobertura',
    outline: 'Contorno',
    colorRange: 'Alcance da Cor',
    stroke: 'Traçado',
    strokeColor: 'Cor do Traçado',
    strokeColorRange: 'Alcance da Cor do Traçado',
    targetColor: 'Cor de destino',
    colorAggregation: 'Agregação da Cor',
    heightAggregation: 'Agregação da Altura',
    resolutionRange: 'Alcance da Resolução',
    sizeScale: 'Escala de tamanho',
    worldUnitSize: 'Tamanho unitário do mundo',
    elevationScale: 'Escala de Elevação',
    enableElevationZoomFactor: 'Use fator de zoom de elevação',
    enableElevationZoomFactorDescription: 'Ajuste a elevação com base no fator de zoom atual',
    heightScale: 'Escala de Altura',
    coverageRange: 'Alcance de cobertura',
    highPrecisionRendering: 'Renderização de Alta Precisão',
    highPrecisionRenderingDescription: 'Alta precisão irá em resultar em baixa performance',
    height: 'Altura',
    heightDescription: 'Clique no botão no canto superior direito para trocar para a visualização 3d',
    fill: 'Preenchimento',
    enablePolygonHeight: 'Habilitar Altura de Polígono',
    showWireframe: 'Mostrar Wireframe',
    weightIntensity: 'Intensidade da Espessura',
    zoomScale: 'Escala do Zoom',
    heightRange: 'Alcance da Altura'
  },
  layerManager: {
    addData: 'Adicionar Dados',
    addLayer: 'Adicionar Camada',
    layerBlending: 'Mistura de Camada'
  },
  mapManager: {
    mapStyle: 'Estilo do Mapa',
    addMapStyle: 'Adicionar Estilo de Mapa',
    '3dBuildingColor': 'Cor do Edifício 3D'
  },
  layerConfiguration: {
    defaultDescription: 'Calcular {property} baseada no campo selecionado',
    howTo: 'Como'
  },
  filterManager: {
    addFilter: 'Adicionar Filtro'
  },
  datasetTitle: {
    showDataTable: 'Mostrar tabela de dados',
    removeDataset: 'Remover tabela de dados'
  },
  datasetInfo: {
    rowCount: '{rowCount} linhas'
  },
  tooltip: {
    hideLayer: 'esconder camada',
    showLayer: 'mostrar camada',
    hideFeature: 'Esconder propriedade',
    showFeature: 'Mostrar propriedade',
    hide: 'esconder',
    show: 'mostrar',
    removeLayer: 'Remover Camada',
    layerSettings: 'Configurações de Camada',
    closePanel: 'Fechar painel atual',
    switchToDualView: 'Trocar para visualização dupla de mapa',
    showLegend: 'mostrar legenda',
    disable3DMap: 'Desabilitar Mapa 3D',
    DrawOnMap: 'Desenhar no mapa',
    selectLocale: 'Selecionar língua',
    hideLayerPanel: 'Esconder painel de camada',
    showLayerPanel: 'Mostrar painel de camada',
    moveToTop: 'Mover para o topo das camadas',
    selectBaseMapStyle: 'Selecionar o Estilo do Mapa Base',
    "delete": 'Deletar',
    timePlayback: 'Tempo de reprodução',
    cloudStorage: 'Armazenamento Cloud',
    '3DMap': ' Mapa 3D'
  },
  toolbar: _objectSpread({
    exportImage: 'Exportar Imagem',
    exportData: 'Exportar Dados',
    exportMap: 'Exportar Mapa',
    shareMapURL: 'Compartilhar URL do Mapa',
    saveMap: 'Salvar Mapa',
    select: 'selecionar',
    polygon: 'polígono',
    rectangle: 'retângulo',
    hide: 'esconder',
    show: 'mostrar'
  }, _locales.LOCALES),
  modal: {
    title: {
      deleteDataset: 'Deletar Conjunto de Dados',
      addDataToMap: 'Adicionar Dados ao Mapa',
      exportImage: 'Exportar Imagem',
      exportData: 'Exportar Dados',
      exportMap: 'Exportar Mapa',
      addCustomMapboxStyle: 'Adicionar Estilo Mapbox Customizado',
      saveMap: 'Salvar Mapa',
      shareURL: 'Compartilhar URL'
    },
    button: {
      "delete": 'Deletar',
      download: 'Download',
      "export": 'Exportar',
      addStyle: 'Adicionar Estilo',
      save: 'Salvar',
      defaultCancel: 'Cancelar',
      defaultConfirm: 'Confirmar'
    },
    exportImage: {
      ratioTitle: 'Proporção',
      ratioDescription: 'Escolha a proporção para vários usos.',
      ratioOriginalScreen: 'Tela Original',
      ratioCustom: 'Customizado',
      ratio4_3: '4:3',
      ratio16_9: '16:9',
      resolutionTitle: 'Resolução',
      resolutionDescription: 'Alta resolução é melhor para impressões.',
      mapLegendTitle: 'Legenda do Mapa',
      mapLegendAdd: 'Adicionar Legenda no mapa'
    },
    exportData: {
      datasetTitle: 'Conjunto de dados',
      datasetSubtitle: 'Escolha o conjunto de dados que você quer exportar',
      allDatasets: 'Todos',
      dataTypeTitle: 'Tipo de Dado',
      dataTypeSubtitle: 'Escolha o tipo de dados que você quer exportar',
      filterDataTitle: 'Filtrar Dados',
      filterDataSubtitle: 'Você pode escolher exportar os dados originais ou os dados filtrados',
      filteredData: 'Dados Filtrados',
      unfilteredData: 'Dados não filtrados',
      fileCount: '{fileCount} Arquivos',
      rowCount: '{rowCount} Linhas'
    },
    deleteData: {
      warning: 'você irá deletar esse conjunto de dados. Isso irá afetar {length} camadas'
    },
    addStyle: {
      publishTitle: '1. Publique o seu Estilo no Mapbox ou providencie a chave de acesso',
      publishSubtitle1: 'Você pode criar o seu próprio estilo em',
      publishSubtitle2: 'e',
      publishSubtitle3: 'publicar',
      publishSubtitle4: 'isso.',
      publishSubtitle5: 'Para utilizar estilo privado, cole a sua',
      publishSubtitle6: 'chave de acesso',
      publishSubtitle7: 'aqui. *kepler.gl é uma aplicação client-side, os dados permanecem no seu browser..',
      exampleToken: 'e.g. pk.abcdefg.xxxxxx',
      pasteTitle: '2. Cole a url do seu estilo',
      pasteSubtitle1: 'O que é uma',
      pasteSubtitle2: 'URL de estilo',
      namingTitle: '3. Nomeie o seu estilo'
    },
    shareMap: {
      shareUriTitle: 'Compartilhar a URL do Mapa',
      shareUriSubtitle: 'Gerar a url do mapa e compartilhar com outros',
      cloudTitle: 'Armazenamento Cloud',
      cloudSubtitle: 'Conecte-se e envie os dados do mapa para o seu armazenamento cloud pessoal',
      shareDisclaimer: 'kepler.gl irá salvar os dados do mapa em seu armazenamento cloud pessoal, apenas pessoas com a URL podem acessar o seu mapa e dados. ' + 'Você pode editar/deletar o arquivo de dados na sua conta de armazenamento cloud em qualquer momento.',
      gotoPage: 'Vá para a sua página Kepler.gl {currentProvider}'
    },
    statusPanel: {
      mapUploading: 'Enviando Mapa',
      error: 'Erro'
    },
    saveMap: {
      title: 'Armazenamento Cloud',
      subtitle: 'Conecte-se para salvar o mapa para o seu armazenamento cloud pessoal'
    },
    exportMap: {
      formatTitle: 'Formato do mapa',
      formatSubtitle: 'Escolher o formato de mapa para exportar',
      html: {
        selection: 'Exportar seu mapa em um arquivo html interativo.',
        tokenTitle: 'Chave de acesso do Mapbox',
        tokenSubtitle: 'Use a sua própria chave de acesso Mapbox em seu arquivo html (opcional)',
        tokenPlaceholder: 'Cole a sua chave de acesso Mapbox',
        tokenMisuseWarning: '* Se você não fornecer a sua própria chave de acesso, o mapa pode falhar em exibir a qualquer momento quando nós substituirmos a nossa para evitar mau uso. ',
        tokenDisclaimer: 'Você pode trocar a sua chave de acesso Mapbox mais tarde utizando as instruções seguintes: ',
        tokenUpdate: 'Como atualizar a chave de acesso de um mapa existente.',
        modeTitle: 'Modo do Mapa',
        modeSubtitle1: 'Selecionar o modo do aplicativo. Mais ',
        modeSubtitle2: 'info',
        modeDescription: 'Permitir usuários a {mode} o mapa',
        read: 'ler',
        edit: 'editar'
      },
      json: {
        configTitle: 'Configurações do Mapa',
        configDisclaimer: 'A configuração do mapa será incluida no arquivo Json. Se você está utilizando kepler.gl no seu próprio mapa. Você pode copiar essa configuração e passar para ele ',
        selection: 'Exportar atuais dados e configurações do mapa em um único arquivo Json. Você pode mais tarde abrir o mesmo mapa enviando esse arquivo para o kepler.gl.',
        disclaimer: '* Configuração do mapa é aclopado com conjunto de dados carregados. ‘dataId’ é utilizado para ligar as camadas, filtros, e dicas de contextos a conjunto de dados expecíficos. ' + 'Quando passando essa configuração para addDataToMap, tenha certeza de que o id do conjunto de dados combina com o(s) dataId/s nessa configuração.'
      }
    },
    loadingDialog: {
      loading: 'Carregando...'
    },
    loadData: {
      upload: 'Carregar arquivo',
      storage: 'Carregar do armazenamento'
    },
    tripInfo: {
      title: 'Como habilitar animação de viagem',
      description1: 'Para animar o caminho, o dado geoJSON deve conter `LineString` na sua propriedade geometry, e as coordenadas na LineString devem ter 4 elementos no seguinte formato',
      code: ' [longitude, latitude, altitude, data] ',
      description2: 'com um ultimo elemento sendo uma data. Um formato de data válida inclui segundos unix como `1564184363` ou em milisegundos como `1564184363000`.',
      example: 'Exemplo:'
    },
    iconInfo: {
      title: 'Como desenhar ícones',
      description1: 'No seu csv, crie uma coluna, coloque o nome do ícone que você quer desenhar nele. Você pode deixar o campo vazio se você não desejar que o ícone apareça para alguns pontos. Quando a coluna tem nome',
      code: 'icon',
      description2: ' kepler.gl irá automaticamente criar uma camada de ícone para você.',
      example: 'Exemplos:',
      icons: 'Ícones'
    },
    storageMapViewer: {
      lastModified: 'Modificado há {lastUpdated}',
      back: 'Voltar'
    },
    overwriteMap: {
      title: 'Salvando mapa...',
      alreadyExists: 'já existe no mapa {mapSaved}. Você desejaria sobrescrever o mapa?'
    },
    loadStorageMap: {
      back: 'Voltar',
      goToPage: 'Vá para a sua página {displayName} do Kepler.gl',
      storageMaps: 'Armazenamento / Mapas',
      noSavedMaps: 'Nenhum mapa salvo'
    }
  },
  header: {
    visibleLayers: 'Camadas Visíveis',
    layerLegend: 'Legenda da Camada'
  },
  interactions: {
    tooltip: 'Dica de contexto',
    brush: 'Pincel',
    coordinate: 'Coordenadas'
  },
  layerBlending: {
    title: 'Mistura de Camadas',
    additive: 'aditivo',
    normal: 'normal',
    subtractive: 'subtrativo'
  },
  columns: {
    title: 'Colunas',
    lat: 'lat',
    lng: 'lon',
    altitude: 'altitude',
    icon: 'ícone',
    geojson: 'geojson',
    arc: {
      lat0: 'origem lat',
      lng0: 'origem lng',
      lat1: 'destino lat',
      lng1: 'destino lng'
    },
    line: {
      alt0: 'origem altitude',
      alt1: 'destino altitude'
    },
    grid: {
      worldUnitSize: 'Tamanho da Grade (km)'
    },
    hexagon: {
      worldUnitSize: 'Raio do Hexágono (km)'
    }
  },
  color: {
    customPalette: 'Paletas customizadas',
    steps: 'caminhos',
    type: 'tipo',
    reversed: 'reverso'
  },
  scale: {
    colorScale: 'Escala da Cor',
    sizeScale: 'Tamanho da Escala',
    strokeScale: 'Escala do Traço',
    scale: 'Escala'
  },
  fileUploader: {
    message: 'Arraste e solte seu(s) arquivo(s) aqui',
    chromeMessage: '*Usuários do chrome: O limite de tamanho de arquivo é 250mb, se você precisa fazer upload de arquivos maiores tente o Safari',
    disclaimer: '*kepler.gl é uma aplicação client-side, sem um servidor backend. Os dados ficam apenas na sua máquina/browser. ' + 'Nenhuma informação ou dados de mapa é enviado para qualquer server.',
    configUploadMessage: 'Envie {fileFormatNames} ou mapas salvos **Json**. Leia mais sobre [**tipos de arquivos suportados**]',
    browseFiles: 'procure seus arquivos',
    uploading: 'Enviando',
    fileNotSupported: 'Arquivo {errorFiles} não é suportado.',
    or: 'ou'
  },
  density: 'densidade',
  'Bug Report': 'Reportar Bug',
  'User Guide': 'Guia do Usuário',
  Save: 'Salvar',
  Share: 'Compartilhar'
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2NhbGl6YXRpb24vcHQuanMiXSwibmFtZXMiOlsicHJvcGVydHkiLCJ3ZWlnaHQiLCJsYWJlbCIsImZpbGxDb2xvciIsImNvbG9yIiwic3Ryb2tlQ29sb3IiLCJyYWRpdXMiLCJvdXRsaW5lIiwic3Ryb2tlIiwiZGVuc2l0eSIsImhlaWdodCIsInN1bSIsInBvaW50Q291bnQiLCJwbGFjZWhvbGRlciIsInNlYXJjaCIsInNlbGVjdEZpZWxkIiwieUF4aXMiLCJzZWxlY3RUeXBlIiwic2VsZWN0VmFsdWUiLCJlbnRlclZhbHVlIiwiZW1wdHkiLCJtaXNjIiwiYnkiLCJ2YWx1ZXNJbiIsInZhbHVlRXF1YWxzIiwiZGF0YVNvdXJjZSIsImJydXNoUmFkaXVzIiwibWFwTGF5ZXJzIiwidGl0bGUiLCJyb2FkIiwiYm9yZGVyIiwiYnVpbGRpbmciLCJ3YXRlciIsImxhbmQiLCJwYW5lbCIsInRleHQiLCJsYWJlbFdpdGhJZCIsImZvbnRTaXplIiwiZm9udENvbG9yIiwidGV4dEFuY2hvciIsImFsaWdubWVudCIsImFkZE1vcmVMYWJlbCIsInNpZGViYXIiLCJwYW5lbHMiLCJsYXllciIsImZpbHRlciIsImludGVyYWN0aW9uIiwiYmFzZW1hcCIsInJlcXVpcmVkIiwicHJvcGVydHlCYXNlZE9uIiwiY292ZXJhZ2UiLCJzdHJva2VXaWR0aCIsImJhc2ljIiwidHJhaWxMZW5ndGgiLCJ0cmFpbExlbmd0aERlc2NyaXB0aW9uIiwibmV3TGF5ZXIiLCJlbGV2YXRpb25CeURlc2NyaXB0aW9uIiwiY29sb3JCeURlc2NyaXB0aW9uIiwiYWdncmVnYXRlQnkiLCJ0eXBlIiwicG9pbnQiLCJhcmMiLCJsaW5lIiwiZ3JpZCIsImhleGJpbiIsInBvbHlnb24iLCJnZW9qc29uIiwiY2x1c3RlciIsImljb24iLCJoZWF0bWFwIiwiaGV4YWdvbiIsImhleGFnb25pZCIsInRyaXAiLCJzMiIsImxheWVyVmlzQ29uZmlncyIsInN0cm9rZVdpZHRoUmFuZ2UiLCJmaXhlZFJhZGl1cyIsImZpeGVkUmFkaXVzRGVzY3JpcHRpb24iLCJyYWRpdXNSYW5nZSIsImNsdXN0ZXJSYWRpdXMiLCJyYWRpdXNSYW5nZVBpeGVscyIsIm9wYWNpdHkiLCJjb2xvclJhbmdlIiwic3Ryb2tlQ29sb3JSYW5nZSIsInRhcmdldENvbG9yIiwiY29sb3JBZ2dyZWdhdGlvbiIsImhlaWdodEFnZ3JlZ2F0aW9uIiwicmVzb2x1dGlvblJhbmdlIiwic2l6ZVNjYWxlIiwid29ybGRVbml0U2l6ZSIsImVsZXZhdGlvblNjYWxlIiwiZW5hYmxlRWxldmF0aW9uWm9vbUZhY3RvciIsImVuYWJsZUVsZXZhdGlvblpvb21GYWN0b3JEZXNjcmlwdGlvbiIsImhlaWdodFNjYWxlIiwiY292ZXJhZ2VSYW5nZSIsImhpZ2hQcmVjaXNpb25SZW5kZXJpbmciLCJoaWdoUHJlY2lzaW9uUmVuZGVyaW5nRGVzY3JpcHRpb24iLCJoZWlnaHREZXNjcmlwdGlvbiIsImZpbGwiLCJlbmFibGVQb2x5Z29uSGVpZ2h0Iiwic2hvd1dpcmVmcmFtZSIsIndlaWdodEludGVuc2l0eSIsInpvb21TY2FsZSIsImhlaWdodFJhbmdlIiwibGF5ZXJNYW5hZ2VyIiwiYWRkRGF0YSIsImFkZExheWVyIiwibGF5ZXJCbGVuZGluZyIsIm1hcE1hbmFnZXIiLCJtYXBTdHlsZSIsImFkZE1hcFN0eWxlIiwibGF5ZXJDb25maWd1cmF0aW9uIiwiZGVmYXVsdERlc2NyaXB0aW9uIiwiaG93VG8iLCJmaWx0ZXJNYW5hZ2VyIiwiYWRkRmlsdGVyIiwiZGF0YXNldFRpdGxlIiwic2hvd0RhdGFUYWJsZSIsInJlbW92ZURhdGFzZXQiLCJkYXRhc2V0SW5mbyIsInJvd0NvdW50IiwidG9vbHRpcCIsImhpZGVMYXllciIsInNob3dMYXllciIsImhpZGVGZWF0dXJlIiwic2hvd0ZlYXR1cmUiLCJoaWRlIiwic2hvdyIsInJlbW92ZUxheWVyIiwibGF5ZXJTZXR0aW5ncyIsImNsb3NlUGFuZWwiLCJzd2l0Y2hUb0R1YWxWaWV3Iiwic2hvd0xlZ2VuZCIsImRpc2FibGUzRE1hcCIsIkRyYXdPbk1hcCIsInNlbGVjdExvY2FsZSIsImhpZGVMYXllclBhbmVsIiwic2hvd0xheWVyUGFuZWwiLCJtb3ZlVG9Ub3AiLCJzZWxlY3RCYXNlTWFwU3R5bGUiLCJ0aW1lUGxheWJhY2siLCJjbG91ZFN0b3JhZ2UiLCJ0b29sYmFyIiwiZXhwb3J0SW1hZ2UiLCJleHBvcnREYXRhIiwiZXhwb3J0TWFwIiwic2hhcmVNYXBVUkwiLCJzYXZlTWFwIiwic2VsZWN0IiwicmVjdGFuZ2xlIiwiTE9DQUxFUyIsIm1vZGFsIiwiZGVsZXRlRGF0YXNldCIsImFkZERhdGFUb01hcCIsImFkZEN1c3RvbU1hcGJveFN0eWxlIiwic2hhcmVVUkwiLCJidXR0b24iLCJkb3dubG9hZCIsImFkZFN0eWxlIiwic2F2ZSIsImRlZmF1bHRDYW5jZWwiLCJkZWZhdWx0Q29uZmlybSIsInJhdGlvVGl0bGUiLCJyYXRpb0Rlc2NyaXB0aW9uIiwicmF0aW9PcmlnaW5hbFNjcmVlbiIsInJhdGlvQ3VzdG9tIiwicmF0aW80XzMiLCJyYXRpbzE2XzkiLCJyZXNvbHV0aW9uVGl0bGUiLCJyZXNvbHV0aW9uRGVzY3JpcHRpb24iLCJtYXBMZWdlbmRUaXRsZSIsIm1hcExlZ2VuZEFkZCIsImRhdGFzZXRTdWJ0aXRsZSIsImFsbERhdGFzZXRzIiwiZGF0YVR5cGVUaXRsZSIsImRhdGFUeXBlU3VidGl0bGUiLCJmaWx0ZXJEYXRhVGl0bGUiLCJmaWx0ZXJEYXRhU3VidGl0bGUiLCJmaWx0ZXJlZERhdGEiLCJ1bmZpbHRlcmVkRGF0YSIsImZpbGVDb3VudCIsImRlbGV0ZURhdGEiLCJ3YXJuaW5nIiwicHVibGlzaFRpdGxlIiwicHVibGlzaFN1YnRpdGxlMSIsInB1Ymxpc2hTdWJ0aXRsZTIiLCJwdWJsaXNoU3VidGl0bGUzIiwicHVibGlzaFN1YnRpdGxlNCIsInB1Ymxpc2hTdWJ0aXRsZTUiLCJwdWJsaXNoU3VidGl0bGU2IiwicHVibGlzaFN1YnRpdGxlNyIsImV4YW1wbGVUb2tlbiIsInBhc3RlVGl0bGUiLCJwYXN0ZVN1YnRpdGxlMSIsInBhc3RlU3VidGl0bGUyIiwibmFtaW5nVGl0bGUiLCJzaGFyZU1hcCIsInNoYXJlVXJpVGl0bGUiLCJzaGFyZVVyaVN1YnRpdGxlIiwiY2xvdWRUaXRsZSIsImNsb3VkU3VidGl0bGUiLCJzaGFyZURpc2NsYWltZXIiLCJnb3RvUGFnZSIsInN0YXR1c1BhbmVsIiwibWFwVXBsb2FkaW5nIiwiZXJyb3IiLCJzdWJ0aXRsZSIsImZvcm1hdFRpdGxlIiwiZm9ybWF0U3VidGl0bGUiLCJodG1sIiwic2VsZWN0aW9uIiwidG9rZW5UaXRsZSIsInRva2VuU3VidGl0bGUiLCJ0b2tlblBsYWNlaG9sZGVyIiwidG9rZW5NaXN1c2VXYXJuaW5nIiwidG9rZW5EaXNjbGFpbWVyIiwidG9rZW5VcGRhdGUiLCJtb2RlVGl0bGUiLCJtb2RlU3VidGl0bGUxIiwibW9kZVN1YnRpdGxlMiIsIm1vZGVEZXNjcmlwdGlvbiIsInJlYWQiLCJlZGl0IiwianNvbiIsImNvbmZpZ1RpdGxlIiwiY29uZmlnRGlzY2xhaW1lciIsImRpc2NsYWltZXIiLCJsb2FkaW5nRGlhbG9nIiwibG9hZGluZyIsImxvYWREYXRhIiwidXBsb2FkIiwic3RvcmFnZSIsInRyaXBJbmZvIiwiZGVzY3JpcHRpb24xIiwiY29kZSIsImRlc2NyaXB0aW9uMiIsImV4YW1wbGUiLCJpY29uSW5mbyIsImljb25zIiwic3RvcmFnZU1hcFZpZXdlciIsImxhc3RNb2RpZmllZCIsImJhY2siLCJvdmVyd3JpdGVNYXAiLCJhbHJlYWR5RXhpc3RzIiwibG9hZFN0b3JhZ2VNYXAiLCJnb1RvUGFnZSIsInN0b3JhZ2VNYXBzIiwibm9TYXZlZE1hcHMiLCJoZWFkZXIiLCJ2aXNpYmxlTGF5ZXJzIiwibGF5ZXJMZWdlbmQiLCJpbnRlcmFjdGlvbnMiLCJicnVzaCIsImNvb3JkaW5hdGUiLCJhZGRpdGl2ZSIsIm5vcm1hbCIsInN1YnRyYWN0aXZlIiwiY29sdW1ucyIsImxhdCIsImxuZyIsImFsdGl0dWRlIiwibGF0MCIsImxuZzAiLCJsYXQxIiwibG5nMSIsImFsdDAiLCJhbHQxIiwiY3VzdG9tUGFsZXR0ZSIsInN0ZXBzIiwicmV2ZXJzZWQiLCJzY2FsZSIsImNvbG9yU2NhbGUiLCJzdHJva2VTY2FsZSIsImZpbGVVcGxvYWRlciIsIm1lc3NhZ2UiLCJjaHJvbWVNZXNzYWdlIiwiY29uZmlnVXBsb2FkTWVzc2FnZSIsImJyb3dzZUZpbGVzIiwidXBsb2FkaW5nIiwiZmlsZU5vdFN1cHBvcnRlZCIsIm9yIiwiU2F2ZSIsIlNoYXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7Ozs7O2VBRWU7QUFDYkEsRUFBQUEsUUFBUSxFQUFFO0FBQ1JDLElBQUFBLE1BQU0sRUFBRSxvQkFEQTtBQUVSQyxJQUFBQSxLQUFLLEVBQUUsUUFGQztBQUdSQyxJQUFBQSxTQUFTLEVBQUUsc0JBSEg7QUFJUkMsSUFBQUEsS0FBSyxFQUFFLEtBSkM7QUFLUkMsSUFBQUEsV0FBVyxFQUFFLGNBTEw7QUFNUkMsSUFBQUEsTUFBTSxFQUFFLE1BTkE7QUFPUkMsSUFBQUEsT0FBTyxFQUFFLFVBUEQ7QUFRUkMsSUFBQUEsTUFBTSxFQUFFLFNBUkE7QUFTUkMsSUFBQUEsT0FBTyxFQUFFLFdBVEQ7QUFVUkMsSUFBQUEsTUFBTSxFQUFFLFFBVkE7QUFXUkMsSUFBQUEsR0FBRyxFQUFFLE1BWEc7QUFZUkMsSUFBQUEsVUFBVSxFQUFFO0FBWkosR0FERztBQWViQyxFQUFBQSxXQUFXLEVBQUU7QUFDWEMsSUFBQUEsTUFBTSxFQUFFLFdBREc7QUFFWEMsSUFBQUEsV0FBVyxFQUFFLG9CQUZGO0FBR1hDLElBQUFBLEtBQUssRUFBRSxRQUhJO0FBSVhDLElBQUFBLFVBQVUsRUFBRSxtQkFKRDtBQUtYQyxJQUFBQSxXQUFXLEVBQUUsb0JBTEY7QUFNWEMsSUFBQUEsVUFBVSxFQUFFLGlCQU5EO0FBT1hDLElBQUFBLEtBQUssRUFBRTtBQVBJLEdBZkE7QUF3QmJDLEVBQUFBLElBQUksRUFBRTtBQUNKQyxJQUFBQSxFQUFFLEVBQUUsRUFEQTtBQUVKQyxJQUFB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RUFDUixvSEFDQSxxRUFOVTtBQU9aa0QsSUFBQUEsbUJBQW1CLEVBQ2pCLHNHQVJVO0FBU1pDLElBQUFBLFdBQVcsRUFBRSx1QkFURDtBQVVaQyxJQUFBQSxTQUFTLEVBQUUsVUFWQztBQVdaQyxJQUFBQSxnQkFBZ0IsRUFBRSx1Q0FYTjtBQVlaQyxJQUFBQSxFQUFFLEVBQUU7QUFaUSxHQXBaRDtBQWthYi9RLEVBQUFBLE9BQU8sRUFBRSxXQWxhSTtBQW1hYixnQkFBYyxjQW5hRDtBQW9hYixnQkFBYyxpQkFwYUQ7QUFxYWJnUixFQUFBQSxJQUFJLEVBQUUsUUFyYU87QUFzYWJDLEVBQUFBLEtBQUssRUFBRTtBQXRhTSxDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtMT0NBTEVTfSBmcm9tICcuL2xvY2FsZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BlcnR5OiB7XG4gICAgd2VpZ2h0OiAnRXNwZXNzdXJhIGRvIHRleHRvJyxcbiAgICBsYWJlbDogJ1LDs3R1bG8nLFxuICAgIGZpbGxDb2xvcjogJ0NvciBkbyBwcmVlbmNoaW1lbnRvJyxcbiAgICBjb2xvcjogJ0NvcicsXG4gICAgc3Ryb2tlQ29sb3I6ICdDb3IgZGEgYm9yZGEnLFxuICAgIHJhZGl1czogJ1JhaW8nLFxuICAgIG91dGxpbmU6ICdDb250b3JubycsXG4gICAgc3Ryb2tlOiAnVHJhw6dhZG8nLFxuICAgIGRlbnNpdHk6ICdEZW5zaWRhZGUnLFxuICAgIGhlaWdodDogJ0FsdHVyYScsXG4gICAgc3VtOiAnU29tYScsXG4gICAgcG9pbnRDb3VudDogJ0NvbnRhZ2VtIGRlIFBvbnRvcydcbiAgfSxcbiAgcGxhY2Vob2xkZXI6IHtcbiAgICBzZWFyY2g6ICdQZXNxdWlzYXInLFxuICAgIHNlbGVjdEZpZWxkOiAnU2VsZWNpb25lIHVtIGNhbXBvJyxcbiAgICB5QXhpczogJ0VpeG8gWScsXG4gICAgc2VsZWN0VHlwZTogJ1NlbGVjaW9uZSB1bSBUaXBvJyxcbiAgICBzZWxlY3RWYWx1ZTogJ1NlbGVjaW9uZSB1bSB2YWxvcicsXG4gICAgZW50ZXJWYWx1ZTogJ0luc2lyYSB1bSB2YWxvcicsXG4gICAgZW1wdHk6ICdWYXppbydcbiAgfSxcbiAgbWlzYzoge1xuICAgIGJ5OiAnJyxcbiAgICB2YWx1ZXNJbjogJ1ZhbG9yZXMgZW0nLFxuICAgIHZhbHVlRXF1YWxzOiAnVmFsb3IgaWd1YWwgYScsXG4gICAgZGF0YVNvdXJjZTogJ09yaWdlbSBkb3MgZGFkb3MnLFxuICAgIGJydXNoUmFkaXVzOiAnUmFpbyBkbyBUcmHDp28gKGttKScsXG4gICAgZW1wdHk6ICcgJ1xuICB9LFxuICBtYXBMYXllcnM6IHtcbiAgICB0aXRsZTogJ0NhbWFkYXMgZG8gbWFwYScsXG4gICAgbGFiZWw6ICdSw7N0dWxvJyxcbiAgICByb2FkOiAnRXN0cmFkYScsXG4gICAgYm9yZGVyOiAnRnJvbnRlaXJhJyxcbiAgICBidWlsZGluZzogJ0VkaWbDrWNpb3MnLFxuICAgIHdhdGVyOiAnw4FndWEnLFxuICAgIGxhbmQ6ICdUZXJyYScsXG4gICAgJzNkQnVpbGRpbmcnOiAnRWRpZsOtY2lvcyBlbSAzZCdcbiAgfSxcbiAgcGFuZWw6IHtcbiAgICB0ZXh0OiB7XG4gICAgICBsYWJlbDogJ1LDs3R1bG8nLFxuICAgICAgbGFiZWxXaXRoSWQ6ICdSw7N0dWxvIHtsYWJlbElkfScsXG4gICAgICBmb250U2l6ZTogJ1RhbWFuaG8gZGEgZm9udGUnLFxuICAgICAgZm9udENvbG9yOiAnQ29yIGRhIGZvbnRlJyxcbiAgICAgIHRleHRBbmNob3I6ICfDgm5jb3JhIGRvIHRleHRvJyxcbiAgICAgIGFsaWdubWVudDogJ0FsaW5oYW1lbnRvJyxcbiAgICAgIGFkZE1vcmVMYWJlbDogJ0FkaWNpb25hciBtYWlzIFLDs3R1bG9zJ1xuICAgIH1cbiAgfSxcbiAgc2lkZWJhcjoge1xuICAgIHBhbmVsczoge1xuICAgICAgbGF5ZXI6ICdDYW1hZGFzJyxcbiAgICAgIGZpbHRlcjogJ0ZpbHRyb3MnLFxuICAgICAgaW50ZXJhY3Rpb246ICdJbnRlcmHDp8O1ZXMnLFxuICAgICAgYmFzZW1hcDogJ01hcGEgYmFzZSdcbiAgICB9XG4gIH0sXG4gIGxheWVyOiB7XG4gICAgcmVxdWlyZWQ6ICdPYnJpZ2F0w7NyaW8qJyxcbiAgICByYWRpdXM6ICdSYWlvJyxcbiAgICBjb2xvcjogJ0NvcicsXG4gICAgZmlsbENvbG9yOiAnQ29yIGRlIHByZWVuY2hpbWVudG8nLFxuICAgIG91dGxpbmU6ICdDb250b3JubycsXG4gICAgd2VpZ2h0OiAnRXNwZXNzdXJhJyxcbiAgICBwcm9wZXJ0eUJhc2VkT246ICd7cHJvcGVydHl9IGJhc2VhZGEgZW0nLFxuICAgIGNvdmVyYWdlOiAnQ29iZXJ0dXJhJyxcbiAgICBzdHJva2U6ICdUcmHDp28nLFxuICAgIHN0cm9rZVdpZHRoOiAnTGFyZ3VyYSBkbyBUcmHDp2FkbycsXG4gICAgc3Ryb2tlQ29sb3I6ICdDb3IgZG8gVHJhw6dhZG8nLFxuICAgIGJhc2ljOiAnQsOhc2ljbycsXG4gICAgdHJhaWxMZW5ndGg6ICdDb21wcmltZW50byBkYSB0cmlsaGEnLFxuICAgIHRyYWlsTGVuZ3RoRGVzY3JpcHRpb246ICdOw7ptZXJvIGRlIHNlZ3VuZG9zIHBhcmEgdW0gY2FtaW5obyBjb21wbGV0YW1lbnRlIGRlc2FwYXJlY2VyJyxcbiAgICBuZXdMYXllcjogJ25vdmEgY2FtYWRhJyxcbiAgICBlbGV2YXRpb25CeURlc2NyaXB0aW9uOiAnUXVhbmRvIGRlc2xpZ2FkbywgYSBhbHR1cmEgw6kgYmFzZWFkYSBuYSBjb250YWdlbSBkZSBwb250b3MnLFxuICAgIGNvbG9yQnlEZXNjcmlwdGlvbjogJ1F1YW5kbyBkZXNsaWdhZG8sIGEgY29yIMOpIGJhc2VhZGEgbmEgY29udGFnZW0gZGUgcG9udG9zJyxcbiAgICBhZ2dyZWdhdGVCeTogJ3tmaWVsZH0gYWdyZWdhZG8gcG9yJyxcbiAgICAnM0RNb2RlbCc6ICdNb2RlbG8gM0QnLFxuICAgICczRE1vZGVsT3B0aW9ucyc6ICdPcMOnw7VlcyBkbyBNb2RlbG8gM0QnLFxuICAgIHR5cGU6IHtcbiAgICAgIHBvaW50OiAncG9udG8nLFxuICAgICAgYXJjOiAnYXJjbycsXG4gICAgICBsaW5lOiAnbGluaGEnLFxuICAgICAgZ3JpZDogJ2dyYWRlJyxcbiAgICAgIGhleGJpbjogJ2hleMOhZ29ubycsXG4gICAgICBwb2x5Z29uOiAncG9sw61nb25vJyxcbiAgICAgIGdlb2pzb246ICdnZW9qc29uJyxcbiAgICAgIGNsdXN0ZXI6ICdncnVwbycsXG4gICAgICBpY29uOiAnaWNvbicsXG4gICAgICBoZWF0bWFwOiAnbWFwYSBkZSBjYWxvcicsXG4gICAgICBoZXhhZ29uOiAnaGV4w6Fnb25vJyxcbiAgICAgIGhleGFnb25pZDogJ0gzJyxcbiAgICAgIHRyaXA6ICd2aWFnZW0nLFxuICAgICAgczI6ICdTMicsXG4gICAgICAnM2QnOiAnM0QnXG4gICAgfVxuICB9LFxuICBsYXllclZpc0NvbmZpZ3M6IHtcbiAgICBzdHJva2VXaWR0aDogJ0xhcmd1cmEgZG8gVHJhw6dvJyxcbiAgICBzdHJva2VXaWR0aFJhbmdlOiAnQWxjYW5jZSBkYSBMYXJndXJhIGRvIFRyYcOnbycsXG4gICAgcmFkaXVzOiAnUmFpbycsXG4gICAgZml4ZWRSYWRpdXM6ICdSYWlvIGFqdXN0YWRvIHBhcmEgbWV0cm8nLFxuICAgIGZpeGVkUmFkaXVzRGVzY3JpcHRpb246ICdSYWlvIGRvIE1hcGEgcGFyYSBSYWlvIGFic29sdXRvIGVtIG1ldHJvcywgZS5nLiA1IHBhcmEgNSBtZXRyb3MnLFxuICAgIHJhZGl1c1JhbmdlOiAnQWxjYW5jZSBkbyBSYWlvJyxcbiAgICBjbHVzdGVyUmFkaXVzOiAnUmFpbyBkbyBBZ3J1cGFtZW50byBlbSBwaXhlbHMnLFxuICAgIHJhZGl1c1JhbmdlUGl4ZWxzOiAnQWxjYW5jZSBkbyBSYWlvIGVtIHBpeGVscycsXG4gICAgb3BhY2l0eTogJ09wYWNpZGFkZScsXG4gICAgY292ZXJhZ2U6ICdDb2JlcnR1cmEnLFxuICAgIG91dGxpbmU6ICdDb250b3JubycsXG4gICAgY29sb3JSYW5nZTogJ0FsY2FuY2UgZGEgQ29yJyxcbiAgICBzdHJva2U6ICdUcmHDp2FkbycsXG4gICAgc3Ryb2tlQ29sb3I6ICdDb3IgZG8gVHJhw6dhZG8nLFxuICAgIHN0cm9rZUNvbG9yUmFuZ2U6ICdBbGNhbmNlIGRhIENvciBkbyBUcmHDp2FkbycsXG4gICAgdGFyZ2V0Q29sb3I6ICdDb3IgZGUgZGVzdGlubycsXG4gICAgY29sb3JBZ2dyZWdhdGlvbjogJ0FncmVnYcOnw6NvIGRhIENvcicsXG4gICAgaGVpZ2h0QWdncmVnYXRpb246ICdBZ3JlZ2HDp8OjbyBkYSBBbHR1cmEnLFxuICAgIHJlc29sdXRpb25SYW5nZTogJ0FsY2FuY2UgZGEgUmVzb2x1w6fDo28nLFxuICAgIHNpemVTY2FsZTogJ0VzY2FsYSBkZSB0YW1hbmhvJyxcbiAgICB3b3JsZFVuaXRTaXplOiAnVGFtYW5obyB1bml0w6FyaW8gZG8gbXVuZG8nLFxuICAgIGVsZXZhdGlvblNjYWxlOiAnRXNjYWxhIGRlIEVsZXZhw6fDo28nLFxuICAgIGVuYWJsZUVsZXZhdGlvblpvb21GYWN0b3I6ICdVc2UgZmF0b3IgZGUgem9vbSBkZSBlbGV2YcOnw6NvJyxcbiAgICBlbmFibGVFbGV2YXRpb25ab29tRmFjdG9yRGVzY3JpcHRpb246ICdBanVzdGUgYSBlbGV2YcOnw6NvIGNvbSBiYXNlIG5vIGZhdG9yIGRlIHpvb20gYXR1YWwnLFxuICAgIGhlaWdodFNjYWxlOiAnRXNjYWxhIGRlIEFsdHVyYScsXG4gICAgY292ZXJhZ2VSYW5nZTogJ0FsY2FuY2UgZGUgY29iZXJ0dXJhJyxcbiAgICBoaWdoUHJlY2lzaW9uUmVuZGVyaW5nOiAnUmVuZGVyaXphw6fDo28gZGUgQWx0YSBQcmVjaXPDo28nLFxuICAgIGhpZ2hQcmVjaXNpb25SZW5kZXJpbmdEZXNjcmlwdGlvbjogJ0FsdGEgcHJlY2lzw6NvIGlyw6EgZW0gcmVzdWx0YXIgZW0gYmFpeGEgcGVyZm9ybWFuY2UnLFxuICAgIGhlaWdodDogJ0FsdHVyYScsXG4gICAgaGVpZ2h0RGVzY3JpcHRpb246XG4gICAgICAnQ2xpcXVlIG5vIGJvdMOjbyBubyBjYW50byBzdXBlcmlvciBkaXJlaXRvIHBhcmEgdHJvY2FyIHBhcmEgYSB2aXN1YWxpemHDp8OjbyAzZCcsXG4gICAgZmlsbDogJ1ByZWVuY2hpbWVudG8nLFxuICAgIGVuYWJsZVBvbHlnb25IZWlnaHQ6ICdIYWJpbGl0YXIgQWx0dXJhIGRlIFBvbMOtZ29ubycsXG4gICAgc2hvd1dpcmVmcmFtZTogJ01vc3RyYXIgV2lyZWZyYW1lJyxcbiAgICB3ZWlnaHRJbnRlbnNpdHk6ICdJbnRlbnNpZGFkZSBkYSBFc3Blc3N1cmEnLFxuICAgIHpvb21TY2FsZTogJ0VzY2FsYSBkbyBab29tJyxcbiAgICBoZWlnaHRSYW5nZTogJ0FsY2FuY2UgZGEgQWx0dXJhJ1xuICB9LFxuICBsYXllck1hbmFnZXI6IHtcbiAgICBhZGREYXRhOiAnQWRpY2lvbmFyIERhZG9zJyxcbiAgICBhZGRMYXllcjogJ0FkaWNpb25hciBDYW1hZGEnLFxuICAgIGxheWVyQmxlbmRpbmc6ICdNaXN0dXJhIGRlIENhbWFkYSdcbiAgfSxcbiAgbWFwTWFuYWdlcjoge1xuICAgIG1hcFN0eWxlOiAnRXN0aWxvIGRvIE1hcGEnLFxuICAgIGFkZE1hcFN0eWxlOiAnQWRpY2lvbmFyIEVzdGlsbyBkZSBNYXBhJyxcbiAgICAnM2RCdWlsZGluZ0NvbG9yJzogJ0NvciBkbyBFZGlmw61jaW8gM0QnXG4gIH0sXG4gIGxheWVyQ29uZmlndXJhdGlvbjoge1xuICAgIGRlZmF1bHREZXNjcmlwdGlvbjogJ0NhbGN1bGFyIHtwcm9wZXJ0eX0gYmFzZWFkYSBubyBjYW1wbyBzZWxlY2lvbmFkbycsXG4gICAgaG93VG86ICdDb21vJ1xuICB9LFxuICBmaWx0ZXJNYW5hZ2VyOiB7XG4gICAgYWRkRmlsdGVyOiAnQWRpY2lvbmFyIEZpbHRybydcbiAgfSxcbiAgZGF0YXNldFRpdGxlOiB7XG4gICAgc2hvd0RhdGFUYWJsZTogJ01vc3RyYXIgdGFiZWxhIGRlIGRhZG9zJyxcbiAgICByZW1vdmVEYXRhc2V0OiAnUmVtb3ZlciB0YWJlbGEgZGUgZGFkb3MnXG4gIH0sXG4gIGRhdGFzZXRJbmZvOiB7XG4gICAgcm93Q291bnQ6ICd7cm93Q291bnR9IGxpbmhhcydcbiAgfSxcbiAgdG9vbHRpcDoge1xuICAgIGhpZGVMYXllcjogJ2VzY29uZGVyIGNhbWFkYScsXG4gICAgc2hvd0xheWVyOiAnbW9zdHJhciBjYW1hZGEnLFxuICAgIGhpZGVGZWF0dXJlOiAnRXNjb25kZXIgcHJvcHJpZWRhZGUnLFxuICAgIHNob3dGZWF0dXJlOiAnTW9zdHJhciBwcm9wcmllZGFkZScsXG4gICAgaGlkZTogJ2VzY29uZGVyJyxcbiAgICBzaG93OiAnbW9zdHJhcicsXG4gICAgcmVtb3ZlTGF5ZXI6ICdSZW1vdmVyIENhbWFkYScsXG4gICAgbGF5ZXJTZXR0aW5nczogJ0NvbmZpZ3VyYcOnw7VlcyBkZSBDYW1hZGEnLFxuICAgIGNsb3NlUGFuZWw6ICdGZWNoYXIgcGFpbmVsIGF0dWFsJyxcbiAgICBzd2l0Y2hUb0R1YWxWaWV3OiAnVHJvY2FyIHBhcmEgdmlzdWFsaXphw6fDo28gZHVwbGEgZGUgbWFwYScsXG4gICAgc2hvd0xlZ2VuZDogJ21vc3RyYXIgbGVnZW5kYScsXG4gICAgZGlzYWJsZTNETWFwOiAnRGVzYWJpbGl0YXIgTWFwYSAzRCcsXG4gICAgRHJhd09uTWFwOiAnRGVzZW5oYXIgbm8gbWFwYScsXG4gICAgc2VsZWN0TG9jYWxlOiAnU2VsZWNpb25hciBsw61uZ3VhJyxcbiAgICBoaWRlTGF5ZXJQYW5lbDogJ0VzY29uZGVyIHBhaW5lbCBkZSBjYW1hZGEnLFxuICAgIHNob3dMYXllclBhbmVsOiAnTW9zdHJhciBwYWluZWwgZGUgY2FtYWRhJyxcbiAgICBtb3ZlVG9Ub3A6ICdNb3ZlciBwYXJhIG8gdG9wbyBkYXMgY2FtYWRhcycsXG4gICAgc2VsZWN0QmFzZU1hcFN0eWxlOiAnU2VsZWNpb25hciBvIEVzdGlsbyBkbyBNYXBhIEJhc2UnLFxuICAgIGRlbGV0ZTogJ0RlbGV0YXInLFxuICAgIHRpbWVQbGF5YmFjazogJ1RlbXBvIGRlIHJlcHJvZHXDp8OjbycsXG4gICAgY2xvdWRTdG9yYWdlOiAnQXJtYXplbmFtZW50byBDbG91ZCcsXG4gICAgJzNETWFwJzogJyBNYXBhIDNEJ1xuICB9LFxuICB0b29sYmFyOiB7XG4gICAgZXhwb3J0SW1hZ2U6ICdFeHBvcnRhciBJbWFnZW0nLFxuICAgIGV4cG9ydERhdGE6ICdFeHBvcnRhciBEYWRvcycsXG4gICAgZXhwb3J0TWFwOiAnRXhwb3J0YXIgTWFwYScsXG4gICAgc2hhcmVNYXBVUkw6ICdDb21wYXJ0aWxoYXIgVVJMIGRvIE1hcGEnLFxuICAgIHNhdmVNYXA6ICdTYWx2YXIgTWFwYScsXG4gICAgc2VsZWN0OiAnc2VsZWNpb25hcicsXG4gICAgcG9seWdvbjogJ3BvbMOtZ29ubycsXG4gICAgcmVjdGFuZ2xlOiAncmV0w6JuZ3VsbycsXG4gICAgaGlkZTogJ2VzY29uZGVyJyxcbiAgICBzaG93OiAnbW9zdHJhcicsXG4gICAgLi4uTE9DQUxFU1xuICB9LFxuICBtb2RhbDoge1xuICAgIHRpdGxlOiB7XG4gICAgICBkZWxldGVEYXRhc2V0OiAnRGVsZXRhciBDb25qdW50byBkZSBEYWRvcycsXG4gICAgICBhZGREYXRhVG9NYXA6ICdBZGljaW9uYXIgRGFkb3MgYW8gTWFwYScsXG4gICAgICBleHBvcnRJbWFnZTogJ0V4cG9ydGFyIEltYWdlbScsXG4gICAgICBleHBvcnREYXRhOiAnRXhwb3J0YXIgRGFkb3MnLFxuICAgICAgZXhwb3J0TWFwOiAnRXhwb3J0YXIgTWFwYScsXG4gICAgICBhZGRDdXN0b21NYXBib3hTdHlsZTogJ0FkaWNpb25hciBFc3RpbG8gTWFwYm94IEN1c3RvbWl6YWRvJyxcbiAgICAgIHNhdmVNYXA6ICdTYWx2YXIgTWFwYScsXG4gICAgICBzaGFyZVVSTDogJ0NvbXBhcnRpbGhhciBVUkwnXG4gICAgfSxcbiAgICBidXR0b246IHtcbiAgICAgIGRlbGV0ZTogJ0RlbGV0YXInLFxuICAgICAgZG93bmxvYWQ6ICdEb3dubG9hZCcsXG4gICAgICBleHBvcnQ6ICdFeHBvcnRhcicsXG4gICAgICBhZGRTdHlsZTogJ0FkaWNpb25hciBFc3RpbG8nLFxuICAgICAgc2F2ZTogJ1NhbHZhcicsXG4gICAgICBkZWZhdWx0Q2FuY2VsOiAnQ2FuY2VsYXInLFxuICAgICAgZGVmYXVsdENvbmZpcm06ICdDb25maXJtYXInXG4gICAgfSxcbiAgICBleHBvcnRJbWFnZToge1xuICAgICAgcmF0aW9UaXRsZTogJ1Byb3BvcsOnw6NvJyxcbiAgICAgIHJhdGlvRGVzY3JpcHRpb246ICdFc2NvbGhhIGEgcHJvcG9yw6fDo28gcGFyYSB2w6FyaW9zIHVzb3MuJyxcbiAgICAgIHJhdGlvT3JpZ2luYWxTY3JlZW46ICdUZWxhIE9yaWdpbmFsJyxcbiAgICAgIHJhdGlvQ3VzdG9tOiAnQ3VzdG9taXphZG8nLFxuICAgICAgcmF0aW80XzM6ICc0OjMnLFxuICAgICAgcmF0aW8xNl85OiAnMTY6OScsXG4gICAgICByZXNvbHV0aW9uVGl0bGU6ICdSZXNvbHXDp8OjbycsXG4gICAgICByZXNvbHV0aW9uRGVzY3JpcHRpb246ICdBbHRhIHJlc29sdcOnw6NvIMOpIG1lbGhvciBwYXJhIGltcHJlc3PDtWVzLicsXG4gICAgICBtYXBMZWdlbmRUaXRsZTogJ0xlZ2VuZGEgZG8gTWFwYScsXG4gICAgICBtYXBMZWdlbmRBZGQ6ICdBZGljaW9uYXIgTGVnZW5kYSBubyBtYXBhJ1xuICAgIH0sXG4gICAgZXhwb3J0RGF0YToge1xuICAgICAgZGF0YXNldFRpdGxlOiAnQ29uanVudG8gZGUgZGFkb3MnLFxuICAgICAgZGF0YXNldFN1YnRpdGxlOiAnRXNjb2xoYSBvIGNvbmp1bnRvIGRlIGRhZG9zIHF1ZSB2b2PDqiBxdWVyIGV4cG9ydGFyJyxcbiAgICAgIGFsbERhdGFzZXRzOiAnVG9kb3MnLFxuICAgICAgZGF0YVR5cGVUaXRsZTogJ1RpcG8gZGUgRGFkbycsXG4gICAgICBkYXRhVHlwZVN1YnRpdGxlOiAnRXNjb2xoYSBvIHRpcG8gZGUgZGFkb3MgcXVlIHZvY8OqIHF1ZXIgZXhwb3J0YXInLFxuICAgICAgZmlsdGVyRGF0YVRpdGxlOiAnRmlsdHJhciBEYWRvcycsXG4gICAgICBmaWx0ZXJEYXRhU3VidGl0bGU6ICdWb2PDqiBwb2RlIGVzY29saGVyIGV4cG9ydGFyIG9zIGRhZG9zIG9yaWdpbmFpcyBvdSBvcyBkYWRvcyBmaWx0cmFkb3MnLFxuICAgICAgZmlsdGVyZWREYXRhOiAnRGFkb3MgRmlsdHJhZG9zJyxcbiAgICAgIHVuZmlsdGVyZWREYXRhOiAnRGFkb3MgbsOjbyBmaWx0cmFkb3MnLFxuICAgICAgZmlsZUNvdW50OiAne2ZpbGVDb3VudH0gQXJxdWl2b3MnLFxuICAgICAgcm93Q291bnQ6ICd7cm93Q291bnR9IExpbmhhcydcbiAgICB9LFxuICAgIGRlbGV0ZURhdGE6IHtcbiAgICAgIHdhcm5pbmc6ICd2b2PDqiBpcsOhIGRlbGV0YXIgZXNzZSBjb25qdW50byBkZSBkYWRvcy4gSXNzbyBpcsOhIGFmZXRhciB7bGVuZ3RofSBjYW1hZGFzJ1xuICAgIH0sXG4gICAgYWRkU3R5bGU6IHtcbiAgICAgIHB1Ymxpc2hUaXRsZTogJzEuIFB1YmxpcXVlIG8gc2V1IEVzdGlsbyBubyBNYXBib3ggb3UgcHJvdmlkZW5jaWUgYSBjaGF2ZSBkZSBhY2Vzc28nLFxuICAgICAgcHVibGlzaFN1YnRpdGxlMTogJ1ZvY8OqIHBvZGUgY3JpYXIgbyBzZXUgcHLDs3ByaW8gZXN0aWxvIGVtJyxcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTI6ICdlJyxcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTM6ICdwdWJsaWNhcicsXG4gICAgICBwdWJsaXNoU3VidGl0bGU0OiAnaXNzby4nLFxuICAgICAgcHVibGlzaFN1YnRpdGxlNTogJ1BhcmEgdXRpbGl6YXIgZXN0aWxvIHByaXZhZG8sIGNvbGUgYSBzdWEnLFxuICAgICAgcHVibGlzaFN1YnRpdGxlNjogJ2NoYXZlIGRlIGFjZXNzbycsXG4gICAgICBwdWJsaXNoU3VidGl0bGU3OlxuICAgICAgICAnYXF1aS4gKmtlcGxlci5nbCDDqSB1bWEgYXBsaWNhw6fDo28gY2xpZW50LXNpZGUsIG9zIGRhZG9zIHBlcm1hbmVjZW0gbm8gc2V1IGJyb3dzZXIuLicsXG4gICAgICBleGFtcGxlVG9rZW46ICdlLmcuIHBrLmFiY2RlZmcueHh4eHh4JyxcbiAgICAgIHBhc3RlVGl0bGU6ICcyLiBDb2xlIGEgdXJsIGRvIHNldSBlc3RpbG8nLFxuICAgICAgcGFzdGVTdWJ0aXRsZTE6ICdPIHF1ZSDDqSB1bWEnLFxuICAgICAgcGFzdGVTdWJ0aXRsZTI6ICdVUkwgZGUgZXN0aWxvJyxcbiAgICAgIG5hbWluZ1RpdGxlOiAnMy4gTm9tZWllIG8gc2V1IGVzdGlsbydcbiAgICB9LFxuICAgIHNoYXJlTWFwOiB7XG4gICAgICBzaGFyZVVyaVRpdGxlOiAnQ29tcGFydGlsaGFyIGEgVVJMIGRvIE1hcGEnLFxuICAgICAgc2hhcmVVcmlTdWJ0aXRsZTogJ0dlcmFyIGEgdXJsIGRvIG1hcGEgZSBjb21wYXJ0aWxoYXIgY29tIG91dHJvcycsXG4gICAgICBjbG91ZFRpdGxlOiAnQXJtYXplbmFtZW50byBDbG91ZCcsXG4gICAgICBjbG91ZFN1YnRpdGxlOiAnQ29uZWN0ZS1zZSBlIGVudmllIG9zIGRhZG9zIGRvIG1hcGEgcGFyYSBvIHNldSBhcm1hemVuYW1lbnRvIGNsb3VkIHBlc3NvYWwnLFxuICAgICAgc2hhcmVEaXNjbGFpbWVyOlxuICAgICAgICAna2VwbGVyLmdsIGlyw6Egc2FsdmFyIG9zIGRhZG9zIGRvIG1hcGEgZW0gc2V1IGFybWF6ZW5hbWVudG8gY2xvdWQgcGVzc29hbCwgYXBlbmFzIHBlc3NvYXMgY29tIGEgVVJMIHBvZGVtIGFjZXNzYXIgbyBzZXUgbWFwYSBlIGRhZG9zLiAnICtcbiAgICAgICAgJ1ZvY8OqIHBvZGUgZWRpdGFyL2RlbGV0YXIgbyBhcnF1aXZvIGRlIGRhZG9zIG5hIHN1YSBjb250YSBkZSBhcm1hemVuYW1lbnRvIGNsb3VkIGVtIHF1YWxxdWVyIG1vbWVudG8uJyxcbiAgICAgIGdvdG9QYWdlOiAnVsOhIHBhcmEgYSBzdWEgcMOhZ2luYSBLZXBsZXIuZ2wge2N1cnJlbnRQcm92aWRlcn0nXG4gICAgfSxcbiAgICBzdGF0dXNQYW5lbDoge1xuICAgICAgbWFwVXBsb2FkaW5nOiAnRW52aWFuZG8gTWFwYScsXG4gICAgICBlcnJvcjogJ0Vycm8nXG4gICAgfSxcbiAgICBzYXZlTWFwOiB7XG4gICAgICB0aXRsZTogJ0FybWF6ZW5hbWVudG8gQ2xvdWQnLFxuICAgICAgc3VidGl0bGU6ICdDb25lY3RlLXNlIHBhcmEgc2FsdmFyIG8gbWFwYSBwYXJhIG8gc2V1IGFybWF6ZW5hbWVudG8gY2xvdWQgcGVzc29hbCdcbiAgICB9LFxuICAgIGV4cG9ydE1hcDoge1xuICAgICAgZm9ybWF0VGl0bGU6ICdGb3JtYXRvIGRvIG1hcGEnLFxuICAgICAgZm9ybWF0U3VidGl0bGU6ICdFc2NvbGhlciBvIGZvcm1hdG8gZGUgbWFwYSBwYXJhIGV4cG9ydGFyJyxcbiAgICAgIGh0bWw6IHtcbiAgICAgICAgc2VsZWN0aW9uOiAnRXhwb3J0YXIgc2V1IG1hcGEgZW0gdW0gYXJxdWl2byBodG1sIGludGVyYXRpdm8uJyxcbiAgICAgICAgdG9rZW5UaXRsZTogJ0NoYXZlIGRlIGFjZXNzbyBkbyBNYXBib3gnLFxuICAgICAgICB0b2tlblN1YnRpdGxlOiAnVXNlIGEgc3VhIHByw7NwcmlhIGNoYXZlIGRlIGFjZXNzbyBNYXBib3ggZW0gc2V1IGFycXVpdm8gaHRtbCAob3BjaW9uYWwpJyxcbiAgICAgICAgdG9rZW5QbGFjZWhvbGRlcjogJ0NvbGUgYSBzdWEgY2hhdmUgZGUgYWNlc3NvIE1hcGJveCcsXG4gICAgICAgIHRva2VuTWlzdXNlV2FybmluZzpcbiAgICAgICAgICAnKiBTZSB2b2PDqiBuw6NvIGZvcm5lY2VyIGEgc3VhIHByw7NwcmlhIGNoYXZlIGRlIGFjZXNzbywgbyBtYXBhIHBvZGUgZmFsaGFyIGVtIGV4aWJpciBhIHF1YWxxdWVyIG1vbWVudG8gcXVhbmRvIG7Ds3Mgc3Vic3RpdHVpcm1vcyBhIG5vc3NhIHBhcmEgZXZpdGFyIG1hdSB1c28uICcsXG4gICAgICAgIHRva2VuRGlzY2xhaW1lcjpcbiAgICAgICAgICAnVm9jw6ogcG9kZSB0cm9jYXIgYSBzdWEgY2hhdmUgZGUgYWNlc3NvIE1hcGJveCBtYWlzIHRhcmRlIHV0aXphbmRvIGFzIGluc3RydcOnw7VlcyBzZWd1aW50ZXM6ICcsXG4gICAgICAgIHRva2VuVXBkYXRlOiAnQ29tbyBhdHVhbGl6YXIgYSBjaGF2ZSBkZSBhY2Vzc28gZGUgdW0gbWFwYSBleGlzdGVudGUuJyxcbiAgICAgICAgbW9kZVRpdGxlOiAnTW9kbyBkbyBNYXBhJyxcbiAgICAgICAgbW9kZVN1YnRpdGxlMTogJ1NlbGVjaW9uYXIgbyBtb2RvIGRvIGFwbGljYXRpdm8uIE1haXMgJyxcbiAgICAgICAgbW9kZVN1YnRpdGxlMjogJ2luZm8nLFxuICAgICAgICBtb2RlRGVzY3JpcHRpb246ICdQZXJtaXRpciB1c3XDoXJpb3MgYSB7bW9kZX0gbyBtYXBhJyxcbiAgICAgICAgcmVhZDogJ2xlcicsXG4gICAgICAgIGVkaXQ6ICdlZGl0YXInXG4gICAgICB9LFxuICAgICAganNvbjoge1xuICAgICAgICBjb25maWdUaXRsZTogJ0NvbmZpZ3VyYcOnw7VlcyBkbyBNYXBhJyxcbiAgICAgICAgY29uZmlnRGlzY2xhaW1lcjpcbiAgICAgICAgICAnQSBjb25maWd1cmHDp8OjbyBkbyBtYXBhIHNlcsOhIGluY2x1aWRhIG5vIGFycXVpdm8gSnNvbi4gU2Ugdm9jw6ogZXN0w6EgdXRpbGl6YW5kbyBrZXBsZXIuZ2wgbm8gc2V1IHByw7NwcmlvIG1hcGEuIFZvY8OqIHBvZGUgY29waWFyIGVzc2EgY29uZmlndXJhw6fDo28gZSBwYXNzYXIgcGFyYSBlbGUgJyxcbiAgICAgICAgc2VsZWN0aW9uOlxuICAgICAgICAgICdFeHBvcnRhciBhdHVhaXMgZGFkb3MgZSBjb25maWd1cmHDp8O1ZXMgZG8gbWFwYSBlbSB1bSDDum5pY28gYXJxdWl2byBKc29uLiBWb2PDqiBwb2RlIG1haXMgdGFyZGUgYWJyaXIgbyBtZXNtbyBtYXBhIGVudmlhbmRvIGVzc2UgYXJxdWl2byBwYXJhIG8ga2VwbGVyLmdsLicsXG4gICAgICAgIGRpc2NsYWltZXI6XG4gICAgICAgICAgJyogQ29uZmlndXJhw6fDo28gZG8gbWFwYSDDqSBhY2xvcGFkbyBjb20gY29uanVudG8gZGUgZGFkb3MgY2FycmVnYWRvcy4g4oCYZGF0YUlk4oCZIMOpIHV0aWxpemFkbyBwYXJhIGxpZ2FyIGFzIGNhbWFkYXMsIGZpbHRyb3MsIGUgZGljYXMgZGUgY29udGV4dG9zIGEgY29uanVudG8gZGUgZGFkb3MgZXhwZWPDrWZpY29zLiAnICtcbiAgICAgICAgICAnUXVhbmRvIHBhc3NhbmRvIGVzc2EgY29uZmlndXJhw6fDo28gcGFyYSBhZGREYXRhVG9NYXAsIHRlbmhhIGNlcnRlemEgZGUgcXVlIG8gaWQgZG8gY29uanVudG8gZGUgZGFkb3MgY29tYmluYSBjb20gbyhzKSBkYXRhSWQvcyBuZXNzYSBjb25maWd1cmHDp8Ojby4nXG4gICAgICB9XG4gICAgfSxcbiAgICBsb2FkaW5nRGlhbG9nOiB7XG4gICAgICBsb2FkaW5nOiAnQ2FycmVnYW5kby4uLidcbiAgICB9LFxuICAgIGxvYWREYXRhOiB7XG4gICAgICB1cGxvYWQ6ICdDYXJyZWdhciBhcnF1aXZvJyxcbiAgICAgIHN0b3JhZ2U6ICdDYXJyZWdhciBkbyBhcm1hemVuYW1lbnRvJ1xuICAgIH0sXG4gICAgdHJpcEluZm86IHtcbiAgICAgIHRpdGxlOiAnQ29tbyBoYWJpbGl0YXIgYW5pbWHDp8OjbyBkZSB2aWFnZW0nLFxuICAgICAgZGVzY3JpcHRpb24xOlxuICAgICAgICAnUGFyYSBhbmltYXIgbyBjYW1pbmhvLCBvIGRhZG8gZ2VvSlNPTiBkZXZlIGNvbnRlciBgTGluZVN0cmluZ2AgbmEgc3VhIHByb3ByaWVkYWRlIGdlb21ldHJ5LCBlIGFzIGNvb3JkZW5hZGFzIG5hIExpbmVTdHJpbmcgZGV2ZW0gdGVyIDQgZWxlbWVudG9zIG5vIHNlZ3VpbnRlIGZvcm1hdG8nLFxuICAgICAgY29kZTogJyBbbG9uZ2l0dWRlLCBsYXRpdHVkZSwgYWx0aXR1ZGUsIGRhdGFdICcsXG4gICAgICBkZXNjcmlwdGlvbjI6XG4gICAgICAgICdjb20gdW0gdWx0aW1vIGVsZW1lbnRvIHNlbmRvIHVtYSBkYXRhLiBVbSBmb3JtYXRvIGRlIGRhdGEgdsOhbGlkYSBpbmNsdWkgc2VndW5kb3MgdW5peCBjb21vIGAxNTY0MTg0MzYzYCBvdSBlbSBtaWxpc2VndW5kb3MgY29tbyBgMTU2NDE4NDM2MzAwMGAuJyxcbiAgICAgIGV4YW1wbGU6ICdFeGVtcGxvOidcbiAgICB9LFxuICAgIGljb25JbmZvOiB7XG4gICAgICB0aXRsZTogJ0NvbW8gZGVzZW5oYXIgw61jb25lcycsXG4gICAgICBkZXNjcmlwdGlvbjE6XG4gICAgICAgICdObyBzZXUgY3N2LCBjcmllIHVtYSBjb2x1bmEsIGNvbG9xdWUgbyBub21lIGRvIMOtY29uZSBxdWUgdm9jw6ogcXVlciBkZXNlbmhhciBuZWxlLiBWb2PDqiBwb2RlIGRlaXhhciBvIGNhbXBvIHZhemlvIHNlIHZvY8OqIG7Do28gZGVzZWphciBxdWUgbyDDrWNvbmUgYXBhcmXDp2EgcGFyYSBhbGd1bnMgcG9udG9zLiBRdWFuZG8gYSBjb2x1bmEgdGVtIG5vbWUnLFxuICAgICAgY29kZTogJ2ljb24nLFxuICAgICAgZGVzY3JpcHRpb24yOiAnIGtlcGxlci5nbCBpcsOhIGF1dG9tYXRpY2FtZW50ZSBjcmlhciB1bWEgY2FtYWRhIGRlIMOtY29uZSBwYXJhIHZvY8OqLicsXG4gICAgICBleGFtcGxlOiAnRXhlbXBsb3M6JyxcbiAgICAgIGljb25zOiAnw41jb25lcydcbiAgICB9LFxuICAgIHN0b3JhZ2VNYXBWaWV3ZXI6IHtcbiAgICAgIGxhc3RNb2RpZmllZDogJ01vZGlmaWNhZG8gaMOhIHtsYXN0VXBkYXRlZH0nLFxuICAgICAgYmFjazogJ1ZvbHRhcidcbiAgICB9LFxuICAgIG92ZXJ3cml0ZU1hcDoge1xuICAgICAgdGl0bGU6ICdTYWx2YW5kbyBtYXBhLi4uJyxcbiAgICAgIGFscmVhZHlFeGlzdHM6ICdqw6EgZXhpc3RlIG5vIG1hcGEge21hcFNhdmVkfS4gVm9jw6ogZGVzZWphcmlhIHNvYnJlc2NyZXZlciBvIG1hcGE/J1xuICAgIH0sXG4gICAgbG9hZFN0b3JhZ2VNYXA6IHtcbiAgICAgIGJhY2s6ICdWb2x0YXInLFxuICAgICAgZ29Ub1BhZ2U6ICdWw6EgcGFyYSBhIHN1YSBww6FnaW5hIHtkaXNwbGF5TmFtZX0gZG8gS2VwbGVyLmdsJyxcbiAgICAgIHN0b3JhZ2VNYXBzOiAnQXJtYXplbmFtZW50byAvIE1hcGFzJyxcbiAgICAgIG5vU2F2ZWRNYXBzOiAnTmVuaHVtIG1hcGEgc2Fsdm8nXG4gICAgfVxuICB9LFxuICBoZWFkZXI6IHtcbiAgICB2aXNpYmxlTGF5ZXJzOiAnQ2FtYWRhcyBWaXPDrXZlaXMnLFxuICAgIGxheWVyTGVnZW5kOiAnTGVnZW5kYSBkYSBDYW1hZGEnXG4gIH0sXG4gIGludGVyYWN0aW9uczoge1xuICAgIHRvb2x0aXA6ICdEaWNhIGRlIGNvbnRleHRvJyxcbiAgICBicnVzaDogJ1BpbmNlbCcsXG4gICAgY29vcmRpbmF0ZTogJ0Nvb3JkZW5hZGFzJ1xuICB9LFxuICBsYXllckJsZW5kaW5nOiB7XG4gICAgdGl0bGU6ICdNaXN0dXJhIGRlIENhbWFkYXMnLFxuICAgIGFkZGl0aXZlOiAnYWRpdGl2bycsXG4gICAgbm9ybWFsOiAnbm9ybWFsJyxcbiAgICBzdWJ0cmFjdGl2ZTogJ3N1YnRyYXRpdm8nXG4gIH0sXG4gIGNvbHVtbnM6IHtcbiAgICB0aXRsZTogJ0NvbHVuYXMnLFxuICAgIGxhdDogJ2xhdCcsXG4gICAgbG5nOiAnbG9uJyxcbiAgICBhbHRpdHVkZTogJ2FsdGl0dWRlJyxcbiAgICBpY29uOiAnw61jb25lJyxcbiAgICBnZW9qc29uOiAnZ2VvanNvbicsXG4gICAgYXJjOiB7XG4gICAgICBsYXQwOiAnb3JpZ2VtIGxhdCcsXG4gICAgICBsbmcwOiAnb3JpZ2VtIGxuZycsXG4gICAgICBsYXQxOiAnZGVzdGlubyBsYXQnLFxuICAgICAgbG5nMTogJ2Rlc3Rpbm8gbG5nJ1xuICAgIH0sXG4gICAgbGluZToge1xuICAgICAgYWx0MDogJ29yaWdlbSBhbHRpdHVkZScsXG4gICAgICBhbHQxOiAnZGVzdGlubyBhbHRpdHVkZSdcbiAgICB9LFxuICAgIGdyaWQ6IHtcbiAgICAgIHdvcmxkVW5pdFNpemU6ICdUYW1hbmhvIGRhIEdyYWRlIChrbSknXG4gICAgfSxcbiAgICBoZXhhZ29uOiB7XG4gICAgICB3b3JsZFVuaXRTaXplOiAnUmFpbyBkbyBIZXjDoWdvbm8gKGttKSdcbiAgICB9XG4gIH0sXG4gIGNvbG9yOiB7XG4gICAgY3VzdG9tUGFsZXR0ZTogJ1BhbGV0YXMgY3VzdG9taXphZGFzJyxcbiAgICBzdGVwczogJ2NhbWluaG9zJyxcbiAgICB0eXBlOiAndGlwbycsXG4gICAgcmV2ZXJzZWQ6ICdyZXZlcnNvJ1xuICB9LFxuICBzY2FsZToge1xuICAgIGNvbG9yU2NhbGU6ICdFc2NhbGEgZGEgQ29yJyxcbiAgICBzaXplU2NhbGU6ICdUYW1hbmhvIGRhIEVzY2FsYScsXG4gICAgc3Ryb2tlU2NhbGU6ICdFc2NhbGEgZG8gVHJhw6dvJyxcbiAgICBzY2FsZTogJ0VzY2FsYSdcbiAgfSxcbiAgZmlsZVVwbG9hZGVyOiB7XG4gICAgbWVzc2FnZTogJ0FycmFzdGUgZSBzb2x0ZSBzZXUocykgYXJxdWl2byhzKSBhcXVpJyxcbiAgICBjaHJvbWVNZXNzYWdlOlxuICAgICAgJypVc3XDoXJpb3MgZG8gY2hyb21lOiBPIGxpbWl0ZSBkZSB0YW1hbmhvIGRlIGFycXVpdm8gw6kgMjUwbWIsIHNlIHZvY8OqIHByZWNpc2EgZmF6ZXIgdXBsb2FkIGRlIGFycXVpdm9zIG1haW9yZXMgdGVudGUgbyBTYWZhcmknLFxuICAgIGRpc2NsYWltZXI6XG4gICAgICAnKmtlcGxlci5nbCDDqSB1bWEgYXBsaWNhw6fDo28gY2xpZW50LXNpZGUsIHNlbSB1bSBzZXJ2aWRvciBiYWNrZW5kLiBPcyBkYWRvcyBmaWNhbSBhcGVuYXMgbmEgc3VhIG3DoXF1aW5hL2Jyb3dzZXIuICcgK1xuICAgICAgJ05lbmh1bWEgaW5mb3JtYcOnw6NvIG91IGRhZG9zIGRlIG1hcGEgw6kgZW52aWFkbyBwYXJhIHF1YWxxdWVyIHNlcnZlci4nLFxuICAgIGNvbmZpZ1VwbG9hZE1lc3NhZ2U6XG4gICAgICAnRW52aWUge2ZpbGVGb3JtYXROYW1lc30gb3UgbWFwYXMgc2Fsdm9zICoqSnNvbioqLiBMZWlhIG1haXMgc29icmUgWyoqdGlwb3MgZGUgYXJxdWl2b3Mgc3Vwb3J0YWRvcyoqXScsXG4gICAgYnJvd3NlRmlsZXM6ICdwcm9jdXJlIHNldXMgYXJxdWl2b3MnLFxuICAgIHVwbG9hZGluZzogJ0VudmlhbmRvJyxcbiAgICBmaWxlTm90U3VwcG9ydGVkOiAnQXJxdWl2byB7ZXJyb3JGaWxlc30gbsOjbyDDqSBzdXBvcnRhZG8uJyxcbiAgICBvcjogJ291J1xuICB9LFxuICBkZW5zaXR5OiAnZGVuc2lkYWRlJyxcbiAgJ0J1ZyBSZXBvcnQnOiAnUmVwb3J0YXIgQnVnJyxcbiAgJ1VzZXIgR3VpZGUnOiAnR3VpYSBkbyBVc3XDoXJpbycsXG4gIFNhdmU6ICdTYWx2YXInLFxuICBTaGFyZTogJ0NvbXBhcnRpbGhhcidcbn07XG4iXX0=