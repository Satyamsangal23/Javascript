<!DOCTYPE html>
<html>
<head>
    <title>DOM Program</title>
</head>
<body>
    <h1>Welcome</h1>
    <p id="p1">How are you? I am a paragraph.</p>
    <button onclick="f1()">Click</button>

    <script>
        function f1() {
            let x = document.getElementById("p1");
            alert(x.innerHTML)="this is my modified paragraph ";
        }
    </script>
</body>
</html>
