
            
        var extravertIntrovert=0;
        var sensorsIntuitives=0;
        var thinkersFeelers=0;
        var judgersPerceivers=0;

        var question_num=0;
        var trait=1;
        var traitPoints=[0,0,0,0];

            function addVeryUnlike() {
                questionSelect();
                selectTrait();
                if (question_num % 2 == 0){
                    traitPoints[trait]=traitPoints[trait]-2;         
                }
                else if (question_num % 2 == 1){
                    traitPoints[trait]=traitPoints[trait]+2;
                }
                determineBriggsMeyers();
                checkEnd();
            }

            function addUnlike(){
                questionSelect();
                selectTrait();
                if (question_num % 2 == 0){
                    traitPoints[trait]=traitPoints[trait]-1;
                }
                else if (question_num % 2 == 1){
                    traitPoints[trait]=traitPoints[trait]+1;
                }
                determineBriggsMeyers();
                checkEnd();
            }

            function addNeutral(){
                questionSelect();
                selectTrait();
                determineBriggsMeyers();
                checkEnd();
            }

            function addLike(){
                questionSelect();
                selectTrait();
                if (question_num % 2 == 0){
                    traitPoints[trait]=traitPoints[trait]+1;
                }
                else if (question_num % 2 == 1){
                    traitPoints[trait]=traitPoints[trait]-1;
                }
                determineBriggsMeyers();
                checkEnd();
            }

            function addVeryLike(){
                questionSelect();
                selectTrait();
                if (question_num % 2 == 0){
                    traitPoints[trait]=traitPoints[trait]+2;
                }
                else if (question_num % 2 == 1){
                    traitPoints[trait]=traitPoints[trait]-2;
                }
                determineBriggsMeyers();
                checkEnd();
            }

            function questionSelect() {        
                question_num = question_num + 1;

                if (question_num == 1){
                    document.getElementById("question").innerHTML = "I like to spend time alone.";
                }

                if (question_num == 2){
                    document.getElementById("question").innerHTML = "I feel energized spending time with my friends.";
                }

                if (question_num == 3){
                    document.getElementById("question").innerHTML = "I always listen and wait before I talk.";
                }

                if (question_num == 4){
                    document.getElementById("question").innerHTML = "I find it easy to talk and start conservations.";
                }

                if (question_num == 5){
                    document.getElementById("question").innerHTML = "I value few deep friendships over many superficial ones.";
                }

                if (question_num == 6){
                    document.getElementById("question").innerHTML = "I am intune with my senses.";
                }

                if (question_num == 7){
                    document.getElementById("question").innerHTML = "I find it easy to see the bigger picture.";
                }

                if (question_num == 8){
                    document.getElementById("question").innerHTML = "People would describe me as a realist.";
                }

                if (question_num == 9){
                    document.getElementById("question").innerHTML = "I have big and wild dreams.";
                }

                if (question_num == 10){
                    document.getElementById("question").innerHTML = "I am accurant and observant.";
                }

                if (question_num == 11){
                    document.getElementById("question").innerHTML = "I like trying new things.";
                }

                if (question_num == 12){
                    document.getElementById("question").innerHTML = "I trust my head over my heart.";
                }

                if (question_num == 13){
                    document.getElementById("question").innerHTML = "I make spur of the moment decisions.";
                }

                if (question_num == 14){
                    document.getElementById("question").innerHTML = "I treat everyone fairly.";
                }

                if (question_num == 15){
                    document.getElementById("question").innerHTML = "People would describe me as poetic.";
                }

                if (question_num == 16){
                    document.getElementById("question").innerHTML = "I enjoying learning about science.";
                }

                if (question_num == 17){
                    document.getElementById("question").innerHTML = "I am spontaneous.";
                }

                if (question_num == 18){
                    document.getElementById("question").innerHTML = "I am organized and structured.";
                }

                if (question_num == 19){
                    document.getElementById("question").innerHTML = "I prefer to go with the flow.";
                }

                if (question_num == 20){
                    document.getElementById("question").innerHTML = "I always have a plan.";
                }

                if (question_num == 21){
                    document.getElementById("question").innerHTML = "I believe in destiny.";
                }

                if (question_num == 22){
                    document.getElementById("question").innerHTML = "I always make the final decision.";
                }

                if (question_num == 23){
                    document.getElementById("question").innerHTML = "I adapt quickly.";
                }
            }    

            function selectTrait(){
                if (question_num>=0 && question_num<=5){
                    trait=0;
                }
                else if (question_num>=5 && question_num<=11){
                    trait=1;
                }
                else if (question_num>=11 && question_num<=17){
                    trait=2;
                }
                else if (question_num>=17 && question_num<=23){
                    trait=3;
                }

                console.log(traitPoints[0]);
                console.log(traitPoints[1]);
                console.log(traitPoints[2]);
                console.log(traitPoints[3]);
            }

            function determineBriggsMeyers(){
                if (traitPoints[0] < 0){
                    console.log("Extravert");
                }
                else if (traitPoints[0] > 0){
                    console.log("Introvert");
                }
                
                if (traitPoints[1] < 0){
                    console.log("Sensing");
                }
                else if (traitPoints[0] > 0){
                    console.log("Intuition");
                }

                if (traitPoints[2] < 0){
                    console.log("Thinkers");
                }
                else if (traitPoints[0] > 0){
                    console.log("Feelers");
                }

                if (traitPoints[3] < 0){
                    console.log("Judgers");
                }
                else if (traitPoints[0] > 0){
                    console.log("Percievers");
                }
            }
    
            function checkEnd(){
                if((question_num==23) && (traitPoints[0] < 0)){
                   window.location.replace("suggestion.html"); 
                }
                else if((question_num==23) && (traitPoints[0] > 0)){
                   window.location.replace("suggestion-2.html"); 
                }
            }

    function insertInfo(){
        if ((traitPoints[0] > 0)){insertInfoISTJ();}
        if ((traitPoints[0] < 0)){insertInfoISFJ();}        
    }


    function insertInfoISTJ(){
            
            document.getElementById("name1").innerHTML = "BMO Cashback Mastercard";
            
            document.getElementById("name2").innerHTML = "BMO Air Miles Mastercard";
            
            document.getElementById("name3").innerHTML = "BMO CashBack WorldElite Mastercard";
            
            
            document.getElementById("img1").src ="resources/img/bmo-air-miles-mastercard.png";
            
            document.getElementById("img2").src ="resources/img/bmo-air-miles-mastercard.png";
            
            document.getElementById("img3").src ="resources/img/bmo-air-miles-mastercard.png";
            
            
            document.getElementById("point1_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point1_2").innerHTML = "5% cash back in first 3 months";
            
            document.getElementById("point1_3").innerHTML = "1.99% introductory interest rate on Balance Transfers for 9 months with a 1% transfer fee";
            
            
            document.getElementById("point2_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point2_2").innerHTML = "Get up to 800 AIR MILES Bonus Miles";
            
            document.getElementById("point2_3").innerHTML = "1.99% introductory interest rate on Balance Transfers for 9 months with a 1% transfer fee";
            
            
            document.getElementById("point3_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point3_2").innerHTML = "Get up to 5% cash back in yout first 3 months";
            
            document.getElementById("point3_3").innerHTML = "$120 annual fee waived in the first year";
    }

    function insertInfoISFJ(){
            document.getElementById("name1").innerHTML = "BMO Cashback Mastercard";
            
            document.getElementById("name2").innerHTML = "BMO Air Miles Mastercard";
            
            document.getElementById("name3").innerHTML = "BMO CashBack WorldElite Mastercard";
            
            
            document.getElementById("img1").src="resources/img/bmo-air-miles-mastercard.png";
            
            document.getElementById("img2").src ="resources/img/bmo-air-miles-mastercard.png";
            
            document.getElementById("img3").src ="resources/img/bmo-air-miles-mastercard.png";
            
            
            document.getElementById("point1_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point1_2").innerHTML = "5% cash back in first 3 months";
            
            document.getElementById("point1_3").innerHTML = "1.99% introductory interest rate on Balance Transfers for 9 months with a 1% transfer fee";
            
            
            document.getElementById("point2_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point2_2").innerHTML = "Get up to 800 AIR MILES Bonus Miles";
            
            document.getElementById("point2_3").innerHTML = "1.99% introductory interest rate on Balance Transfers for 9 months with a 1% transfer fee";
            
            
            document.getElementById("point3_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point3_2").innerHTML = "Get up to 5% cash back in yout first 3 months";
            
            document.getElementById("point3_3").innerHTML = "$120 annual fee waived in the first year";
        }

    function insertInfoINFJ(){

            document.getElementById("name1").innerHTML = "BMO Cashback Mastercard";
            
            document.getElementById("name2").innerHTML = "BMO Air Miles Mastercard";
            
            document.getElementById("name3").innerHTML = "BMO CashBack WorldElite Mastercard";
            
            
            document.getElementById("img1").src="resources/img/bmo-air-miles-mastercard.png";
            
            document.getElementById("img2").src ="resources/img/bmo-air-miles-mastercard.png";
            
            document.getElementById("img3").src ="resources/img/bmo-air-miles-mastercard.png";
            
            
            document.getElementById("point1_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point1_2").innerHTML = "5% cash back in first 3 months";
            
            document.getElementById("point1_3").innerHTML = "1.99% introductory interest rate on Balance Transfers for 9 months with a 1% transfer fee";
            
            
            document.getElementById("point2_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point2_2").innerHTML = "Get up to 800 AIR MILES Bonus Miles";
            
            document.getElementById("point2_3").innerHTML = "1.99% introductory interest rate on Balance Transfers for 9 months with a 1% transfer fee";
            
            
            document.getElementById("point3_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point3_2").innerHTML = "Get up to 5% cash back in yout first 3 months";
            
            document.getElementById("point3_3").innerHTML = "$120 annual fee waived in the first year";
        }

    function insertInfoINTJ(){
    
            document.getElementById("name1").innerHTML = "BMO Cashback Mastercard";
            
            document.getElementById("name2").innerHTML = "BMO Air Miles Mastercard";
            
            document.getElementById("name3").innerHTML = "BMO CashBack WorldElite Mastercard";
            
            
            document.getElementById("img1").src="resources/img/bmo-air-miles-mastercard.png";
            
            document.getElementById("img2").src ="resources/img/bmo-air-miles-mastercard.png";
            
            document.getElementById("img3").src ="resources/img/bmo-air-miles-mastercard.png";
            
            
            document.getElementById("point1_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point1_2").innerHTML = "5% cash back in first 3 months";
            
            document.getElementById("point1_3").innerHTML = "1.99% introductory interest rate on Balance Transfers for 9 months with a 1% transfer fee";
            
            
            document.getElementById("point2_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point2_2").innerHTML = "Get up to 800 AIR MILES Bonus Miles";
            
            document.getElementById("point2_3").innerHTML = "1.99% introductory interest rate on Balance Transfers for 9 months with a 1% transfer fee";
            
            
            document.getElementById("point3_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point3_2").innerHTML = "Get up to 5% cash back in yout first 3 months";
            
            document.getElementById("point3_3").innerHTML = "$120 annual fee waived in the first year";
    }

    function insertInfoISTP(){
        
            document.getElementById("name1").innerHTML = "BMO Cashback Mastercard";
            
            document.getElementById("name2").innerHTML = "BMO Air Miles Mastercard";
            
            document.getElementById("name3").innerHTML = "BMO CashBack WorldElite Mastercard";
            
            
            document.getElementById("img1").src="resources/img/bmo-air-miles-mastercard.png";
            
            document.getElementById("img2").src ="resources/img/bmo-air-miles-mastercard.png";
            
            document.getElementById("img3").src ="resources/img/bmo-air-miles-mastercard.png";
            
            
            document.getElementById("point1_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point1_2").innerHTML = "5% cash back in first 3 months";
            
            document.getElementById("point1_3").innerHTML = "1.99% introductory interest rate on Balance Transfers for 9 months with a 1% transfer fee";
            
            
            document.getElementById("point2_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point2_2").innerHTML = "Get up to 800 AIR MILES Bonus Miles";
            
            document.getElementById("point2_3").innerHTML = "1.99% introductory interest rate on Balance Transfers for 9 months with a 1% transfer fee";
            
            
            document.getElementById("point3_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point3_2").innerHTML = "Get up to 5% cash back in yout first 3 months";
            
            document.getElementById("point3_3").innerHTML = "$120 annual fee waived in the first year";
    }

    function insertInfoISFP() {
            document.getElementById("name1").innerHTML = "BMO Cashback Mastercard";
            
            document.getElementById("name2").innerHTML = "BMO Air Miles Mastercard";
            
            document.getElementById("name3").innerHTML = "BMO CashBack WorldElite Mastercard";
            
            
            document.getElementById("img1").src="resources/img/bmo-air-miles-mastercard.png";
            
            document.getElementById("img2").src ="resources/img/bmo-air-miles-mastercard.png";
            
            document.getElementById("img3").src ="resources/img/bmo-air-miles-mastercard.png";
            
            
            document.getElementById("point1_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point1_2").innerHTML = "5% cash back in first 3 months";
            
            document.getElementById("point1_3").innerHTML = "1.99% introductory interest rate on Balance Transfers for 9 months with a 1% transfer fee";
            
            
            document.getElementById("point2_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point2_2").innerHTML = "Get up to 800 AIR MILES Bonus Miles";
            
            document.getElementById("point2_3").innerHTML = "1.99% introductory interest rate on Balance Transfers for 9 months with a 1% transfer fee";
            
            
            document.getElementById("point3_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point3_2").innerHTML = "Get up to 5% cash back in yout first 3 months";
            
            document.getElementById("point3_3").innerHTML = "$120 annual fee waived in the first year";
        }

function insertInfoINFP(){
        if ((traitPoints[0] > 0) && (traitPoints[1] > 0) && (traitPoints[2] > 0) &&(traitPoints[3] > 0)){
            document.getElementById("name1").innerHTML = "BMO Cashback Mastercard";
            
            document.getElementById("name2").innerHTML = "BMO Air Miles Mastercard";
            
            document.getElementById("name3").innerHTML = "BMO CashBack WorldElite Mastercard";
            
            
            document.getElementById("img1").src="resources/img/bmo-air-miles-mastercard.png";
            
            document.getElementById("img2").src ="resources/img/bmo-air-miles-mastercard.png";
            
            document.getElementById("img3").src ="resources/img/bmo-air-miles-mastercard.png";
            
            
            document.getElementById("point1_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point1_2").innerHTML = "5% cash back in first 3 months";
            
            document.getElementById("point1_3").innerHTML = "1.99% introductory interest rate on Balance Transfers for 9 months with a 1% transfer fee";
            
            
            document.getElementById("point2_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point2_2").innerHTML = "Get up to 800 AIR MILES Bonus Miles";
            
            document.getElementById("point2_3").innerHTML = "1.99% introductory interest rate on Balance Transfers for 9 months with a 1% transfer fee";
            
            
            document.getElementById("point3_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point3_2").innerHTML = "Get up to 5% cash back in yout first 3 months";
            
            document.getElementById("point3_3").innerHTML = "$120 annual fee waived in the first year";
        }
    }

function insertInfoINTP(){
        if ((traitPoints[0] > 0) && (traitPoints[1] > 0) && (traitPoints[2] < 0) &&(traitPoints[3] > 0)){
            document.getElementById("name1").innerHTML = "BMO Cashback Mastercard";
            
            document.getElementById("name2").innerHTML = "BMO Air Miles Mastercard";
            
            document.getElementById("name3").innerHTML = "BMO CashBack WorldElite Mastercard";
            
            
            document.getElementById("img1").src="resources/img/bmo-air-miles-mastercard.png";
            
            document.getElementById("img2").src ="resources/img/bmo-air-miles-mastercard.png";
            
            document.getElementById("img3").src ="resources/img/bmo-air-miles-mastercard.png";
            
            
            document.getElementById("point1_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point1_2").innerHTML = "5% cash back in first 3 months";
            
            document.getElementById("point1_3").innerHTML = "1.99% introductory interest rate on Balance Transfers for 9 months with a 1% transfer fee";
            
            
            document.getElementById("point2_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point2_2").innerHTML = "Get up to 800 AIR MILES Bonus Miles";
            
            document.getElementById("point2_3").innerHTML = "1.99% introductory interest rate on Balance Transfers for 9 months with a 1% transfer fee";
            
            
            document.getElementById("point3_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point3_2").innerHTML = "Get up to 5% cash back in yout first 3 months";
            
            document.getElementById("point3_3").innerHTML = "$120 annual fee waived in the first year";
        }
    }

function insertInfoESTP(){
        if ((traitPoints[0] < 0) && (traitPoints[1] < 0) && (traitPoints[2] < 0) &&(traitPoints[3] > 0)){
            document.getElementById("name1").innerHTML = "BMO Cashback Mastercard";
            
            document.getElementById("name2").innerHTML = "BMO Air Miles Mastercard";
            
            document.getElementById("name3").innerHTML = "BMO CashBack WorldElite Mastercard";
            
            
            document.getElementById("img1").src="resources/img/bmo-air-miles-mastercard.png";
            
            document.getElementById("img2").src ="resources/img/bmo-air-miles-mastercard.png";
            
            document.getElementById("img3").src ="resources/img/bmo-air-miles-mastercard.png";
            
            
            document.getElementById("point1_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point1_2").innerHTML = "5% cash back in first 3 months";
            
            document.getElementById("point1_3").innerHTML = "1.99% introductory interest rate on Balance Transfers for 9 months with a 1% transfer fee";
            
            
            document.getElementById("point2_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point2_2").innerHTML = "Get up to 800 AIR MILES Bonus Miles";
            
            document.getElementById("point2_3").innerHTML = "1.99% introductory interest rate on Balance Transfers for 9 months with a 1% transfer fee";
            
            
            document.getElementById("point3_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point3_2").innerHTML = "Get up to 5% cash back in yout first 3 months";
            
            document.getElementById("point3_3").innerHTML = "$120 annual fee waived in the first year";
        }
    }

function insertInfoESFP(){
        if ((traitPoints[0] < 0) && (traitPoints[1] < 0) && (traitPoints[2] > 0) &&(traitPoints[3] > 0)){
            document.getElementById("name1").innerHTML = "BMO Cashback Mastercard";
            
            document.getElementById("name2").innerHTML = "BMO Air Miles Mastercard";
            
            document.getElementById("name3").innerHTML = "BMO CashBack WorldElite Mastercard";
            
            
            document.getElementById("img1").src="resources/img/bmo-air-miles-mastercard.png";
            
            document.getElementById("img2").src ="resources/img/bmo-air-miles-mastercard.png";
            
            document.getElementById("img3").src ="resources/img/bmo-air-miles-mastercard.png";
            
            
            document.getElementById("point1_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point1_2").innerHTML = "5% cash back in first 3 months";
            
            document.getElementById("point1_3").innerHTML = "1.99% introductory interest rate on Balance Transfers for 9 months with a 1% transfer fee";
            
            
            document.getElementById("point2_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point2_2").innerHTML = "Get up to 800 AIR MILES Bonus Miles";
            
            document.getElementById("point2_3").innerHTML = "1.99% introductory interest rate on Balance Transfers for 9 months with a 1% transfer fee";
            
            
            document.getElementById("point3_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point3_2").innerHTML = "Get up to 5% cash back in yout first 3 months";
            
            document.getElementById("point3_3").innerHTML = "$120 annual fee waived in the first year";
        }
    }

function insertInfoENFP(){
        if ((traitPoints[0] < 0) && (traitPoints[1] > 0) && (traitPoints[2] > 0) &&(traitPoints[3] > 0)){
            document.getElementById("name1").innerHTML = "BMO Cashback Mastercard";
            
            document.getElementById("name2").innerHTML = "BMO Air Miles Mastercard";
            
            document.getElementById("name3").innerHTML = "BMO CashBack WorldElite Mastercard";
            
            
            document.getElementById("img1").src="resources/img/bmo-air-miles-mastercard.png";
            
            document.getElementById("img2").src ="resources/img/bmo-air-miles-mastercard.png";
            
            document.getElementById("img3").src ="resources/img/bmo-air-miles-mastercard.png";
            
            
            document.getElementById("point1_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point1_2").innerHTML = "5% cash back in first 3 months";
            
            document.getElementById("point1_3").innerHTML = "1.99% introductory interest rate on Balance Transfers for 9 months with a 1% transfer fee";
            
            
            document.getElementById("point2_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point2_2").innerHTML = "Get up to 800 AIR MILES Bonus Miles";
            
            document.getElementById("point2_3").innerHTML = "1.99% introductory interest rate on Balance Transfers for 9 months with a 1% transfer fee";
            
            
            document.getElementById("point3_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point3_2").innerHTML = "Get up to 5% cash back in yout first 3 months";
            
            document.getElementById("point3_3").innerHTML = "$120 annual fee waived in the first year";
        }
    }

function insertInfoENTP(){
        if ((traitPoints[0] < 0) && (traitPoints[1] > 0) && (traitPoints[2] < 0) &&(traitPoints[3] > 0)){
            document.getElementById("name1").innerHTML = "BMO Cashback Mastercard";
            
            document.getElementById("name2").innerHTML = "BMO Air Miles Mastercard";
            
            document.getElementById("name3").innerHTML = "BMO CashBack WorldElite Mastercard";
            
            
            document.getElementById("img1").src="resources/img/bmo-air-miles-mastercard.png";
            
            document.getElementById("img2").src ="resources/img/bmo-air-miles-mastercard.png";
            
            document.getElementById("img3").src ="resources/img/bmo-air-miles-mastercard.png";
            
            
            document.getElementById("point1_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point1_2").innerHTML = "5% cash back in first 3 months";
            
            document.getElementById("point1_3").innerHTML = "1.99% introductory interest rate on Balance Transfers for 9 months with a 1% transfer fee";
            
            
            document.getElementById("point2_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point2_2").innerHTML = "Get up to 800 AIR MILES Bonus Miles";
            
            document.getElementById("point2_3").innerHTML = "1.99% introductory interest rate on Balance Transfers for 9 months with a 1% transfer fee";
            
            
            document.getElementById("point3_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point3_2").innerHTML = "Get up to 5% cash back in yout first 3 months";
            
            document.getElementById("point3_3").innerHTML = "$120 annual fee waived in the first year";
        }
    }

function insertInfoESTJ(){
        if ((traitPoints[0] < 0) && (traitPoints[1] < 0) && (traitPoints[2] < 0) &&(traitPoints[3] < 0)){
            document.getElementById("name1").innerHTML = "BMO Cashback Mastercard";
            
            document.getElementById("name2").innerHTML = "BMO Air Miles Mastercard";
            
            document.getElementById("name3").innerHTML = "BMO CashBack WorldElite Mastercard";
            
            
            document.getElementById("img1").src="resources/img/bmo-air-miles-mastercard.png";
            
            document.getElementById("img2").src ="resources/img/bmo-air-miles-mastercard.png";
            
            document.getElementById("img3").src ="resources/img/bmo-air-miles-mastercard.png";
            
            
            document.getElementById("point1_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point1_2").innerHTML = "5% cash back in first 3 months";
            
            document.getElementById("point1_3").innerHTML = "1.99% introductory interest rate on Balance Transfers for 9 months with a 1% transfer fee";
            
            
            document.getElementById("point2_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point2_2").innerHTML = "Get up to 800 AIR MILES Bonus Miles";
            
            document.getElementById("point2_3").innerHTML = "1.99% introductory interest rate on Balance Transfers for 9 months with a 1% transfer fee";
            
            
            document.getElementById("point3_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point3_2").innerHTML = "Get up to 5% cash back in yout first 3 months";
            
            document.getElementById("point3_3").innerHTML = "$120 annual fee waived in the first year";
        }
    }

function insertInfoESFJ(){
        if ((traitPoints[0] < 0) && (traitPoints[1] < 0) && (traitPoints[2] > 0) &&(traitPoints[3] < 0)){
            document.getElementById("name1").innerHTML = "BMO Cashback Mastercard";
            
            document.getElementById("name2").innerHTML = "BMO Air Miles Mastercard";
            
            document.getElementById("name3").innerHTML = "BMO CashBack WorldElite Mastercard";
            
            
            document.getElementById("img1").src="resources/img/bmo-air-miles-mastercard.png";
            
            document.getElementById("img2").src ="resources/img/bmo-air-miles-mastercard.png";
            
            document.getElementById("img3").src ="resources/img/bmo-air-miles-mastercard.png";
            
            
            document.getElementById("point1_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point1_2").innerHTML = "5% cash back in first 3 months";
            
            document.getElementById("point1_3").innerHTML = "1.99% introductory interest rate on Balance Transfers for 9 months with a 1% transfer fee";
            
            
            document.getElementById("point2_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point2_2").innerHTML = "Get up to 800 AIR MILES Bonus Miles";
            
            document.getElementById("point2_3").innerHTML = "1.99% introductory interest rate on Balance Transfers for 9 months with a 1% transfer fee";
            
            
            document.getElementById("point3_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point3_2").innerHTML = "Get up to 5% cash back in yout first 3 months";
            
            document.getElementById("point3_3").innerHTML = "$120 annual fee waived in the first year";
        }
    }

function insertInfoENFJ(){
        if ((traitPoints[0] < 0) && (traitPoints[1] > 0) && (traitPoints[2] > 0) &&(traitPoints[3] < 0)){
            document.getElementById("name1").innerHTML = "BMO Cashback Mastercard";
            
            document.getElementById("name2").innerHTML = "BMO Air Miles Mastercard";
            
            document.getElementById("name3").innerHTML = "BMO CashBack WorldElite Mastercard";
            
            
            document.getElementById("img1").src="resources/img/bmo-air-miles-mastercard.png";
            
            document.getElementById("img2").src ="resources/img/bmo-air-miles-mastercard.png";
            
            document.getElementById("img3").src ="resources/img/bmo-air-miles-mastercard.png";
            
            
            document.getElementById("point1_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point1_2").innerHTML = "5% cash back in first 3 months";
            
            document.getElementById("point1_3").innerHTML = "1.99% introductory interest rate on Balance Transfers for 9 months with a 1% transfer fee";
            
            
            document.getElementById("point2_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point2_2").innerHTML = "Get up to 800 AIR MILES Bonus Miles";
            
            document.getElementById("point2_3").innerHTML = "1.99% introductory interest rate on Balance Transfers for 9 months with a 1% transfer fee";
            
            
            document.getElementById("point3_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point3_2").innerHTML = "Get up to 5% cash back in yout first 3 months";
            
            document.getElementById("point3_3").innerHTML = "$120 annual fee waived in the first year";
        }
    }

function insertInfoENTJ(){
        if ((traitPoints[0] < 0) && (traitPoints[1] > 0) && (traitPoints[2] < 0) &&(traitPoints[3] < 0)){
            document.getElementById("name1").innerHTML = "BMO Cashback Mastercard";
            
            document.getElementById("name2").innerHTML = "BMO Air Miles Mastercard";
            
            document.getElementById("name3").innerHTML = "BMO CashBack WorldElite Mastercard";
            
            
            document.getElementById("img1").src="resources/img/bmo-air-miles-mastercard.png";
            
            document.getElementById("img2").src ="resources/img/bmo-air-miles-mastercard.png";
            
            document.getElementById("img3").src ="resources/img/bmo-air-miles-mastercard.png";
            
            
            document.getElementById("point1_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point1_2").innerHTML = "5% cash back in first 3 months";
            
            document.getElementById("point1_3").innerHTML = "1.99% introductory interest rate on Balance Transfers for 9 months with a 1% transfer fee";
            
            
            document.getElementById("point2_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point2_2").innerHTML = "Get up to 800 AIR MILES Bonus Miles";
            
            document.getElementById("point2_3").innerHTML = "1.99% introductory interest rate on Balance Transfers for 9 months with a 1% transfer fee";
            
            
            document.getElementById("point3_1").innerHTML = "You're serious, formal, and proper. You also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility.";
            
            document.getElementById("point3_2").innerHTML = "Get up to 5% cash back in yout first 3 months";
            
            document.getElementById("point3_3").innerHTML = "$120 annual fee waived in the first year";
        }
    }