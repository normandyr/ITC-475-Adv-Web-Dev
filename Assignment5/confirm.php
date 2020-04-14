
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
		
		Thank you for submitting your travel agent contact request!
			<br/>
			<br/>
		
		Here is the information you submitted:
		<br/>
		<br/>
		
		 <?php 
		 
		 
		 
	if (isset($_GET['submit'])){
		$NA = null;
		$Cancun = null;
		$NZ = null;
		$SA = null;
		$Italy = null;
		$CT = null;
		$Sports = null;
		$Cycling = null;
		$Museums = null;
		$Boating = null;
		$Parks_and_Recreation = null;
		$Beaches = null;
		$Snorkeling = null;
		$Sailing = null;
		$Hiking = null;
		$Theatre = null;
		$NAA = null;
		
		
		if(isset($_GET['Cancun'])){
			$Cancun = "Cancun";
			
			
		}
		if(isset($_GET['New_Zealand'])){
			$NZ = "New Zealand";
			
			
		}
		if(isset($_GET['South_Asia'])){
			$SA = "South Asia";
			
			
		}
		if(isset($_GET['Italy'])){
			$Italy = "Italy";
			
			
		}
		else{
			$NA = "No Destination Selected";
		}
		
		if(isset($_GET['City_Tours'])){
			$CT = "City Tours";
			
			
		}
		if(isset($_GET['Sports'])){
			$Sports = "Sports";
			
			
		}
		if(isset($_GET['Cycling'])){
			$Cycling = "Cycling";
			
			
		}
		if(isset($_GET['Museums'])){
			$Museums = "Museums";
			
			
		}
		if(isset($_GET['Boating'])){
			$Boating = "Boating";
			
			
		}
		if(isset($_GET['Parks_and_Recreation'])){
			$Parks_and_Recreation = "Parks and Recreation";
			
			
		}
		if(isset($_GET['Beaches'])){
			$Beaches = "Beaches";
			
			
		}
		if(isset($_GET['Snorkeling'])){
			$Snorkeling = "Snorkeling";
			
			
		}
		if(isset($_GET['Sailing'])){
			$Sailing = "Sailing";
			
			
		}
		if(isset($_GET['Hiking'])){
			$Hiking = "Hiking";
			
			
		}
		if(isset($_GET['Theatre'])){
			$Theatre = "Theatre";
			
			
		}
		else{
			$NAA = "No Activities Selected";
			
			
		}
		
		
		echo "Client First Name:&nbsp" .$_GET["Firstname"].'<br/>'.'<br/>';
		echo "Client Last Name:&nbsp" .$_GET["Lastname"].'<br/>'.'<br/>'; 
		echo "Client Phone Number:&nbsp" .$_GET["Phone"].'<br/>'.'<br/>'; 
		echo "Client Email:&nbsp" .$_GET["Email"].'<br/>'.'<br/>';
		echo "Number of Adults and Chilren Going:&nbsp".$_GET["Party_Size"].'<br/>'.'<br/>';
		echo "Travel Dates:&nbsp".$_GET["Date"].'<br/>'.'<br/>';
		echo "Destination:&nbsp "; echo $Cancun; echo " "; echo $NZ; echo" "; echo $SA; echo" "; echo $Italy; echo " "; echo $NA; echo'<br/>'.'<br/>';
		
		echo "Interested Activities:&nbsp "; echo $CT; echo " "; echo $Sports; 
		echo " "; echo $Cycling; echo " "; echo $Museums; echo " "; echo $Boating; 
		echo " "; echo $Parks_and_Recreation; echo " "; echo $Beaches; echo " ";
		echo $Snorkeling; echo " "; echo $Sailing; echo " "; echo $Hiking; echo " ";
		echo $Theatre; echo " "; echo $NAA; echo'<br/>'.'<br/>';
		
		
		
		//echo "First name:".$_GET["Email"];
		//echo "First name:".$_GET["Phone"];
		//echo "First name:".$_GET["Party_Size"];
		//echo "First name:".$_GET["Date"];
		
	}
	
		?>
		An agent will be in touch with you soon!
		
		
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