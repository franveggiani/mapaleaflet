document.addEventListener("DOMContentLoaded", () => {
    var map = L.map("map").setView([-32.8501701, -68.8466544], 15);

    L.tileLayer('https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/mapabase_gris@EPSG%3A3857@png/{z}/{x}/{-y}.png', {
        maxZoom: 19
    }).addTo(map);

    L.tileLayer.wms('https://wms.ign.gob.ar/geoserver/ows?', {
        layers: 'ign:estructuras_operativas_y_defensivas_FA517',
        format: 'image/png',
        transparent: true
    }).addTo(map);

});
