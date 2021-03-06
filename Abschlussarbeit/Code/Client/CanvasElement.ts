namespace MagicCanvas {
    export class CanvasElement {
        public position: Vector;
        public velocity: Vector;
        public selectedcolor: string;
        public selectedform: string;
        public selectedanimation: string;

        public directionx: number = 1;
        public directiony: number = 1;
        public angle: number = 0;
        public size: number = 0;
        

        constructor(_form: string, _color: string, _animation: string, _position?: Vector) {
            // super(_position);

            if (_position)
                this.position = _position;
            else
                this.position = new Vector(0, 0);

            this.velocity = new Vector(0, 0);
            this.velocity.random(20, 80);

            this.selectedform = _form;
            this.selectedcolor = _color;
            this.selectedanimation = _animation;
        }

        public animate(canvasWidth: number, canvasHeight: number): void {
            if (this.selectedanimation == "position") {
                // element.move();
                xpos = this.position.x;
                ypos = this.position.y;

                // rechts
                if (xpos + this.size > canvasWidth)
                    // -1 damit es sich in die entgegengesetze Richtung weiter bewegt
                    this.directionx = -1;

                // unten    
                if (ypos + this.size > canvasHeight)
                    this.directiony = -1;

                // links    
                if (xpos < 0)
                    this.directionx = 1;

                // oben    
                if (ypos < 0)
                    this.directiony = 1;

                xpos = xpos + this.directionx;
                ypos = ypos + this.directiony;

                // Kommentar einfügen
                this.position.x = xpos;
                this.position.y = ypos;
            }
            else if (this.selectedanimation == "rotate") {
                if (this.angle < 360)
                    this.angle = this.angle + 1;
                else
                    this.angle = 0;                
            }

            this.draw();            

        }

        public draw(): void {
            if (this.selectedform == "circle")
                this.drawCircle();
            else if (this.selectedform == "square")
                this.drawSquare();
            else if (this.selectedform == "triangle")
                this.drawTriangle();
            else if (this.selectedform == "flash")
                this.drawFlash();
        }

        private drawCircle(): void {
            let r: number = 20;
            this.size = 20;

            crc2.beginPath();
            crc2.arc(this.position.x + this.size, this.position.y + this.size, r, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.restore();
            // Linienfarbe
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            // mit Farbe füllen
            crc2.fillStyle = this.selectedcolor;
            crc2.fill();
        }

        private drawTriangle(): void {
            this.size = 40; 

            if (this.selectedanimation == "rotate") {
                // Matrix transformation
                crc2.translate(this.position.x + (this.size / 2), this.position.y + (this.size / 2));
                crc2.rotate(this.angle * Math.PI / 180);  
                crc2.translate(-1 * (this.position.x + (this.size / 2)), -1 * (this.position.y + (this.size / 2)));
            }     

            crc2.beginPath();
            crc2.moveTo(this.position.x + 20, this.position.y + 0);
            crc2.lineTo(this.position.x + 40, this.position.y + 40);
            crc2.lineTo(this.position.x + 0, this.position.y + 40);
            crc2.closePath();
            // Linienfarbe
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            // mit Farbe füllen
            crc2.fillStyle = this.selectedcolor;
            crc2.fill();
            
            if (this.selectedanimation == "rotate") {
                // Matrix transformation
                crc2.translate(this.position.x + (this.size / 2), this.position.y + (this.size / 2));
                crc2.rotate(-this.angle * Math.PI / 180);  
                crc2.translate(-1 * (this.position.x + (this.size / 2)), -1 * (this.position.y + (this.size / 2)));
            }
        }

        private drawSquare(): void {
            this.size = 40;

            if (this.selectedanimation == "rotate") {
                // Matrix transformation
                crc2.translate(this.position.x + (this.size / 2), this.position.y + (this.size / 2));
                crc2.rotate(this.angle * Math.PI / 180);  
                crc2.translate(-1 * (this.position.x + (this.size / 2)), -1 * (this.position.y + (this.size / 2)));
            }

            crc2.beginPath();
            crc2.rect(this.position.x, this.position.y, 55, 40);
            // Linienfarbe
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            // mit Farbe füllen
            crc2.fillStyle = this.selectedcolor;
            crc2.fill();

            if (this.selectedanimation == "rotate") {
                // Matrix transformation
                crc2.translate(this.position.x + (this.size / 2), this.position.y + (this.size / 2));
                crc2.rotate(-this.angle * Math.PI / 180);  
                crc2.translate(-1 * (this.position.x + (this.size / 2)), -1 * (this.position.y + (this.size / 2)));
            }
        }

        private drawFlash(): void {
            this.size = 20;

            if (this.selectedanimation == "rotate") {
                // Matrix transformation
                crc2.translate(this.position.x + (this.size / 2), this.position.y + (this.size / 2));
                // Canvas wird um einen kleinen Winkel rotiert
                crc2.rotate(this.angle * Math.PI / 180);  
                crc2.translate(-1 * (this.position.x + (this.size / 2)), -1 * (this.position.y + (this.size / 2)));
            }

            crc2.beginPath();
            // crc2.translate(40, 40);
            crc2.moveTo(this.position.x, this.position.y);
            crc2.lineTo(this.position.x + 20, this.position.y);
            crc2.lineTo(this.position.x + 15, this.position.y + 25);
            crc2.lineTo(this.position.x + 25, this.position.y + 25);
            crc2.lineTo(this.position.x + 10, this.position.y + 50);
            crc2.moveTo(this.position.x, this.position.y);
            crc2.lineTo(this.position.x, this.position.y + 30);
            crc2.lineTo(this.position.x + 12, this.position.y + 30);
            crc2.lineTo(this.position.x + 10, this.position.y + 50);
            // Linienfarbe
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            // mit Farbe füllen
            crc2.fillStyle = this.selectedcolor;
            crc2.fill();

            if (this.selectedanimation == "rotate") {
                // Matrix transformation
                crc2.translate(this.position.x + (this.size / 2), this.position.y + (this.size / 2));
                crc2.rotate(-this.angle * Math.PI / 180);  
                crc2.translate(-1 * (this.position.x + (this.size / 2)), -1 * (this.position.y + (this.size / 2)));
            }
        }
    }
}    