function extractFile(filePath) {
    const pathArray = filePath.split('\\');
    const file = pathArray[pathArray.length - 1];

    const fileArray = file.split('.');
    const fileExtension = fileArray.pop();
    const fileName = fileArray.join('.');

    console.log('File name:', fileName);
    console.log('File extension:', fileExtension);
}