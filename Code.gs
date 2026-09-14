function doGet() {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('HARMONY LAB PROTOTYPE')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}