$(function() { 
        var mapa = $("#map").geomap({
            center: [-79.2050, -3.9906],
            mode: "pan",
            zoom: 14,
            zoombar: true
        } );
        // append a red Polygon
       var centro_sur = {
          type: "Polygon",
          coordinates: [[
            [-79.1977, -3.9975],
            [-79.2074, -3.9985],
            [-79.2073, -4.0040],
            [-79.2055, -4.0065],
            [-79.2015, -4.0065],
            [-79.1973, -4.0055]
          ]]
        };
        var centro_norte = {
          type: "Polygon",
          coordinates: [[
            [-79.1980, -3.9906],
            [-79.2075, -3.9906],
            [-79.2074, -3.9985],
            [-79.1977, -3.9975]
          ]]
        };
        var este = {
          type: "Polygon",
          coordinates: [[
            [-79.1813, -3.9965],
            [-79.1983, -3.9848],
            [-79.2010, -3.9850],
            [-79.1980, -3.9906],
            [-79.1973, -4.0055],
            [-79.2010, -4.0200],
            [-79.1992, -4.0290],
            [-79.1900, -4.0290]
          ]]
        };
        var sur = {
          type: "Polygon",
          coordinates: [[
            [-79.2073, -4.0040],
            [-79.2055, -4.0065],
            [-79.2015, -4.0065],
            [-79.1973, -4.0055],
            [-79.2010, -4.0200],
            [-79.1992, -4.0290],
            [-79.1900, -4.0290],
            [-79.1950, -4.0550],
            [-79.2200, -4.0500],
            [-79.2200, -4.0240],
            [-79.2090, -4.0250]
          ]]
        };
        var oeste = {
          type: "Polygon",
          coordinates: [[
            [-79.2073, -4.0040],
            [-79.2075, -3.9906],
            [-79.2100, -3.9900],
            [-79.2079, -3.9790],
            [-79.2530, -3.9820],
            [-79.2500, -4.0200],
            [-79.2200, -4.0500],
            [-79.2200, -4.0240],
            [-79.2090, -4.0250]
          ]]
        };
        var norte = {
          type: "Polygon",
          coordinates: [[
            [-79.1980, -3.9906],
            [-79.2075, -3.9906],
            [-79.2075, -3.9906],
            [-79.2100, -3.9900],
            [-79.2079, -3.9790],
            [-79.2530, -3.9819],
            [-79.2353, -3.9150],
            [-79.2303, -3.9150],
            [-79.1803, -3.9800],
            [-79.1813, -3.9965],
            [-79.1983, -3.9848],
            [-79.2010, -3.9850]
          ]]
        };
        mapa.geomap("append", centro_norte, { color: "#F60D0D" },'<span style="font-weigth: bolder; color: #F60D0D;">ZONA CENTRO NORTE</span>');
        mapa.geomap("append", centro_sur, { color: "#99782A" },'<span style="font-weigth: bolder; color: #99782A;">ZONA CENTRO SUR</span>');
        mapa.geomap("append", sur, { color: "#3CB371" },'<span style="font-weigth: bold; color: #3CB371;">ZONA SUR</span>');
        mapa.geomap("append", oeste, { color: "#C78AF0" },'<span style="font-weigth: bold; color: #C78AF0;">ZONA OESTE</span>');
        mapa.geomap("append", este, { color: "#6C98E4" },'<span style="font-weigth: bold; color: #6C98E4;">ZONA ESTE</span>');
        mapa.geomap("append", norte, { color: "#1DAFAD" },'<span style="font-weigth: bold; color: #1DAFAD;">ZONA NORTE</span>');
});
