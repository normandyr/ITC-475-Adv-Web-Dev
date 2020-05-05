<?php 
			require_once 'login.php';
			$conn = mysqli_connect($hn, $un, $pw, $db);
			if(!$conn){
				echo 'connection error: ' . mysqli_connect_error();
			}
			
			
			$sql = 'SELECT * FROM scores';
			
			$result = mysqli_query($conn, $sql);
			
			$scores = mysqli_fetch_all($result, MYSQLI_ASSOC);
			//print_r($scores);
			
			$sql1 = 'SELECT score, username FROM scores ORDER BY score DESC';
			$result1 = mysqli_query($conn, $sql1);
			
			
			$scores = mysqli_fetch_all($result1);
			$first = $scores[0][0];
			if($scores[1][0]){
				$second = $scores[1][0];
				
			}
			
			$third = $scores[2][0];
			if($scores[2][0]){
				$third = $scores[2][0];
			}else{
				$third = 0;
			}
			if($scores[3][0]){
				$fourth = $scores[3][0];
			}else{
				$fourth = 0;
			}
			if($scores[4][0]){
				$fifth = $scores[4][0];
			}else{
				$fifth = 0;
			}
			if($scores[5][0]){
				$sixth = $scores[5][0];
			}else{
				$sixth = 0;
			}
			if($scores[6][0]){
				$seventh = $scores[6][0];
			}else{
				$seventh = 0;
			}
			
			if($scores[7][0]){
				$eigth = $scores[7][0];
			}else{
				$eigth = 0;
			}
			
			if($scores[8][0]){
				$ninth = $scores[8][0];
			}else{
				$ninth = 0;
			}
			
			if($scores[9][0]){
				$tenth = $scores[9][0];
			}else{
				$tenth = 0;
			}
			
			
			
			mysqli_free_result($result);
			
			mysqli_close($conn);
			
			//print_r($db);
		
			
			
			
			
			?>
			
<!doctype html>

<html lang="en">
    <head>
        <meta charset = "utf-8" name = "viewport" content="width= device-width, initial-scale=1"/>
    

        
        <meta name="travel">
		<link rel="stylesheet" type="text/css" href="stylecontact.css">
        
        <title id="leaderbb"> LeaderBoard</title> 
		
    </head>
    
    
   
     

    <body>
	
	
	
	
	
	<div class="scoreboard">SCORES!!!
			<div id= "first">First: <?php echo htmlspecialchars($first); ?> </div>
			<div id="second">Second: <?php echo htmlspecialchars($second); ?> </div>
			<div>Third: <?php echo htmlspecialchars($third); ?> </div>
			<div>Fourth: <?php echo htmlspecialchars($fourth); ?> </div>
			<div>Fifth: <?php echo htmlspecialchars($fifth); ?> </div>
			<div>Sixth: <?php echo htmlspecialchars($sixth); ?> </div>
			<div>Seventh: <?php echo htmlspecialchars($seventh); ?> </div>
			<div>Eighth: <?php echo htmlspecialchars($eigth); ?> </div>
			<div>Ninth: <?php echo htmlspecialchars($ninth); ?> </div>
			<div>Tenth: <?php echo htmlspecialchars($tenth); ?> </div>
			
			</div>
			</br>
			</br>
			
       
		 <div >
			Thanks for playing.  This game uses matter.js and is a modified version of a project I did for CSC 596 in Fall 2019. https://normandyr.github.io/csc596/
                
            </div> 
			<div >
			Information regarding matter.js can be found at https://brm.io/matter-js/docs/index.html
                
            </div>   
			
			<div >
			CDN for jquery usage is found here: https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.js 	
                
            </div>
			<div >
			Two other scripts used include: decomp.min.js and decomp.js	
                </div>
				<div >
			Finally the backend for this project is based on PHP with the database using XAMPP https://www.apachefriends.org/index.html downloaded for Apache and MySQL
                </div>
		
        
        
		
      
    </body>
	
	
	
	<footer style=" position: relative; bottom: -5px; width: 100%">
	<div class="foot" style=" position: relative;">
           
		
          
        </div>
		
       

      
    </footer>


</html>