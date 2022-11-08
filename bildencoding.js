function runLengthEncode() {
    const input = document.getElementById("fileInput");
    const reader = new FileReader();
    reader.onload = function () {
        const img = new Image();
        img.onload = function () {
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            const context = canvas.getContext("2d");
            context.drawImage(img, 0, 0);
            const imageData = context.getImageData(
                0,
                0,
                canvas.width,
                canvas.height
            );
            const data = imageData.data;
            var greyscale_arr = [];
            console.log("Data-Length: " + data.length);
            for (var i = 0; i < data.length; i += 4) {
                let avg = parseInt((data[i] + data[i + 1] + data[i + 2]) / 3);
                greyscale_arr.push(avg);
            }
        };
        img.src = reader.result;
    };
    reader.readAsDataURL(input.files[0]);
}