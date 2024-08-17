var cel = document.getElementById("cel");
        var fah = document.getElementById("fah");

        cel.addEventListener('input', function(){
            let c = parseFloat(this.value);
            let f = (c * 9 / 5) + 32;
            fah.value = f.toFixed(2);
        });

        fah.addEventListener('input', function(){
            let f = parseFloat(this.value);
            let c = (f - 32) * 5 / 9;
            cel.value = c.toFixed(2);
        });

        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        function changeBackgroundColor() {
            document.body.style.backgroundColor = getRandomColor();
        }

        setInterval(changeBackgroundColor, 3000); // Change color every 3 seconds