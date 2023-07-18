function onOpen(){
  // creamos un menú obteniendo la User Interface (getUi)
  // del Spreadsheet y le asignamos un nombre al menú principal
  // en este caso le hemos puesto: "HtmlService"
  var menu = SpreadsheetApp.getUi().createMenu("HtmlService");
  // Agregamos un elemento al menú con addItem("titulo del menú", "funcion_a_ejecutar")
  // Las funciones deben ir entre comillas dobles, por que es el nombre de éstas
  menu.addItem("HtmlService Simple", "HtmlServiceSimple");
  // idem
  menu.addItem("HtmlService desde archivo", "HtmlServiceDesdeArchivo");
  // idem
  menu.addItem("HtmlService template por parametro", "HtmlServiceDesdeTemplatePorParametro");
  // idem
  menu.addItem("HtmlService template desde archivo ", "HtmlServiceDesdeTemplateDesdeArchivo");
  // Agregamos el menú a la User Interface por medio del método addToUi
  menu.addToUi();
}

//Retorna la página principal
function doGet() {
  let layout = HtmlService.createHtmlOutputFromFile('index');
  layout.saludo = "Bienvenido/a A Kantar Karaoke Bar";
  return layout.evaluate();
}

// La clase HtmlService nos permite utilizar Html para interactuar con la interfaz web
// Más información es: https://developers.google.com/apps-script/guides/html/

// Muestra un mensaje simple en HTML creado a partir de una línea html
// o variable con contenido html
function HtmlServiceSimple(){
  // creamos una variable con contenido html
  var miHtml = "<b>Hola mundo</b>";
  // asignamos la salida del servicio HTML a una variable
  var html =  HtmlService.createHtmlOutput(miHtml);
  // mostramos el resultado del Html en el Spreadsheet activo
  SpreadsheetApp.getActiveSpreadsheet().show(html);
}

function HtmlServiceDesdeArchivo(){
  // creamos una variable que recibe la salida html del archivo1
  // NO es necesario especificar que es un archivo con extensión html
  // ya que Google Apps Script lo detecta
  // Es importante destacar que simpre debe ser un archivo html
  // no puede ser uno con extensión .gs
  var html =  HtmlService.createHtmlOutputFromFile("archivo1");
  SpreadsheetApp.getActiveSpreadsheet().show(html);
}

// A diferencia de los ejemplos anteriores,
// aquí se crea un archivo a partir de un template o platilla
// Al ser una plantilla, las líneas de código integradas
// entre "<? y ?> son interpretadas por GAS,
// tal cual sucedería en cualquier otro lenguaje de script interpretado para web

function HtmlServiceDesdeTemplatePorParametro(){
  // Se añade el método .evaluate() para que se pueda evaluar
  // o interpretar las funciones de Google Apps Script
  // que van integradas en el código
  var html =  HtmlService.createTemplate("Hola mundo, la hora es <?= new Date() ?>").evaluate();
  SpreadsheetApp.getActiveSpreadsheet().show(html);
}


// En éste caso, se interpreta el código del archivo2,
// el cual analizaremos más a fondo
function HtmlServiceDesdeTemplateDesdeArchivo(){
  var html =  HtmlService.createTemplateFromFile("archivo2").evaluate();
  SpreadsheetApp.getActiveSpreadsheet().show(html);
}


