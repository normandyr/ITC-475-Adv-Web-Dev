<?php 
			require_once 'login.php';
			$conn = mysqli_connect($hn, $un, $pw, $db);
			if(!$conn){
				echo 'connection error: ' . mysqli_connect_error();
			}
			
			
			$sql = 'SELECT * FROM customer';
			
			$result = mysqli_query($conn, $sql);
			
			$customer = mysqli_fetch_all($result, MYSQLI_ASSOC);
			
			$sql1 = 'SELECT destination FROM customer';
			$result1 = mysqli_query($conn, $sql1);
			$destinations = mysqli_fetch_all($result1);
			
			//mysqli_free_result($result);
			
			//mysqli_close($conn);
			
			//print_r($customer);
			?>
			
<!doctype html>

<html lang="en">
    <head>
        <meta charset = "utf-8" name = "viewport" content="width= device-width, initial-scale=1"/>
    

        
        <meta name="travel">
		<link rel="stylesheet" type="text/css" href="stylecontact.css">
        
        <title> Mega Travel</title> 
		
    </head>
    
    
    <nav class="one">
        <img class="logo" src="mega.png" alt="Mega Travel Logo" style="width:20%"/>
        <hr style="border: 12px solid lightgray;" />


    </nav>
    <nav class="two">
       
        <a class="home" href="#" >Home &nbsp;&nbsp;</a> 
        <a class="about" href="#" > About Us &nbsp;&nbsp; </a>        
        <a class="agent" href="#"> Contact Agent </a>
        
    </nav>   

    <body>
       
		
		<article> 


<div class="container">

<div class="row">

<?php foreach($customer as $customer){?>

<div class="col s6 md3"> 
<div class="card z-depth-0">
<div class="card-content center">
<div>CUSTOMER INFORMATION FOR CUSTOMER <?php echo htmlspecialchars($customer['id']); ?></div>
<div>Client First Name: <?php echo htmlspecialchars($customer['fname']); ?>
</div>
</br>

<div>Client Last Name: <?php echo htmlspecialchars($customer['lname']); ?> </div>
</br>
<div>Client Phone Number: <?php echo htmlspecialchars($customer['phone']); ?> </div>
</br>
<div>Client Email: <?php echo htmlspecialchars($customer['email']); ?> </div>
</br>
<div>Party Size: <?php echo htmlspecialchars($customer['numgoing']); ?> </div>
</br>

<div>Destination: <?php echo htmlspecialchars($customer['destination']); ?> </div>

</br>
<div>Travel Dates: <?php echo htmlspecialchars($customer['traveldates']); ?> </div>
</br>
<div>Activities: <?php echo htmlspecialchars($customer['activities']); ?> </div>
</br>


</div>

</div>

</div>
	


</div>

</div>

<?php } ?>


</article>
        
        
		
      
    </body>
	
	
	
	<footer style=" position: relative; bottom: -5px; width: 100%">
	<div class="foot" style=" position: relative;">
            <div style=" position: absolute; top: 10px; width: 100%;">
                CopyRight Protected. All Rights Reserved.
            </div>
            <div style=" position: absolute; bottom: 10px; width: 100%;" >
                MEGA TRAVELS
                <br/>
                mega@travels.com
            </div>
    
          
        </div>
		
       

      
    </footer>


</html>