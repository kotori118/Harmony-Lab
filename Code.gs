function doGet() {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('ハモリラボ 試作版')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}