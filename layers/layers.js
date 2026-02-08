var wms_layers = [];


        var lyr_googlesatellitehybrid_0 = new ol.layer.Tile({
            'title': 'google satellite hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Zona1SIRIRNP_1 = new ol.format.GeoJSON();
var features_Zona1SIRIRNP_1 = format_Zona1SIRIRNP_1.readFeatures(json_Zona1SIRIRNP_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zona1SIRIRNP_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zona1SIRIRNP_1.addFeatures(features_Zona1SIRIRNP_1);
var lyr_Zona1SIRIRNP_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zona1SIRIRNP_1, 
                style: style_Zona1SIRIRNP_1,
                popuplayertitle: 'Zona 1 SIRI RNP',
                interactive: true,
                title: '<img src="styles/legend/Zona1SIRIRNP_1.png" /> Zona 1 SIRI RNP'
            });
var format_G8974441990_2 = new ol.format.GeoJSON();
var features_G8974441990_2 = format_G8974441990_2.readFeatures(json_G8974441990_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_G8974441990_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_G8974441990_2.addFeatures(features_G8974441990_2);
var lyr_G8974441990_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_G8974441990_2, 
                style: style_G8974441990_2,
                popuplayertitle: 'G-897444-1990',
                interactive: true,
                title: '<img src="styles/legend/G8974441990_2.png" /> G-897444-1990'
            });
var group_MapaCatastral = new ol.layer.Group({
                                layers: [lyr_Zona1SIRIRNP_1,lyr_G8974441990_2,],
                                fold: 'open',
                                title: 'Mapa Catastral'});
var group_Cartografia5k = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Cartografia 5k'});
var group_Cartografia25k = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Cartografia 25k'});
var group_Mosaicosdehojas = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Mosaicos de hojas'});
var group_Ortofotos = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Ortofotos'});

lyr_googlesatellitehybrid_0.setVisible(true);lyr_Zona1SIRIRNP_1.setVisible(true);lyr_G8974441990_2.setVisible(true);
var layersList = [lyr_googlesatellitehybrid_0,group_MapaCatastral];
lyr_Zona1SIRIRNP_1.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_G8974441990_2.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', 'AreaHa': 'AreaHa', });
lyr_Zona1SIRIRNP_1.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', });
lyr_G8974441990_2.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', 'AreaHa': 'TextEdit', });
lyr_Zona1SIRIRNP_1.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_G8974441990_2.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', 'AreaHa': 'no label', });
lyr_G8974441990_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});