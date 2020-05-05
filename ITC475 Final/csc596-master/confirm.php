
<html lang="en">
    <head>
        <meta charset = "utf-8" name = "viewport" content="width= device-width, initial-scale=1">
    

        
        <meta name="travel">
		<link rel="stylesheet" type="text/css" href="stylecontact.css">
        
        <title> Drive Till You Die</title> 
		
    </head>


    <body>
       
		<div class="thanks">
		
		Thanks for playing!!!
		</div>
			<br/>
			
			
	<div class="urInfo">
		Your Game:
		</div>	
		<br/>
		
		
		 <?php 
			
			require_once 'login.php';
			$conn = new mysqli($hn, $un, $pw, $db);
			if ($conn -> connect_error) die($conn -> connect_error);
			$name = $_GET["username"];
			$high_score = $_GET["score"];
		
		 
		
	
		?>
		
		
		
		<div id="scoreUserMain">
        <div>Name: <?php 
			echo $name;
		 ?></div>
		 <div>Score: <?php 
			echo $high_score;
			
		 ?></div></div>
		 <?php
		 
		 
		 $sql = "INSERT INTO scores(username, score) VALUES('$name', '$high_score')";
		
		if(mysqli_query($conn, $sql)){
						
			  header( "refresh:5;url=admin.php" );
			  echo 'Check if you made a high score <a class="adminM" href="admin.php">here</a>.';
			
		}else{
		echo 'query error: ' . mysqli_error($conn);
		}
       ?> 
		
      
    </body>
	
	
	
	

    


</html>