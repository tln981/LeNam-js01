<!DOCTYPE html>
<html>
<head>
    <title>Game Example</title>
    <style>
        #gameCanvas {
            border: 1px solid black;
        }
    </style>
</head>
<body>
    <canvas id="gameCanvas" width="800" height="600"></canvas>
    <script>
        class Node {
            constructor() {
                this.children = [];
                this.position = { x: 0, y: 0 };
            }

            addChild(childNode) {
                this.children.push(childNode);
            }

            removeChild(childNode) {
                const index = this.children.indexOf(childNode);
                if (index !== -1) {
                    this.children.splice(index, 1);
                }
            }

            update() {
                // Cập nhật các thuộc tính hoặc logic của Node
            }

            draw(context) {
                // Vẽ Node và tất cả các Node con
                this.children.forEach(child => {
                    child.draw(context);
                });
            }
        }

        class Sprite extends Node {
            constructor(imageUrl) {
                super();
                this.image = new Image();
                this.image.src = imageUrl;
            }

            draw(context) {
                context.drawImage(this.image, this.position.x, this.position.y);
            }
        }

        class Label extends Node {
            constructor(text, font, color) {
                super();
                this.text = text;
                this.font = font;
                this.color = color;
            }

            draw(context) {
                context.fillStyle = this.color;
                context.font = this.font;
                context.fillText(this.text, this.position.x, this.position.y);
            }
        }

        // Bắt đầu game
        window.onload = function() {
            const canvas = document.getElementById('gameCanvas');
            const context = canvas.getContext('2d');

            // Tạo Node gốc để chứa tất cả các đối tượng trong game
            const gameRoot = new Node();

            // Tạo một Sprite người chơi
            const playerSprite = new Sprite('link_to_player_image.png');
            playerSprite.position.x = 100;
            playerSprite.position.y = 100;
            gameRoot.addChild(playerSprite);

            // Tạo một Label hiển thị điểm số
            const scoreLabel = new Label('Score: 0', '20px Arial', 'black');
            scoreLabel.position.x = 10;
            scoreLabel.position.y = 30;
            gameRoot.addChild(scoreLabel);

            // Loop game
            function gameLoop() {
                context.clearRect(0, 0, canvas.width, canvas.height);

                // Cập nhật và vẽ tất cả các Node trong game
                gameRoot.update();
                gameRoot.draw(context);

                requestAnimationFrame(gameLoop);
            }

            // Khởi tạo game khi tài nguyên đã được tải
            window.requestAnimationFrame(gameLoop);
        };
    </script>
</body>
</html>
