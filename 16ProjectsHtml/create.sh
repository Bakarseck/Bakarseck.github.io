mkdir $1

cd $1

echo '<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css" >
    <title>Document</title>
</head>
<body>
    
<script src="js/index.js"></script>
</body>
</html>' > index.html

mkdir js css

touch js/index.js css/style.css