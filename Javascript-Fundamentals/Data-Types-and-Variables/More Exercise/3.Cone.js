function cone(radius, height) {
    let volume = (Math.PI * Math.pow(radius, 2) * height) / 3;
    let slantHeight = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
    let lateralSurfaceArea = Math.PI * radius * slantHeight;
    let baseSurfaceArea = Math.PI * Math.pow(radius, 2);
    let totalSurfaceArea = lateralSurfaceArea + baseSurfaceArea;

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${totalSurfaceArea.toFixed(4)}`);
}
