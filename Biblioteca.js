function Tocando () {

    if (retMovendo.x - retFixo.x < retFixo.width / 2 + retMovendo.width / 2
    && retFixo.x-retMovendo.x <retFixo.width / 2 + retMovendo.width / 2
    &&retMovendo.y - retFixo.y < retFixo.height / 2 + retMovendo.height / 2
    && retFixo.y-retMovendo.y <retFixo.height / 2 + retMovendo.height / 2) {
      retMovendo.shapeColor = "red";
      retFixo.shapeColor = "red";
    } else {
      retMovendo.shapeColor = "green";
      retFixo.shapeColor = "green";
    }

}